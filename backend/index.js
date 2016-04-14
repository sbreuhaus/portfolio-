var express             = require('express'),
    server              = express(),
    cors                = require('cors'),
    bodyParser          = require('body-parser'),
    mongodb             = require('mongodb'),
    MongoClient         = mongodb.MongoClient,
    dbName              = 'portfolio_app',
    mongoURL            = 'mongodb://localhost:27017/' + dbName,
    contactsController  = require('./controllers/projects.js'),
    navigatorController = require('./controllers/navigator.js'),
    PORT = 3000;

// MIDDLEWARE
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//ROUTERS
servers.use('/project', contactsController);
server.use('/navigator', navigatorController);

//INITIATING DB
MongoClient.connect(mongoURL, function(err, db){
  if(err) {console.log('err connecting to db', err);}
    else {
      console.log('we have connected');
      //DEFINING COLLECTIONS
      contactsCollection = db.collection('projects');
      navigatorCollection = db.collection('navigator');

      //STARTING SERVER
      server.listen(PORT, function(err){
        if (err) {console.error.bind('error starting up server', err);}
      });
    }
});
