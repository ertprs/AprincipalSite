
function Valida_Senha2(){
  var user = document.getElementById("login").value;
  user =user.toUpperCase();

  var senhaDIGITADA = document.getElementById("senha").value;
  var senhaCRIPTOGRAFADA = CryptoJS.MD5(senhaDIGITADA).toString();
  senhaCRIPTOGRAFADA =senhaCRIPTOGRAFADA.toUpperCase();

  console.log("Senha DIGITADA          : "+senhaDIGITADA);
  console.log("Senha CRIPTOGRAFA NO JS : "+senhaCRIPTOGRAFADA);
  console.log("Senha RAD               : 053447CC14CE380D2696914360169A1F");
}

function Valida_Senha(){
  var user = document.getElementById("login").value;
  user =user.toUpperCase();

  var senhaDIGITADA = document.getElementById("senha").value;
  var senhaCRIPTOGRAFADA = CryptoJS.MD5(senhaDIGITADA).toString();
  senhaCRIPTOGRAFADA =senhaCRIPTOGRAFADA.toUpperCase();
  console.log("Senha CRIPTOGRAFA NO JS : "+senhaCRIPTOGRAFADA);


      $.ajax({
          url: "control/valida_senha.php",
          type: "POST",
          dataType: "json",
          data: {login:user,senha:senhaCRIPTOGRAFADA},
          success: function(data) {
            if (data=="1") {
              $.ajax({
                url: "http://170.238.74.48:8080/aprincipal/BuscaUserLogin.php",
                type: "GET",
                dataType: "json",
                data:{login:user},
                success: function(data4) {
                  if (data4.length!=0) {
                  var nome = data4[0].nome;
                  var setor = data4[0].departamento;
                  var cod = data4[0].cod;
                  var cidade = data4[0].cidade;
                  var login = data4[0].login;
                  login =login.toUpperCase();

                  var senha = data4[0].token;
                  var email = data4[0].email;
                  var rad = "1";
                  var fone = data4[0].fone;
                  var rg = data4[0].rg;
                  var admissao = data4[0].admissao;
                  var demissao = data4[0].demissao;
                  var cargo = data4[0].cargo;
                  var foto = data4[0].foto;
                  var valormeta = data4[0].valormeta;
                  var nascimento = data4[0].nascimento;
                  var situacao = data4[0].situacao;
                  var cpf = data4[0].cpf;
                  var root = "";
                  $.ajax({
                    url: "control/SalvaColaborador2.php",
                    type: "POST",
                    dataType: "json",
                    data:{nome:nome,setor:setor,cod:cod,cidade:cidade,login:login,senha:senha,email:email,rad:rad,
                    fone:fone,rg:rg,admissao:admissao,demissao:demissao,cargo:cargo,foto:foto,valormeta:valormeta,nascimento:nascimento,
                    situacao:situacao,cpf:cpf},
                    success: function(data5) {
                      if (data5=="1") {
                        Swal.fire({
                          type: 'success',
                          title: 'Esse é Seu Primeiro Acesso',
                          text: 'Insira Senha e Usuario Novamente'
                        })
                        setTimeout(function(){ window.location.reload(true);
                        }, 5000);
                      }else {
                        Swal.fire({
                          type: 'error',
                          title: 'Oops...',
                          text: 'Usuario Não Encontrado'
                        })
                      }

                    }});
                }else {
                  Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Usuario Não Encontrado'
                  })
                }

                  }});

            }else {
              var idCTECH = data[0].id;
              var nomeCTECH = data[0].nome;
              var setorCTECH = data[0].setor;
              var codCTECH = data[0].cod;
              var cidadeCTECH = data[0].cidade;
              var loginCTECH = data[0].user;
              loginCTECH =loginCTECH.toUpperCase();
              var rootCTECH = data[0].root;
              var senhaCTECH = data[0].senha;
              var emailCTECH = data[0].email;
              var id_supervisorCTECH = data[0].id_supervisor;
              var gestorCTECH = data[0].gestor;
              var radCTECH = data[0].rad;
              var foneCTECH = data[0].fone;
              var rgCTECH = data[0].rg;
              var admissaoCTECH = data[0].admissao;
              var demissaoCTECH = data[0].demissao;
              var cargoCTECH = data[0].cargo;
              var fotoCTECH = data[0].foto;
              var valormetaCTECH = data[0].valormeta;
              var nascimentoCTECH = data[0].nascimento;
              var situacaoCTECH = data[0].situacao;
              var cpfCTECH = data[0].cpf;
              ///////////////////////////////////
              if (radCTECH=="0") {
                $.ajax({
                  url: "control/valida_login.php",
                  type: "POST",
                  dataType: "json",
                  data:{senhaCRIPTOGRAFADA:senhaCRIPTOGRAFADA,login:loginCTECH,senha:senhaCTECH,rootCTECH:rootCTECH,gestor:gestorCTECH,id:idCTECH,setor:setorCTECH},
                  success: function(data3) {
                    if (data3=="1") {
                      window.location.href = "home.php";
                    }else {
                      Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Senha ou Login Inválido'
                      })
                    }
                  }});
              }else {
                $.ajax({
                  url: "http://170.238.74.48:8080/aprincipal/BuscaUserLogin.php",
                  type: "GET",
                  dataType: "json",
                  data:{login:user},
                  success: function(data2) {
                    var nome = data2[0].nome;
                    var setor = data2[0].departamento;
                    var cod = data2[0].cod;
                    var cidade = data2[0].cidade;
                    var login = data2[0].login;
                    login =login.toUpperCase();
                    var senha = data2[0].token;
                    var email = data2[0].email;
                    var rad = "1";
                    var fone = data2[0].fone;
                    var rg = data2[0].rg;
                    var admissao = data2[0].admissao;
                    var demissao = data2[0].demissao;
                    var cargo = data2[0].cargo;
                    var foto = data2[0].foto;
                    var valormeta = data2[0].valormeta;
                    var nascimento = data2[0].nascimento;
                    var situacao = data2[0].situacao;
                    var cpf = data2[0].cpf;
                    //////////////////////////////////////////////////////////////
                    if ((nomeCTECH!=nome)||(setorCTECH!=setor)||(codCTECH!=cod)||(cidadeCTECH!=cidade)||(loginCTECH!=login)||(senhaCTECH!=senha)||(emailCTECH!=email)||(foneCTECH!=fone)||(rgCTECH!=rg)||(admissaoCTECH!=admissao)
                    ||(demissaoCTECH!=demissao)||(cargoCTECH!=cargo)||(fotoCTECH!=foto)||(valormetaCTECH!=valormeta)||(nascimentoCTECH!=nascimento)||(situacaoCTECH!=situacao)||(cpfCTECH!=cpf)) {
                      $.ajax({
                        url: "control/salvadados_RAD.php",
                        type: "POST",
                        dataType: "json",
                        data:{nome:nome,setor:setor,cod:cod,cidade:cidade,login:login,senha:senha,email:email,fone:fone,
                        rg:rg,admissao:admissao,demissao:demissao,cargo:cargo,foto:foto,valormeta:valormeta,nascimento:nascimento,
                      situacao:situacao,cpf:cpf,id:idCTECH},
                        success: function(data2) {
                          if (data2=="1") {
                            $.ajax({
                              url: "control/valida_login.php",
                              type: "POST",
                              dataType: "json",
                              data:{senhaCRIPTOGRAFADA:senhaCRIPTOGRAFADA,login:login,senha:senha,rootCTECH:rootCTECH,gestor:gestorCTECH,id:idCTECH,setor:setor},
                              success: function(data3) {
                                if (data3=="1") {
                                  window.location.href = "home.php";
                                }else {
                                  Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: 'Senha ou Login Inválido'
                                  })
                                }
                              }});

                          }else {
                            Swal.fire({
                              type: 'error',
                              title: 'Oops...',
                              text: 'Senha ou Login Inválido'
                            })
                          }

                        }});
                    }else {
                      $.ajax({
                        url: "control/valida_login.php",
                        type: "POST",
                        dataType: "json",
                        data:{senhaCRIPTOGRAFADA:senhaCRIPTOGRAFADA,login:login,senha:senha,rootCTECH:rootCTECH,gestor:gestorCTECH,id:idCTECH,setor:setor},
                        success: function(data3) {
                          if (data3=="1") {
                            window.location.href = "home.php";
                          }else {
                              Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Senha ou Login Inválido'
                              })
                          }
                        }});
                    }

                  }});
              }

            }

            ///////////////////////////////////
            // if (data=="1") {
            //     window.location.href="home.php";
            // }else{
            //   Swal.fire({
            //     type: 'error',
            //     title: 'Oops...',
            //     text: 'Senha ou Login Inválido'
            //   })
            // }
            ///////////////////////////////////////
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
