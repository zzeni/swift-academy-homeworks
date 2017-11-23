//RECEPIES
const RECEPIES = {
    coffee: {
        coffee : 20,
        water : 60,
        cups : 1
    },
    coffee_with_milk: {
        coffee : 20,
        water : 50,
        milk: 20,
        cups : 1
    },
    cappuccino: {
        coffee : 20,
        water : 30,
        milk: 40,
        cups : 1
    },
    latte: {
        coffee : 20,
        water : 30,
        milk: 60,
        cups : 1
    },
    americano: {
        coffee : 20,
        water : 130,
        cups : 1    
    },
    double: {
        coffee : 45,
        water : 80,
        cups : 1
    }

};
//PRICES
const PRICES = {
    coffee: {
        price : 0.5
    },
    coffee_with_milk: {
        price : 0.6
    },
    cappuccino: {
        price : 0.8
    },
    latte: {
        price : 0.8
    },
    americano: {
        price : 0.6
    },
    double: {
        price : 0.7
    }
};

function CoffeeMachine (coffee,milk,water,cups){
    "use strict";
    this.coffee = coffee || 0;
    this.milk = milk || 0;
    this.water = water || 0;
    this.cups = cups || 0;
    this.turnover = 0;
}

//LOADS
CoffeeMachine.prototype.smallLoad = function(){
    this.coffee += 200;
    this.water += 500;
    this.milk += 100;
    this.cups += 10;
}
CoffeeMachine.prototype.mediumLoad = function(){
    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
}
CoffeeMachine.prototype.bigLoad = function(){
    this.coffee += 1000;
    this.water += 2000;
    this.milk += 500;
    this.cups += 60;
}

//STATUS
CoffeeMachine.prototype.status = function(){
    console.log("Coffee: " +this.coffee,
                "Water: "+ this.water,
                "Milk: "+this.milk,
                "Cups "+this.cups);
}

// ORDERS
CoffeeMachine.prototype.order = function(coffeeType){
    if(this.coffee < RECEPIES[coffeeType].coffee) {
        return console.log("You run out of coffee !"); 
    }
    else if(this.water < RECEPIES[coffeeType].water){
        return console.log("You run out of water !");
    }
    else if(this.milk < RECEPIES[coffeeType].milk){
        return console.log("You run out of milk !");
    }
    else if(this.cups < RECEPIES[coffeeType].cups){
        return console.log("You run out of cups !");
    }


    if(RECEPIES[coffeeType].milk == undefined) {
        RECEPIES[coffeeType].milk = 0;
    }

    this.coffee -= RECEPIES[coffeeType].coffee;
    this.water -= RECEPIES[coffeeType].water;
    this.milk -= RECEPIES[coffeeType].milk;
    this.cups -= RECEPIES[coffeeType].cups;

    // TURNOVER
    
    this.turnover += PRICES[coffeeType].price;
    
}

// TURN TO HTML

CoffeeMachine.prototype.htmlStatus = function(){
    return  "<p> Coffee: " + this.coffee + "</p>" +
            "<p> Water: " + this.water + "</p>" +
            "<p> Milk: " + this.milk + "</p>" +
            "<p> Cups :" + this.cups + "</p>";
}

// BEVERAGE

function Beverage(name){
    "use strict";
    var _name = name;
    this.getName = function(){return _name};
    var price = PRICES[name].price;
    this.getPrice = function(){return price}; 
    var recipe = RECEPIES[name];
    this.getRecipe = function(){return recipe};
}