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

  $scope.editComments = function(bookObject) {
    console.log('submitted new comments');
    console.log(bookObject);
    console.log($scope.newComments.input);
    // var newComments = $scope.newComments.input;
    // console.log(newComments);
    // MyBookShelfService.editMyComments(bookObject);
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
    }).then((result) => {
      if (result.value) {
        MyBookShelfService.deleteBook(bookToDelete);
      }
    });
  };

  $scope.bookToSearch = ApiService.bookToSearch;
  $scope.bookShelf = MyBookShelfService.bookShelf;

}]);
