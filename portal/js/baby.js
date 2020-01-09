function gerarCard(){
var nome = document.getElementById("nome").value;
// var validade = document.getElementById("validade").value;
var codigo = document.getElementById("codigo").value;
if (document.getElementById("nome").value.trim()!="") {
nome = nome.toUpperCase();
$("#nome_card").html(nome);
}
// if (document.getElementById("validade").value.trim()!="") {
//   validade = validade.toUpperCase();
//   $("#validade_card").html(validade)
// }
if (document.getElementById("codigo").value.trim()!="") {
  codigo = codigo.toUpperCase();
  $("#cod_card").html(codigo)
  let config = {
                //format: "auto",
                lineColor: "red",
                width: 3,
                height: 45,
                displayValue: false,
                background: "none"
            };
            JsBarcode('#codBarras', codigo, config);

}

}

function refresh(){
  $("#nome_card").html("ERGINO FERREIRA");
  // $("#validade_card").html("09/20")
  $("#cod_card").html("0000")
  var url=  "url(../img/1.png)";
  document.getElementById("cardAp").style.backgroundImage = url;
  document.getElementById("cardAp").style.backgroundRepeat = "no-repeat";
  document.getElementById("cardAp").style.backgroundSize = "510px 320px";
}

function cod(){
  codigo.value = "0000";
  var url=  "url(../img/1.png)";
  document.getElementById("cardAp").style.backgroundImage = url;
  document.getElementById("cardAp").style.backgroundRepeat = "no-repeat";
  document.getElementById("cardAp").style.backgroundSize = "510px 320px";
  gerarCard();
}

function gerar(){

  const render = node =>
  domtoimage.toPng(node)
  .then(dataUrl => {
    var link = document.createElement('a');
    link.download = 'baby+.png';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
  })
  .catch(error =>
    console.error('oops, something went wrong!', error)
  );

  const foo = document.getElementById('cardAp');

    var pf=performance.now();
    render(foo);


}
