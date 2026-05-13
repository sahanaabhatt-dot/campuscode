const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── Database: PostgreSQL (Render) or MySQL (local) ────────────────────────
let pool;

if (process.env.DATABASE_URL) {
    // PostgreSQL on Render
    const { Pool } = require('pg');
    const pgPool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    // Wrap pg pool to match mysql2 interface used throughout the app
    pool = {
        query: async (sql, params = []) => {
            // Convert MySQL ? placeholders to PostgreSQL $1, $2...
            let i = 0;
            const pgSql = sql.replace(/\?/g, () => `$${++i}`);
            const result = await pgPool.query(pgSql, params);
            // Return mysql2-compatible format
            // For INSERT with RETURNING, rows[0] has the returned data
            // For SELECT, rows is the array of results
            // Attach insertId for compatibility
            const rows = result.rows;
            const meta = {
                insertId: rows[0]?.id || null,
                affectedRows: result.rowCount
            };
            return [rows, result.fields, meta];
        },
        getConnection: async () => {
            const client = await pgPool.connect();
            return { release: () => client.release() };
        }
    };

    pgPool.query('SELECT 1')
        .then(() => console.log('PostgreSQL connected successfully'))
        .catch(err => console.error('PostgreSQL connection error:', err));

    // Auto-create tables if not exist
    pgPool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            uucms VARCHAR(20) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE,
            phone VARCHAR(20),
            password VARCHAR(255) NOT NULL,
            semester INT NOT NULL CHECK (semester BETWEEN 1 AND 6),
            reset_password_token VARCHAR(255),
            reset_password_expires TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS problems (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            difficulty VARCHAR(10) NOT NULL,
            semester INT NOT NULL,
            subject VARCHAR(100) NOT NULL,
            test_cases JSONB,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS submissions (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            problem_id INT NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
            code TEXT NOT NULL,
            language VARCHAR(50) NOT NULL,
            status VARCHAR(20) NOT NULL,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `).then(() => console.log('PostgreSQL tables ready'))
      .catch(err => console.error('Table creation error:', err));

} else {
    // MySQL for local development
    pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'campuscode',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    pool.getConnection()
        .then(connection => {
            console.log('MySQL connected successfully');
            connection.release();
        })
        .catch(err => console.error('MySQL connection error:', err));
}

app.locals.db = pool;

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/compiler', require('./routes/compiler'));
app.use('/api/explore', require('./routes/explore'));

// Contact form — log message and respond
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'Name, email and message are required' });
    console.log(`[Contact] From: ${name} <${email}> | Subject: ${subject} | Message: ${message}`);
    res.json({ message: 'Message received. Thank you!' });
});

// Serve APK download
app.get('/download', (req, res) => {
    const apkPath = path.join(__dirname, 'campuscode.apk');
    res.download(apkPath, 'CampusCode.apk');
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running', timestamp: new Date() });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.message);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Open your app at: http://localhost:${PORT}/index.html`);

    // ── Keep-alive ping every 4 minutes to prevent Render/Railway from sleeping ──
    const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;
    setInterval(async () => {
        try {
            const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
            await (await fetch(`${APP_URL}/api/health`)).json();
            console.log('[keep-alive] ping ok');
        } catch (e) {
            console.log('[keep-alive] ping failed:', e.message);
        }
    }, 4 * 60 * 1000); // every 4 minutes
});

