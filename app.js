const express = require('express');
const path = require('path');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();

// app.use(bodyParser());
// app.use(cookieParser());

app.use('./css', express.static(__dirname + './assets'));

app.use('/', router);

app.get('/first-router', (req, res) => {
	res.end('What\'s going on...');
});

app.get('/second-router', (req, res) => {
	res.end('What\'s going on...again and again...');
});
// Cookie
// app.get('/', (req, res) => {
// 	res.cookie('myFirstCookie', 'looks Good');
// 	res.end('Wow again without server restart. dddd');
// });

// Remove cookie
// app.get('/remove-cookie', (req, res) => {
// 	res.clearCookie('myFirstCookie');
// 	res.end('Wow');
// });

// app.get('/', (req, res) => {
// 	res.sendFile('index.html', {root: path.join(__dirname, '/')});
// 	// let greet = `Hello ${req.query.firstName}!`;
// 	// res.end(greet);
// });

// app.post('/', (req, res) => {
// 	res.end(JSON.stringify(req.body));
// });

app.listen(3000, () => console.log('Server started on port 3000...'));
