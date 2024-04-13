const express = require('express');
const app = express(); //Create Express application
const router = express.Router(); //Create a router
const port = 3000; 
const path = require('path'); //Import path module
const cookieParser = require('cookie-parser'); //Parse cookies

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.use(cookieParser());
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies //To parse the request body and access form data, you need to use middleware like express.urlencoded() or express.json() before defining your routes.

router.get('/', (req, res) => {
    res.send('<h1>Hiya! My Sever! Let\'s kick of the third week!</h1>');
});

router.get('/myName', (req, res) => {
    const username = req.cookies.username; //Check if username is stored in the cookie
    console.log(req.cookies);
    if (username) {
        res.send(`Hello, ${username}!`);
    } else {
        res.send(`
        <form action="/trackName" method="get">
            <input type="text" name="username" placeholder="Enter Your Name">
            <button type="submit">Submit</button>
        </form>
        `);
    }
});

//Handle form submission to /trackName
router.get('/trackName', (req, res) => {
    const username = req.query.username; //Get the username from the query parameter
    if (username) {
        res.cookie('username', username);
        res.redirect('/myName'); //Redirect to /myName to display the username
    } else {
        res.send('Error: Please provide your name');
    }   
});


router.get('/data', (req, res) => {
    const params = req.query.number;

    if (isNaN(params) ) {
        res.send('Wrong Parameter')
    } else {
        let sum = 0;
        for ( let i = 0; i < Number(params)+1 ; i++ ) {
        sum += i;
        }
        res.send(`The sum is ${sum}`);
      }
    }
);

app.use('/', router); //Mount route on Express application

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
