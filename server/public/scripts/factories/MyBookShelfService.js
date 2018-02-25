myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};

    let getBookShelf = () => {
      $http.get('/books').then(function(response) {
        bookShelf.list = response.data;
      });
    };

    let editMyComments = (bookObject) => {
      $http.put('/books/editMyComments', bookObject).then(function(response) {
      });
    };

    let flagMyBook = (bookObject) => {
      $http.put('/books/flagBook', bookObject).then(function(response) {
      });
    };

    let deleteBook = (bookObject) => {
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
