var expressInstance = require('express');
var app = expressInstance();
var fileStream = require('fs');

app.get('/', function(request, response) {
	fileStream.readFile('./index.html', function(error, htmlContent) {
		response.end(htmlContent);	
	});
});

app.get('/assets/life.js', function(request, response) {
	fileStream.readFile('./assets/life.js', function(error, jsContent) {
		response.end(jsContent);	
	});
});

app.listen(3000);
console.log("Server is running on port 3000");