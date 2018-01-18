/* global document */

(function () {
    "use strict";

    //DECLARES THE DOCUMENT.QUERYSELECTOR AS A VARIABLE FOR EACH DIV ELEMENT
    var firstDiv = document.querySelector("#first");
    var secondDiv = document.querySelector(".middle");
    var lastDiv = document.querySelector("div:last-of-type");

    //DECLARES THE INNER HTML OF THE LAST DIV AS A VARIABLE 
    var newVar = lastDiv.innerHTML;

    //SETTING THE BACKGROUND COLORS
    firstDiv.style.backgroundColor = "lightgreen";
    secondDiv.style.backgroundColor = "lightblue";
    lastDiv.style.backgroundColor = "#ccc";

    //ACTIONS FOR CREATING INNER HTML IN THE SECOND DIV AN REPLACING THE CONTENT OF LAST AND FIRST DIV
    secondDiv.innerHTML = "<h3>This text is new</h3><p>This text is also new</p><pre>so is this</pre>";
    lastDiv.innerHTML = firstDiv.innerHTML;
    firstDiv.innerHTML = newVar;

})();
