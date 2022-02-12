
 


/*
 https://api.whatsapp.com/send?phone=5521974561726&text=$mgs_whats
})*/

function capturar(e) {
    e.preventDefault();
        telefone = document.getElementById('telefone').value;
 
    msg = document.getElementById('exampleFormControlTextarea1').value;

    document.getElementById('link-what').style="display:block";

    msg_whats = msg.replace(/ /g, "%20");

    var NewLink = "https://api.whatsapp.com/send?phone=";
    var linkGerado = NewLink + "55"+ telefone + "&text=" + msg_whats ;
    console.log(telefone + msg + NewLink);
     

    document.getElementById('valorDigitado').innerHTML = linkGerado;


}

