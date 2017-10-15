myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('Book Results Controller loaded');
  $scope.logout = UserService.logout;

  $scope.addBook = function(bookShelfObject) {
      console.log('Adding Book Info: ', bookShelfObject);
      var book = bookShelfObject;

      $http.post('/myBookShelf', bookShelfObject).then(function(response){
        getBookShelf();

        /////// ??? ///////
        $scope.book.name = "";
      });
    };

    var getBookShelf = function() {
      $http.get('/myBookShelf').then(function(response){
        console.log("All Current Books: ", response);
        $scope.list = response.data;
         console.log(response.data);
      });
    };
    getBookShelf();

  $scope.bookInfoFromApi = ApiService.bookInfoFromApi;

}]);
