myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  // console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;

  $scope.findBook = function() {
      // var isbn is the input from user in the search field and the only accepted way to search
      // will need to add a way to allow for other input types
      var isbn = $scope.bookToSearch.name;
    //   console.log('in getBooks', isbn);
      ApiService.getBooks(isbn);
  };

  $scope.bookToSearch = ApiService.bookToSearch;
}]);
