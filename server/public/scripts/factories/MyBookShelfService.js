myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location) {
    var bookShelf = {};

    var getBookShelf = function() {
      $http.get('/books').then(function(response) {
        var bookList = response.data;
        bookShelf.list = response.data;
        });
    };

    var editMyComments = function(bookObject){
      $http.put('/books/editMyComments', bookObject);
    };

    var flagMyBook = function(bookObject) {
      $http.put('/books/flagBook', bookObject)
    };

    var deleteBook = function(bookObject) {
      $http.delete('/books/' + bookObject._id).then(function(response) {
        getBookShelf();
      });
    };

    return {
      bookShelf: bookShelf,
      getBookShelf: getBookShelf,
      editMyComments: editMyComments,
      flagMyBook: flagMyBook,
      deleteBook: deleteBook
    };

}]);
