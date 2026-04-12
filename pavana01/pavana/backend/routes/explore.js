const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Build the strict prompt for accurate question generation
function buildPrompt(topic) {
    return `You are an expert coding question generator for BCA (Bachelor of Computer Applications) students.
Generate exactly 6 high-quality, accurate, and solvable coding practice questions for the topic: "${topic}".

Rules:
- 2 easy, 2 medium, 2 hard questions
- Each question must be a real, well-defined programming problem
- description must be detailed, clear, and unambiguous
- example must show exact input and expected output
- Questions must be directly related to the topic
- Do NOT generate vague or incorrect questions

Respond with ONLY a valid JSON array, no markdown, no explanation.

Format:
[
  {
    "title": "short descriptive title",
    "difficulty": "easy",
    "description": "Full problem statement with all details needed to solve it.",
    "example": "Input: ...\\nOutput: ..."
  }
]

Generate 6 questions for topic: ${topic}`;
}

// Text-based generation
router.post('/generate', async (req, res) => {
    const { topic } = req.body;
    if (!topic || !topic.trim()) return res.status(400).json({ error: 'Topic is required' });

    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a precise coding question generator. Always respond with only a valid JSON array. Never include markdown or extra text.' },
                { role: 'user', content: buildPrompt(topic) }
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.3,
            max_tokens: 4000
        });

        const text = completion.choices[0]?.message?.content?.trim() || '';
        const questions = parseQuestions(text, topic);
        res.json({ questions });
    } catch (err) {
        console.error('Groq error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Image-based generation
router.post('/generate-from-image', async (req, res) => {
    const { imageBase64, mimeType } = req.body;
    if (!imageBase64) return res.status(400).json({ error: 'Image data is required' });

    try {
        // Step 1: Extract topic/text from image using vision model
        const visionRes = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:${mimeType || 'image/jpeg'};base64,${imageBase64}`
                            }
                        },
                        {
                            type: 'text',
                            text: 'Extract the programming topic, question, or concept from this image. Return only the topic or question text, nothing else.'
                        }
                    ]
                }
            ],
            model: 'meta-llama/llama-4-scout-17b-16e-instruct',
            temperature: 0.2,
            max_tokens: 500
        });

        const extractedTopic = visionRes.choices[0]?.message?.content?.trim() || '';
        if (!extractedTopic) return res.status(400).json({ error: 'Could not extract topic from image' });

        // Step 2: Generate questions from extracted topic
        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a precise coding question generator. Always respond with only a valid JSON array. Never include markdown or extra text.' },
                { role: 'user', content: buildPrompt(extractedTopic) }
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.3,
            max_tokens: 4000
        });

        const text = completion.choices[0]?.message?.content?.trim() || '';
        const questions = parseQuestions(text, extractedTopic);
        res.json({ questions, detectedTopic: extractedTopic });
    } catch (err) {
        console.error('Image generation error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

function parseQuestions(text, topic) {
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error('No valid JSON found in AI response');

    let questions = JSON.parse(jsonMatch[0]);
    return questions.slice(0, 6).map((q, i) => ({
        title: q.title || `Question ${i + 1}`,
        difficulty: ['easy', 'medium', 'hard'].includes(q.difficulty) ? q.difficulty : (i < 2 ? 'easy' : i < 4 ? 'medium' : 'hard'),
        description: q.description || q.title || `Solve this ${topic} problem`,
        example: q.example || ''
    }));
}

module.exports = router;
