myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  $scope.logout = UserService.logout;
  var book = {};

  $scope.addBook = function(bookInfoFromApi) {
      book = bookInfoFromApi;

      $http.post('/books', book).then(function(response){
        console.log('Book Info Sent to Database');
        book = '';
      });
    };

  $scope.bookInfoFromApi = ApiService.bookInfoFromApi;

}]);
