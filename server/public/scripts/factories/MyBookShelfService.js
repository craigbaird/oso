myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};
    var bookToDelete = {};

    let getBookShelf = () => {
      $http.get('/books').then(function(response) {
        bookShelf.list = response.data;
      });
    };

    // let editComment = (object) => {
    //   $http.put('/books').then(function(response) {
    //
    //   });
    // };

    let deleteBook = (object) => {
      $http.delete('/books/' + object._id).then(function(response) {
        console.log('deleted!');
        getBookShelf();
      });
    };

    return {
      getBookShelf,
      bookShelf,
      deleteBook
    };

    // return {
    //   bookShelf: bookShelf,
    //   bookToDelete: bookToDelete,
    //   getBookShelf: function(){
    //     $http.get('/books').then(function(response){
    //       // console.log('All Books In Database: ', response.data);
    //       bookShelf.list = response.data;
    //       console.log('books on bookshelf ', bookShelf.list);
    //     });
    //   },
    //   deleteBook: function(bookObject){
    //     // $http.delete('/' + object.id).then(function(response){
    //     // FINISH THIS SECTION
    //     console.log('in deleteBook function');
    //     // });
    //   }
    // };


}]);
