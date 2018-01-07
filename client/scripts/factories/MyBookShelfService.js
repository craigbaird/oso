myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};
    var bookToDelete = {};

    let getBookShelf = () => {
      $http.get('/books').then(function(response) {
        bookShelf.list = response.data;
      });
    };

    let editMyComments = (object) => {
      // $http.put('/books/' + object._id).then(function(response) {
        console.log(object._id);
        console.log('it works!');
      // });
    };

    let deleteBook = (object) => {
      $http.delete('/books/' + object._id).then(function(response) {
        console.log('deleted!');
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
