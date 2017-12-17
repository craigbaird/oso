myApp.controller('LoginController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {

    $scope.user = {
      username: '',
      password: ''
    };

    $scope.login = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        swal(
          'Oops!',
          'You forgot to enter something in',
          'Please enter your username and password.'
        );
      } else {
          $http.post('/', $scope.user).then(function(response) {
            if(response.data.username) {
              // console.log('success: ', response.data);
              $location.path('/user');
            } else {
              // console.log('failure: ', response);
              swal(
                'Your username or password was incorrect',
                'Please try again.'
              );
            }
          });
      }
    };

    $scope.registerUser = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        swal(
          'Oops!',
          'You forgot to enter something in.',
          'Please create a username and password.'
        );

      } else {
        // console.log('sending to server...', $scope.user);
        $http.post('/register', $scope.user).then(function(response) {
        //   console.log('success');
          $location.path('/home');
        },
        function(response) {
        //   console.log('error');
          swal(
            'Please try again.'
          );
        });
      }
    };
}]);
