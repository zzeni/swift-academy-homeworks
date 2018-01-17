/* global document */


function convert(red,green,blue) {  
    
     var result1 = red.toString(16);
     var result2 = green.toString(16);
     var result3 = blue.toString(16);
     var result;
     result = result1 + result2 + result3;
     return result;
}

var result = convert(255,192,253);
    
var output = document.createElement("p");
output.textContent = "The result as RGB is:\t " + "#" + result + ".";
document.body.appendChild(output);