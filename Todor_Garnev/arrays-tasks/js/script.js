/* global document */

(function () {
    "use strict"

    let display = text => {
        let output = document.createElement("p")
        output.innerHTML = text
        document.body.appendChild(output)
    }

    //Задача 1
    const list = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

    const filtered = arr => arr.length > 3

    const moreThanThree = arr => arr.filter(filtered)

    display(moreThanThree(list))


    //Задача 2
    const sortAToZ = arr => arr.sort()

    display(sortAToZ(list))


    //Задача 3
    const sortByLength = arr => arr.sort((a, b) => a.length - b.length)

    display(sortByLength(list))


    //Задача 4
    const shoppingCart = [
        {
            name: "apple",
            type: "fruit",
            singlePrice: 2.20,
            quantity: 5
        },
        {
            name: "banana",
            type: "fruit",
            singlePrice: 3.20,
            quantity: 2
        },
        {
            name: "potato",
            type: "vegetable",
            singlePrice: 1.50,
            quantity: 10
        },
        {
            name: "cheese",
            type: "diry",
            singlePrice: 5.90,
            quantity: 1
        },
        {
            name: "yogurt",
            type: "diry",
            singlePrice: 1.30,
            quantity: 3
        },
        {
            name: "steak",
            type: "meat",
            singlePrice: 7.20,
            quantity: 1
        },
        {
            name: "ice cream",
            type: "sweet",
            singlePrice: 4.50,
            quantity: 1
        },
        {
            name: "bounty",
            type: "sweet",
            singlePrice: 1.10,
            quantity: 3
        }
    ]

    const sortByPrice = (a, b) => a.singlePrice > b.singlePrice

    const sortArr = el => el.singlePrice < 5

    const lesssThanFive = arr => arr.filter(sortArr)

    const toString = x => JSON.stringify(x)

    display("Сортиран списък: " + toString(shoppingCart.sort(sortByPrice)))

    display("Сортиран списък < 5: " + toString(lesssThanFive(shoppingCart)))

})()
