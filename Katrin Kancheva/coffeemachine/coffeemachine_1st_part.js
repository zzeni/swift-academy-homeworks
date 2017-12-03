(function(){
	"use strict";

	function CoffeeMachine (coffee, milk, cups, water) {
		this.coffee = coffee || 0;
		this.milk = milk || 0;
		this.cups = cups || 0;
		this.water = water || 0;
	};

	CoffeeMachine.prototype.smallLoad = function() {
		this.coffee += 200;
		this.water += 500;
		this.cups += 10;
		this.milk += 100; 
	}

	CoffeeMachine.prototype.meduimLoad = function() {
		this.coffee += 500;
		this.water += 1000;
		this.cups += 30;
		this.milk += 300; 
	}

	CoffeeMachine.prototype.bigLoad = function() {
		this.coffee += 1000;
		this.water += 2000;
		this.cups += 60;
		this.milk += 500; 
	}

	CoffeeMachine.prototype.status = function() {
		return "coffee: " + this.coffee + "gr, milk:" + this.milk + "gr, water: " + this.water + "gr, cups: " + this.cups;

	}


	var RECIPES = {
		coffee : {
			name: "coffee",
			coffee: 20,
			water: 50,
			cups: 1
		},

		coffeeWithMilk : {
			name: "coffeeWithMilk",
			coffee: 20,
			water: 50,
			milk: 20,
			cups: 1
		},

		capuccino : {
			name: "capuccino",
			coffee: 20,
			water: 30,
			milk: 40,
			cups: 1
		},

		latte: {
			name: "latte",
			coffee: 20,
			water: 30,
			milk: 60,
			cups: 1
		},

		longCoffeeAmericano : {
			name: "longCoffeeAmericano",
			coffee: 20,
			water: 130,
			cups: 1
		},

		doubleCoffee : { 
			name: "doubleCoffee",
			coffee: 35,
			water: 80,
			cups: 1
		}
	};

	console.log(RECIPES.coffee);

	CoffeeMachine.prototype.order = function(recipe) {


		if(this.coffee < recipe.coffee) {
			throw new Error("Not enough coffee!");
		}

		if(this.milk < recipe.milk){
			throw new Error("Not enough milk!");
		}

		if(this.water < recipe.water) {
			throw new Error("Not enough water!");
		}

		if(this.cups < recipe.cups) {
			throw new Error("Not enough cups");
		}

		this.coffee -= recipe.coffee;
		this.milk -= recipe.milk;
		this.water -= recipe.water;
		this.cups -= recipe.cups;

		console.log("One " + recipe.name +" is served!");
	}


	var machine = new CoffeeMachine();

}();