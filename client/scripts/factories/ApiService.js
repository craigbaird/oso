myApp.factory('ApiService', ['$http', '$location', function($http, $location){
  // console.log('Api Service Loaded');
    var bookInfoFromApi = {};
    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(isbn){
        //   console.log('in getBooks function in ApiService.js', isbn);
            $http.get('/googleBooksApi/'+ isbn).then(function(response){
                bookInfoFromApi.response = response.data;
                console.log('book results: ', response.data);

                $location.path('/bookResults');
            });
        },
    };
}]);
