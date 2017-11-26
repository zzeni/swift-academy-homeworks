/* global document */

(function () {
    "use strict"

    let display = text => {
        let output = document.createElement("p")
        output.textContent = text
        document.body.appendChild(output)
    }


    //Функция vowelCounter()
    const text = "Напишете функция, която да преброява гласните букви в даден текст (а, ъ, о, у, е, и, ю, я)"

    const isVowel = el => ["а", "ъ", "о", "у", "е", "и", "ю", "я"].includes(el)

    const vowelCounter = text => text.split("").filter(isVowel).length

    display("Броят на гласните букви в текста \"" + text + "\" е: " + vowelCounter(text))


    //Функция matrix()
    const matrix = [
    [2, 4, 5, 7],
    [3, 14, 2, 4],
    [8, 7, 15, 1],
    [3, 2, 0, 9]
]

    const sum = (total, el) => total + el

    const mainDiagonal = matrix => matrix.map((el, i) => el[i]).reduce(sum, 0)

    const secondDiagonal = matrix => matrix.map((el, i) => el[el.length - i - 1]).reduce(sum, 0)

    const sumDiagonals = matrix => mainDiagonal(matrix) + secondDiagonal(matrix)


    if (matrix.length === matrix[0].length) {
        display("Сборът от сумата на диагоналите е: " + sumDiagonals(matrix))
    } else {
        display("Матрицата не е двумерна!")
    }


    //Функция sort()
    const list = [3, 45, 2, 6, 18, 5]

    const sort = array => array.sort((a, b) => a - b)

    display("Сортираният списък е: " + sort(list))


    //Функцията howOldAmI()
    const today = new Date()

    const diffDays = date => today.getDate() - date.split("-")[0]

    const diffMonths = date => (today.getMonth() + 1) - date.split("-")[1]

    const diffYears = date => today.getFullYear() - date.split("-")[2]

    const howOldAmI = date =>
        diffMonths(date) > 0 ? diffYears(date) :
        diffMonths(date) < 0 ? diffYears(date) - 1 :
        diffMonths(date) === 0 && diffDays(date) >= 0 ? diffYears(date) :
        diffYears(date) - 1

    display("Вие сте на " + howOldAmI("24-12-1992") + " години")


    //Функция capitalizer()
    const sentence = "The quick brown fox jumps over the lazy dog"

    const capitalize = str => str.toLowerCase().split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ")

    display(capitalize(sentence))


    //Функция wordCounter()
    const sentence2 = "The quick brown fox jumps over the lazy dog"

    const wordCounter = str => str.split(" ").length

    display("Броят на думите в изречението \"" + sentence2 + "\" са: " + wordCounter(sentence2))


    //Функция cartSum()
    const shoppingCart = [
        {
            name: "product 1",
            quantity: 2,
            price: 2.95
    },
        {
            name: "product 1",
            quantity: 3,
            price: 1.20
    },
        {
            name: "product 3",
            quantity: 1,
            price: 4.20
    }
]

    const totalCart = product => product.price * product.quantity

    const total = list => list.map(totalCart).reduce(sum, 0)

    display("Вие дължите: " + total(shoppingCart).toFixed(2) + "лв")

})()
