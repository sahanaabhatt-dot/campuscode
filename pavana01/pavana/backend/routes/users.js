const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const [users] = await db.query(
            'SELECT id, name, uucms, email, semester, created_at FROM users WHERE id = ?',
            [req.userId]
        );
        
        if (users.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(users[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update user profile
router.put('/profile', authMiddleware, async (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const { name, email, semester } = req.body;
        
        const [users] = await db.query('SELECT * FROM users WHERE id = ?', [req.userId]);
        
        if (users.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = users[0];
        
        await db.query(
            'UPDATE users SET name = ?, email = ?, semester = ? WHERE id = ?',
            [
                name || user.name,
                email ? email.toLowerCase() : user.email,
                semester || user.semester,
                req.userId
            ]
        );

        const [updatedUsers] = await db.query(
            'SELECT id, name, uucms, email, semester FROM users WHERE id = ?',
            [req.userId]
        );

        res.json({
            message: 'Profile updated successfully',
            user: updatedUsers[0]
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
