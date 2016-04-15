var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res){
  projectsCollection.find().toArray(function(err, result){
    if (err) {
      console.log("ERROR!", err);
      res.json("error");
    } else if (result.length) {
      res.json(result);
    } else {
      console.log('No document(s) found with defined "find" criteria');
      res.json('no projects found');
    }
  });
});

router.post('/new', function(req, res){
  projectsCollection.insert([req.body], function(err, data){
    if (err) {
      console.log(err);
      res.json("error");
    } else {
      console.log('Inserted', data);
      res.json(data);
    }
  });
});

router.put('/update', function(req, res){
  projectsCollection.deleteMany({});
  projectsCollection.insert([req.body], function(err, data){
    if (err) {
      console.log(err);
      res.json("error");
    } else {
      console.log('Updated', data);
      res.json(data);
    }
  });
});

router.delete('/delete', function(req, res){
  console.log("received request");
  projectsCollection.deleteMany({});
});

module.exports = router;
