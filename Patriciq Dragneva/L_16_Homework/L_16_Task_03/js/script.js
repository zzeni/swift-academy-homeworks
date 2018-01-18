/* globals Bike, document */

(function () {
  "use strict";

  function display(html) {
    var div = document.createElement("div");
    div.classList.add("bike");
    div.innerHTML = html;
    document.body.appendChild(div);
  }

  var objectsList = [
    {
      name: "Drag",
      price: 200
    },
    {
      name: "RAM",
      price: 500
    },
    {
      name: "Scott",
      price: 1200
    },
    {
      name: "Balkan",
      price: "800"
    }
  ];

  // var bikes = [];
  // objectsList.forEach(function (obj) {
  //   var bike = new Bike(obj.name, obj.price);
  //   bikes.push(bike);
  // });

  var bikes = objectsList.map(function (obj) {
    return new Bike(obj.name, obj.price);
  });

  bikes.forEach(function (bike) {
//    console.log(bike.toHTML());
    display(bike.toHTML());
  });

})();
