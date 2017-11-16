/* global document */
/* FIRST TASK FROM LESSON 14 */

function calc(x) {
    
  if (x%2 === 0) {
    return "even";
   } 
    
  else {
 return "odd";
   }
}

var x;
calc(x);
display("When the entered numer is 5,\nthen the number is: \t\t" + calc(5));

/* WITH TRINARY OPERATOR  */

function calc1(y) {
    return (y%2 === 0) ? "even" : "odd";
}

var y;
y = 5;

calc1(y);
display("With trinary operator\n" + "When the entered numer is 5,\nthen the number is: \t\t" + calc1(5));
display("The value is\t\t\t" + y);


/* SECOND TASK FROM LESSON 14 */


function isMember(list, name) {
    if (list.includes(name)) {
        return "no";
    } else {
        return "yes";
    }
}

var team;
team = ["Ivan", "Pesho", "Mimi"];

display("Is Pesho in the list?\t\t" + isMember("Pesho"));
display("The team is:\t\t\t" + team);

/* WITH TRINARY OPERATOR */

function areMember(list, name) {
    return list.includes(name) ? "no" : "yes";
}

var team2;
team2 = ["Ivan", "Pesho", "Mimi"];

display("With trinary operator\n" + "Is Pesho in the list?\t\t" + areMember("Pesho"));
display("The team is:\t\t\t" + team2);

/* TASKS FROM REPL.IT */
/* forChekEven */


function display(text) {
  var output = document.createElement("pre");
  output.textContent = text;
  document.body.appendChild(output);
  }
    
function forCheckEven(list) {
    var i;
    for(i = 0; i < list.length; i++){
        if (list[i] % 2 === 1) {
            return ("false");
        }
    }
    return ("true");
}

array = [2, 14, 6, 24, 8];

forCheckEven(array);

var array;
array = [2, 14, 6, 24, 8];
forCheckEven(array);

display("Are all numbers even?\nAnswer: \t\t\t" + forCheckEven(2, 14, 6, 24, 8));


/* Sum All in Array of Numbers */
function sum(list) {
    var i;
    var result = 0;

    for(i = 0; i < list.length; i++) {
        result += list[i];
    }
    return result;
}

var array1;
array1 = [1, -1, 1, -1, 1, -1];

sum(array1);

display("The sum of all numbers is:\nAnswer: \t\t\t" + sum(1, -1, 1, -1, 1, -1));
display("The list is: \t\t\t" + array1);


/* doCheckEven */

function doCheckEven(array2) {
    var i = 0;
    do {
        if (array2[i] % 2 === 1) {
            return false;
        }
        i++;
    } while (i < array2.length);

    return true;
}

var array2;
array2 = [2, 4, 6, 8, 10];

doCheckEven(array);

display("Are all numbers even?\nAnswer: \t\t\t" + doCheckEven(2, 4, 6, 8, 10));
display("The list is: \t\t\t" + array2);


/* whileCheckEven */

function whileCheckEven(list){
    var i = 0;


    while (i < list.length){
        if (list[i] % 2 === 1){
            return false;
        }
        i++;
    }
    
    return true;
}

array = [2, 4, 6, 8, 10];

whileCheckEven(array); 
display("Are all numbers even?\nAnswer: \t\t\t" + whileCheckEven(2, 4, 6, 8, 10));



/* rgbColors */

function convert(red, green, blue) {
    var result;
    var redHex = red.toString(16);
    var blueHex = blue.toString(16);
    var greenHex = green.toString(16);

    if (redHex < 16) {
        redHex = "0" + redHex;
    }

    if (blueHex < 16) {
        blueHex = "0" + blueHex;
    }

    if (greenHex < 16) {
        greenHex = "0" + greenHex;
    }

    result = '#' + redHex + greenHex + blueHex;
    return result;
}

display("What is the result in RGB?\nAnswer: \t\t\t" + convert(255, 192, 253));


/* circle area */

function circle(radius) {
    var result = Math.PI*radius*radius;
    result = Math.round(result);
    return result;
}
 
display("What is the area of a circle\nwith radius = 5?\nAnswer: \t\t\t" + circle(5));