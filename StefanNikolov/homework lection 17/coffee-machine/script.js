/*global CoffeeMachine,document*/
(function () {
    "use strict";

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

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var beverage = this.getAttribute("data-beverage");
            var errorContainer = document.getElementById("error");

            errorContainer.classList.add("hidden"); // hide the error container

            try {
                machine.order(beverage);
                displayStatus();
            } catch (error) {
                errorContainer.classList.remove("hidden"); // show the error container
                errorContainer.querySelector(".panel-body").innerHTML = error.message;
            }
        });
    }
    //****************** MOQ KOD ************


    function CoffeeMachine(coffee, milk, water, cups) {
        this.coffee = coffee || 0;
        this.milk = milk || 0;
        this.water = water || 0;
        this.cups = cups || 0;
    };

   
CoffeeMachine.prototype.smallLoad = function(){
      return this.coffee += 200,
            this.milk += 200,
            this.water += 500,
            this.cups += 10;
    }

    CoffeeMachine.prototype.mediumLoad=function(){
        return this.coffee += 300,
            this.milk += 300,
            this.water += 700,
            this.cups += 20;
    }

    CoffeeMachine.prototype.bigLoad=function(){
        return this.coffee += 400,
            this.milk += 500,
            this.water += 1000,
            this.cups += 40;
    }
    
CoffeeMachine.prototype.htmlStatus=function(){
        return "machine have " + this.coffee + "gr. coffee, " + this.milk + " ml. milk, " + this.water + " ml. water and " + this.cups + "pcs. cups";
    };
//    
//machine.smallLoader();
//console.log(machine);
    
    
    
    
    

    var recipes = {
        "coffee": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 60,
                cups: 1
            },
            price: 0.5
        },
        "coffee_with_milk": {
            recipe: {
                coffee: 20,
                milk: 20,
                water: 50,
                cups: 1
            },
            price: 0.6
        },
        "cappucinno": {
            recipe: {
                coffee: 15,
                milk: 30,
                water: 40,
                cups: 1
            },
            price: 0.65
        },
        "latte": {
            recipe: {
                coffee: 20,
                milk: 30,
                water: 60,
                cups: 1
            },
            price: 0.70
        },
        "americano": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 120,
                cups: 1
            },
            price: 0.60
        },
        "dobble_coffee": {
            recipe: {
                coffee: 35,
                milk: 0,
                water: 120,
                cups: 1
            },
            price: 0.8
        }
    };

    //    console.log(recipes.coffee);









})();
