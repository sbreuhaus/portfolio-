var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

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

module.exports = router;
