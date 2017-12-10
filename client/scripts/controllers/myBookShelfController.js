myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', 'MyBookShelfService', function($scope, $http, $location, UserService, ApiService, MyBookShelfService) {
  $scope.logout = UserService.logout;
  $scope.bookShelf = {};

  MyBookShelfService.getBookShelf();

  $scope.findBook = function() {
      // var isbn is the input from user in the search field and the only accepted way to search
      // will need to add a way to allow for other input types
      var isbn = $scope.bookToSearch.name;
      ApiService.getBooks(isbn);
  };

  // FIX THIS
  $scope.deleteBook = function(){
    var isbnIdentifier = $scope.bookShelf.list;
    console.log('deleteBook button clicked');
    console.log('the isbn of this book is: ', isbnIdentifier);
  };

  $scope.bookToSearch = ApiService.bookToSearch;
  $scope.bookShelf = MyBookShelfService.bookShelf;
}]);
