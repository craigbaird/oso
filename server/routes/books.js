var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var MyBookShelfSchema = mongoose.Schema({
  'small_thumbnail': String,
  'thumbnail': String,
  'title': String,
  'authors': String,
  'categories': String,
  'description': String,
  'isbn10': String,
  'isbn13': String,
  'language': String,
  'page_count': String,
  'published_date': String,
  'publisher': String,
  'user_id': String,
  'comments': String
});

var Books = mongoose.model('Books', MyBookShelfSchema);

router.get('/', function(req, res) {

  if(req.isAuthenticated()) {
    var user = req.user._id;

    Books.find({user_id : user}, function(err, allBooks){
      if (err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(allBooks);
    });
  }
  else {
    console.log('not logged in');
    res.send(false);
  }
});

router.post('/', function(req, res, next) {
    var bookToSave = {
      title : req.body.title,
      small_thumbnail: req.body.smallThumbnail,
      thumbnail: req.body.thumbnail,
      authors: req.body.authors,
      categories: req.body.categories,
      description: req.body.description,
      isbn10: req.body.isbn10,
      isbn13: req.body.isbn13,
      language: req.body.language,
      page_count: req.body.pageCount,
      published_date: req.body.publishedDate,
      publisher: req.body.publisher,
      user_id : req.user._id,
      comments: 'none'
    };


  // router.put("/", function(req, res){
  //   console.log(req.body);
  //   var book = req.body;
  //   Book.findById(req.body.id, function(err, foundBook){
  //     if (err) {
  //       console.log(err);
  //       res.sendStatus(500);
  //     }
  //     foundBook.comments = req.body.comments;
  //
  //     foundBook.save(function(err, savedBook){
  //       if (err){
  //         console.log(err);
  //         res.sendStatus(500);
  //       }
  //       res.send(savedBook);
  //     });
  //   });



    // router.delete will go here
    // router.deleteOne('/', function (req, res, next) {
    //   db.collection("customers").deleteOne(myquery, function(err, obj) {
    //     if (err) throw err;
    //     console.log("1 document deleted");
    //     db.close();
    //   });
    // });





    // router.delete('/:_id', function (req,res){
    //   console.log(req.params._id);
    //   Books.findByIdAndRemove((req.params._id), function (err, allBooks){
    //     if (err) {
    //       console.log("mongo error: ", err);
    //       sendStatus(500);
    //     }
    //     res.sendStatus(200);
    //   });
    // });






    Books.create(bookToSave, function(err, post) {
         if (err) {
           res.sendStatus(500);
         } else {
          res.sendStatus(200);
         }
    });
});

module.exports = router;
