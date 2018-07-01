const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser());
app.use(cookieParser());

app.use('./css', express.static(__dirname + './assets'));

// Cookie
app.get('/', (req, res) => {
	res.cookie('myFirstCookie', 'looks Good');
	res.end('Wow');
});

// Remove cookie
app.get('/remove-cookie', (req, res) => {
	res.clearCookie('myFirstCookie');
	res.end('Wow');
});

// app.get('/', (req, res) => {
// 	res.sendFile('index.html', {root: path.join(__dirname, '/')});
// 	// let greet = `Hello ${req.query.firstName}!`;
// 	// res.end(greet);
// });

// app.post('/', (req, res) => {
// 	res.end(JSON.stringify(req.body));
// });

app.listen(3000, () => console.log('Server started on port 3000...'));
