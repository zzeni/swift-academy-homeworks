(function () {
    "use strict"

    let display = text => {
        let output = document.createElement("p")
        output.textContent = text
        document.body.appendChild(output)
    }

    const shoppingCart = [
        {
            name: "apple",
            type: "fruit",
            quantity: 5
        },
        {
            name: "banana",
            type: "fruit",
            quantity: 2
        },
        {
            name: "potato",
            type: "vegetable",
            quantity: 10
        },
        {
            name: "cheese",
            type: "diry",
            quantity: 1
        },
        {
            name: "yogurt",
            type: "diry",
            quantity: 3
        },
        {
            name: "steak",
            type: "meat",
            quantity: 1
        },
        {
            name: "ice cream",
            type: "sweet",
            quantity: 1
        },
        {
            name: "bounty",
            type: "sweet",
            quantity: 3
        }
    ]

    const sum = (sum, el) => sum + el

    const isVegan = order => order.type === "vegetable" || order.type === "fruit"

    const getQuantity = el => el.quantity

    const quantityAll = list => list.map(getQuantity).reduce(sum, 0)

    const quantityVegan = list => list.filter(isVegan).map(getQuantity).reduce(sum, 0)

    display("Общото количество е: " + quantityAll(shoppingCart))

    display("Плодове и зеленчуци: " + quantityVegan(shoppingCart))


})()
