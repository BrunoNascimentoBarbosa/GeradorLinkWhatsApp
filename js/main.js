
 
//https://api.whatsapp.com/send?phone=5521974561726&text=$mgs_whats
 
function capturar(e) {
    e.preventDefault();
    capturando = document.getElementById('telefone').value;
 
    msg = document.getElementById('exampleFormControlTextarea1').value;

    document.getElementById('link-what').style="display:block";

    

    var NewLink = "https://api.whatsapp.com/send?phone=";
    var linkGerado = NewLink + capturando + msg ;
    console.log(capturando + msg + NewLink);
    document.getElementById('valorDigitado').innerHTML = linkGerado;


}

/*
form.addEventListener('submit', event => {
    event.preventDefault()
      
    const telefoneDig = telefone.value
    console.log(telefoneDig)
      

      
})*/