var machine = new CoffeeMachine();

//RECEPIES
var recipes = {
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
        coffee: 45,
        water: 80,
        cups: 1
    }

};

//PRICES
var prices = {
    coffee: {
        price: 0.5
    },
    coffee_with_milk: {
        price: 0.6
    },
    cappuccino: {
        price: 0.8
    },
    latte: {
        price: 0.8
    },
    americano: {
        price: 0.6
    },
    double: {
        price: 0.7
    }
};


function CoffeeMachine(coffee, milk, water, cups, turnover) {
    "use strict";
    this.coffee = coffee || 0;
    this.milk = milk || 0;
    this.water = water || 0;
    this.cups = cups || 0;
    this.turnover = turnover || 0;
}

//STATUS
CoffeeMachine.prototype.status = function () {
    return "coffee: " + this.coffee + "gr, " +
        "milk: " + this.milk + "ml, " +
        "water: " + this.water + "ml, " +
        "cups: " + this.cups;
};

//LOADS
CoffeeMachine.prototype.smallLoad = function () {
    this.coffee += 200;
    this.water += 500;
    this.milk += 100;
    this.cups += 10;
};
CoffeeMachine.prototype.mediumLoad = function () {
    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
};
CoffeeMachine.prototype.bigLoad = function () {
    this.coffee += 1000;
    this.water += 2000;
    this.milk += 500;
    this.cups += 60;
};

//STATUS FOR HTML
CoffeeMachine.prototype.htmlStatus = function () {
    var insertedHTML =
        '<ul class="list-group">' +
        '   <li class = "list-group-item list-group-item-info" > %ITEM% %THIS_COFFEE% </li>' +
        '   <li class = "list-group-item list-group-item-info" > %ITEM% %THIS_MILK% </li>' +
        '   <li class = "list-group-item list-group-item-info" > %ITEM% %THIS_WATER% </li>' +
        '   <li class = "list-group-item list-group-item-info" > %ITEM% %THIS_CUPS% </li>' +
        '   <li class = "list-group-item list-group-item-info" > %ITEM% %TURNOVER% </li>' +
        '</ul>';

    var statusHTML = '<div>';


    statusHTML = statusHTML + insertedHTML.replace("%ITEM%", "Coffee").replace("%THIS_COFFEE%", this.coffee);
    statusHTML = statusHTML + insertedHTML.replace("%ITEM%", "Milk").replace("%THIS_MILK%", this.milk);
    statusHTML = statusHTML + insertedHTML.replace("%ITEM%", "Water").replace("%THIS_WATER%", this.water);
    statusHTML = statusHTML + insertedHTML.replace("%ITEM%", "Cups").replace("%THIS_CUPS%", this.cups);
    statusHTML = statusHTML + insertedHTML.replace("%ITEM%", "Turnover").replace("%TURNOVER%", this.turnover);
    
    statusHTML = statusHTML + '</div>';
    return statusHTML;
};

// ORDERS
CoffeeMachine.prototype.order = function (beverage) {
    if (machine.coffee < recipes.coffee) {
        return console.log("Sorry, there is no more coffee!");
    } else if (this.water < recipes.water) {
        return console.log("Sorry, there is no more water!");
    } else if (this.milk < recipes.milk) {
        return console.log("Sorry, there is no more milk!");
    } else if (this.cups < recipes.cups) {
        return console.log("Sorry, there is no more cups!");
    }




    this.coffee = this.coffee - recipes.coffee;
    this.water = this.water - recipes.water;
    this.milk = this.milk - recipes.milk;
    this.cups = this.cups - recipes.cups;

    // TURNOVER

   // machine.turnover = machine.turnover + drinks.getPrice();
 

};



// BEVERAGE

 /*function Beverage(name) {
    "use strict";
    var beverage = {
        price: 0.50,
        "coffee": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 60
            }
        },
        "coffee_with_milk": {
            price: 0.60,
            recipe: {
                coffee: 20,
                milk: 20,
                water: 50
            }
        },
        "cappuccino": {
            price: 0.80,
            recipe: {
                coffee: 20,
                milk: 40,
                water: 30
            }
        },
        "latte": {
            price: 0.80,
            recipe: {
                coffee: 20,
                milk: 60,
                water: 30
            }
        },
        "long_coffee": {
            price: 0.60,
            recipe: {
                coffee: 20,
                milk: 0,
                water: 130
            }
        },

        "double": {
            price: 0.70,
            recipe: {
                coffee: 35,
                milk: 0,
                water: 80
            }
        }
    };
 } 
*/