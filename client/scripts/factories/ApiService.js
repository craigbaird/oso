myApp.factory('ApiService', ['$http', '$location', function($http, $location){
  var bookInfoFromApi = {};

    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(isbn){
            $http.get('/googleBooksApi/'+ isbn).then(function(response){
                var allGoogleBooksResults = response.data;
                var volumeInfo = [];
                allGoogleBooksResults.items.forEach(function(item, index) {
                    volumeInfo.push(item.volumeInfo);
                });
                bookInfoFromApi.volumeInfo = volumeInfo;
                console.log('volumeInfo', volumeInfo);

                // // Break the object into easier to read parts
                // response.data.items.forEach(function(item, index){
                //     if (undefined != item.volumeInfo.title) {
                //       bookInfoFromApi.title = item.volumeInfo.title;
                //     }
                //     else {
                //       bookInfoFromApi.title = '';
                //     }
                // });

                

                // bookInfoFromApi.thumbnail = response.data.items[0].volumeInfo.imageLinks.thumbnail;
                // bookInfoFromApi.smallThumbnail = response.data.items[0].volumeInfo.imageLinks.smallThumbnail;
                // bookInfoFromApi.allowAnonLogging = response.data.items[0].volumeInfo.allowAnonLogging;
                bookInfoFromApi.authors = response.data.items[0].volumeInfo.authors;
                // bookInfoFromApi.averageRating = response.data.items[0].volumeInfo.averageRating;
                // bookInfoFromApi.canonicalVolumeLink = response.data.items[0].volumeInfo.canonicalVolumeLink;
                // bookInfoFromApi.categories = response.data.items[0].volumeInfo.categories[0];
                // bookInfoFromApi.contentVersion = response.data.items[0].volumeInfo.contentVersion;
                // bookInfoFromApi.description = response.data.items[0].volumeInfo.description;
                // // Industry identifiers go here
                // bookInfoFromApi.isbn10 = response.data.items[0].volumeInfo.industryIdentifiers[0].identifier;
                // bookInfoFromApi.isbn13 = response.data.items[0].volumeInfo.industryIdentifiers[1].identifier;
                // bookInfoFromApi.infoLink = response.data.items[0].volumeInfo.infoLink;
                // bookInfoFromApi.language = response.data.items[0].volumeInfo.language;
                // bookInfoFromApi.pageCount = response.data.items[0].volumeInfo.pageCount;
                // bookInfoFromApi.maturityRating = response.data.items[0].volumeInfo.maturityRating;
                // bookInfoFromApi.previewLink = response.data.items[0].volumeInfo.previewLink;
                // bookInfoFromApi.printType = response.data.items[0].volumeInfo.printType;
                // bookInfoFromApi.publishedDate = response.data.items[0].volumeInfo.publishedDate;
                // bookInfoFromApi.publisher = response.data.items[0].volumeInfo.publisher;
                // bookInfoFromApi.ratingsCount = response.data.items[0].volumeInfo.ratingsCount;
                // // Reading modes go here
                // bookInfoFromApi.title = response.data.items[0].volumeInfo.title;

                $location.path('/bookResults');
            });
        },
    };
}]);
