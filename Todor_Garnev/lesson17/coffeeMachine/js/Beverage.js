"use strict"

class Beverage {
    constructor(name) {
        const BEVERAGES = {
            "coffee": {
                recipe: {
                    coffee: 20,
                    milk: 0,
                    water: 60
                },
                price: 0.5
            },
            "coffee_with_milk": {
                recipe: {
                    coffee: 20,
                    milk: 20,
                    water: 50
                },
                price: 0.6
            },
            "americano": {
                recipe: {
                    coffee: 20,
                    milk: 0,
                    water: 130
                },
                price: 0.6
            },
            "cappuccino": {
                recipe: {
                    coffee: 20,
                    milk: 40,
                    water: 30
                },
                price: 0.8
            },
            "latte": {
                recipe: {
                    coffee: 20,
                    milk: 60,
                    water: 30
                },
                price: 0.8
            },
            "double": {
                recipe: {
                    coffee: 35,
                    milk: 0,
                    water: 70
                },
                price: 0.5
            }
        }

        if (!BEVERAGES[name]) {
            throw new Error("Unknown beverage: " + name);
        }

        this._name = name
        this._price = BEVERAGES[name].price
        this._recipe = BEVERAGES[name].recipe

    }


    get getName() {
        return this._name
    }

    get getRecipe() {
        return this._recipe
    }


    get getPrice() {
        return this._price
    }
}

const a = new Beverage("americano")
console.log(a.getRecipe)
