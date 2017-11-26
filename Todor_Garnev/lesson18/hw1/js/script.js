/* global document */

(function () {
    "use strict"

    const after3seconds = () => {
        document.querySelector("#hideMe").classList.add("hidden")
        document.querySelector("#showMe").classList.remove("hidden")

        const stop = window.setInterval(triggerImg, 2000)

        // window.setTimeout(function () {
        //   window.clearInterval(stop)
        // }, 9000);
    }

    window.setTimeout(after3seconds, 3000)

    const triggerImg = () => document.querySelector("#triggerMe").classList.toggle("hidden")


    const lastDiv = document.querySelector("div:last-of-type")
    lastDiv.classList.remove("hidden")
    lastDiv.querySelector("#hostname").innerHTML = window.location.href

})()
