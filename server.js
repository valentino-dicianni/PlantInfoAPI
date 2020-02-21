require('dotenv').config()

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Plant = require('./api/models/plantModel'), //created model loading here
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test123@ds053648.mlab.com:53648/heroku_chms7xdj', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(
        () => { console.log('Connected to DB') },
        err => { console.log('ERROR connecting to db: ' + err) }
    );


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./api/routes/plantRoutes');
routes(app);

app.listen(port);

console.log('plantAPI RESTful API server started on: ' + port);