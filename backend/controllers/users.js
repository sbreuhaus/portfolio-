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

router.put('/edit', function(req, res){
  var old = {
    name: req.body.name
  };
  var updateTo = {
    name: req.body.newName,
    linkedin: req.body.newLinkedin,
    github: req.body.newGithub
  };
  usersCollection.update(old, updateTo);
});

router.delete('/delete', function(req, res){
  usersCollection.remove([req.body], function(err, data){
    if (err){
      console.log("ERROR!!", err);
    } 
  });
});
module.exports = router;
