/* global document */

function convert(colors) {
    var hex = colors.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + convert(r) + convert(g) + convert(b);
}

document.getElementById("ex1").innerHTML = "This color tranasformed from RGB to Hex format is: " + rgbToHex(255, 192, 253);
