(function(){
	"use strict";

	function CoffeeMachine (coffee, milk, cups, water, turnover) {
		this.coffee = coffee || 0;
		this.milk = milk || 0;
		this.cups = cups || 0;
		this.water = water || 0;
		this.turnover = turnover || 0;
	}

	CoffeeMachine.prototype.smallLoad = function() {
		this.coffee += 200;
		this.water += 500;
		this.cups += 10;
		this.milk += 100; 
	};

	CoffeeMachine.prototype.meduimLoad = function() {
		this.coffee += 500;
		this.water += 1000;
		this.cups += 30;
		this.milk += 300; 
	};

	CoffeeMachine.prototype.bigLoad = function() {
		this.coffee += 1000;
		this.water += 2000;
		this.cups += 60;
		this.milk += 500; 
	};

	CoffeeMachine.prototype.htmlStatus = function () {
		var turnover = Math.floor(this.turnover) + "." + Math.round(this.turnover*100)%100 + "лв.";

		return '' +
		'<ul class="list-group">' +
		'  <li class="list-group-item coffee">Coffee: ' + this.coffee + "gr</li>" +
		'  <li class="list-group-item water">Water: ' + this.water + "ml</li>" +
		'  <li class="list-group-item milk">Milk: ' + this.milk + "ml</li>" +
		'  <li class="list-group-item cups">Cups: ' + this.cups + "</li>" +
		'  <li class="list-group-item turnover">Turnover: ' + turnover + "</li>" +
		'</ul>';
	};


	CoffeeMachine.prototype.order = function (beverageName) {
		var beverage = new Beverage(beverageName);
		var recipe = beverage.getRecipe();

		if (this.coffee < recipe.coffee) {
			throw new Error("Not enough coffee!");
		}
		if (this.water < recipe.water) {
			throw new Error("Not enough water!");
		}
		if (this.milk < recipe.milk) {
			throw new Error("Not enough milk!");
		}
		if (this.cups < recipe.cups) {
			throw new Error("Not enough cups!");
		}

		this.coffee -= recipe.coffee;
		this.milk -= recipe.milk;
		this.water -= recipe.water;
		this.cups -= recipe.cups;
		this.turnover += beverage.getPrice();

		return "One " + beverage.getName() + " is served!";
	};


	function Beverage (name) {
		var PRICES = {
			"coffee": {
				recipe: {
					coffee: 20,
					milk: 0,
					water: 60
				},
				price: 0.50
			},
			"coffee_with_milk": {
				recipe: {
					coffee: 20,
					milk: 20,
					water: 50
				},
				price: 0.60
			},
			"americano": {
				recipe: {
					coffee: 20,
					milk: 0,
					water: 130
				},
				price: 0.60
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
				price: 0.80
			},
			"double": {
				recipe: {
					coffee: 35,
					milk: 0,
					water: 70
				},
				price: 0.50
			}
		};

		if (!PRICES[name]) {
			throw new Error("Unknown beverage: " + name);
		}

		var _name = name;
		var _price = PRICES[name].price;
		var _recipe = PRICES[name].recipe;

		this.getName = function () {
			return _name;
		};
        
        this.getPrice = function () {
			return _price;
		};

		this.getRecipe = function () {
			return _recipe;
		};
	}


	var machine = new CoffeeMachine();

	function displayStatus() {
		var statusContainer = document.getElementById("statusContainer");
		statusContainer.innerHTML = machine.htmlStatus();
	}

	document.getElementById("smallLoad").addEventListener("click", function () {
		machine.smallLoad();
		displayStatus();
	});
	document.getElementById("mediumLoad").addEventListener("click", function () {
		machine.mediumLoad();
		displayStatus();
	});
	document.getElementById("bigLoad").addEventListener("click", function () {
		machine.bigLoad();
		displayStatus();
	});

	var buttons = document.getElementsByClassName("order-btn");

	for (var i=0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			var beverage = this.getAttribute("data-beverage");
			var errorContainer = document.getElementById("error");

			errorContainer.classList.add("hidden");

			try {
				machine.order(beverage);
				displayStatus();
			}
			catch (error) {
				errorContainer.classList.remove("hidden");
				errorContainer.querySelector(".panel-body").innerHTML = error.message;
			}
		});
	}

})();