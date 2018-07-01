const express = require('express');
const path = require('path');
const app = express();

app.use('./css', express.static(__dirname + './assets'));
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(3000, () => console.log('Server started on port 3000...'));
