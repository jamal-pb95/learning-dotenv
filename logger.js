const url = 'https://www.mylogger.io/log';

function log(msg) {
	// body...
	console.log(msg);
}

module.exports = log;
module.exports.endPoint = url;