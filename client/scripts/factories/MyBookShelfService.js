myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};
    var bookToDelete = {};

    // DELETE BOOK FUNCTIONALITY
    // var deleteBook = function(object) {
    //     console.log('object to delete', bookObject);
    //     $http.delete('/' + object.id).then(function(response){
    //       bookSubmit();
    //     });
    //   };

    // EDIT BOOK FUNCTIONALITY
    // router.put("/", function(req, res) {
    // console.log(req.body);
    // var comment = req.body;
    // Book.findById(req.body.id, function(err, foundBook) {
    //   if (err) {
    //     console.log(err);
    //     res.sendStatus(500);
    //   }
    //   foundBook.comments = req.body.comments;
    //
    //   foundBook.save(function(err, savedBook){
    //     if (err){
    //       console.log(err);
    //       res.sendStatus(500);
    //     }
    //     res.send(savedBook);
    //   });
    // });

    return {
      bookShelf: bookShelf,
      bookToDelete: bookToDelete,
      getBookShelf: function(){
        $http.get('/books').then(function(response){
          // console.log('All Books In Database: ', response.data);
          bookShelf.list = response.data;
          console.log('books on bookshelf ', bookShelf.list);
        });
      },
      deleteBook: function(bookObject){
        // $http.delete('/' + object.id).then(function(response){
        // FINISH THIS SECTION
        console.log('in deleteBook function');
        // });
      }
    };

}]);
