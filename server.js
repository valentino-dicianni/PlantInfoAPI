require('dotenv').config()

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Plant = require('./api/models/plantModel'), //created model loading here
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/plantAPI', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/plantRoutes');
routes(app);

const port = process.env.PORT || 3000;

app.listen(port);

console.log('plantAPI RESTful API server started on: ' + port);