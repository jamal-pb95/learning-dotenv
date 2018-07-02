// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// // const cookieParser = require('cookie-parser');
// const app = express();
// // const router = express.Router();

// app.use(bodyParser());
// // app.use(cookieParser());

// app.use('./css', express.static(__dirname + './assets'));

// // app.use('/', router);

// // app.get('/first-router', (req, res) => {
// // 	res.end('What\'s going on...');
// // });

// // app.get('/second-router', (req, res) => {
// // 	res.end('What\'s going on...again and again...');
// // });
// // Cookie
// // app.get('/', (req, res) => {
// // 	res.cookie('myFirstCookie', 'looks Good');
// // 	res.end('Wow again without server restart. dddd');
// // });

// // Remove cookie
// // app.get('/remove-cookie', (req, res) => {
// // 	res.clearCookie('myFirstCookie');
// // 	res.end('Wow');
// // });

// app.get('/', (req, res) => {
// 	res.sendFile('index.html', {root: path.join(__dirname, '/')});
// 	// let greet = `Hello ${req.query.firstName}!`;
// 	// res.end(greet);
// });

// app.post('/', (req, res) => {
// 	res.end(JSON.stringify(req.body));
// });

// app.listen(3000, () => console.log('Server started on port 3000...'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Simple login app
const express = require('express');
const bodyParser = require('body-parser');
const sessions = require('express-session');
let session;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(sessions({
	secret: '%^(T**(Y)&^*(&)^*(^(*^*&*^%*&',
	resave: false,
	saveUninitialized: true
}));

app.get('/login', (req, res) => {
	res.sendFile('./assets/login.html', {root: __dirname});
});

app.post('/login', (req, res) => {
	// res.end(JSON.stringify(req.body));
	session = req.session;
	if(req.body.username === 'admin' && req.body.password === 'admin') {
		ssession.uniqueID = req.body.username;
	}
	res.redirect('/redirects');
});

app.get('/redirects', (req, res) => {
	session = req.session;
	if(session.uniqueID) {
		res.redirect('/admin')
	} else {
		res.end('Who are you?');
	}
});

app.listen(3000, () => console.log('Server start on port 3000...'));
