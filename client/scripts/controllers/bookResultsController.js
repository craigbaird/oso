myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('Book Results Controller loaded');
  $scope.logout = UserService.logout;

  // $scope.book = {}; // maybe?
  var book = {};

  $scope.addBook = function(bookShelfObject) {

      console.log('Sending Book Info To Database: ', bookShelfObject);
      // var title = bookShelfObject;
      book.title = bookShelfObject;
      console.log('bookshelfobject =', book);

      $http.post('/books', book).then(function(response){
        getBookShelf();
        console.log('hi');
        // $scope.book.title = "";
        book.title = "";
        // console.log($scope.book.title);
        console.log(book.title);
      });
    };

    var getBookShelf = function() {
      $http.get('/books').then(function(response){
        console.log("All Current Books: ", response);
        $scope.list = response.data;
         console.log(response.data);
      });
    };
    getBookShelf();

  $scope.bookInfoFromApi = ApiService.bookInfoFromApi;

}]);
