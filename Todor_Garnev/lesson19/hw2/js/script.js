/*globals document */

(function () {
    "use strict"

    //    let arrMovies = []
    const collection = document.querySelector('#collection')

    class Movie {
        constructor(title, year, url, imdb) {
            this.title = title
            this.year = year
            this.url = url
            this.imdb = imdb
        }

        toHtml() {
            return `<div class="card text-center m-3" style="width: 10rem;">
                    <img class="card-img-top" src="${this.url}" style="height: 15rem;" alt="Movie image">
                    <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <h5 class="card-text">${this.year}</h5>
                    <a href="${this.imdb}" class="btn btn-primary btn-block" target = "_blank">IMDB</a>
                    </div>
                    </div>`
        }
    }

    const getMovie = event => {
        event.preventDefault()

        const title = document.filmGenerator.title.value
        const year = document.filmGenerator.year.value
        const url = document.filmGenerator.url.value
        const imdb = document.filmGenerator.imdb.value

        const newMovie = new Movie(title, year, url, imdb)
        //        arrMovies.push(newMovie)

        collection.innerHTML += newMovie.toHtml()
        //        console.log(arrMovies)
    }

    document.filmGenerator.addEventListener("submit", getMovie)

})()
