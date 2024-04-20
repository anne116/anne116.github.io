const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

//Initialization
const app = express();
const port = 3000;

//Middleware
app.use(express.static('public')); //serves static files
app.use(express.urlencoded({ extended:true }));//parses incoming requests bodies in URL-encoded format. It is used to extract form data from POST requests.

//MySQL connection config
const pool = mysql.createPool ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html' );
});

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const [rows, fields] = await pool.query('SELECT email,password FROM user WHERE email = ?', [email]);
        if (rows.length === 0) {
            await pool.query('INSERT INTO user (email, password) VALUES ( ?, ?)',[email,password]);
            console.log('User signed up:',email);
            res.redirect('/member');
        } else {
            console.log('Email already registered',email);
            res.send('Email already registered');
        }
    } catch(error) {
        console.error('Error during sign up:',error);
        res.status(500).send('Internal Server Error');
    }
})

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const [rows, fields] = await pool.query('SELECT email,password FROM user WHERE email = ?', [email]);
        if (rows.length !== 0) {
            res.redirect('/member');
        } else {
            res.send('Invalid email or password');
        }
    } catch(error) {
        console.error(error);
        res.send('Internal Server Error!');
    }
});

app.get('/member', (req, res)=> {
    res.send('Welcome to Member Page!');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(port, () => {
    console.log('Server is running on port 3000');
})