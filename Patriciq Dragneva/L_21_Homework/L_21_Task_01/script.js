/* global $ */

(function () {
    "use strict";
    var mydata;
    var promise = $.getJSON('https://api.github.com/users/coolstreamcool', function (data) {

        mydata = data;
        console.log("My data from Github is:", data);
        console.log(promise);

        $('#td1').append('<ul class="list-group">' +
            '                 <li class="list-group-item list-group-item-secondary">This is my login name:\t\t\t</li>' +
            '                 <li class="list-group-item list-group-item-dark">This is my id:\t\t\t</li>' +
            '                 <li class="list-group-item list-group-item-secondary">This is my avatar:\t\t\t</li>' +
            '                 <li class="list-group-item list-group-item-dark">This is my html_url:\t\t\t</li>' +
            '                 <li class="list-group-item list-group-item-secondary">These are my followers:\t\t\t</li>' +
            '                 <li class="list-group-item list-group-item-dark">My profile was created at:\t\t\t</li>' +
            '                 <li class="list-group-item list-group-item-secondary">My profile was updated at:\t\t\t</li>' +
            '             </ul>');
        $('#td2').append('<ul class="list-group">' +
            '                 <li class="list-group-item list-group-item-secondary">' + data.login + '</li>' +
            '                 <li class="list-group-item list-group-item-dark">' + data.id + '</li>' +
            '                 <li class="list-group-item list-group-item-secondary">' + '<img id = "my_avatar_image" src = "' + data.avatar_url + '">' + '</li>' +
            '                 <li class="list-group-item list-group-item-dark">' + data.html_url + '</li>' +
            '                 <li class="list-group-item list-group-item-secondary">' + data.followers_url + '</li>' +
            '                 <li class="list-group-item list-group-item-dark">' + data.created_at + '</li>' +
            '                 <li class="list-group-item list-group-item-secondary">' + data.updated_at + '</li>' +
            '             </ul>');

    });

})();
