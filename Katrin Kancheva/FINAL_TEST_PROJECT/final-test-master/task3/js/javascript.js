/*globals document, window, $ */
(function () {
    "use strict";
    var kids = [];

    var TEMPLATE = "<div class=\"kid col-md-6 mb-5\">\n" +
        "                    <div class=\"card\">\n" +
        "                        <div class=\"card-heading bg-info text-white\">\n" +
        "                            <h3 class=\"m-3\">%NAME%</h3>\n" +
        "                        </div>\n" +
        "                        <div class=\"card-body row\">\n" +
        "                            <div class=\"col-lg-4\">\n" +
        "                                <img class=\"img-fluid\" src=\"img/david.png\">\n" +
        "                            </div>\n" +
        "                            <div class=\"col-lg-8\">\n" +
        "                                <ul class=\"my-4\">\n" +
        "                                    <li>\n" +
        "                                        <h5>Години:<span>%AGE%</span></h5>\n" +
        "                                    </li>\n" +
        "                                    <li>\n" +
        "                                        <h5>Любим цвят: <span>%COLOR%</span></h5>\n" +
        "                                    </li>\n" +
        "                                    <li>\n" +
        "                                        <h5>Любима игра: <span>%GAME%</span></h5>\n" +
        "                                    </li>\n" +
        "                                    <li>\n" +
        "                                        <h5>Любима храна: <span>%FOOD%</span></h5>\n" +
        "                                    </li>\n" +
        "                                </ul>\n" +
        "                                <button type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#kidModal\">Още</button>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n";
    //Показване на данните от json файла
    $.getJSON("js/kids.json", function (data) {
        kids = data;
        kids.forEach(function (kid) {
            kid.html = TEMPLATE
                .replace("%NAME%", kid.name)
                .replace("%AGE%", kid.age)
                .replace("%COLOR%", kid.color)
                .replace("%GAME%", kid.game)
                .replace("%FOOD%", kid.food)
                .replace("img/david.png", kid.image);
        });
        display(kids);
    });

    const ORDER_ASC = "asc";
    const ORDER_DESC = "desc";

    function getSortOrder(element) {
        if (ORDER_DESC == element.data("sortOrder")) {
            return ORDER_DESC;
        } else {
            return ORDER_ASC;
        }
    }

    function isSortingAsc(element) {
        return getSortOrder(element) == ORDER_ASC;
    }

    function toggleSortOrder(element) {
        if (isSortingAsc(element)) {
            element.data("sortOrder", ORDER_DESC);
        } else {
            element.data("sortOrder", ORDER_ASC);
        }
    }


    // Sort by age
    $("[name=sortByAge]").on("click", function (event) {
        var sortingButtonElement = $(event.target);

        if (isSortingAsc(sortingButtonElement)) {
            kids.sort(function (a, b) {
                return a.age - b.age;
            });
        } else {
            kids.sort(function (a, b) {
                return b.age - a.age;
            });
        }

        display(kids);
        toggleSortOrder(sortingButtonElement);
    });


    function stringCompare(a, b) {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    }

    //Sort by name 
    $("[name=sortByName]").on("click", function (event) {
        var sortingButtonElement = $(event.target);
        
        if (isSortingAsc(sortingButtonElement)) {
            // sort ASC
            kids.sort(function (a, b) {
                return stringCompare(a, b);
            });
        } else {
            // sort DESC
            kids.sort(function (a, b) {
                return stringCompare(b, a);
            });
        }

        display(kids);
        toggleSortOrder(sortingButtonElement);
    });



    function display(list) {
        var kidsElement = $("#kids");
        kidsElement.empty();

        list.forEach(function (kid) {
            kidsElement.append(kid.html);
        });
    }
    //Динамично зареждане на About и Contact страниците от съответните partials 
    $('#about').load("html/_about.html");
    $('#contact').load("html/_contact.html");


    //Търсене по текст


    //Сортиране по име или по възраст: (10т.)

    //Филтриране по любима игра: (10т.)
})();