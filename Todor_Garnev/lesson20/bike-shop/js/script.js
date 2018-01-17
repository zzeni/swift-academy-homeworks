/* globals $, Bike */

(function () {
    "use strict"

    const bikes = [
        {
            title: "Balkan",
            description: "The best bike ever",
            price: 1200,
            imgID: 1,
            category: "city"
    },
        {
            title: "Her bike",
            description: "Lorem mentitum illustriora est ipsum a o ipsum senserit.",
            price: 300,
            imgID: 2,
            category: "city"
    },
        {
            title: "Hardcore",
            description: "Ex ab firmissimum, officia minim voluptate voluptate.",
            price: 300,
            imgID: 3,
            category: "MTB"
    },
        {
            title: "Fantastic",
            description: "Ex a cohaerescant ex e aut quis mandaremus.",
            price: 780,
            imgID: 4,
            category: "other"
    },
        {
            title: "Drag city",
            description: "Ex a cohaerescant ex e aut quis mandaremus.",
            price: 450,
            imgID: 5,
            category: "cross"
    },
        {
            title: "Special",
            description: "Ex a cohaerescant ex e aut quis mandaremus.",
            price: 950,
            imgID: 6,
            category: "cross"
    },
  ]

    const $container = $('#items-container')

    const addBike = bike => {
        const newBike = new Bike(bike)
        $container.append(newBike.toHtml())
    }

    const displayBikes = bikesList => {
        $container.empty()
        bikesList.forEach(addBike)
    }

    displayBikes(bikes)

    $(".filters .city").on("click", () => {
        const filtered = bikes.filter(bike => bike.category === "city")
        displayBikes(filtered)
    })

    $(".filters .all").on("click", () => displayBikes(bikes))

})()
