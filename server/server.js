var express = require('express');
var fs = require('fs');
var swaggerJSDoc = require('swagger-jsdoc');

var cors = require('cors');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', function() {
	throw new Error('unabled to connect to database at ' + mongoUri);
});

var app = express();

app.use(cors());

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Sigfig RPT Swagger API',
    version: '1.0.0',
    description: 'Rest APIs for the front end programming test'
  },
  host: 'localhost:3001',
  basePath: '/'
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./*.js', './models/*.js']
};

// initialize swagger-jsdoc
app.swaggerSpec = swaggerJSDoc(options);


// app.configure(function() {
  app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use('/swagger', express.static('../swagger'));
	app.use('/testCode', express.static('../testCode'));

// });

require('./models/company.js');
require('./models/person.js');

require('./routes.js')(app);

app.listen(3001);
console.log('Listening on port 3001...');
