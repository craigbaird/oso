myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', 'MyBookShelfService', function($scope, $http, $location, UserService, ApiService, MyBookShelfService) {
  $scope.logout = UserService.logout;
  $scope.bookShelf = {};

  MyBookShelfService.getBookShelf();
  console.log('my bookshelf is awesome and is: ', MyBookShelfService.bookShelf);
  $scope.findBook = function() {
      // var isbn is the input from user in the search field and the only accepted way to search
      // will need to add a way to allow for other input types
      var isbn = $scope.bookToSearch.name;
      ApiService.getBooks(isbn);
  };

  $scope.bookShelf = MyBookShelfService.bookShelf;
  $scope.bookToSearch = ApiService.bookToSearch;
}]);
