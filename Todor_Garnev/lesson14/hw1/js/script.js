/* global document */

let display = text => {
    let output = document.createElement("pre")
    output.textContent = text
    document.body.appendChild(output)
}


//Функция calc()
let calc = x => {
    return x % 2 ? "odd" : "even"
}

let x = 4

display("Резултатът от функцията е: " + calc(x))


//Функция isMember()
let isMember = (list, name) => {
    return list.includes(name) ? "да" : "не"
}

let list = ["Ivan", "Pesho", "Mimi"],
    name = "Mimi"


display("Съдържа ли се " + name + " в списъка: " +
    isMember(list, name))
