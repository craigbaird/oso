myApp.factory('MyBookShelfService', ['$http', '$location', function($http, $location){
    console.log('MyBookShelfService Loaded');
    var bookShelf = {};

    getBookShelf();
    
    return {
        bookShelf : bookShelf,
        displayBooks: function() {
          $http.get('/books').then(function(response){
            console.log('All Books In Database: ', response.data);
            $scope.list = response.data;
          });
        }
    };
}]);
