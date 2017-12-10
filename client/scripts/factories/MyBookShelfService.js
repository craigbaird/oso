myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};

    // var deleteBook = function(object) {
    //     $http.delete('/' + object.id).then(function(response){
    //       bookSubmit();
    //     });
    //   };

    return {
      bookShelf: bookShelf,
      getBookShelf: function(){
        $http.get('/books').then(function(response){
          // console.log('All Books In Database: ', response.data);
          bookShelf.list = response.data;
          console.log('books on bookshelf ', bookShelf.list);

        });
      }
    };

}]);
