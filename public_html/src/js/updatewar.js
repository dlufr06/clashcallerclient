/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function updateWar(warid,basenr,stars){
    var fight = {
        warid:warid,
        basenr:basenr,
        stars:stars
    };
    var url = Mustache.render("http://10.97.72.5:8080/api/cc/{{warid}}/{{basenr}}/{{stars}}",fight);
      $.ajax({
                url:url,
                type:"PUT",
                success: function (data, textStatus, jqXHR) {
                        location.reload();
                    }
                });
    
}

