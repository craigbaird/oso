myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};

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
