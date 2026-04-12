const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'campuscode'
        });

        console.log('Connected to database:', process.env.DB_NAME || 'campuscode');

        // Check tables
        const [tables] = await connection.query('SHOW TABLES');
        console.log('\nTables in database:');
        tables.forEach(table => {
            console.log('  -', Object.values(table)[0]);
        });

        // Check users table structure
        const [columns] = await connection.query('DESCRIBE users');
        console.log('\nUsers table columns:');
        columns.forEach(col => {
            console.log(`  - ${col.Field} (${col.Type})`);
        });

        await connection.end();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

checkDatabase();
