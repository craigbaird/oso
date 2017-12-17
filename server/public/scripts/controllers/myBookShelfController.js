myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', 'MyBookShelfService', function($scope, $http, $location, UserService, ApiService, MyBookShelfService) {
  $scope.logout = UserService.logout;
  $scope.bookShelf = {};
  var bookToDelete;

  MyBookShelfService.getBookShelf();

  $scope.findBook = function() {
      // var isbn is the input from user in the search field and the only accepted way to search
      // will need to add a way to allow for other input types
      var isbn = $scope.bookToSearch.name;
      ApiService.getBooks(isbn);
  };

  $scope.editComments = function() {
    console.log("Edit notes clicked");
  };

  // FIX THIS
  $scope.deleteBook = function(book){
    bookToDelete = book;
    if (confirm ('Are you sure?')) {
      MyBookShelfService.deleteBook(bookToDelete);
    }
  };

  $scope.bookToSearch = ApiService.bookToSearch;
  $scope.bookShelf = MyBookShelfService.bookShelf;
}]);
