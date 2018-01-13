/*globals document, $ */


(function () {
    "use strict";

    var kids = [];

    var TEMPLATE = '   <div class="kid col-md-6 mb-5">  ' +
        '             <div class="card">  ' +
        '               <div class="card-heading bg-info text-white">  ' +
        '                 <h3 class="m-3">%NAME%</h3>  ' +
        '               </div>  ' +
        '               <div class="card-body row">  ' +
        '                 <div class="col-lg-4">  ' +
        '                   <img class="img-fluid" src="%IMAGE-URL%">  ' +
        '                 </div>  ' +
        '                 <div class="col-lg-8">  ' +
        '                   <ul class="my-4">  ' +
        '                     <li><h5>%AGE%</h5></li>  ' +
        '                     <li><h5>%COLOR%</h5></li>  ' +
        '                     <li><h5>%GAME%</h5></li>  ' +
        '                     <li><h5>%FAV_FOOD%</h5></li>  ' +
        '                   </ul>  ' +
        '                   <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>  ' +
        '                 </div>  ' +
        '               </div>  ' +
        '             </div>  ' +
        '          </div>  ';

    $.getJSON("js/kids.json", function (data) {
        kids = data;
        kids.forEach(function (kid) {
            kid.html = TEMPLATE
                .replace("%NAME%", kid.name)
                .replace("%AGE%", kid.age)
                .replace("%COLOR%", kid.color)
                .replace("%GAME%", kid.game)
                .replace("%FAV_FOOD%", kid.food)
                .replace("%IMAGE-URL%", kid.image);
        });

        displayKids(kids);
    });


    $('#about').load("html/_about.html");
    $('#contact').load("html/_contact.html");


    document.filters.textFilter.addEventListener("keyup", function () {
        var keywords = this.value;
        var filtered = kids.filter(function (kid) {
            var regEx = new RegExp(keywords, "i");
            return kid.name.match(regEx) || kid.game.match(regEx) || kid.food.match(regEx);
        });
        displayKids(filtered);
    });


    document.filters.button1.addEventListener("click", function () {
        var key = this.value.split("-")[0],
            direction = this.value.split("-")[1];
        key = {
            name: "name",
        }[key] || key;
        var sign = direction === "asc" ? 1 : -1;
        var sorted = kids.sort(function (kidA, kidB) {
            return compare(kidA, kidB, key) * sign;
        });
        displayKids(sorted);
    });


    document.filters.button2.addEventListener("click", function () {
        var key = this.value.split("-")[0],
            direction = this.value.split("-")[1];
        key = {
            name: "name",
        }[key] || key;
        var sign = direction === "asc" ? 1 : -1;
        var sorted = kids.sort(function (kidA, kidB) {
            return compare(kidA, kidB, key) * sign;
        });
        displayKids(sorted);
    });


    document.filters.button3.addEventListener("click", function () {
        var key = this.value.split("-")[0],
            direction = this.value.split("-")[1];
        key = {
            years: "age",
        }[key] || key;
        var sign = direction === "asc" ? 1 : -1;
        var sorted = kids.sort(function (kidA, kidB) {
            return compare(kidA, kidB, key) * sign;
        });
        displayKids(sorted);
    });


    document.filters.button4.addEventListener("click", function () {
        var key = this.value.split("-")[0],
            direction = this.value.split("-")[1];
        key = {
            years: "age",
        }[key] || key;
        var sign = direction === "asc" ? 1 : -1;
        var sorted = kids.sort(function (kidA, kidB) {
            return compare(kidA, kidB, key) * sign;
        });
        displayKids(sorted);
    });


    document.filters.gameFilter.addEventListener("change", function () {
        var kidGame = this.value;
        var filtered = kids.filter(function (kid) {
            return kid.game.indexOf(kidGame) === 0;
        });
        displayKids(filtered);
    });



    function displayKids(list) {
        var collection = $("#kids");
        collection.empty();
        list.forEach(function (kid) {
            collection.append(kid.html);
        });
    }



    function compare(obj1, obj2, key) {
        if (obj1[key] === obj2[key]) {
            return 0;
        }
        if (obj1[key] > obj2[key]) {
            return 1;
        }
        return -1;
    }



})();
