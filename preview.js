var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

module.exports = {
	listen: function(port) {
		app.listen(port);
		console.log('Listening on port %s.', port.toString())
	}
};