function gerarCard(){
 var nome = document.getElementById("nome").value;
//
// var codigo = document.getElementById("codigo").value;
 if (document.getElementById("nome").value.trim()!="") {
 nome = nome.toUpperCase();
 $("#nome_card2").html(nome);
 }
// if (document.getElementById("codigo").value.trim()!="") {
//   codigo = codigo.toUpperCase();
//   $("#cod_card").html(codigo)
//   let config = {
//                 //format: "auto",
//                 lineColor: "red",
//                 width: 3,
//                 height: 45,
//                 displayValue: false,
//                 background: "none"
//             };
//             JsBarcode('#codBarras', codigo, config);
//
// }

}

function refresh(){
  $("#nome_card2").html("Insira Seu Nome Aqui");
  //$("#validade_card").html("09/20")
  document.getElementById("cardApint").style.backgroundColor = "white";
  document.getElementById("cardApint").style.backgroundImage = "";
  var url=  "url(../img/back.svg)";
  document.getElementById("cardAp").style.backgroundImage = url;
  document.getElementById("cardAp").style.backgroundRepeat = "no-repeat";
  document.getElementById("cardAp").style.backgroundSize = "320px 510px";
}

function cod(){
  //codigo.value = "0000";
  $("#nome_card2").html("Insira Seu Nome Aqui");
  var url=  "url(../img/back.svg)";
  document.getElementById("cardAp").style.backgroundImage = url;
  document.getElementById("cardAp").style.backgroundRepeat = "no-repeat";
  document.getElementById("cardAp").style.backgroundSize = "320px 510px";
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
