myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', 'MyBookShelfService', function($scope, $http, $location, UserService, ApiService, MyBookShelfService) {
  $scope.logout = UserService.logout;
  $scope.bookShelf = {};
  $scope.newComments = {};
  $scope.flagThisBook = {};

  MyBookShelfService.getBookShelf();

  $scope.findBook = function() {
    // var isbn is the input from user in the search field and the only accepted way to search
    // will need to add a way to allow for other input types
    var isbn = $scope.bookToSearch.name;
    ApiService.getBooks(isbn);
    isbn = null;
  };

  $scope.editComments = function() {
    var bookObject = this.book;
      bookObject.my_comments = $scope.newComments.input;
      MyBookShelfService.editMyComments(bookObject);
      $scope.newComments.input = null;
  };

  $scope.addFlag = function() {
    var bookObject = this.book;
    bookObject.flagged = $scope.flagThisBook.input;
    MyBookShelfService.flagMyBook(bookObject);
    $scope.flagThisBook.input = null;
  };

  $scope.deleteBook = function(bookObject){
    var bookToDelete = bookObject;
    swal({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function(result) {
      if (result.value) {
        MyBookShelfService.deleteBook(bookToDelete);
      }
    });
  };

  $scope.bookToSearch = ApiService.bookToSearch;
  $scope.bookShelf = MyBookShelfService.bookShelf;

}]);
