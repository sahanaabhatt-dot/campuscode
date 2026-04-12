const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
    try {
        // Connect without database first
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            multipleStatements: true
        });

        console.log('Connected to MySQL server');

        // Read and execute schema
        const schemaPath = path.join(__dirname, 'database', 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        await connection.query(schema);
        console.log('Database and tables created successfully!');

        // Verify tables
        await connection.query('USE campuscode');
        const [tables] = await connection.query('SHOW TABLES');
        console.log('\nTables created:');
        tables.forEach(table => {
            console.log('  -', Object.values(table)[0]);
        });

        await connection.end();
        console.log('\nDatabase setup complete!');
    } catch (error) {
        console.error('Error setting up database:', error.message);
        process.exit(1);
    }
}

setupDatabase();
