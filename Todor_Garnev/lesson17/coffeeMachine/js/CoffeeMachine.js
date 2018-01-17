"use strict"

const RECIPES = {
    coffee: {
        coffee: 20,
        water: 60,
        cups: 1
    },
    coffee_with_milk: {
        coffee: 20,
        water: 50,
        milk: 20,
        cups: 1
    },
    cappuccino: {
        coffee: 20,
        water: 30,
        milk: 40,
        cups: 1
    },
    latte: {
        coffee: 20,
        water: 30,
        milk: 60,
        cups: 1
    },
    americano: {
        coffee: 20,
        water: 130,
        cups: 1
    },
    double: {
        coffee: 35,
        water: 80,
        cups: 1
    }
}

class CoffeeMachine {
    constructor(coffee, water, milk, cups) {
        this.coffee = coffee || 0
        this.water = water || 0
        this.milk = milk || 0
        this.cups = cups || 0
        this.turnover = 0
    }

    smallLoad() {
        this.coffee += 200
        this.water += 500
        this.milk += 100
        this.cups += 10
    }

    mediumLoad() {
        this.coffee += 500
        this.water += 1000
        this.milk += 300
        this.cups += 30
    }

    bigLoad() {
        this.coffee += 1000
        this.water += 2000
        this.milk += 500
        this.cups += 60
    }

    status() {
        return "coffee: " + this.coffee + "gr, milk: " + this.milk + "ml, water: " + this.water + "ml, cups: " + this.cups + ", turnover: " + this.turnover.toFixed(2) + "лв."
    }

    htmlStatus() {
        return `<div class="consumables">
                   <div class="well well-sm">
                     <div class="row">
                       <div class="col-xs-6 h4">Coffee</div>
                       <div class="col-xs-6 text-right h4">${this.coffee}</div>
                     </div>
                   </div>
                   <div class="well well-sm">
                     <div class="row">
                       <div class="col-xs-6 h4">Milk</div>
                       <div class="col-xs-6 text-right h4">${this.milk}</div>
                     </div>
                   </div>
                   <div class="well well-sm">
                     <div class="row">
                       <div class="col-xs-6 h4">Water</div>
                       <div class="col-xs-6 text-right h4">${this.water}</div>
                     </div>
                   </div>
                   <div class="well well-sm">
                     <div class="row">
                       <div class="col-xs-6 h4">Cups</div>
                       <div class="col-xs-6 text-right h4">${this.cups}</div>
                     </div>
                   </div>
                   <div class="well well-sm">
                     <div class="row">
                       <div class="col-xs-6 h4">Turnover</div>
                       <div class="col-xs-6 text-right h4">${this.turnover.toFixed(2)}</div>
                     </div>
                   </div>
                </div>`
    }

    order(beverage) {
        const recipe = beverage.getRecipe

        if (this.coffee < recipe.coffee) {
            throw new Error("Not enough coffee! Please, load the machine!")
        }
        if (this.water < recipe.water) {
            throw new Error("Not enough water! Please, load the machine!")
        }
        if (this.milk < recipe.milk) {
            throw new Error("Not enough milk! Please, load the machine!")
        }
        if (this.cups < recipe.cups) {
            throw new Error("Not enough cups! Please, load the machine!")
        }

        this.coffee -= recipe.coffee || 0
        this.water -= recipe.water || 0
        this.milk -= recipe.milk || 0
        this.cups -= 1 || 0
        this.turnover += beverage.getPrice

    }
}
