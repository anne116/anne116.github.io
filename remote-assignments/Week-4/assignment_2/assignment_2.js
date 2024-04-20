/*
Assignment 2: Callback Function and Advanced HTML DOM
Complete the functions below to make AJAX call to a URL by GET method, and show the response data on the page. You may render UI with any style.

Reminder: You cannot connect to arbitrary URLs because of the Same-Origin Policy which is implemented by the browser. So, feel free to use my URL for testing, otherwise, you can refer to an advanced topic: CORS.
*/
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
global.XMLHttpRequest = require('xhr2');

const src = 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products';
function ajax(src, callback) { 
    // your code here
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            callback(data);
            
        };
    };
    xhr.send();
}

router.get('/', (req, res) =>{
    ajax( 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products', function (response) {
        res.json(response); //Send the response data as JSON
    });
});   // you should get product information in JSON format and render data in the page

app.use('/',router);

app.listen(port, () => {
    console.log('Server is now running on port:3000');
});