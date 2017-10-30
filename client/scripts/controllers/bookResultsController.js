myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  // console.log('Book Results Controller loaded');
  $scope.logout = UserService.logout;
  var book = {};

  $scope.addBook = function(bookInfoFromApi) {
      book = bookInfoFromApi;

      $http.post('/books', book).then(function(response){
        console.log('Book Info Sent to Database');
        getBookShelf();
        book = '';
      });
    };

    var getBookShelf = function() {
      $http.get('/books').then(function(response){
        console.log("All Books In Database: ", response.data);
        $scope.list = response.data;
      });
    };
    getBookShelf();

  $scope.bookInfoFromApi = ApiService.bookInfoFromApi;

}]);
