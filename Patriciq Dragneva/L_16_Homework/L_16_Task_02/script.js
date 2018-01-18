/* global document */

(function () {
    "use strict";


    function display(text) {
        var output = document.createElement("pre");
        output.textContent = text;
        document.body.appendChild(output);
    }



    /* SECOND TASK FROM LESSON 16 */
    var shoppingCart = [
        {
            name: "apple",
            type: "fruit",
            quantity: 5
        },
        {
            name: "banana",
            type: "fruit",
            quantity: 2
        },
        {
            name: "potato",
            type: "vegetable",
            quantity: 10
        },
        {
            name: "cheese",
            type: "diry",
            quantity: 1
        },
        {
            name: "yogurt",
            type: "diry",
            quantity: 3
        },
        {
            name: "steak",
            type: "meat",
            quantity: 1
        },
        {
            name: "ice cream",
            type: "sweet",
            quantity: 1
        },
        {
            name: "bounty",
            type: "sweet",
            quantity: 3
        }
    ];

    var total = 0;
    var total2 = 0;

    shoppingCart.forEach(function(forObject) {
        total = total + forObject.quantity;
    });

    
    var result = shoppingCart.filter(function(obj) {
        return (obj.type === 'vegetable' || obj.type === 'fruit');
    });
    

    result.forEach(function(forObject) {
        total2 = total2 + forObject.quantity;
    });
    

    display('The overall quantity of all the\nitems in the shoppingCart is:\t\t\t'+ total); // should return 26
    display('The quantity of the fruit\nand vegetable items in the shoppingCart is:\t'+ total2); // should return 17


})();
