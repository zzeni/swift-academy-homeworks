/* global document */

document.getElementById("ex1").innerHTML = "Square root of 50 is: " + Math.round(Math.sqrt(50) * 100) / 100; //Task 1

document.getElementById("ex2").innerHTML = "The value of 51 to the power of 3 is: " + Math.pow(51, 3); //Task 2

document.getElementById("ex3").innerHTML = "The perimeter of a circle with radius 8 is : " + Math.round((2 * Math.PI * 8) * 100) /100; //Task 3

var r = 8; 
var result = 2 * Math.PI * r;
document.getElementById("ex4").innerHTML = "The perimeter of a circle with radius " + r + " is: " + Math.round(result * 100) / 100;
//Task 4

function findArea(r){
    var result = 2 * Math.PI * r;
    return result;
}
document.getElementById("ex5").innerHTML = "The perimeter of a circle with radius " + r + " is: " + Math.round(findArea(8) * 100) / 100; //Task 5

function area(a, b, c){
    var result = ((a+b) / 2) * c;
    return result;
}
document.getElementById("ex6").innerHTML = "The area of this figure is: " + area(10, 6, 10); //Task 6
