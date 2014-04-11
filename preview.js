var express = require('express'),
	path = require('path');
var app = express();

module.exports = {
	serve: function(port, srvDir) {
		var staticDir = path.resolve(__dirname, srvDir);
		app.use(express.static(staticDir));

		app.listen(port);
		console.log('Listening on port %s and serving from %s',
			port.toString(), staticDir);
	}
};