const express = require('express');
const router = express.Router();
const { exec, execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const TIMEOUT = 10000;
const JAVA = process.platform === 'win32'
    ? '"C:\\Program Files\\Eclipse Adoptium\\jdk-25.0.2.10-hotspot\\bin\\java"'
    : 'java';
const JAVAC = process.platform === 'win32'
    ? '"C:\\Program Files\\Eclipse Adoptium\\jdk-25.0.2.10-hotspot\\bin\\javac"'
    : 'javac';
const RSCRIPT = process.platform === 'win32'
    ? '"C:\\Program Files\\R\\R-4.5.3\\bin\\Rscript"'
    : 'Rscript';
const GCC = process.platform === 'win32'
    ? '"C:\\msys64\\mingw64\\bin\\gcc"'
    : 'gcc';
const GPP = process.platform === 'win32'
    ? '"C:\\msys64\\mingw64\\bin\\g++"'
    : 'g++';
const PHP = process.platform === 'win32'
    ? '"C:\\xampp\\php\\php"'
    : 'php';
const PYTHON = process.platform === 'win32'
    ? '"C:\\Users\\sahan\\AppData\\Local\\Python\\bin\\python"'
    : 'python3';

function getTempDir() {
    const dir = path.join(os.tmpdir(), 'cc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6));
    fs.mkdirSync(dir, { recursive: true });
    return dir;
}

function cleanup(dir) {
    try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {}
}

function runCommand(command, input, timeout) {
    const env = process.platform === 'win32'
        ? { ...process.env, PATH: process.env.PATH + ';C:\\msys64\\mingw64\\bin' }
        : { ...process.env };
    return new Promise((resolve) => {
        const proc = exec(command, { timeout, env }, (error, stdout, stderr) => {
            if (error && error.killed) {
                resolve({ stdout: '', stderr: 'Time Limit Exceeded', timedOut: true });
            } else {
                resolve({ stdout: stdout || '', stderr: stderr || '' });
            }
        });
        if (input && proc.stdin) {
            proc.stdin.write(input);
            proc.stdin.end();
        }
    });
}

function runExe(exePath, input, timeout) {
    const env = process.platform === 'win32'
        ? { ...process.env, PATH: process.env.PATH + ';C:\\msys64\\mingw64\\bin' }
        : { ...process.env };
    return new Promise((resolve) => {
        const proc = execFile(exePath, [], { timeout, encoding: 'utf8', env }, (error, stdout, stderr) => {
            if (error && error.killed) {
                resolve({ stdout: '', stderr: 'Time Limit Exceeded', timedOut: true });
            } else if (error && error.code !== 0 && !stdout) {
                resolve({ stdout: stdout || '', stderr: stderr || error.message });
            } else {
                resolve({ stdout: stdout || '', stderr: stderr || '' });
            }
        });
        if (input && proc.stdin) {
            proc.stdin.write(input);
            proc.stdin.end();
        }
    });
}

router.post('/run', async (req, res) => {
    const { code, language, input } = req.body;
    if (!code || !language) return res.status(400).json({ error: 'Code and language required' });

    const tmpDir = getTempDir();

    try {
        let result;

        if (language === 'javascript') {
            const file = path.join(tmpDir, 'solution.js');
            fs.writeFileSync(file, code);
            result = await runCommand(`node "${file}"`, input, TIMEOUT);

        } else if (language === 'python') {
            const file = path.join(tmpDir, 'solution.py');
            fs.writeFileSync(file, code);
            result = await runCommand(`${PYTHON} "${file}"`, input, TIMEOUT);

        } else if (language === 'php') {
            const file = path.join(tmpDir, 'solution.php');
            fs.writeFileSync(file, code);
            result = await runCommand(`${PHP} "${file}"`, input, TIMEOUT);

        } else if (language === 'c') {
            const srcFile = path.join(tmpDir, 'solution.c');
            const outFile = path.join(tmpDir, 'solution.exe');
            fs.writeFileSync(srcFile, code);
            const compile = await runCommand(`${GCC} "${srcFile}" -o "${outFile}"`, '', 15000);
            if (compile.stderr && !fs.existsSync(outFile)) {
                cleanup(tmpDir);
                return res.json({ success: false, type: 'compile_error', stderr: compile.stderr });
            }
            result = await runExe(outFile, input, TIMEOUT);

        } else if (language === 'r') {
            const file = path.join(tmpDir, 'solution.R');
            fs.writeFileSync(file, code);
            result = await runCommand(`${RSCRIPT} "${file}"`, input, TIMEOUT);

        } else if (language === 'java') {
            const srcFile = path.join(tmpDir, 'Solution.java');
            fs.writeFileSync(srcFile, code);
            const compile = await runCommand(`${JAVAC} "${srcFile}"`, '', 15000);
            if (compile.stderr) {
                cleanup(tmpDir);
                return res.json({ success: false, type: 'compile_error', stderr: compile.stderr });
            }
            result = await runCommand(`${JAVA} -cp "${tmpDir}" Solution`, input, TIMEOUT);

        } else {
            cleanup(tmpDir);
            return res.status(400).json({ error: 'Unsupported language' });
        }

        cleanup(tmpDir);

        if (result.timedOut) return res.json({ success: false, type: 'tle', stderr: 'Time Limit Exceeded (10s)' });
        if (result.stderr && !result.stdout) return res.json({ success: false, type: 'runtime_error', stderr: result.stderr });

        return res.json({ success: true, stdout: result.stdout, stderr: result.stderr });

    } catch (err) {
        cleanup(tmpDir);
        return res.status(500).json({ success: false, type: 'error', stderr: err.message });
    }
});

// AI input validator — check if input is valid for the problem before running
router.post('/validate-input', async (req, res) => {
    const { problemTitle, problemDescription, userInput } = req.body;
    if (!problemTitle || !userInput) return res.json({ valid: true });

    try {
        const Groq = require('groq-sdk');
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const prompt = `Problem: "${problemTitle}"
Description: "${problemDescription}"
User input: "${userInput}"

Is this input valid for this problem based on its description? Answer ONLY with JSON:
{"valid": true} or {"valid": false, "reason": "short message telling what valid input looks like"}`;

        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.1,
            max_tokens: 100
        });

        const text = completion.choices[0]?.message?.content?.trim() || '';
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) return res.json({ valid: true });
        res.json(JSON.parse(match[0]));
    } catch (err) {
        res.json({ valid: true }); // fail open
    }
});


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

        const verdict = JSON.parse(match[0]);
        res.json(verdict);
    } catch (err) {
        console.error('Verdict error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
