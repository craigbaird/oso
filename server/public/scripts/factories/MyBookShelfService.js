myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    var bookShelf = {};

    let getBookShelf = () => {
      $http.get('/books').then(function(response) {
        console.log('response.data', response.data);
        var bookList = response.data;
        var newList = [];
        bookList.forEach(function(book, index) {
          newList.push({book.authors,
                       book.categories,
                       book.description,
                       book.flagged,
                       book.isbn10,
                       book.isbn13,
                       book.language,
                       book.my_comments,
                       book.page_count,
                       book.published_date,
                       book.publisher,
                       book.small_thumbnail,
                       book.thumbnail,
                       book.title});
          // if (undefined != book._id ) {
          //   delete book._id;
          // }
          // if (undefined != book.user_id) {
          //   delete book.user_id;
          // }
          // if (undefined != book._v) {
          //   delete book._v;
          // }
        });
        // console.log("bookList", bookList);
        console.log('newList', newList);
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
