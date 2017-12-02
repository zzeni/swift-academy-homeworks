function Machine(coffee, milk, watter, cups, turnover) {
    this.coffee = coffee || 0;
    this.milk = milk || 0;
    this.watter = watter || 0;
    this.cups = cups || 0;
    this.turnover = turnover || 0;
}

Machine.prototype.smallLoad = function () {
    this.coffee += 200;
    this.milk += 100;
    this.watter += 500;
    this.cups += 10;
};

Machine.prototype.mediumLoad = function () {
    this.coffee += 500;
    this.milk += 300;
    this.watter += 1000;
    this.cups += 30;
};

Machine.prototype.bigLoad = function () {
    this.coffee += 1000;
    this.milk += 500;
    this.watter += 2000;
    this.cups += 60;
};

Machine.prototype.htmlStatus = function () {
    return "coffe: " + this.coffee + " milk: " + this.milk + " watter: " + this.watter + " cups: " + this.cups + " turnover: " + this.turnover;
};

var coffee = {
    coffee: 20,
    water: 60,
    milk: 0,
    cups: 1
};
var latte = {
    coffee: 20,
    water: 30,
    milk: 60,
    cups: 1
};
var coffeWithMilk = {
    coffee: 20,
    water: 50,
    milk: 20,
    cups: 1
};
var cappucino = {
    coffee: 20,
    water: 30,
    milk: 40,
    cups: 1
};
var americanno = {
    coffee: 20,
    water: 130,
    milk: 0,
    cups: 1
};
var doubleCoffee = {
    coffee: 35,
    water: 80,
    milk: 0,
    cups: 1
};
var RECIPES = {
    coffee: coffee,
    latte: latte,
    coffee_with_milk: coffeWithMilk,
    cappuccino: cappucino,
    americano: americanno,
    double: doubleCoffee
};

var PRICES = {
    coffee: 50,
    latte: 60,
    coffee_with_milk: 80,
    cappuccino: 80,
    americano: 60,
    double: 70
};

Machine.prototype.order = function (product) {
    this.coffee = this.coffee - RECIPES.product.coffee;
    this.milk = this.milk - RECIPES.product.milk;
    this.watter = this.watter - RECIPES.product.water;
    this.cups = this.cups - RECIPES.product.cups;
    this.turnover = this.turnover + PRICES.product.price;
};
