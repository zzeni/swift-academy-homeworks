/* global document */

function circle(r) {
    var result = (Math.pow(r, 2) * Math.PI);
    return result;
    
}

document.getElementById("ex1").innerHTML = "The area of this circle is: " + Math.round(circle(5));
