/*global document*/
(function () {
    "use strict";
    var buttonB = document.querrySelector(".moveBottom");


    buttonB.addEventListener("click", function () {
        if (document.querrySelector(".active") !== document.querrySelector(".bb")) {
            // ако в див-а с клас .active няма клас .bb
                    var currDiv = document.querrySelector(".active");     
            //взимам текущия див
                    var currId = currDiv.getAttribute('id').split("_")[1];
            //взимам индекса на id-то на текущия див
                    currDiv.classList.toggle(".active");
            //сменям класа .active на текущия див
             currId= currId*1 + 6;
                    document.getElementById("cell_"+ currId).classList.toggle(".active"); 
            //задававам нов див с клас .active по нов id индекс
        }
    });









})();
