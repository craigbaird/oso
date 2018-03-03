myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};

    let getBookShelf = () => {
      $http.get('/books').then(function(response) {
        var bookList = response.data;
        console.log('bookList', bookList);

        // don't delete properties, user_id needed for functionality
        // filter in the view

        // bookList.forEach(function(book, index) {
        //   if (book.user_id) {
        //     delete book.user_id;
        //   }
        //   if (book._id) {
        //     delete book._id;
        //   }
        //   if (book.__v) {
        //     console.log(book.__v);
        //     delete book.__v;
        //   }

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
