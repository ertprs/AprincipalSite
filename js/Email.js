function EnviaEmail(){
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var mensagem = document.getElementById("mensagem").value;

$.ajax({
    url: "control/EnviaEmail.php",
    type: "POST",
    data: {nome:nome,email:email,mensagem:mensagem},
    success: function(data) {
      if (data="0") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'success',
            title: 'Email Enviado Com Sucesso, Aguarde Contato'
          })
      }else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'warning',
            title: 'Falha Ao Enviar Email'
          })
      }
    }});
}
