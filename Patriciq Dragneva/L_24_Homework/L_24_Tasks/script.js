/* global document */

(function () {
    "use strict";
    
    
    /* GLOBAL VARIABLES */
    var i;
    var total = 0;
    var total2 = 0;
    var total3 = 0;
    var shoppingCart = [
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
    ];
    var stringExample = "Напишете функция, която да преброява гласните букви в даден текст (а, ъ, о, у, е, и, ю, я)";
    var text = "The quick brown fox jumps over the lazy dog";
    var listOfNumbers = [3, 45, 2, 6, 18, 5];
    var vowelString = 'аъоуеиюя';
    
    

    /* THE COMMON DISPLAY FUNCTION */
    function display(text) {
        var output = document.createElement("pre");
        output.textContent = text;
        document.body.appendChild(output);
    }

    
    
    /* TASK 01 FROM LESSON 24 */
    // This function accepts a shopping cart list and returns the overall quantity of all the items in it
    function quantity() {
        for (i = 0; i < shoppingCart.length; i++) {
            var item = shoppingCart[i];
            total = total + item.quantity;
        }
        return total;
    }
    display('The overall quantity of all the\nitems in the shoppingCart is:\t\t\t' + quantity(shoppingCart)); // should return 6
    
    
    
    
    /* TASK 01 FROM LESSON 24 */
    // This function accepts a shopping cart list and returns the the total price of all the items in it
    function totalPrice() {
        for (i = 0; i < shoppingCart.length; i++) {
            for (i = 0; i < shoppingCart.length; i++) {
                var item = shoppingCart[i];
                total2 = total2 + item.price;
            }
        }
        return Math.round(total2 * 100) / 100;
    }
    display('The total price of all the items\nin the shopping cart is:\t\t\t' + totalPrice(shoppingCart)); // should return 8.35




    /* TASK 02 FROM LESSON 24 */
    //Напишете функция, която смята колко думи има в даден текст.  
    function totalNumberOfWords() {
        var splittedText = text.split(" ");
        var result = splittedText.length;
        return result;
    }
    display('The number of all words\nin the sentence is:\t\t\t\t' + totalNumberOfWords(text)); // should return 9




    /* TASK 03 FROM LESSON 24 */
    //Напишете функция, която да прави всяка дума от един текст да започва с главна буква.  
    function textToUpperCase() {
        var newText = text.toLowerCase().split(" ");
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        return newText.join(' ');
    }
    display('Each word is capitalized:\t' + textToUpperCase(text)); // should return 'The Quick Brown Fox Jumps Over The Lazy Dog'




    /* TASK 06 FROM LESSON 24 */
    //Напишете функция, която смята колко думи има в даден текст.   
    function vowel_count() {
        for (i = 0; i < stringExample.length; i++) {
            if (vowelString.indexOf(stringExample[i]) !== -1) {
                total3 += 1;
            }
        }
        return total3;
    }
    display("The total number of vowels\nin the sentence is:\t\t\t\t" + vowel_count(stringExample)); // should return 31




    /* TASK 07 FROM LESSON 24 */
    //Напишете функция sort(list), която да сортира списък от числа по големина.
    function sortList(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }
    display("The sorted list is:\t\t\t\t" + "[" + listOfNumbers.sort(sortList) + "]"); // should return [2, 3, 5, 6, 18, 45]




})();
