myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  // console.log('Book Results Controller loaded');
  $scope.logout = UserService.logout;
  var book = {};

  $scope.addBook = function(bookInfoFromApi) {
      book = bookInfoFromApi;
      console.log('Sending Book Info To Database: ', book);

      $http.post('/books', book).then(function(response){
        getBookShelf();
        book = '';
      });
    };

    var getBookShelf = function() {
      $http.get('/books').then(function(response){
        console.log("All Current Books: ", response);
        $scope.list = response.data;
      });
    };
    getBookShelf();

  $scope.bookInfoFromApi = ApiService.bookInfoFromApi;

}]);
