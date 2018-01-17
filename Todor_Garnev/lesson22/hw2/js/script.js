/*globals document, $ */

(function () {
    "use strict"

    let $moviePartial = $("#collection")


    const displayMovies = movieHTML => {
        $.getJSON('db/movies.json', movies => {
            $("#collection").empty()

            movies.forEach(movie => {
                const movieElement = $(movieHTML)
                movieElement.find(".card-img-top").attr("src", movie.image)
                movieElement.find(".card-title").text(movie.title)
                movieElement.find(".card-year").text(movie.releaseYear)
                movieElement.find(".card-country").text(movie.releaseCountry)
                $("#collection").append(movieElement)
            })
        })
    }

    $moviePartial.load("templates/_movie.html", displayMovies)

    //    moviePartial = $.get({
    //        url: "templates/_movie.html",
    //        contetType: "text/html"
    //    }, displayMovies)

})()
