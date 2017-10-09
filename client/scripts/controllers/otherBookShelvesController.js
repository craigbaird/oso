myApp.controller('OtherBookShelvesController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  // console.log('Other Book Shelves Controller loaded');
  $scope.logout = UserService.logout;

  // connect controller data to factory data here

}]); // end myApp.controller
