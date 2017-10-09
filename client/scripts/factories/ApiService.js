myApp.factory('ApiService', ['$http', function($http){
  // console.log('Api Service Loaded');

    var bookInfoFromApi = {};

    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(isbn){
        //   console.log('in getBooks function in ApiService.js', isbn);
          $http.get('/googleBooksApi/'+ isbn).then(function(response){
            bookInfoFromApi.response = response.data;
            // $location.path("/bookResults");
            console.log('book results: ', response.data);
          }); //end $http.get
        }, //end getBooks
    };
}]);
