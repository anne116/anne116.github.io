const express = require('express');
const app = express(); //Create Express application
const router = express.Router(); //Create a router
const port = 3000; 


router.get('/', (req, res) => {
    res.send('<h1>Hiya! My Sever! Let\'s kick of the third week!</h1>');
});


router.get('/data', (req, res) => {
    const params = req.query.number;

    if (isNaN(params) ) {
        res.send('<h1>Wrong Parameter</h1>')
    } else {
        let sum = 0;
        for ( let i = 0; i < Number(params)+1 ; i++ ) {
            sum += i;
        }
        res.send(`<h1>The sum is ${sum}</h1>`);
      }

    }
);

app.use('/', router); //Mount route on Express application

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
