function Bike(name, price) {
  this.name = name;
  this.price = price;
}

Bike.prototype.toString = function () {
  return "This " + this.name + " bike costs " + this.price + "$";
};

Bike.prototype.toHTML = function () {
  return "<h2>" + this.name + "</h2>" +
          "<p>This bike costs only: " + this.price + "$</p>";
};
