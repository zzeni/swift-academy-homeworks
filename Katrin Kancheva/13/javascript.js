function area(a, b, c) {
    var result = ((a * b) + (a * (c - b) / 2));
    return result;

}

var output = document.createElement("pre");
output.textContent = "The first result is:" + area(10, 6, 10);
document.body.appendChild(output);


var output = document.createElement("pre");
output.textContent = "The second result is:" + area(2, 1, 3);
document.body.appendChild(output);


//Second Lesson

function evenOrOdd(x) {
    if (x % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

var output = document.createElement("pre");
output.textContent = "The numer 3 is " + evenOrOdd(3) + "!";
document.body.appendChild(output);

