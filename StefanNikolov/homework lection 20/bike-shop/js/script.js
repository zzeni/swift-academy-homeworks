/* globals $, document */
(function () {
    "use strict";

    var BIKE_HTML = "\n" +
        "  <div class=\"col-lg-4 col-md-6 mb-4\">\n" +
        "    <div class=\"card h-100\">\n" +
        "      <a href=\"#\"><img class=\"card-img-top\" src=\"img/bikes/%IMG_ID%.jpg\" alt=\"\"></a>\n" +
        "  <div class=\"card-body\">\n" +
        "    <h4 class=\"card-title\">\n" +
        "      <a href=\"#\">%TITLE%</a>\n" +
        "  </h4>\n" +
        "  <h5>$%PRICE%</h5>\n" +
        "  <p class=\"card-text\">%DESCRIPTION%</p>\n" +
        "  </div>\n" +
        "  <div class=\"card-footer\">\n" +
        "    <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;</small>\n" +
        "      </div>\n" +
        "  </div>\n" +
        "  </div>\n";

    var bikes = [
        {
            title: "Balkan",
            description: "The best bike ever",
            price: 1200,
            imgID: 1,
            category: "city"
    },
        {
            title: "Her bike",
            description: "Lorem mentitum illustriora est ipsum a o ipsum senserit.",
            price: 300,
            imgID: 2,
            category: "city"
    },
        {
            title: "Hardcore",
            description: "Ex ab firmissimum, officia minim voluptate voluptate.",
            price: 300,
            imgID: 3,
            category: "MTB"
    },
        {
            title: "Fantastic",
            description: "Ex a cohaerescant ex e aut quis mandaremus.",
            price: 780,
            imgID: 4,
            category: "other"
    },
        {
            title: "Drag city",
            description: "Ex a cohaerescant ex e aut quis mandaremus.",
            price: 450,
            imgID: 5,
            category: "cross"
    },
        {
            title: "Special",
            description: "Ex a cohaerescant ex e aut quis mandaremus.",
            price: 950,
            imgID: 6,
            category: "cross"
    },
  ];

    var container = $('#items-container');

    displayBikes(bikes);

    function Bike(title, description, price, imgID, category) {
        this.title = title,
            this.description = description,
            this.price = price,
            this.imgID = imgID,
            this.category = category
    }
    
     var kolelo = new Bike("Nai modernoto", "Ex a cohaerescant ex e aut quis mandaremus.", 8500, 7, "all terrain");

    Bike.prototype.toHTML = function () {
        return "\n" +
        "  <div class=\"col-lg-6 col-md-6 mb-6 mx-auto\">\n" +
        "    <div class=\"card h-100\">\n" +
        "      <a href=\"#\"><img class=\"card-img-top\" src=\"img/bikes/" + this.imgID + ".jpg\" alt=\"\"></a>\n" +
        "  <div class=\"card-body\">\n" +
        "    <h4 class=\"card-title\">\n" +
        "<h1>TOP OFFER</h1>"+
        "      <a href=\"#\">" + this.title + "</a>\n" +
        "  </h4>\n" +
        "  <h5>$" + this.price + "</h5>\n" +
        "  <p class=\"card-text\">"+ this.description +"</p>\n" +
        "  </div>\n" +
        "  <div class=\"card-footer\">\n" +
        "    <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;</small>\n" +
        "      </div>\n" +
        "  </div>\n" +
        "  </div>\n";
      }
    
   
    
//    console.log(kolelo);
    
   document.querySelector(".newDiv").innerHTML =kolelo.toHTML();
    

    function displayBikes(bikesList) {
        container.empty();

        bikesList.forEach(function (bike) {
            var bikeHtml = BIKE_HTML
                .replace("%TITLE%", bike.title)
                .replace("%IMG_ID%", bike.imgID)
                .replace("%DESCRIPTION%", bike.description)
                .replace("%PRICE%", bike.price)

            container.append(bikeHtml);
        });
    }

    $(".filters .city").on("click", function () {
        var filtered = bikes.filter(function (bike) {
            return bike.category === "city";
        });

        displayBikes(filtered);
    });

    $(".filters .all").on("click", function () {
        displayBikes(bikes);
    });

    //    co/nsole.log($('.container').html());


})();
