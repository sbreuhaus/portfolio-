var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// getting all users
router.get('/', function(req, res){
  usersCollection.find().toArray(function(err, result){
    if (err) {
      console.log("ERROR!", err);
      res.json("error");
    } else if (result.length) {
      res.json(result);
    } else {
      console.log('Do document(s) found with defined "find" criteria');
      res.json('no users found');
    }
  });
});

router.post('/new', function(req, res){
  usersCollection.insert([req.body], function(err, data){
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
  usersCollection.deleteMany({});
  usersCollection.insert([req.body], function(err, data){
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
  usersCollection.deleteMany({});
});
module.exports = router;
