/*globals document, */
(function () {
        "use strict";

        // задача 1 (4т.)
        // Сортирайте следния списък от числа във възходящ ред:
        var arr = [2, 5, 8, 4, 1, 12];

        function solve(arr) {
            var sorted = arr.sort(function (a, b) {
                return a - b;
            });
            return sorted;
        }

        console.log(solve(arr)); // [2, 3, 5, 6, 18, 45]   

        //...

        // задача 2 (4т.)
        // Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
        var text = "The quick brown fox jumps over the lazy dog";

        function filteredArray(text) {
            var result = text.split(" ");
            var filtered = result.filter(function (word) {
                return word.length > 4;
            });
            return filtered;
        }

        filteredArray(text);

        // задача 3 (5т.)
        // Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

        var setIntervals = setInterval(function () {
            var paragraph = document.createElement("p");
            paragraph.textContent = "repetition is fun";
            document.body.appendChild(paragraph);
        }, 1000);
    }

    setInteravals();


    // задача 4 (6т.)
    // Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)


// задача 5 (6т.)
// Напишете функция, която да сортира следния списък от обекти по полето `price`:
var items = [
    {
        id: 1,
        title: "Item 1",
        price: 4.3
  },
    {
        id: 2,
        title: "Item 2",
        price: 2.0
  },
    {
        id: 3,
        title: "Item 3",
        price: 6.5
  },
    {
        id: 4,
        title: "Item 4",
        price: 1.5
  }
];

console.log("sorted:", items.sort(sortingFunction).map(function (x) {
    return x;
}));

function sortingFunction(a, b) {
    return a.price - b.price;
}

})();