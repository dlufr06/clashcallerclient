/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//CARL

function createWar(nrOfBases) {
    var base = "http://10.97.72.5:8080";
    var resource = "/api/cc/createwar/";
    $.post(base+resource+nrOfBases).success(function(data){
        console.log(data);
        joinWar(data.warid);
    });
}