myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};

    var getBookShelf = () => {
      $http.get('/books').then(function(response) {
        var bookList = response.data;
        bookShelf.list = response.data;
        });
    };

    var editMyComments = (bookObject) => {
      $http.put('/books/editMyComments', bookObject).then(function(response) {
      });
    };

    var flagMyBook = (bookObject) => {
      $http.put('/books/flagBook', bookObject).then(function(response) {
      });
    };

    var deleteBook = (bookObject) => {
      $http.delete('/books/' + bookObject._id).then(function(response) {
        getBookShelf();
      });
    };

    return {
      bookShelf,
      getBookShelf,
      editMyComments,
      flagMyBook,
      deleteBook
    };

}]);
