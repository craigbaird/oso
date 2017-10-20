myApp.factory('ApiService', ['$http', '$location', function($http, $location){
  // console.log('Api Service Loaded');
    // var bookInfoFromApi = {};
    var bookInfoFromApi = {};
    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(isbn){
        //   console.log('in getBooks function in ApiService.js', isbn);
            $http.get('/googleBooksApi/'+ isbn).then(function(response){
                bookInfoFromApi.response = response.data;
                console.log('book results: ', response.data);

                // Break the object into parts
                bookInfoFromApi.allowAnonLogging = response.data.items[0].volumeInfo.allowAnonLogging;
                bookInfoFromApi.authors = response.data.items[0].volumeInfo.authors[0];
                bookInfoFromApi.averageRating = response.data.items[0].volumeInfo.averageRating;
                bookInfoFromApi.canonicalVolumeLink = response.data.items[0].volumeInfo.canonicalVolumeLink;
                bookInfoFromApi.categories = response.data.items[0].volumeInfo.categories[0];
                bookInfoFromApi.contentVersion = response.data.items[0].volumeInfo.contentVersion;
                bookInfoFromApi.description = response.data.items[0].volumeInfo.description;
                // industryIdentifiers goes here
                bookInfoFromApi.infoLink = response.data.items[0].volumeInfo.infoLink;
                // Left off here
                bookInfoFromApi.title = response.data.items[0].volumeInfo.title;
                bookInfoFromApi.pageCount = response.data.items[0].volumeInfo.pageCount;
                bookInfoFromApi.publishedDate = response.data.items[0].volumeInfo.publishedDate;

                $location.path('/bookResults');
            });
        },
    };
}]);
