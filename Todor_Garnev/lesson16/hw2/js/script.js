(function () {
    "use strict"

    let display = text => {
        let output = document.createElement("p")
        output.textContent = text
        document.body.appendChild(output)
    }


    class Bike {

        constructor(name, price) {
            this.name = name
            this.price = price
        }

        toString() {
            return "This " + this.name + " bike costs " + this.price + "$ \n"
        }

    }

    const objectsList = [
        {
            name: "Drag",
            price: 200
        },
        {
            name: "RAM",
            price: 500
        },
        {
            name: "Scott",
            price: 1200
        },
        {
            name: "Balkan",
            price: "800"
        }
    ]

    const bikes = (objList) => objList.map(el => new Bike(el.name, el.price))

    const a = bikes(objectsList)

    display(a.toString())
})()
