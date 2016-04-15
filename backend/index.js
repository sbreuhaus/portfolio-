var express             = require('express'),
    server              = express(),
    cors                = require('cors'),
    bodyParser          = require('body-parser'),
    mongodb             = require('mongodb'),
    MongoClient         = mongodb.MongoClient,
    dbName              = 'portfolio_app',
    mongoURL            = 'mongodb://localhost:27017/' + dbName,
    projectsController  = require('./controllers/projects.js'),
    usersController     = require('./controllers/users.js'),
    PORT = 3000;

// MIDDLEWARE
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//ROUTERS
server.use('/projects', projectsController);
server.use('/users', usersController);

//INITIATING DB
MongoClient.connect(mongoURL, function(err, db){
  if(err) {console.log('err connecting to db', err);}
    else {
      console.log('we have connected');
      //DEFINING COLLECTIONS
      projectsCollection = db.collection('projects');
      usersCollection = db.collection('users')

      //STARTING SERVER
      server.listen(PORT, function(err){
        if (err) {console.error.bind('error starting up server', err);}
      });
    }
});
