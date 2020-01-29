
function listaVagas(){
  $.ajax({
    type: 'POST',
    url: "portal/control/listaVagas.php",
    dataType: "json",
    success: function(data) {
      var aux = document.createElement("div");
      aux.className = "row";
      data.map(function(item,index){
        var div = document.createElement("div");
        div.className = "col-sm-6";
        var div1 = document.createElement("div");
        div1.className = "bloco_vaga";
        var div2 = document.createElement("div");
        div2.className = "card_vaga";
        var h5 = document.createElement("h5");
        h5.className = "card-title colorFont";
        var h5T = document.createTextNode(item.nome);
        h5.appendChild(h5T);
        var p = document.createElement("h6");
        p.className = "card-text colorFont2";
        var pT = document.createTextNode(item.cidade);
        var p2 = document.createElement("h6");
        p2.className = "card-text font_vaga";
        var pT2 = document.createTextNode(item.endereco);
        p.appendChild(pT);
        p2.appendChild(pT2);
        p.style.paddingLeft = "10px";
        p2.style.paddingLeft = "10px";
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a1T = document.createTextNode("Inscreva-se");
        a1.appendChild(a1T);
        var a2T = document.createTextNode("Saiba Mais");
        a2.appendChild(a2T);
        a1.className = "btn btn-primary btn_vagas";
        a2.className = "btn btn-primary btn_vagas";
        a1.style.cursor = "pointer";
        a2.style.cursor = "pointer";
        var aux2 = JSON.stringify(item);
        a1.setAttribute("onclick","inscreva("+aux2+")");
        a2.setAttribute("onclick","saibamais("+aux2+")");
        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(p2);
        div2.appendChild(a1);
        div2.appendChild(a2);
        div1.appendChild(div2);
        div.appendChild(div1);
        aux.appendChild(div);
      });

      $("#VagasAbertas").html(aux);

    }});
}

function saibamais(item){
  if (item==1) {
    item = document.getElementById("inputaux").value;
    item = JSON.parse(item);
  }
  $("#ModalLongoExemplo").modal();
  var aux2 = JSON.stringify(item);
  $("#inputaux").val(aux2);
  $("#TituloModalLongoExemplo").html(item.nome);
  $("#endereco").html(item.endereco);
  $("#cidade").html(item.cidade);
  $("#resp").html(item.funcoes);
  $("#req").html(item.requisitos);
  $("#ben").html(item.beneficios);
}

function inscreva(item){
  if (item==1) {
    item = document.getElementById("inputaux").value;
    item = JSON.parse(item);
  }
document.getElementById("VagasAbertas2").style.display = "block";
document.getElementById("VagasAbertas").style.display = "none";
$("#nome_vaga").html(item.nome);
$("#endereco_vaga").html(item.endereco);
$("#cidade_vaga").html(item.cidade);
var aux2 = JSON.stringify(item);
$("#inputaux").val(aux2);
}

function inscreva2(){
  var id = document.getElementById("inputaux").value;
  id = JSON.parse(id);
  id = id.id;
  console.log(id);
  var nome_modal = document.getElementById("nome_modal").value;
  var cpf_modal2 = document.getElementById("cpf_modal2").value;
  var endereco_modal = document.getElementById("endereco_modal").value;
  var escolaridade_modal = document.getElementById("escolaridade_modal").value;
  var curriculo = document.getElementById("curriculo_modal2").value;
  var email = document.getElementById("email").value;
  if (nome_modal==""||cpf_modal2==""||endereco_modal==""||escolaridade_modal==""||email=="") {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      })

      Toast.fire({
        type: 'error',
        title: 'Preencha Todos Os Campos'
      })
  }else if (curriculo=="") {
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000
        })

        Toast.fire({
          type: 'error',
          title: 'Faça Upload do Curriculo'
        })
    }else {
      $.ajax({
        type: 'POST',
        url: "portal/control/salvaCandidato.php",
        dataType: "json",
        data:{id:id,nome:nome_modal,cpf:cpf_modal2,endereco:endereco_modal,
        escolaridade:escolaridade_modal,curriculo:curriculo,email:email},
        success: function(data) {
          if (data == "1") {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
              })

              Toast.fire({
                type: 'success',
                title: 'Candidatura Feita Com Sucesso. Aguarde Contato'
              })
              window.location.reload();
          } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
              })
              Toast.fire({
                type: 'error',
                title: 'Falha Ao Tentar Candidatar-se'
              })
          }
        }});
    }


}

function Voltar(){
  document.getElementById("VagasAbertas2").style.display = "none";
  document.getElementById("VagasAbertas").style.display = "block";
listaVagas();
}

function verificaCPF(){
  var cpf = document.getElementById("cpf_modal").value;
  var id = document.getElementById("inputaux").value;
  id = JSON.parse(id);
  id = id.id;

  $.ajax({
    type: 'POST',
    url: "portal/control/buscaCandidato.php",
    dataType: "json",
    data:{id:id,cpf:cpf},
    success: function(data) {
      $("#nome_modal").val(data[0].nome);
      $("#cpf_modal2").val(data[0].cpf);
      $("#endereco_modal").val(data[0].endereco);
      $("#escolaridade_modal").val(data[0].escolaridade);
      $("#email").val(data[0].email);
    }});
}


    function getPDF1(element){
      var file = element.files[0];
      var reader = new FileReader();
      reader.onloadend = function() {
        var PDFBase64 = reader.result;
        document.getElementById('curriculo_modal2').value = PDFBase64;
        }
      reader.readAsDataURL(file);

           if (file) {
           var fileSize = 0;
              if (file.size > 1024 * 1024 * 12){
               fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                alert("Arquivo Muito Grande");
            }else{
              fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            }
           }
      }
