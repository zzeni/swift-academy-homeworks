function Bike(name, price, country) {
    this.name = name;
    this.price = price;
    this.country = country;
}

Bike.prototype.toHTML = function () {
    var html = this.name;
    html += " price: " + this.price + "$ ";
    html += "country: " + this.country;
    var container = document.createElement("p");
    container.appendChild(document.createTextNode(html));
    return container;
}

var bmx = new Bike("BMX", 520, "Serbia");
var drag = new Bike("Drag", 600, "Bulgaria");
var treck = new Bike("Treck", 700, "USA");
var balkan = new Bike("Balkan", 1000, "Bulgaria");

var bikes = [];
bikes.push(bmx, drag, treck, balkan);

var analogBIkes = bikes.map(function (bike) {
    return bike;
});
var expensives = bikes.filter(function (bike) {
    return bike.price >= 1000;
});

var bulgarianBikes = bikes.filter(function (bike) {
    return bike.country == "Bulgaria";
});
for (var k = 0; k < bikes.length; k++) {
    console.log(bikes[k]);
    document.getElementById("all-bikes").appendChild(bikes[k].toHTML());
}

for (var l = 0; l < expensives.length; l++) {
    console.log(expensives[l]);
    document.getElementById("expensive-bikes").appendChild(expensives[l].toHTML());
}


