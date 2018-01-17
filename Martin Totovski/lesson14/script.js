/* global document */

//Task1
function calc(yourNumber){
    if (yourNumber % 2 === 0){
        return "even";
    }
    else {
        return "odd";
    }
}

document.getElementById("ex1").innerHTML = "The number is " + calc(5);


//Task 2
var list = ["Pesho", "Tosho", "Gosho"];

function isMember(list, name){
    if (list.includes(name)){
        return "Yes";
    }
    else{
        return "No";
    }
}

document.getElementById("ex2").innerHTML = "The team: " + list;
document.getElementById("ex3").innerHTML = "Is Pesho in the team? - " + isMember(list, "Pesho");
document.getElementById("ex4").innerHTML = "Is Marto in the team? - " + isMember(list, "Marto");


//Task 3
function calc(x) {
 return (x % 2 === 0) ? "even" : "odd";
}

document.getElementById("ex5").innerHTML = "The number is " + calc(20);


//Task 4
var list = ["Pesho", "Tosho", "Gosho"];
function isMember(list, name) {
    return list.includes(name) ? "Yes" : "No";
}

document.getElementById("ex6").innerHTML = "The team: " + list;
document.getElementById("ex7").innerHTML = "Is Pesho in the team? - " + isMember(list, "Pesho");
document.getElementById("ex8").innerHTML = "Is Marto in the team? - " + isMember(list, "Marto");

//Task 5


