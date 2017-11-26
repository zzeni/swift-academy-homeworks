/* globals document, window */

(function () {
    "use strict"

    const changeURL = () => {
        window.location.replace("https://google.bg")
    }

    //    window.setTimeout(changeURL, 30000)

    let deg = 90

    const rotate = () => {
        document.querySelector("div").style.transform = "rotate(" + deg + "deg)"
        deg += 90
    }

    window.setInterval(rotate, 1000)

})()
