const mysql = require('mysql2/promise');
require('dotenv').config();

async function addPhoneColumn() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'campuscode'
        });

        console.log('Connected to database');

        // Add phone column
        await connection.query(`
            ALTER TABLE users 
            ADD COLUMN phone VARCHAR(15) AFTER email
        `);
        console.log('Added phone column to users table');

        // Verify
        const [columns] = await connection.query('DESCRIBE users');
        console.log('\nUsers table columns:');
        columns.forEach(col => {
            console.log(`  - ${col.Field} (${col.Type})`);
        });

        await connection.end();
        console.log('\nPhone column added successfully!');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

addPhoneColumn();
