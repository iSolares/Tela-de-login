
function login() {
   
   document.getElementById("mensagem").innerHTML = ""
   document.getElementById("sucesso").innerHTML = ""
   
   let email_do_usuario = document.getElementById("email").value
   let senha = document.getElementById("password").value 
   
   if (email_do_usuario == "") {
      document.getElementById("mensagem").innerHTML = "Digite seu email";
    } else if (email_do_usuario !== "" && senha == "") {
      document.getElementById("mensagem").innerHTML = "Digite sua senha";
    } else {
      document.getElementById("sucesso").innerHTML = "Login efetuado com sucesso"
    }
   
   
}