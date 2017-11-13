function convert() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var resultElement = document.getElementById("result");
    var result;
    var redArr = [], greenArr = [], blueArr = [];
    var hexPositionArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    redArr = getArray(red);
    greenArr = getArray(green);
    blueArr = getArray(blue);
    result = "#" + getHex(hexPositionArr, redArr) + getHex(hexPositionArr, greenArr) + getHex(hexPositionArr, blueArr);
    resultElement.value= result;

}

/**
 * Returns array of posotions for the color decimal number.
 * Divides the decimal color by 16 and keeps the result in temporary variable.
 * Whilst divides the decimal color by 16 and keeps the remainder in array.
 * Algorithm repeats until remainder
 */
function getArray(decimalColor) {
    var temp, remainder, remainderArr = [];
    if (decimalColor === 0) {
        remainderArr.push(0);
        remainderArr.push(0);
    } else {
        do {
            temp = Math.floor(decimalColor / 16);
            remainder = decimalColor % 16;
            decimalColor = temp;
            remainderArr.push(remainder);
        } while (temp % 16 > 0);
    }


    return remainderArr.reverse();
}

/**
 * Loops color array and returns the hex representative by position
 */
function getHex(hexPositionArr, colorArr) {
    var idx;
    var hex = "";
    for (idx = 0; idx < colorArr.length; idx++) {
        hex = hex + hexPositionArr[colorArr[idx]];
    }

    return hex;
}
