const express = require('express');
const router = express.Router();

// Judge0 CE public instance — completely free, no API key needed
const JUDGE0_URL = 'https://ce.judge0.com';

// Language IDs for Judge0 CE
const LANGUAGE_IDS = {
    c:          50,  // C (GCC 9.2.0)
    python:     71,  // Python 3.8.1
    java:       62,  // Java (OpenJDK 13.0.1)
    javascript: 63,  // JavaScript (Node.js 12.14.0)
    php:        68,  // PHP 7.4.1
    r:          80,  // R 4.0.0
};

async function executeCode(code, languageId, input) {
    const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

    const res = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            source_code: code,
            language_id: languageId,
            stdin: input || '',
            cpu_time_limit: 10,
            memory_limit: 128000
        })
    });

    return await res.json();
}

router.post('/run', async (req, res) => {
    const { code, language, input } = req.body;
    if (!code || !language) return res.status(400).json({ error: 'Code and language required' });

    const languageId = LANGUAGE_IDS[language];
    if (!languageId) return res.status(400).json({ error: 'Unsupported language' });

    try {
        const result = await executeCode(code, languageId, input);
        const statusId = result.status?.id;
        const stdout = result.stdout || '';
        const stderr = result.stderr || result.compile_output || '';

        if (statusId === 6) {
            return res.json({ success: false, type: 'compile_error', stderr: result.compile_output || stderr });
        } else if (statusId === 5) {
            return res.json({ success: false, type: 'tle', stderr: 'Time Limit Exceeded (10s)' });
        } else if (statusId >= 7 && statusId <= 12) {
            return res.json({ success: false, type: 'runtime_error', stderr: stderr || result.message });
        } else if (statusId === 3 || statusId === 4) {
            return res.json({ success: true, stdout, stderr });
        } else {
            return res.json({ success: false, type: 'error', stderr: result.message || JSON.stringify(result) });
        }
    } catch (err) {
        console.error('Judge0 error:', err.message);
        return res.status(500).json({ success: false, type: 'error', stderr: 'Execution service unavailable. Please try again.' });
    }
});

// AI verdict — judge if output is correct for the problem
router.post('/verdict', async (req, res) => {
    const { problemTitle, problemDescription, userOutput, userInput } = req.body;
    if (!problemTitle || !userOutput) return res.status(400).json({ error: 'Missing fields' });

    try {
        const Groq = require('groq-sdk');
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const prompt = `You are a coding judge for a student programming platform.

Problem title: "${problemTitle}"
Problem description: "${problemDescription}"
Input given to the program: "${userInput || '(none)'}"
Program output: "${userOutput.trim()}"

Your task:
1. Understand what the problem is asking.
2. If input was given, mentally compute what the CORRECT output should be for that exact input.
3. Compare the student's output to the correct output logically (ignore minor formatting like extra spaces, quote styles, or newlines).
4. If the input is completely irrelevant to the problem (e.g. typing random words for a math problem), mark it as invalid.

Respond with ONLY a valid JSON object — no extra text:
{"correct": true, "reason": "brief explanation"}
{"correct": false, "reason": "brief explanation of what is wrong"}
{"correct": false, "invalidInput": true, "reason": "brief explanation of what valid input looks like"}`;

        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.1,
            max_tokens: 200
        });

        const text = completion.choices[0]?.message?.content?.trim() || '';
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) return res.status(500).json({ error: 'Could not parse verdict' });

        res.json(JSON.parse(match[0]));
    } catch (err) {
        console.error('Verdict error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
