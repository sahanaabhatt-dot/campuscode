const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { Resend } = require('resend');

// Register
router.post('/register', async (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const { name, uucms, email, phone, password, semester } = req.body;

        // Check if user already exists
        const [existingUsers] = await db.query(
            'SELECT * FROM users WHERE uucms = ? OR email = ?',
            [uucms.toUpperCase(), email.toLowerCase()]
        );

        if (existingUsers.length > 0) {
            const existing = existingUsers[0];
            return res.status(400).json({ 
                message: existing.uucms === uucms.toUpperCase()
                    ? 'UUCMS number already registered' 
                    : 'Email already registered' 
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const [result] = await db.query(
            'INSERT INTO users (name, uucms, email, phone, password, semester) VALUES (?, ?, ?, ?, ?, ?)',
            [name, uucms.toUpperCase(), email.toLowerCase(), phone, hashedPassword, semester]
        );

        // Generate JWT token
        const token = jwt.sign(
            { userId: result.insertId, uucms: uucms.toUpperCase() },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            message: 'Registration successful',
            token,
            user: {
                id: result.insertId,
                name,
                uucms: uucms.toUpperCase(),
                email: email.toLowerCase(),
                phone,
                semester
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const { uucms, password } = req.body;

        // Find user
        const [users] = await db.query(
            'SELECT * FROM users WHERE uucms = ?',
            [uucms.toUpperCase()]
        );

        if (users.length === 0) {
            return res.status(401).json({ message: 'UUCMS number not registered' });
        }

        const user = users[0];

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, uucms: user.uucms },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                uucms: user.uucms,
                email: user.email,
                phone: user.phone,
                semester: user.semester
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Forgot Password
router.post('/forgot-password', async (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const { uucms } = req.body;

        const [users] = await db.query(
            'SELECT * FROM users WHERE uucms = ?',
            [uucms.toUpperCase()]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'UUCMS number not found' });
        }

        const user = users[0];

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const expires = new Date(Date.now() + 3600000); // 1 hour

        await db.query(
            'UPDATE users SET reset_password_token = ?, reset_password_expires = ? WHERE id = ?',
            [hashedToken, expires, user.id]
        );

        // Send email via Resend
        const resend = new Resend(process.env.RESEND_API_KEY);
        const resetUrl = `https://campuscode-production.up.railway.app/reset-password.html?token=${resetToken}`;

        await resend.emails.send({
            from: 'CampusCode <onboarding@resend.dev>',
            to: user.email,
            subject: 'Password Reset - CampusCode',
            html: `
                <h2>Password Reset Request</h2>
                <p>Hi ${user.name},</p>
                <p>You requested to reset your password. Click the link below:</p>
                <a href="${resetUrl}" style="background:#6c63ff;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;">Reset Password</a>
                <p style="margin-top:15px;">Or copy this link: ${resetUrl}</p>
                <p>This link expires in 1 hour.</p>
                <p>If you didn't request this, ignore this email.</p>
            `
        });

        res.json({ message: 'Password reset link sent to your email' });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({ message: 'Error sending reset email: ' + error.message });
    }
});

// Reset Password
router.post('/reset-password', async (req, res) => {
    const db = req.app.locals.db;

    try {
        const { token, password } = req.body;
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        const [users] = await db.query(
            'SELECT * FROM users WHERE reset_password_token = ? AND reset_password_expires > NOW()',
            [hashedToken]
        );

        if (users.length === 0) {
            return res.status(400).json({ message: 'Reset link is invalid or has expired' });
        }

        const user = users[0];
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await db.query(
            'UPDATE users SET password = ?, reset_password_token = NULL, reset_password_expires = NULL WHERE id = ?',
            [hashedPassword, user.id]
        );

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ message: 'Error resetting password' });
    }
});

// Get registered users (for autocomplete)
router.get('/registered-users', async (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const [users] = await db.query(
            'SELECT uucms, name FROM users ORDER BY created_at DESC'
        );
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

module.exports = router;
