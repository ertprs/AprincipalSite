
function Valida_Senha(){
  var user = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
  var senha2 = criptografarSenha(senha, user);
  console.log(senha2);
      $.ajax({
          url: "control/valida_senha.php",
          type: "POST",
          data: {login:user,senha:senha2},
          success: function(data) {
            if (data=="1") {
                window.location.href="home.php";
            }else{
              Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Senha ou Login Inválido'
              })
            }
          },
          error: function(jXHR, textStatus, errorThrown) {}
      });
}

function criptografarSenha(senha, user) {
    var user2 = user+"_ctech_criptografia";
    const keyutf = CryptoJS.enc.Utf8.parse(user2);
    const iv = CryptoJS.enc.Base64.parse(user2);
    const enc = CryptoJS.AES.encrypt(senha, keyutf, { iv: iv });
    return enc.toString();
}
