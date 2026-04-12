const mysql = require('mysql2/promise');
require('dotenv').config();

async function fixDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'campuscode'
        });

        console.log('Connected to database');

        // Drop existing users table
        await connection.query('DROP TABLE IF EXISTS submissions');
        await connection.query('DROP TABLE IF EXISTS users');
        console.log('Dropped old users and submissions tables');

        // Create users table with correct structure
        await connection.query(`
            CREATE TABLE users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                uucms VARCHAR(20) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                semester INT NOT NULL CHECK (semester BETWEEN 1 AND 6),
                reset_password_token VARCHAR(255),
                reset_password_expires DATETIME,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                INDEX idx_uucms (uucms),
                INDEX idx_email (email)
            )
        `);
        console.log('Created users table with uucms column');

        // Recreate submissions table
        await connection.query(`
            CREATE TABLE submissions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                problem_id INT NOT NULL,
                code TEXT NOT NULL,
                language VARCHAR(50) NOT NULL,
                status ENUM('pending', 'accepted', 'wrong_answer', 'error') NOT NULL,
                submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
            )
        `);
        console.log('Created submissions table');

        // Verify
        const [columns] = await connection.query('DESCRIBE users');
        console.log('\nUsers table columns:');
        columns.forEach(col => {
            console.log(`  - ${col.Field} (${col.Type})`);
        });

        await connection.end();
        console.log('\nDatabase fixed successfully!');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fixDatabase();
