document.getElementById("btnSend").addEventListener("click", e => {
  e.preventDefault();

  let phone = "529821207160";

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  

  let url = `https://api.whatsapp.com/send?phone=${phone}&text=
		Su nombre completo:%0A
		${name}%0A
		Su email:%0A
		${email}%0A
		Su mensaje:%0A
		${message}`;

  if (name === "" || email === "" || message === "") {
    alert("Rellene todos los campos del formulario ");
    
    return false;
  }else{
    alert("Gracias por contactarme, en la brevedad me pondré en contacto con usted.");
  }
  
  window.open(url);

});