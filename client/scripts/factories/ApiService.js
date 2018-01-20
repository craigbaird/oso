myApp.factory('ApiService', ['$http', '$location', function($http, $location){
  var bookInfoFromApi = {};
  var bookInfo = [];

// break data object below into functions
    // function formatLabel(fieldName){
    //   return fieldName.toUpperCase()
    // }
    //
    // function parseResults(obj){
    //   var fields = ["thumbnail", "small_thumbnail"]
    //   var results = {};
    //   var display = {id: 1, label: formatLabel(field[i]), data: result[i]};
    //
    // }

    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(isbn){
        //   console.log('in getBooks function in ApiService.js', isbn);
            $http.get('/googleBooksApi/'+ isbn).then(function(response){
                bookInfoFromApi.response = response.data;
                // console.log('Book Results From API: ', response.data.items);
                console.log('added to bookshelf');


                // TRYING THIS
                // var items = response.data.items[0].volumeInfo;
                //   for (var item in items) {
                //     bookInfo.push(item);
                //   }
                //   console.log(bookInfo);

                // AND THIS
                // var arr = [response.data.items];
                //
                // arr.forEach(function(element) {
                //   console.log('element', element);
                // });

                // AND THIS
                // let items  = response.data.items[0].volumeInfo;
                //
                // items.forEach(function(element) {
                //   console.log(element);
                // });


                // Break the object into easier to read parts
                bookInfoFromApi.thumbnail = response.data.items[0].volumeInfo.imageLinks.thumbnail;
                bookInfoFromApi.smallThumbnail = response.data.items[0].volumeInfo.imageLinks.smallThumbnail;
                bookInfoFromApi.allowAnonLogging = response.data.items[0].volumeInfo.allowAnonLogging;
                bookInfoFromApi.authors = response.data.items[0].volumeInfo.authors[0];
                bookInfoFromApi.averageRating = response.data.items[0].volumeInfo.averageRating;
                bookInfoFromApi.canonicalVolumeLink = response.data.items[0].volumeInfo.canonicalVolumeLink;
                bookInfoFromApi.categories = response.data.items[0].volumeInfo.categories[0];
                bookInfoFromApi.contentVersion = response.data.items[0].volumeInfo.contentVersion;
                bookInfoFromApi.description = response.data.items[0].volumeInfo.description;
                // Industry identifiers go here
                bookInfoFromApi.isbn10 = response.data.items[0].volumeInfo.industryIdentifiers[0].identifier;
                bookInfoFromApi.isbn13 = response.data.items[0].volumeInfo.industryIdentifiers[1].identifier;
                bookInfoFromApi.infoLink = response.data.items[0].volumeInfo.infoLink;
                bookInfoFromApi.language = response.data.items[0].volumeInfo.language;
                bookInfoFromApi.pageCount = response.data.items[0].volumeInfo.pageCount;
                bookInfoFromApi.maturityRating = response.data.items[0].volumeInfo.maturityRating;
                bookInfoFromApi.previewLink = response.data.items[0].volumeInfo.previewLink;
                bookInfoFromApi.printType = response.data.items[0].volumeInfo.printType;
                bookInfoFromApi.publishedDate = response.data.items[0].volumeInfo.publishedDate;
                bookInfoFromApi.publisher = response.data.items[0].volumeInfo.publisher;
                bookInfoFromApi.ratingsCount = response.data.items[0].volumeInfo.ratingsCount;
                // Reading modes go here
                bookInfoFromApi.title = response.data.items[0].volumeInfo.title;

                $location.path('/bookResults');
            });
        },
    };

}]);
