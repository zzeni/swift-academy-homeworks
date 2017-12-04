/*global Machine, document, Beverage, PRICES, RECIPES*/
(function() {
    "use strict";
    var machine = new Machine();
    
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
      var beverageStr = this.getAttribute("data-beverage");
      var beverage = new Beverage(beverageStr, PRICES[beverageStr], RECIPES[beverageStr]);
      var errorContainer = document.getElementById("error");

      console.log("beverage", beverage);
      errorContainer.classList.add("hidden"); // hide the error container

      try {
        machine.order(beverage.name);
        displayStatus();
      }
      catch (error) {
        errorContainer.classList.remove("hidden"); // show the error container
        errorContainer.querySelector(".panel-body").innerHTML = error.message;
      }
    });
  }
}
)();