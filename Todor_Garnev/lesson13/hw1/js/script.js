/* global document */

let display = text => {
    let output = document.createElement("pre")
    output.textContent = text
    document.body.appendChild(output)
}


//Периметър на кръг
let perimeter = r => {
    return Math.round(2 * r * Math.PI)
}

let r = 10

display("Периметърът на кръг с радиус " + r + " е: " + perimeter(r))


//Функция area()
let area = (a, b, c) => {
    return (a * b) + (a * (c - b) / 2)
}
let a = 5,
    b = 6,
    c = 7

display("Лицето на фигурата е: " + area(a, b, c))


//Функция calc()
let calc = x => {
    if (x % 2 === 0) {
        return x * x
    } else {
        return x * x * x
    }
}

let x = 5

display("Резултатът от функцията calc(), с входен параметър " + x + ", е: " + calc(x))
