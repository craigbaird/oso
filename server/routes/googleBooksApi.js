var express = require('express');
var router = express.Router();
var path = require('path');
var https = require('https');

router.get('/:isbn', function(req, res) {
    var isbn = req.params.isbn;
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
    var title = req.params.title;
    // var url = 'https://www.googleapis.com/books/v1/volumes?q=' + title;

    var body = '';
        https.get(url, function (result) {
            result.setEncoding('utf8');
            result.on('data', function(data) {
                body += data;
            });
            result.on('end', function() {
                body = JSON.parse(body);
            res.send(body);
            });
        });
});

module.exports = router;
