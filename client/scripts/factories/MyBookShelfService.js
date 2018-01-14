myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};
    var bookToDelete = {};

    let getBookShelf = () => {
      $http.get('/books').then(function(response) {
        bookShelf.list = response.data;
      });
    };

    let editMyComments = (bookObject) => {
      $http.put('/books/editMyComments', bookObject).then(function(response) {
      });
    };

    let deleteBook = (object) => {
      $http.delete('/books/' + object._id).then(function(response) {
        getBookShelf();
      });
    };

    return {
      bookShelf,
      getBookShelf,
      editMyComments,
      deleteBook
    };

}]);
