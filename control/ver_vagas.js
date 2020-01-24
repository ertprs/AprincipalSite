
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
    item = document.getElementById("inputaux2").value;
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
$("#inputaux2").val(aux2);

}

function Voltar(){
  document.getElementById("VagasAbertas2").style.display = "none";
  document.getElementById("VagasAbertas").style.display = "block";
listaVagas();
}

function verificaCPF(){
  var cpf = document.getElementById("cpf_modal").value;
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
