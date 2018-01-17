/*globals document */

(function () {
    "use strict"

    const garden = document.querySelector("#garden")
    const basket = document.querySelector("#basket")
    const blueFlower = document.querySelector("#blue")
    const redFlower = document.querySelector("#red")
    const yellowFlower = document.querySelector("#yellow")
    const colors = ["red", "yellow", "blue"]
    let counterBlue = 0
    let counterRed = 0
    let counterYellow = 0

    for (let i = 0; i < 60; i++) {
        const color = colors[Math.floor(Math.random() * 3)]
        const number = (i % 4) + 1
        const img = document.createElement("img")

        img.src = "https://swift-academy.zenlabs.pro/examples/lesson19/flowers-game/img/" + color + "-" + number + ".png"
        img.classList.add(color)
        img.addEventListener("click", pick, {
            once: true
        })

        garden.appendChild(img)
    }

    function pick(event) {
        const img = event.target
        garden.removeChild(img)
        basket.appendChild(img)
        img.classList[0] === "blue" ? counterBlue += 1 : counterBlue += 0
        img.classList[0] === "red" ? counterRed += 1 : counterRed += 0
        img.classList[0] === "yellow" ? counterYellow += 1 : counterYellow += 0
        blueFlower.textContent = counterBlue
        redFlower.textContent = counterRed
        yellowFlower.textContent = counterYellow
        // console.log("color: ", img.classList[0])
    }

    document.querySelector("#reload").addEventListener("click", (event) => window.location.reload(true))

})()
