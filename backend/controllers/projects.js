var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;

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

router.get('/find/:id', function(req, res){

  projectsCollection.find({"_id": ObjectId(req.params.id)}).toArray(function(err, result){
    if (err) {
      console.log("ERROR!", err);
      res.json("error");
    } else if (result.length) {
      console.log('found my project!');
      res.json(result);
    } else {
      console.log('No document(s) found with defined "find" criteria');
      res.json('no projects found');
    }
  });
});

router.put('/update', function(req, res){
  console.log('GOT UPDATE');
  console.log('updating called, this is my body', req.body);
  var old = {"_id": ObjectId(req.body.oldID)};
  var updateTo = {
    title: req.body.title,
    thumbnail: req.body.thumbnail,
    skills: req.body.skills
  };
  projectsCollection.update(old, updateTo);
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

router.delete('/delete/:id', function(req, res){
  console.log('Delete gotten');
  console.log('delete is is ', req.params.id);
    projectsCollection.remove({"_id": ObjectId(req.params.id)});
});

module.exports = router;
