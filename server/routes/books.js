var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var MyBookShelfSchema = mongoose.Schema({
  'book': String,
  'user_id': String
});

var MyBookShelf = mongoose.model('MyBookShelf', MyBookShelfSchema);

router.get('/', function(req, res) {

  if(req.isAuthenticated()) {
    var user = req.user._id;
    console.log('logged in with user', req.user._id);

    MyBookShelf.find({user_id : user}, function(err, allBooks){
      if (err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(allBooks);
      console.log('response from MyBookShelf', allBooks);
    });
  } else {
    console.log('not logged in');
    res.send(false);
  }
});

// POST Route to add book for the authenticated user
router.post('/', function(req, res, next) {
    console.log('POST', req.body);
    var bookToSave = {
      book : req.body.name,
      user_id : req.user._id
    };

    MyBookShelf.create(bookToSave, function(err, post) {
         if (err) {
           res.sendStatus(500);
         } else {
          res.sendStatus(200);
         }
    });
});

module.exports = router;
