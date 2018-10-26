myApp.factory('ApiService', ['$http', '$location', function($http, $location) {
  var bookInfoFromApi = {};

    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(isbn){
            $http.get('/googleBooksApi/'+ isbn).then(function(response){
                var allGoogleBooksResults = response.data;
                console.log(bookInfoFromApi);
                var volumeInfo = [];
                allGoogleBooksResults.items.forEach(function(item, index) {
                    volumeInfo.push(item.volumeInfo);
                });
                bookInfoFromApi.volumeInfo = volumeInfo;

                // Break the object into easier to read parts
                bookInfoFromApi.title = response.data.items[0].volumeInfo.title;
                bookInfoFromApi.authors = response.data.items[0].volumeInfo.authors;
                bookInfoFromApi.publisher = response.data.items[0].volumeInfo.publisher;
                bookInfoFromApi.publishedDate = response.data.items[0].volumeInfo.publishedDate;
                bookInfoFromApi.description = response.data.items[0].volumeInfo.description;
                bookInfoFromApi.industryIdentifiers = response.data.items[0].volumeInfo.industryIdentifiers;
                bookInfoFromApi.industryIdentifiers = response.data.items[0].volumeInfo.readingModes;
                bookInfoFromApi.categories = response.data.items[0].volumeInfo.categories;
                bookInfoFromApi.language = response.data.items[0].volumeInfo.language;
                bookInfoFromApi.pageCount = response.data.items[0].volumeInfo.pageCount;
                // bookInfoFromApi.thumbnail = response.data.items[0].volumeInfo.imageLinks.thumbnail;
                // bookInfoFromApi.smallThumbnail = response.data.items[0].volumeInfo.imageLinks.smallThumbnail;
                // bookInfoFromApi.allowAnonLogging = response.data.items[0].volumeInfo.allowAnonLogging;
                // bookInfoFromApi.averageRating = response.data.items[0].volumeInfo.averageRating;
                // bookInfoFromApi.canonicalVolumeLink = response.data.items[0].volumeInfo.canonicalVolumeLink;
                // bookInfoFromApi.contentVersion = response.data.items[0].volumeInfo.contentVersion;
                // bookInfoFromApi.infoLink = response.data.items[0].volumeInfo.infoLink;
                // bookInfoFromApi.maturityRating = response.data.items[0].volumeInfo.maturityRating;
                // bookInfoFromApi.previewLink = response.data.items[0].volumeInfo.previewLink;
                // bookInfoFromApi.printType = response.data.items[0].volumeInfo.printType;
                // bookInfoFromApi.ratingsCount = response.data.items[0].volumeInfo.ratingsCount;
                // // Reading modes go here

                $location.path('/bookResults');
            });
        },
    };
}]);
