/* global document */


function circle(r){   
    return Math.round((r*r)*Math.PI);
}

var result = circle(5);

var output = document.createElement("p");
output.textContent = "The area of a circle with radius = 5 is:\t " + result + ".";
document.body.appendChild(output);