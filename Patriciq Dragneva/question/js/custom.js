/*globals document, window, $ */
(function () {
    "use strict";

   // var films = [];

    var TEMPLATE = "<div class=\"col-lg-6\">\n" +
        "  <article id=\"%FILM-ID%\" class=\"card film-item\">\n" +
        "    <div class=\"card-body d-flex p-0\">\n" +
        "      <div class=\"col-4 p-0 film-poster\">\n" +
        "        <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
        "          <img src=\"./img/missing.gif\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
        "        </a>\n" +
        "      </div>\n" +
        "      <div class=\"col-8 p-3 film-info\">\n" +
        "        <h4 class=\"card-title\">\n" +
        "          <a href=\"#\">%FILM-TITLE%</a>\n" +
        "        </h4>\n" +
        "        <div class=\"year-genre\">\n" +
        "          <div>\n" +
        "            <i class=\"fa fa-calendar\"></i>\n" +
        "            <span class=\"year\">%YEAR%</span>\n" +
        "          </div>\n" +
        "          <div class=\"genre elipsis\">\n" +
        "            %GENRE%\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div class=\"description\">\n" +
        "          <p>%DESCRIPTION%</p>\n" +
        "          <a class=\"read-more\" href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">more</a>\n" +
        "        </div>\n" +
        "        <div class=\"rating\">\n" +
        "          <span class=\"rating-value\">%RATING%</span>\n" +
        "          <i class=\"fa fa-star\"></i>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </article>\n" +
        "</div>\n";


    // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
    // Documentation: https://developers.themoviedb.org/3/discover/movie-discover
    // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
    // Documentation: https://developers.themoviedb.org/3/genres/get-movie-list

    $.getJSON("db/movies.json", function (data) {

        $.each(data, function () {
            var mydata = JSON.parse(data);        
            var newTemplate = TEMPLATE.replace(/%FILM-TITLE%/g, mydata[7].original_title);
            var collection = $("#collection");
            collection.append(newTemplate);
        });
    });

    document.filtersForm.year.addEventListener("change", function () {
        // your code here
    });

    function displayFilms() {
        // your code here
    }
    displayFilms();



    window.addEventListener("scroll", function () {
        if (this.pageYOffset > 200) {
            $("#header nav").addClass("slim");
        } else {
            $("nav").removeClass("slim");
        }
    });

})();
