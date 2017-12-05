(function() {
    "use strict";

    function CoffeeMachine(coffee, milk, water, cups , price) {
        this.coffee = coffee || 0;
        this.milk = milk || 0;
        this.water = water || 0;
        this.cups = cups || 0;
        this.price = price || 0;
    }

    var machine = new CoffeeMachine();


    CoffeeMachine.prototype.smallLoad = function() {
        this.coffee += 200;
        this.water += 500;
        this.milk += 100;
        this.cups += 10;
    }

    CoffeeMachine.prototype.mediumLoad = function() {
        this.coffee += 500;
        this.water += 1000;
        this.milk += 300;
        this.cups += 30;
    }

    CoffeeMachine.prototype.bigLoad = function() {
        this.coffee += 1000;
        this.water += 2000;
        this.milk += 500;
        this.cups += 60;
    }

    CoffeeMachine.prototype.displayStatus = function() {

        if (this.coffee < 0 || this.cups < 0 || this.water < 0 || this.milk < 0 ) {
            $('#error').removeClass('hidden');
            $('#error .panel-body').html("Need consumables :)")
            this.coffee = 0;
            this.cups = 0;
            this.water = 0;
            this.milk = 0;
            return;
        }
        $('#statusContainer').html("coffee:" + this.coffee + "   water:" + this.water + "ml   milk:" + this.milk + "ml   cups:" + this.cups + " / Turnover = " + this.price.toFixed(2) + "lv");
        console.log(this.coffee);
    }

    //Display the status in the Begining
    machine.displayStatus();

    var recipes = {
        coffee: {coffee : 20 , water : 60 , milk : 0 ,cup : 1 , price : 0.5}, 
        coffee_with_milk: {coffee : 20 , water : 50 , milk : 20 , cup : 1 , price : 0.6},
        cappuccino: {coffee : 20 , water : 30 , milk : 40 , cup : 1 , price: 0.8},
        latte: {coffee : 20 , water : 30 , milk : 60 , cup : 1 , price : 0.8},
        americano: {coffee : 20 , water : 130 , milk : 0 , cup : 1 , price : 0.6},
        double: {coffee : 35 , water : 80 , cup : 1 , milk : 0 , price: 0.7}
    };

    CoffeeMachine.prototype.order = function(e) {      
        this.coffee -= recipes[e].coffee;
        this.milk -= recipes[e].milk;
        this.water -= recipes[e].water;
        this.cups -= recipes[e].cup; 
        this.price += recipes[e].price;
    }


    document.getElementById("smallLoad").addEventListener("click", function() {
        machine.smallLoad();
        machine.displayStatus();
    });
    document.getElementById("mediumLoad").addEventListener("click", function() {
        machine.mediumLoad();
        machine.displayStatus();d
    });
    document.getElementById("bigLoad").addEventListener("click", function() {
        machine.bigLoad();
        machine.displayStatus();
    });

    var buttons = document.getElementsByClassName("order-btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var beverage = this.getAttribute("data-beverage");
            machine.order(beverage);
            machine.displayStatus();        
        });
    }
})();