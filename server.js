/* An express server that supports get and post routes for and Angularjs Controller*/

var express = require ('express');
var bodyParser = require ('body-parser');
var app = express();
app.use('/', express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the Express application instance to listen to the '8187' port
app.listen(8187);

// Log the server status to the console
console.log('Server running at http://localhost:8187');



