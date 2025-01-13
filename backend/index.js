const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// เชื่อมต่อ MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // ใส่รหัสผ่าน MySQL ของคุณ
    database: 'your_database'  // ใส่ชื่อฐานข้อมูลของคุณ
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

// ตัวอย่าง API
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
