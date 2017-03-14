// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// call Routes
var apisearch = require ('./routes/search');



// // MongoDB
// mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();

/**
 * bodyParser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'));
app.get('/api/search', apisearch.searchplace);
app.get('/api/test', apisearch.test);


// Start server
// app.listen(3000);
// console.log('Listening on port 3000...');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
