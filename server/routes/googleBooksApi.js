var express = require('express');
var router = express.Router();
var path = require('path');
var https = require('https');

router.get('/:isbn', function(req, res){
    var isbn = req.params.isbn;
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
    var body = '';
    console.log('in /:isbn in googleBooksApi.js', isbn);
        https.get(url, function (result){
            result.setEncoding('utf8');
            // var body = '';
            result.on('data', function(data){
                body += data;
            });
            result.on('end', function() {
                body = JSON.parse(body);
                console.log('object from api to send', body);
            res.send(body);
            });
        });
        // console.log('object to send to server: ', body);
        // res.send(body);
});

module.exports = router;












///////////////////////////////////////////////////////////////////////////////
// What I was originally trying

// var express = require('express');
// var router = express.Router();
// var path = require('path');
// var https = require('https');
//
// router.get('/:isbn', function(req, res){
//   var isbn = req.params.isbn;
//   var apiKey = 'AIzaSyAFGKTlgzg7-XzMg6Yzo8dx9vrLPiIeyh4';
//   console.log('in /:isbn in googleBooksApi.js', isbn);
//     //   https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
//  // this route should work ^
//       https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&' + apiKey)
//  // I'm experimenting with adding my Google Books Api Key Here ^
//         .end(function (response) {
//         console.log(response);
//         // console.log(response.kind);
//         // console.log(response.result.items[0].kind);
//         res.send(response);
//   }); // end http.get
// });
//
// module.exports = router;













///////////////////////////////////////////////////////////////////////////////
// Something else I was trying

// var express = require('express');
// var router = express.Router();
// var path = require('path');
// var https = require('https');

// router.get('/:isbn', function(req, res){
//   var isbn = req.params.isbn;
//   console.log('in /isbn in googleBooksApi.js', isbn);
//       https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
//     //   https.get('https://www.googleapis.com/books/v1/volumes?q=' + isbn)
//         .end(function (result) {
//             var results = JSON.parse(result);
//             if (results.totalItems) {
//
//               // There'll be only 1 book per ISBN
//               var book = results.items[0];
//
//               var title = book.volumeInfo.title;
//               var subtitle = book.volumeInfo.subtitle;
//               var authors = book.volumeInfo.authors;
//               var printType = book.volumeInfo.printType;
//               var pageCount = book.volumeInfo.pageCount;
//               var publisher = book.volumeInfo.publisher;
//               var publishedDate = book.volumeInfo.publishedDate;
//               var webReaderLink = book.accessInfo.webReaderLink;

            //   var title = (book["volumeInfo"]["title"]);
            //   var subtitle = (book["volumeInfo"]["subtitle"]);
            //   var authors = (book["volumeInfo"]["authors"]);
            //   var printType = (book["volumeInfo"]["printType"]);
            //   var pageCount = (book["volumeInfo"]["pageCount"]);
            //   var publisher = (book["volumeInfo"]["publisher"]);
            //   var publishedDate = (book["volumeInfo"]["publishedDate"]);
            //   var webReaderLink = (book["accessInfo"]["webReaderLink"]);

              // For debugging
//               console.log(book);
//
//             }
//   }); // end http.get
// });
//
// module.exports = router;
