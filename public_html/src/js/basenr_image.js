/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function basenrImage(nr){
    if(typeof nr === 'number'){
        if(nr > 99 && nr < 1000){ //mellan 100-999
            var ental = (nr%100)%10; // 999 -> 99 - >9
            console.log(ental);
            var tiotal = (nr%10)%10; //123 -> 12   -> 2
            var hundratal = Math.floor(nr/100);
            return nr2Img(hundratal)+nr2Img(tiotal)+nr2Img(ental);
        }
       else if(nr >= 10){ //mellan 10-99
            var ental = nr%10;
            var tiotal = Math.floor(nr/10);
            return nr2Img(tiotal)+nr2Img(ental);
        }
        else if(nr >= 0){ //mellan 0-9
            return nr2Img(nr);
        }
    }
    
    function nr2Img(nr){
        var o = {nr:nr};
        return Mustache.render("<img src='images/{{nr}}.png' />",o); 
    }

    //
}

