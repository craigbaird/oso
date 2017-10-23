myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('Book Results Controller loaded');
  $scope.logout = UserService.logout;

  $scope.book = {}; // maybe?

  $scope.addBook = function(bookShelfObject) {

      console.log('Sending Book Info To Database: ', bookShelfObject);
      // var book = bookShelfObject;

      $http.post('/books', bookShelfObject).then(function(response){
    //     getBookShelf();
      console.log('hi');
        $scope.book.name = "";
        console.log($scope.book.name);
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
