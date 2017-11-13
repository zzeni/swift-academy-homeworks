/* global document */


function display(text) {
    var output = document.createElement("pre");
    output.textContent = text;
    document.body.appendChild(output);
}

var zad1 = 50 * 50;
var zad2 = 51 * 51 * 51;
var zad3 = 2 * Math.PI * 8;

var r = 8;
var pi = Math.PI;
var result = 2 * pi * r;

function perim(a) {
    return a * Math.PI * 2;
}

function area(a,b,c){
    return (a*(c-b)/2)+(a*b); 
}

function calc(x) {
if (x%2 === 0) {
return x*x;
} else {
return x*x*x;
}
}


display("50 на квадрат e: " + zad1);
display("51 на трета степен e: " + zad2);
display("периметърът на кръг с радиус 8 e: " + zad3);
display("периметърът на кръг с радиус 8 e: " + result + " - решение 2");

display("функция, която да смята периметъра на кръг: " + perim(6) + " - в случая 6");
display("Напишете функция area(), която получава три аргумента (a, b и c) и смята площта на следната фигура: " + area(3,4,5) + " - в случая 3, 4 , 5");

display("ако подаденият аргумент е четно число, връща квадрата на това число; ако пък е нечетно - връща числото на трета степен " +calc(5) + " - числото е 5");