/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    var warid = getUrlParameter("id");
    //hämta data
    var url = "http://10.97.72.5:8080/api/cc/war/"+warid;
    $.getJSON(url, function (data) {
        //console.log(data);
        var table = "<table class='table table-striped'>";
        $.each(data, function (key, value) {
            var output = {
                warid: warid,
                nr: value.basenr, //SIFFRAN
                stars: 1
            };
            var row = "<tr>";
            row += "<td>" + basenrImage(value.basenr) + "</td>";
            var img_stars = "<td>";
            while (output.stars <= value.stars) {
                img_stars += Mustache.render("<img src='images/star.png' alt='star' onclick='updateWar({{warid}},{{nr}},{{stars}});' />",output);
                output.stars++;  
            }
            while (output.stars <= 3) {
                img_stars += Mustache.render("<img src='images/star.png' alt='star' onclick='updateWar({{warid}},{{nr}},{{stars}});' class='transparant' />",output);
                output.stars++;
            }
            img_stars += "<td/>";
            row += img_stars + "</tr>";
            table += row;
        });
        table += "</table>";
        $("#war").append(table);

    });

});


