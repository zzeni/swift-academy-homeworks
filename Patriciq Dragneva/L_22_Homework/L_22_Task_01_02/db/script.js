/*global  $ */

(function () {
    "use strict";

    // VARIABLE
    var movie = {
        title: "Title:\t" + "Finding Nemo",
        url: "Link to IMDB:\t" + "http://www.imdb.com/title/tt0266543/mediaviewer/rm943068416",
        description: "Description:\t" + "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        year: "Year:\t" + 2003,
        rating: "IMDB rating:\t" + 8.1
    };


    // DATA FROM JSON FILE via getJSON
    $('.generateData').click(function () {
        $.getJSON("db/movies.json", function (obj) {
            $.each(obj, function (key, value) {
                $("#movies").append('<div class=" col-lg-12 col-xs-12 col-md-12 mb-6 parentDiv">' +
                    '   <div class="card h-100 mt-5">' +
                    '        <div class="card-body">' +
                    '            <p class="card-text movieTitle">' + "TITLE:\t\t" + value.title + '</p>' +
                    '            <p class="card-text moviePrice">' + "PRICE:\t\t" + value.price + '</p>' +
                    '            <p class="card-text movieDescription">' + "DESCRIPTION:\t\t" + value.description + '</p>' +
                    '            <p class="card-text movieRiting">' + "RATING:\t\t" + value.rating + '</p>' +
                    '            <p class="card-text movieRiting">' + "URL:\t\t" + value.url + '</p>' +
                    '        </div>' +
                    '   </div>' +
                    '</div>');
            });
        });

    });


    // PARTIAL HTML VIA $().load()
    $('#movie').load("templates/_movies.html", function () {

        var movieElement = $("#movie").children();
        movieElement.find('.title').text(movie.title);
        movieElement.find(".url").text(movie.url);
        movieElement.find(".description").text(movie.description);
        movieElement.find(".year").text(movie.year);
        movieElement.find(".rating").text(movie.rating);
        $('#movie').append(movieElement);
    });

})();
