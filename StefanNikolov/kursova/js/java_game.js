/*globals document, $*/
//(function () {
//    "use strict";

  
//var classList = $('.sexyDiv').attr('class').split(/\s+/);
//$.each(classList, function(index, item) {
//    if (item === 'bb') {
//    }
//});

//var currDiv = $(".sexyDiv");
$(".moveBottom").on("click", function(){
    var currDiv = $(".sexyDiv");
    if (currDiv.hasClass("bb")) {
  currDiv.classList.add("error");
} else {
var kletka = currDiv.attr("data-cell") *1;  
//    console.log(kletka);
var sledvashtaKletka = $("div[data-cell='" + (kletka + 6) + "']");
//console.log(sledvashtaKletka);
currDiv.removeClass("sexyDiv");
sledvashtaKletka.addClass("sexyDiv");
}  
});
    
$(".moveRight").on("click", function(){
    var currDiv = $(".sexyDiv");
    if (currDiv.hasClass("rb")) {
  currDiv.classList.add("error");
} else {
var kletka = currDiv.attr("data-cell") *1;  
//    console.log(kletka);
var sledvashtaKletka = $("div[data-cell='" + (kletka + 1) + "']");
//console.log(sledvashtaKletka);
currDiv.removeClass("sexyDiv");
sledvashtaKletka.addClass("sexyDiv");
}  
});

$(".moveLeft").on("click", function(){
    var currDiv = $(".sexyDiv");
    if (currDiv.hasClass("lb")) {
  currDiv.classList.add("error");
} else {
var kletka = currDiv.attr("data-cell") *1;  
//    console.log(kletka);
var sledvashtaKletka = $("div[data-cell='" + (kletka - 1) + "']");
//console.log(sledvashtaKletka);
currDiv.removeClass("sexyDiv");
sledvashtaKletka.addClass("sexyDiv");
}  
});
    
$(".moveTop").on("click", function(){
    var currDiv = $(".sexyDiv");
    if (currDiv.hasClass("tb")) {
  currDiv.classList.add("error");
} else {
var kletka = currDiv.attr("data-cell") *1;  
//    console.log(kletka);
var sledvashtaKletka = $("div[data-cell='" + (kletka - 6) + "']");
//console.log(sledvashtaKletka);
currDiv.removeClass("sexyDiv");
sledvashtaKletka.addClass("sexyDiv");
}  
});
    
    







//})();
