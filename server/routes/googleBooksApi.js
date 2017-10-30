var express = require('express');
var router = express.Router();
var path = require('path');
var https = require('https');

router.get('/:isbn', function(req, res){
    // console.log('in googleBooksApi.js');
    var isbn = req.params.isbn;
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
    var body = '';
        https.get(url, function (result){
            result.setEncoding('utf8');
            result.on('data', function(data){
                body += data;
            });
            result.on('end', function() {
                body = JSON.parse(body);
                // console.log('object from api to send', body);
    res.send(body);
            });
        });
});

module.exports = router;
