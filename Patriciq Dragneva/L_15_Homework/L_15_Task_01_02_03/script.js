/* global document */

(function () {
    "use strict";


    function display(text) {
        var output = document.createElement("pre");
        output.textContent = text;
        document.body.appendChild(output);
    }

    

    /* FIRST TASK FROM LESSON 15 */
    function reverse(word) {
        var result;
        var i;
        for (i = 0; i < word.length; i++) {
            result = word.split("").reverse().join("");
        }
        return result;
    }
    display("What is the reverse result of\nthe word \'hello\'?\nAnswer:\t\t\t\t\t" + reverse("hello"));


    

    /* SECOND TASK FROM LESSON 15 */
    function reverseWords(text) {
        var result = [],
            i;
        var words = text.split(" ");

        for (i = 0; i < words.length; i++) {
            result.push(reverse(words[i]));
        }
        return result.join(" ");
    }
    var sentence = "The quick brown fox jumps over the lazy dog";
    display("What is the reverse result of\nthe sentence\n\"The quick brown fox jumps over\nthe lazy dog\"\nAnswer:\t\t\t\t\t" + reverseWords(sentence));


    
    
   /* THIRD TASK FROM LESSON 15 */
    function obfuscate(text) {
        var result, i;
        if (text.length <= 4) {
            throw new Error("given text is too short");
        } else if (text.length > 4 && text.length < 8) {
            result = "";
            for (i = 0; i < text.length; i++) {
                if (i === 0 || i == text.length - 1) {
                    result = result + text.charAt(i);
                } else {
                    result = result + "*";
                }
            }
        } else {
            result = "";
            for (i = 0; i < text.length; i++) {
                if (i === 0 || (text.length - i) < 5) {
                    result = result + text.charAt(i);
                } else {
                    result = result + "*";
                }
            }
        }
        return result;
    }
    try {
        obfuscate("asd");
    } catch (error) {
        display("What happens when you enter \'secret\':");
        display(obfuscate("secret"));
        display("What happens when you enter \'0123456789\':");
        display(obfuscate("0123456789"));
        display("What happens when you enter \'asd\':");
        display(error);
    }
   
})();