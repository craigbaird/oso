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

  $scope.editComments = function(bookObject) {
    console.log("Edit comments clicked");
    appendInput();
    MyBookShelfService.editMyComments(bookObject);
  };

  var counter = 0;
  var limit = 1;
  function appendInput() {
    if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var myComments = document.createElement('div');
          myComments.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
          document.getElementById(myComments).appendChild(myComments);
          counter++;
     }
  }

  $scope.deleteBook = function(bookObject){
    bookToDelete = bookObject;
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
