/* global document */


function display(text) {
    var output = document.createElement("pre");
    output.textContent = text;
    document.body.appendChild(output);
}

function bubleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                var tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

display(bubleSort([2, 1, 16, 3, 9]));


var i = 0;
while (i < 10) {
    display(i);
    i += 1;
}

var team = ["Ivan", "Pesho", "Mimi"];

function isMember(list, name) {
    if (list.includes(name)) {
        return "no";
    } else {
        return "yes";
    }
}
display("the team: " + team);
display("Gosho is in the team: " +  isMember("Gosho"));
display("Mimi is in the team: " + isMember("Mimi"));



function calc(x) {
if (x%2 === 0) {
return "even";
} else {
return "odd";
}
}
display("the number 7 is " +calc(7));
