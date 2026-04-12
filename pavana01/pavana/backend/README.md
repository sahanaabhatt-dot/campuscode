# CampusCode Backend Setup (MySQL)

## Prerequisites
- Node.js (v14 or higher)
- MySQL Server (v5.7 or higher)

## Installation Steps

### 1. Install MySQL
Download and install MySQL from: https://dev.mysql.com/downloads/mysql/

Or install via package manager:
- Windows: Download MySQL Installer
- Mac: `brew install mysql`
- Linux: `sudo apt-get install mysql-server`

### 2. Create Database
Open MySQL command line or MySQL Workbench and run:
```sql
CREATE DATABASE campuscode;
```

Then import the schema:
```bash
mysql -u root -p campuscode < database/schema.sql
```

Or manually run the SQL from `database/schema.sql` file.

### 3. Install Dependencies
```bash
cd backend
npm install
```

### 4. Configure Environment Variables
Edit the `.env` file with your MySQL settings:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=campuscode
JWT_SECRET=your_secure_random_string_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

For Gmail app password:
1. Go to Google Account settings
2. Security > 2-Step Verification
3. App passwords > Generate new app password
4. Copy and paste in .env file

### 5. Start MySQL Server
Make sure MySQL is running:
- Windows: Check Services or run `net start MySQL80`
- Mac: `brew services start mysql`
- Linux: `sudo service mysql start`

### 6. Start Backend Server
```bash
npm run dev
```

Server will run on http://localhost:5000

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/forgot-password` - Request password reset
- GET `/api/auth/registered-users` - Get list of registered users

### Users
- GET `/api/users/profile` - Get user profile (requires auth)
- PUT `/api/users/profile` - Update user profile (requires auth)

### Health Check
- GET `/api/health` - Check server status

## Database Schema

The database includes:
- `users` table - User accounts
- `problems` table - Coding problems (for future use)
- `submissions` table - User code submissions (for future use)

## Testing the API

Example register request:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "uucms": "U02LV23S0040",
    "email": "john@example.com",
    "password": "MyPass123!",
    "semester": 3
  }'
```

## Troubleshooting

If you get "ER_NOT_SUPPORTED_AUTH_MODE" error:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
FLUSH PRIVILEGES;
```

## Next Steps

Update your frontend HTML files to connect to this backend API.

