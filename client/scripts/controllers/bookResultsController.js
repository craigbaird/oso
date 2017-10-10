myApp.controller('BookResultsController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('Book Results Controller loaded');
  $scope.logout = UserService.logout;
  $scope.bookInfoFromApi = ApiService.bookInfoFromApi;

}]);
