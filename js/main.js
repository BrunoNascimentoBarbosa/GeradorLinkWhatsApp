
function capturar(e) {
    e.preventDefault();
    telefone = document.getElementById('telefone').value;
    msg = document.getElementById('exampleFormControlTextarea1').value;
    document.getElementById('link-what').style="display:block";
    
    msg_whats = msg.replace(/ /g, "%20");
    var NewLink = "https://api.whatsapp.com/send?phone=";
    var linkGerado = NewLink + "55"+ telefone + "&text=" + msg_whats ;
    

    console.log(telefone + msg + NewLink);
  
    document.getElementById('valorDigitado').value = linkGerado;

    document.getElementById('form_01').style="display:none";
     document.getElementById('bnt').style="display:none";
   //document.getElementById('valorDigitado').innerHTML = linkGerado;

}

function copiarLink() {
    let copiar = document.getElementById("valorDigitado");
    copiar.select();
    copiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiar.value);
     
 }
