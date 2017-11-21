bikes = [
    {
        name : 'Drag',
        price : 200
    },
    {
        name : 'Ram',
        price : 300
    },
    {
        name : 'Specialized',
        price : 400
    }
];

function Bike(name,price){
    this.name = name;
    this.price = price;
}
Bike.prototype.toHTML = function () {
    result = '<h3>'+ this.name +'</h3>\n';
    result += '<p> Price : '+this.price + '$</p>';
    return result;
}
var ram = new Bike("Ram",450);
document.write(ram.toHTML());

var newList = bikes.forEach(function(elements) {
   let name = elements.name;
   let price = elements.price;
   Bike(name,price)
}, this);

console.log(newList);