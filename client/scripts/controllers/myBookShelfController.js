myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  // console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;

  $scope.bookShelf = {};

  $scope.findBook = function() {
      // var isbn is the input from user in the search field and the only accepted way to search
      // will need to add a way to allow for other input types
      var isbn = $scope.bookToSearch.name;
    //   console.log('in getBooks', isbn);
      ApiService.getBooks(isbn);
  };

displayBooks();
$scope.displayBooks = function() {
  console.log('in displayBooks');
  MyBookShelfService.currentBooks();
};

  // var getBookShelf = function() {
  //   $http.get('/books').then(function(response){
  //     console.log('All Books In Database: ', response.data);
  //     $scope.list = response.data;
  //   });
  // };
  // getBookShelf();

  $scope.bookToSearch = ApiService.bookToSearch;
}]);
