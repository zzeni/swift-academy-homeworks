/* global document */

(function () {
    "use strict";

/* GOOD GUYS */
    function BadGuy(name, knownAs) {
        this.name = name;
        this.knownAs = knownAs;
    }
    var joker = new BadGuy("Evan Smith", "Joker");
    var joker2 = new BadGuy("John Doe", "Joker2");

    BadGuy.prototype.againstTheWorld = function () {
        console.log(this.knownAs + " once again was against the world!");
    };
    joker.againstTheWorld();
    joker2.againstTheWorld();



/* BAD GUYS */
    function Hero(name, knownAs) {
        this.name = name;
        this.knownAs = knownAs;
    }
    Hero.prototype.saveWorld = function () {
        console.log(this.knownAs + " once again saved the world!");
    };
    var batman = new Hero("Bruce Wane", "Batman");
    var superman = new Hero("Clark Kent", "Superman");
    batman.saveWorld();
    superman.saveWorld();
    
    
/* RELATIONSHIP */
    Hero.prototype.kickAssofJoker1 = function () {
        console.log(this.knownAs + " just kicked " + joker.knownAs + " `s ass.");
    };
    Hero.prototype.kickAssOfJoker2 = function () {
        console.log(this.knownAs + " just kicked " + joker2.knownAs + " `s ass.");
    };
    batman.kickAssofJoker1();
    superman.kickAssOfJoker2();
    
})();