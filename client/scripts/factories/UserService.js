myApp.factory('UserService', ['$http', '$location', function($http, $location){
  // console.log('User Service Loaded');

  var userObject = {};

  function redirect(page){
  // console.log('in page navigation', page);
  $location.url(page);
  }

  return {
    userObject : userObject,
    redirect: redirect,

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              userObject.userName = response.data.username;
            //   console.log('User Data: ', userObject.userName);
          } else {
              $location.path('/home');
          }
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
        //   console.log('logged out');
          $location.path('/home');
        });
    }
  };
}]);
