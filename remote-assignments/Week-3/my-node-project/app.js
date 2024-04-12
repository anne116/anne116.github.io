const express = require('express');
const app = express();
const port = 3000;

//Define a route
app.get('/', (req, res) => {
 res.send('<h1>Hello, My Sever! Let\'s kick of the third week!</h1>');
});

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/`);
});
