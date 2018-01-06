/*globals document, window, $ */
(function () {
  "use strict";

  var kids = [];
    
    var kid = "<div class=\"kid col-md-6 mb-5\">\n" +
"          <div class=\"card\">\n" +
"            <div class=\"card-heading bg-info text-white\">\n" +
"              <h3 class=\"m-3\">%NAME%</h3>\n" +
"            </div>\n" +
"            <div class=\"card-body row\">\n" +
"              <div class=\"col-lg-4\">\n" +
"                <img class=\"img-fluid\" src=\"img/susan.jpg\">\n" +
"              </div>\n" +
"              <div class=\"col-lg-8\">\n" +
"                <ul class=\"my-4\">\n" +
"                  <li><h5>Години<span>%NAME%</span></h5></li>\n" +
"                  <li><h5>Любим цвят: <span>%COLOR%</span></h5></li>\n" +
"                  <li><h5>Любима игра: <span>%GAME%</span></h5></li>\n" +
"                  <li><h5>Любима храна: <span>%FOOD%</span></h5></li>\n" +
"                </ul>\n" +
"                <button type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#kidModal\">Още</button>\n" +
"              </div>\n" +
"            </div>\n" +
"          </div>\n" +
"        </div>\n" +
"      </div>\n";

  var TEMPLATEFORABOUT = "\n" +
"<h1 class=\"my-3\">About page</h1>\n" +
"\n" +
"<p>\n" +
"  Aliquip philosophari ita offendit a excepteur nulla dolore ab multos. Sed quae\n" +
"  in esse, e malis officia quamquam. Enim ingeniis ad graviterque. Dolore est in\n" +
"  irure senserit. Ea varias proident voluptatibus, ex enim quibusdam ullamco aut\n" +
"  si summis aliquip efflorescere hic varias tempor te minim quorum. Doctrina do\n" +
"  aliqua expetendis. Quid est mandaremus, do hic ipsum dolore anim.\n" +
"</p>\n" +
"\n" +
"<p>\n" +
"  Hic enim distinguantur an mentitum ea dolor, se iis coniunctione a ad ne\n" +
"  familiaritatem. Senserit fidelissimae de ullamco, fore si ea velit quibusdam ea\n" +
"  admodum concursionibus nam nescius ad vidisse est arbitror ubi dolore occaecat\n" +
"  exercitation, sed esse nostrud, eram e expetendis de malis, eu illum probant\n" +
"  firmissimum. Eiusmod cillum senserit ingeniis. Ex arbitror e cernantur, ipsum\n" +
"  singulis praetermissum e incididunt quem probant mentitum, cillum quibusdam hic\n" +
"  probant o ab aute culpa noster ullamco qui hic probant fidelissimae, iis ita\n" +
"  exquisitaque, do si malis mandaremus. Laborum sint laboris, malis excepteur ubi\n" +
"  distinguantur qui mandaremus et esse eu quorum commodo incurreret hic e in malis\n" +
"  tempor, vidisse enim cillum quo velit iis amet o admodum do esse, se cupidatat\n" +
"  domesticarum. Iudicem domesticarum ad appellat se minim mandaremus de illum\n" +
"  nulla.\n" +
"</p>\n" +
"\n";
  
  
  var TEMPLATEFORCONTACTS = "<h1 class=\"my-3\">Contacts</h1>\n" +
"\n" +
"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.3734866714367!2d-76.98179068456757!3d38.869695979575035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9b09a87e781%3A0x32e59cfd23e94ac0!2s1726+R+St+SE%2C+Washington%2C+DC+20020%2C+USA!5e0!3m2!1sen!2sbg!4v1498037059952\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n" +
"\n"

  $.getJSON("kids.json", function (data) {
    kids = data;
      
    function displayKids() {
    kids.forEach(function (kid) {
      kid.html = TEMPLATE
        .replace("%NAME%", kid.name)
        .replace("%AGE%", kid.age)
        .replace("%COLOR%", kid.color)
        .replace("%GAME%", kid.game)
        .replace("%FOOD%", kid.food)
        .replace("%IMAGE%", kid.image);
    });
    displayKids(kids);    
    var collection = $(".kid");
    collection.empty();

    kids.forEach(function(kid) {
      collection.append(kid.html);
    });
  }
      
  
      document.sortByname.addEventListener("click", function sort(){
          var newList = function sum(a,b) {
          return a.name - b.name;
      }
          return newList;}
         displayKids(newList);
                                           
                                          
      
      document.sortByage.addEventListener("click", function sort(){
          var newList = function sort(a,b) {
          return a.age - b.age;
      }
          return newList;
         
      });
                                          displayKids(newList);
      
      
})();
