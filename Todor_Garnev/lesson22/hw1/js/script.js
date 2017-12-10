/*globals document, $ */

$(document).ready(function () {
    "use strict"

    let movies

    const toHtml = (url, title, year, country) => {
        return `<div class="card text-center m-3" style="width: 10rem;">
                <img class="card-img-top" src="${url}" style="height: 15rem;" alt="Movie image">
                <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <h5 class="card-text">${year}</h5>
                <h5 class="card-text">${country}</h5>
                </div>
                </div>`
    }


    const getMovies = () => {
        $.getJSON("db/movies.json", data => {
            movies = data

            movies.forEach(function (movie) {
                let url = movie.image
                let title = movie.title
                let year = movie.releaseYear
                let country = movie.releaseCountry

                let currentMovie = toHtml(url, title, year, country)
                $('#collection').append(currentMovie)
            })
        })
    }

    getMovies()

})
