
function cadastro() {
   
    document.getElementById("mensagem").innerHTML = ""
    document.getElementById("sucesso").innerHTML = ""
    document.getElementsByClassName("sucesso").innerHTML = ""
    
    let email_do_usuario = document.getElementById("email").value
    let senha = document.getElementById("password").value 
    let confirmacao = document.getElementById("confirmacao").value
    let teste = false
    if (email_do_usuario == "") {
       document.getElementById("mensagem").innerHTML = "Digite seu email";
     } else if (email_do_usuario !== "" && senha == "") {
       document.getElementById("mensagem").innerHTML = "Digite sua senha";
      }
      else if (email_do_usuario != "" && senha != "" && confirmacao == "") {
        document.getElementById("mensagem").innerHTML = "Confirme sua senha"
      }
      else if (email_do_usuario != "" && senha != confirmacao) {
        document.getElementById("mensagem").innerHTML = "Senhas diferentes"
      }
      else {
       document.getElementById("sucesso").innerHTML = "Cadastro efetuado com sucesso" + " " + "Retornando a tela de login"
       teste = true
     }
    
      let tempo = 3;

      let cronometro = setInterval(function() {
      tempo--;

      if (tempo <= 0 && teste == true) {
      clearInterval(cronometro);
  
    window.location.href="./login.html"
  }
}, 1000);
}
