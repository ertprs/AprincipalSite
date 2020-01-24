var i=0;
var auxiliar_html;
var old_html;
var indices_pedidos= [];
var aux_contador =0;
var valor_final =0;
var tipo_kit;
var tamanho_torta= "";



function aumentar(valor){

  var a1 = document.getElementById("cont_kit_refri1").value;
  var a2 = document.getElementById("cont_kit_refri2").value;
  var a3 = document.getElementById("cont_kit_refri3").value;
  var a4 = document.getElementById("cont_kit_refri4").value;

  if(tipo_kit=='Kit 5 Pessoas'){var quantidade_refris= 1;}
  if(tipo_kit=='Kit 10 Pessoas'){var quantidade_refris= 2;}
  if(tipo_kit=='Kit 20 Pessoas'){var quantidade_refris= 4;}
  if(tipo_kit=='Kit Prime'){var quantidade_refris= 2;}

  var soma = Number(a1) + Number(a2)+ Number(a3) + Number(a4);

  var valor2= document.getElementById(valor).value;
  if(tipo_kit=="Kit 5 Pessoas" || tipo_kit=='Kit 10 Pessoas' || tipo_kit=='Kit 20 Pessoas'|| tipo_kit=='Kit Prime'){
    if(Number(soma)== quantidade_refris){
      swal("Já atingiu o limite de refrigerantes!");
    }
    else{
      valor2 = Number(valor2) + 1;
    }
  }
  else{
    valor2 = Number(valor2) + 1;
  }
  document.getElementById(valor).value = valor2;
}

function aumentar_docinho(valor){

  var a1 = document.getElementById("cont_kit_docinho1").value;
  var a2 = document.getElementById("cont_kit_docinho2").value;
  var a3 = document.getElementById("cont_kit_docinho3").value;
  var a4 = document.getElementById("cont_kit_docinho4").value;
  var a5 = document.getElementById("cont_kit_docinho5").value;
  var a6 = document.getElementById("cont_kit_docinho6").value;
  var a7 = document.getElementById("cont_kit_docinho7").value;
  var a8 = document.getElementById("cont_kit_docinho8").value;
  var a9 = document.getElementById("cont_kit_docinho9").value;

  if(tipo_kit=='Kit 5 Pessoas'){var quantidade_docinho= 15;}
  if(tipo_kit=='Kit 10 Pessoas'){var quantidade_docinho= 30;}
  if(tipo_kit=='Kit 20 Pessoas'){var quantidade_docinho= 60;}
  if(tipo_kit=='Kit Prime'){var quantidade_docinho= 30;}

  var soma = Number(a1) + Number(a2)+ Number(a3) + Number(a4);
  var soma2 = Number(a5) + Number(a6)+ Number(a7) + Number(a8)+ Number(a9);

  var valor2= document.getElementById(valor).value;
  if(tipo_kit=="Kit 5 Pessoas" || tipo_kit=='Kit 10 Pessoas' || tipo_kit=='Kit 20 Pessoas' || tipo_kit=='Kit Prime'){
      if (tipo_kit=='Kit Prime') {
        if(Number(soma2)== quantidade_docinho){
          soma = soma2;
          swal("Já atingiu o limite de docinhos!");
        }
        else{
          soma = soma2;
          valor2 = Number(valor2) + 5;
        }
      }else {
        if(Number(soma)== quantidade_docinho){
          swal("Já atingiu o limite de docinhos!");
        }
        else{
          valor2 = Number(valor2) + 5;
        }
      }
  }
  else{
    valor2 = Number(valor2) + 5;
  }
  document.getElementById(valor).value = valor2;
}

function diminuir_docinho(valor){
  var valor2= document.getElementById(valor).value;
  valor2 = Number(valor2) - 5;
  if(valor2<0){

  }
  else{
    document.getElementById(valor).value = valor2;
  }
}

function diminuir(valor){
  var valor2= document.getElementById(valor).value;
  valor2 = Number(valor2) - 1;
  if(valor2<0){

  }
  else{
    document.getElementById(valor).value = valor2;
  }
}

function aumentar_salgado(valor){

  if(tipo_kit=="Kit 5 Pessoas" || tipo_kit=="Kit 10 Pessoas" || tipo_kit=="Kit 20 Pessoas" || tipo_kit=="Kit Prime"){
    var a1 = document.getElementById("cont_kit_salgad1").value;
    var a2 = document.getElementById("cont_kit_salgad2").value;
    var a3 = document.getElementById("cont_kit_salgad3").value;
    var a4 = document.getElementById("cont_kit_salgad4").value;
    var a5 = document.getElementById("cont_kit_salgad5").value;
    // var a6 = document.getElementById("cont_kit_salgad6").value;
    // var a7 = document.getElementById("cont_kit_salgad7").value;
    // var a8 = document.getElementById("cont_kit_salgad8").value;
    // var a9 = document.getElementById("cont_kit_salgad9").value;
    // var a10 = document.getElementById("cont_kit_salgad10").value;
    // var a11 = document.getElementById("cont_kit_salgad11").value;
    // var a12 = document.getElementById("cont_kit_salgad12").value;
    // var a13 = document.getElementById("cont_kit_salgad13").value;
  }
  else{
    var a1 = document.getElementById("cont_salgad1").value;
    var a2 = document.getElementById("cont_salgad2").value;
    var a3 = document.getElementById("cont_salgad3").value;
    var a4 = document.getElementById("cont_salgad4").value;
    var a5 = document.getElementById("cont_salgad5").value;
    var a6 = document.getElementById("cont_salgad6").value;
    var a7 = document.getElementById("cont_salgad7").value;
    var a8 = document.getElementById("cont_salgad8").value;
    var a9 = document.getElementById("cont_salgad9").value;
    var a10 = document.getElementById("cont_salgad10").value;
    var a11 = document.getElementById("cont_salgad11").value;
    var a12 = document.getElementById("cont_salgad12").value;
    var a13 = document.getElementById("cont_salgad13").value;

  }


  var soma = Number(a1) + Number(a2)+ Number(a3) + Number(a4)+ Number(a5);
  // Number(a6)+ Number(a7)+ Number(a8)+ Number(a9)+ Number(a10)+ Number(a11)+ Number(a12)+ Number(a13);
  // var soma = Number(a1) + Number(a2)+ Number(a3) + Number(a4)+ Number(a5)+ Number(a6)+ Number(a7)+ Number(a8)+ Number(a9)+ Number(a10)+ Number(a11)+ Number(a12)+ Number(a13);

  var valor2= document.getElementById(valor).value;

  if(tipo_kit=="Kit 5 Pessoas"){ var quantidade= 50; }
  else if(tipo_kit=="Kit 10 Pessoas"){ var quantidade= 100; }
  else if(tipo_kit=="Kit 20 Pessoas"){ var quantidade= 200; }
  else if(tipo_kit=="Kit Prime"){ var quantidade= 100; }
  else {var quantidade = document.getElementById("quantidade_pedidos_salgadinhos").value;
  quantidade = Number(quantidade)*100;}

  if(Number(soma)== quantidade){
    swal("Já atingiu o limite de salgados!");
  }
  else{
    valor2 = Number(valor2) + 25;
    document.getElementById(valor).value = valor2;
  }

}

function diminuir_salgado(valor){
  var valor2= document.getElementById(valor).value;
  valor2 = Number(valor2) - 25;
  if(valor2<0){

  }
  else{
    document.getElementById(valor).value = valor2;
  }
}

function aumentar_salgado_promocao(valor){

  var a1 = document.getElementById("cont_kit_promocao_salgad1").value;
  var a2 = document.getElementById("cont_kit_promocao_salgad2").value;
  var a3 = document.getElementById("cont_kit_promocao_salgad3").value;
  var a4 = document.getElementById("cont_kit_promocao_salgad4").value;
  var a5 = document.getElementById("cont_kit_promocao_salgad5").value;



  var soma = Number(a1) + Number(a2)+ Number(a3) + Number(a4)+ Number(a5);

  var valor2= document.getElementById(valor).value;

  var quantidade = document.getElementById("quantidade_pedidos_salgadinhos").value;
  quantidade = Number(quantidade)*100;

  if(Number(soma)== quantidade){
    swal("Já atingiu o limite de salgados!");
  }
  else{
    valor2 = Number(valor2) + 25;
    document.getElementById(valor).value = valor2;
  }

}

function diminuir_salgado_promocao(valor){
  var valor2= document.getElementById(valor).value;
  valor2 = Number(valor2) - 25;
  if(valor2<0){

  }
  else{
    document.getElementById(valor).value = valor2;
  }
}



function verificar_horarios(){
  var data_pedido = document.getElementById("data").value;
  // data_pedido = data_pedido.replace("-","/");
  // data_pedido = data_pedido.replace("-","/");


  $.ajax({
    url: "Control/conferir_horarios.php",
    dataType: "json",
    data: {
      data_pedido:data_pedido
    },
    success: function( data ) {
      atualizar_lista_horarios(data);
    }
  });
  checar_horas();
}

function checar_horas(){
  document.getElementById("data").style.color="#000000";

  var d = new Date();
  var  horas = d.getHours();
  var  minutes = d.getMinutes();

  var data_pedido = document.getElementById("data").value;

  var day = d.getDate();
  var mes = d.getMonth();
  mes = Number(mes)+1;
  if(Number(mes)<10){
    mes = "0" + mes;
  }
  if(Number(day)<10){
    day = "0" + day;
  }
  var data_hoje = d.getFullYear() + "-" + mes + "-" + day;

  console.log(data_hoje);
  console.log(data_pedido);

  if(Number(minutes)<10){
    minutes = "0" + minutes;
  }

  if(horas>=11 && horas <15){
    swal("O horário de retirada na loja é entre 08:30 e 12:00; E entre 14:30 e 19:00");
    if(data_pedido == data_hoje){

      document.getElementById("cn1").disabled = true;
      document.getElementById("cn2").disabled = true;
      document.getElementById("cn3").disabled = true;
      document.getElementById("cn4").disabled = true;
    }
  }

  if(horas>=17){
    if(data_pedido == data_hoje){
      swal("Os pedidos feitos após as 17h não podem ser entregues hoje.");
      document.getElementById("data").style.color="#ff0000";
    }
  }

  var dia_de_hoje = d.getDay();
  if(dia_de_hoje==6){
    swal("Os pedidos feitos no sábado só podem ser feito até onze horas (11:00).");
    if(horas>=12){
      //document.getElementById("botao_finalizar").disabled= true;
    }
  }

}

async function atualizar_lista_horarios(itens){
  console.log(itens);
  if(itens){

    var horarios = ["09:00","09:30","10:00","10:30","11:00","11:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"];
    var select = document.getElementById("horario");
    select.innerHTML="";

    var aux=0;
    for(var a=0;a<horarios.length;a++){

      var hor = horarios[a];

      for(var b=0;b<itens.length;b++){
        var d = itens[b].horario;
        if(hor==d){
          var option = document.createElement("option");
          option.text= d;
          option.id="select_color";
          //option.text= d+" - Reservado";
          option.value=d;
          //option.disabled = true;
          select.add(option);
          aux=1;
        }
        else{

        }
      }

      if(aux==1){ aux=0;}
      else{
        var option = document.createElement("option");
        option.text= hor;
        option.value=hor;
        select.add(option);
        aux=0;
      }
    }
  }
}




function quantidade_sabores(){
  var quantia = document.getElementById("quantidade_pedidos_salgadinhos").value;
  var quantidade = Number(quantia)*100;
  document.getElementById("mostrar_quantidade_sabores").innerHTML = "Escolha até "+ quantidade + " salgados";
}

function modal_com_itens_kits(kit){
  document.getElementById("tortas_gourmet").style.display= "none";
  document.getElementById("doces_gourmet").style.display= "none";
  document.getElementById("doces_normais").style.display= "block";
  tipo_kit=kit;

  if(kit=='Kit 5 Pessoas'){
    //ANTES DA PROMOCAO
    // document.getElementById("quantidade_salgados").innerHTML = "Seu Kit contém: <br/> 50 salgadinhos<br/> 1 Refrigerantes de 2L<br/> 1 torta PP<br/> 30 docinhos<br/> Valor: R$ 93,00 ";
    document.getElementById("quantidade_salgados").innerHTML = "Seu Kit contém: <br/> 50 salgadinhos<br/> 1 Refrigerantes de 2L<br/> 1 torta PP<br/> 15 docinhos<br/> Valor: R$ 88,00 ";
    $('#modal_escolhas').modal();
  }

  if(kit=='Kit 10 Pessoas'){

    document.getElementById("quantidade_salgados").innerHTML = "Seu Kit contém: <br/> 100 salgadinhos<br/> 2 Refrigerantes de 2L<br/> 1 torta P<br/> 30 docinhos<br/> Valor: R$ 167,00";
    $('#modal_escolhas').modal();
  }
  if(kit=='Kit 20 Pessoas'){
    document.getElementById("quantidade_salgados").innerHTML = "Seu Kit contém: <br/> 200 salgadinhos<br/> 4 Refrigerantes de 2L<br/> 2 tortas P<br/> 60 docinhos<br/> Valor: R$ 310,00";
    $('#modal_escolhas').modal();
  }
  if(kit=='Kit Prime'){
    document.getElementById("tortas_normais").style.display= "none";
    document.getElementById("tortas_gourmet").style.display= "block";
    document.getElementById("doces_normais").style.display= "none";
    document.getElementById("doces_gourmet").style.display= "block";
    document.getElementById("quantidade_salgados").innerHTML = "Seu Kit contém: <br/> 100 salgadinhos<br/> 2 Refrigerantes de 2L<br/> 1 torta gourmet Simples<br/> 30 docinhos gourmet<br/> Valor: R$ 238,00";
    $('#modal_escolhas').modal();
  }
  // if(kit=='Kit 30 Pessoas'){
  //
  //   document.getElementById("quantidade_salgados").innerHTML = "Seu Kit contém 300 salgadinhos<br/> 6 refrigerantes de 2L<br/> 1 torta grande<br/> Valor: R$ 615,00";
  //   $('#modal_escolhas').modal();
  // }

  if(kit=='Tortas'){
    $('#modal_torta').modal();
  }
  if(kit=='Salgados'){
    $('#modal_salgado').modal();
  }
  if(kit=='Refrigerantes'){
    $('#modal_refrigerante').modal();
  }

  if(kit=='Promocoes'){
    $('#modal_promocoes').modal();
  }

  if(kit=='Descartaveis'){
    $('#modal_descartaveis').modal();
  }

}

function troco(){
  var tipo = document.getElementById("forma_pagamento").value;
  if(tipo=="cartão"){
    document.getElementById("troco").style.display = "none";
  }
  else{
    document.getElementById("troco").style.display = "block";
  }
}

function waitSeconds(iMilliSeconds) {
  var counter= 0
  , start = new Date().getTime()
  , end = 0;
  while (counter < iMilliSeconds) {
    end = new Date().getTime();
    counter = end - start;
  }
}

function contar_checks(e){

  if(tipo_kit=='Salgados'){
    var quantia = document.getElementById("quantidade_pedidos_salgadinhos").value;
  }

  else{
    var quantia = document.getElementById("quantidade_pedidos_kit").value;
  }


  var quantidade = Number(quantia)*4;

  if(tipo_kit=='Kit 5 Pessoas'){ quantidade= 2;}
  if(tipo_kit=='Kit 10 Pessoas'){ quantidade= 4;}
  if(tipo_kit=='Kit 20 Pessoas'){ quantidade= 8;}
  if(tipo_kit=='Kit Prime'){ quantidade= 4;}

  var form = document.getElementsByName("salgadinho");

  for(var b=0;b< form.length;b++){
    if(b==0){      var checks=0;    }
    if(form[b].checked){      checks+=1;    }  }
    if(checks>quantidade){    e.preventDefault();
      swal("Já selecionou "+ quantidade+" sabores");

    }
  }



  function abrir_salgadio(){
    $('#modal_salgado').modal();
  }

  function salvar_pedido(){

    var final_kit= "";
    var final_descricao = "";
    var final_salgados = "";
    var valor_final = 0;
    var final_tortas = "";
    var descartaveis_aux = "";
    var tamanho_torta_aux = "";
    var bebidas_aux = "";

    //  document.getElementById("butao_enviar").disabled= true;
    var d = new Date();
    var  horas = d.getHours();
    var  minutes = d.getMinutes();
    var day = d.getDate();
    var mes = d.getMonth();
    mes = Number(mes)+1;
    if(Number(mes)<10){
      mes = "0" + mes;
    }
    if(Number(day)<10){
      day = "0" + day;
    }
    if(Number(minutes)<10){
      minutes = "0" + minutes;
    }
    var dia = d.getFullYear() + "/" + mes + "/" + day;
    d = horas+":"+minutes;


    var valor_troco = document.getElementById("valor_troco").value;

    var data_entrega = document.getElementById("data").value;
    var hora_entrega = document.getElementById("horario").value;
    var pagamento = document.getElementById("forma_pagamento").value;

    for(var a=0;a<indices_pedidos.length;a++){

      var pedido= JSON.parse(localStorage.getItem("pedido"+indices_pedidos[a]));

      tipo_pedido = pedido["nucleo"];

      waitSeconds(250);
      // var salgados="";
      // // for(var aux_salgados=0;aux_salgados<pedido["salgados"].length;aux_salgados++){
      // //   salgados=  pedido["salgados"][aux_salgados] + ", " + salgados;
      // // }

      final_kit= final_kit  + pedido["kit"]+ " / ";
      final_descricao = final_descricao  + pedido["descricao"]+ " / ";
      final_salgados =  pedido["salgados"];

      var tortinha = pedido["tortas"];
      if(tortinha){ final_tortas = final_tortas  +  pedido["tortas"]+ " / "; }

      var tamanho_torta_aux2 = pedido["tamanho_torta"];
      if(tamanho_torta_aux2){ tamanho_torta_aux = tamanho_torta_aux +  pedido["tamanho_torta"]+ " / " ; }

      var descartaveis_aux2 = pedido["descartaveis"];
      if(descartaveis_aux2){ descartaveis_aux = descartaveis_aux  +  pedido["descartaveis"]+ " "; }

      var bebidas_aux2 = pedido["bebidas"];
      if(bebidas_aux2){ bebidas_aux = bebidas_aux  +  pedido["bebidas"]+ " "; }




      valor_final = valor_final + Number(pedido["valor_kit"]);
      var bairro = pedido["bairro"];
      var endereco = pedido ["endereco"];
      var nome =  pedido["nome"];
      var nucleo =  pedido["nucleo"];
      var numero_casa =  pedido["numero_casa"];
      var quantidade_pedidos =  pedido["quantidade_pedidos"];
      var referencia =  pedido["referencia"];
      var telefone =  pedido["telefone"];
      var valor_descartaveis = pedido["valor_descartaveis"];
      var valor_bebidas = pedido["valor_bebidas"];
      var docinhos = pedido["docinhos"];

    }

    var bebidas = bebidas_aux;
    var tamanho_torta =  tamanho_torta_aux;
    var descartaveis = descartaveis_aux;

    $.ajax({
      url: "Control/salvar_pedido.php",
      dataType: "json",
      data: {
        bairro: bairro,
        bebidas: bebidas,
        descricao: final_descricao,
        endereco: endereco,
        kit: final_kit,
        nome: nome,
        nucleo: nucleo,
        numero_casa: numero_casa,
        quantidade_pedidos: quantidade_pedidos,
        referencia: referencia,
        salgados: final_salgados,
        tamanho_torta: tamanho_torta,
        telefone: telefone,
        tortas: final_tortas,
        valor_kit: valor_final,
        dia: dia,
        hora_pedido:d,
        forma_pagamento: pagamento,
        valor_troco: valor_troco,
        data_entrega: data_entrega,
        hora_entrega: hora_entrega,
        valor_bebidas:valor_bebidas,
        descartaveis: descartaveis,
        valor_descartaveis:valor_descartaveis,
        docinhos:docinhos
      },
      success: function( data ) {

      }
    });

    $('#exampleModalCenter').modal('hide');
    wait(500);

    var data2= data_entrega.split("-");

    var ano = data_entrega[0]+data_entrega[1]+data_entrega[2]+data_entrega[3];
    var dia = data_entrega[8]+data_entrega[9];
    var mes = data_entrega[5]+data_entrega[6];

    data_entrega = dia+"/"+mes +"/"+ano;

    if(tipo_pedido == "Buscar no Local"){
      document.getElementById("tempo").innerHTML = "Seu pedido está pronto até às "+hora_entrega+ " do dia "+data_entrega;
    }
    else{
      document.getElementById("tempo").innerHTML = "Sua entrega será realizada às "+hora_entrega+ " do dia "+data_entrega;
    }

    $('#modalFinalizando').modal();

    document.getElementById("butao_enviar").disabled= false;

  }

  function escolha_horario(){
    document.getElementById("botao_finalizar").disabled = false;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;
    document.getElementById("select_color2").style.background="#ffffff";

    var d = new Date();
    var  horas = d.getHours();
    var  minutes = d.getMinutes();
    var day = d.getDate();
    var mes = d.getMonth();
    mes = Number(mes)+1;
    if(Number(mes)<10){
      mes = "0" + mes;
    }
    if(Number(day)<10){
      day = "0" + day;
    }
    if(Number(minutes)<10){
      minutes = "0" + minutes;
    }
    var dia = d.getFullYear() + "-" + mes + "-" + day;
    d = horas+":"+minutes;

    horario = horario.split(":");
    var hora_cortada = horario[0];

    if(data==dia){
      if((Number(hora_cortada) - Number(horas))<=2){
        //document.getElementById("botao_finalizar").disabled = true;
        swal("Pedidos com menos de 2 horas de diferença não podem ser entregues");
        document.getElementById("data").style.color="#ff0000";
        document.getElementById("select_color2").style.background="#ff0000";
      }
    }

  }

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

  function nucleos(){
    var nucleo = document.getElementById("nucleo").value;
    if (nucleo=="Buscar no Local"){
      document.getElementById("entrega").style.display = "none";
    }
    else {
      document.getElementById("entrega").style.display = "block";
    }
  }

  function ler_bebidas(){
    var valor= 0;
    var bebidas ="";
    if(tipo_kit=="Refrigerantes"){
      var a1 = document.getElementById("cont_refri1").value;
      var a2 = document.getElementById("cont_refri2").value;
      var a3 = document.getElementById("cont_refri3").value;
      var a4 = document.getElementById("cont_refri4").value;
      if(a1>0) {  bebidas = bebidas + a1 + " Coca Cola; "; valor = valor + Number(a1)*8;  }
      if(a2>0) {  bebidas = bebidas + a2 + " Guaraná Antártica; "; valor = valor + Number(a2)*8;  }
      if(a3>0) {  bebidas = bebidas + a3 + " Fanta Laranja; "; valor = valor + Number(a3)*8;  }
      if(a4>0) {  bebidas = bebidas + a4 + " Tuchaua; "; valor = valor + Number(a4)*8;  }
    }
    else{
      var a1 = document.getElementById("cont_kit_refri1").value;
      var a2 = document.getElementById("cont_kit_refri2").value;
      var a3 = document.getElementById("cont_kit_refri3").value;
      var a4 = document.getElementById("cont_kit_refri4").value;
      if(a1>0) {  bebidas = bebidas + a1 + " Coca Cola; ";  }
      if(a2>0) {  bebidas = bebidas + a2 + " Guaraná Antártica; ";  }
      if(a3>0) {  bebidas = bebidas + a3 + " Fanta Laranja; ";  }
      if(a4>0) {  bebidas = bebidas + a4 + " Tuchaua; ";  }
    }

    var retorno_bebidas = [{"bebidas": bebidas, "valor": valor }];
    document.getElementById("cont_refri1").value = 0;
    document.getElementById("cont_refri2").value= 0;
    document.getElementById("cont_refri3").value= 0;
    document.getElementById("cont_refri4").value= 0;
    document.getElementById("cont_kit_refri1").value = 0;
    document.getElementById("cont_kit_refri2").value= 0;
    document.getElementById("cont_kit_refri3").value= 0;
    document.getElementById("cont_kit_refri4").value= 0;
    return retorno_bebidas;
  }

  function ler_docinhos(){
      var valor= 0; var docinhos =" ";
      if(tipo_kit=="Kit 5 Pessoas" || tipo_kit=="Kit 10 Pessoas" || tipo_kit=="Kit 20 Pessoas" || tipo_kit=="Kit Prime"){
        var a1 = document.getElementById("cont_kit_docinho1").value;
        var a2 = document.getElementById("cont_kit_docinho2").value;
        var a3 = document.getElementById("cont_kit_docinho3").value;
        var a4 = document.getElementById("cont_kit_docinho4").value;
        var a5 = document.getElementById("cont_kit_docinho5").value;
        var a6 = document.getElementById("cont_kit_docinho6").value;
        var a7 = document.getElementById("cont_kit_docinho7").value;
        var a8 = document.getElementById("cont_kit_docinho8").value;
        var a9 = document.getElementById("cont_kit_docinho9").value;
        if(a1>0) {  docinhos = docinhos + a1 + " Brigadeiro; "; }
        if(a2>0) {  docinhos = docinhos + a2 + " Beijinho; "; }
        if(a3>0) {  docinhos = docinhos + a3 + " Leite Ninho; "; }
        if(a4>0) {  docinhos = docinhos + a4 + " Olho de Sogra; "; }
        if(a5>0) {  docinhos = docinhos + a5 + " Leite Ninho com Nutella; "; }
        if(a6>0) {  docinhos = docinhos + a6 + " Brigadeiro Trufado; "; }
        if(a7>0) {  docinhos = docinhos + a7 + " Churros; "; }
        if(a8>0) {  docinhos = docinhos + a8 + " Casadinho; "; }
        if(a9>0) {  docinhos = docinhos + a9 + " Uvinha; "; }
      }
      var retorno_docinhos = [{"docinhos": docinhos, "valor": valor }];
      document.getElementById("cont_kit_docinho1").value = 0;
      document.getElementById("cont_kit_docinho2").value= 0;
      document.getElementById("cont_kit_docinho3").value= 0;
      document.getElementById("cont_kit_docinho4").value= 0;
      document.getElementById("cont_kit_docinho5").value= 0;
      document.getElementById("cont_kit_docinho6").value= 0;
      document.getElementById("cont_kit_docinho7").value= 0;
      document.getElementById("cont_kit_docinho8").value= 0;
      document.getElementById("cont_kit_docinho9").value= 0;
      return retorno_docinhos;
    }


  function ler_salgados(){
    var valor= 0;
    var salgados ="";
    if(tipo_kit=="Salgados"){
      var a1 = document.getElementById("cont_salgad1").value;
      var a2 = document.getElementById("cont_salgad2").value;
      var a3 = document.getElementById("cont_salgad3").value;
      var a4 = document.getElementById("cont_salgad4").value;
      var a5 = document.getElementById("cont_salgad5").value;
      var a6 = document.getElementById("cont_salgad6").value;
      var a7 = document.getElementById("cont_salgad7").value;
      var a8 = document.getElementById("cont_salgad8").value;
      var a9 = document.getElementById("cont_salgad9").value;
      var a10 = document.getElementById("cont_salgad10").value;
      var a11 = document.getElementById("cont_salgad11").value;
      var a12 = document.getElementById("cont_salgad12").value;
      var a13 = document.getElementById("cont_salgad13").value;
      if(a1>0) {  salgados = salgados + a1 + " Quibe com Queijo; ";  valor= Number(a1)*0.50 + valor;}
      if(a2>0) {  salgados = salgados + a2 + " Coxinha de Frango; ";  valor= Number(a2)*0.50 + valor;}
      if(a3>0) {  salgados = salgados + a3 + " Bolinha de queijo Provolone; ";  valor= Number(a3)*0.50 + valor;}
      if(a4>0) {  salgados = salgados + a4 + " Risoli de Carne; ";  valor= Number(a4)*0.50 + valor;}
      if(a5>0) {  salgados = salgados + a5 + " Risoli de Presunto e Queijo; ";  valor= Number(a5)*0.50 + valor;}
      if(a6>0) {  salgados = salgados + a6 + " Americano de Presunto e Queijo; ";  valor= Number(a6)*0.60 + valor;}
      if(a7>0) {  salgados = salgados + a7 + " Esfirra de carne; ";  valor= Number(a7)*0.60 + valor;}
      if(a8>0) {  salgados = salgados + a8 + " Esfirra de Frango; ";  valor= Number(a8)*0.60 + valor;}
      if(a9>0) {  salgados = salgados + a9 + " Pastel de Carne; ";  valor= Number(a9)*0.60 + valor;}
      if(a10>0) {  salgados = salgados + a10 + " Pastel de Frango; ";  valor= Number(a10)*0.60 + valor;}
      if(a11>0) {  salgados = salgados + a11 + " Mini dog; ";  valor= Number(a11)*0.60 + valor;}
      if(a12>0) {  salgados = salgados + a12 + " Tortinha de Frango; ";  valor= Number(a12)*0.60 + valor;}
      if(a13>0) {  salgados = salgados + a13 + " Empada de Frango; ";  valor= Number(a13)*0.60 + valor;}
    }
    if(tipo_kit=="Promocoes"){
      var a1 = document.getElementById("cont_kit_promocao_salgad1").value;
      var a2 = document.getElementById("cont_kit_promocao_salgad2").value;
      var a3 = document.getElementById("cont_kit_promocao_salgad3").value;
      var a4 = document.getElementById("cont_kit_promocao_salgad4").value;
      var a5 = document.getElementById("cont_kit_promocao_salgad5").value;
      if(a1>0) {  salgados = salgados + a1 + " Quibe com Queijo; ";  }
      if(a2>0) {  salgados = salgados + a2 + " Coxinha de Frango; ";  }
      if(a3>0) {  salgados = salgados + a3 + " Bolinha de queijo Provolone; ";  }
      if(a4>0) {  salgados = salgados + a4 + " Risoli de Carne; ";  }
      if(a5>0) {  salgados = salgados + a5 + " Risoli de Presunto e Queijo; ";  }
    }

    else{
      var a1 = document.getElementById("cont_kit_salgad1").value;
      var a2 = document.getElementById("cont_kit_salgad2").value;
      var a3 = document.getElementById("cont_kit_salgad3").value;
      var a4 = document.getElementById("cont_kit_salgad4").value;
      var a5 = document.getElementById("cont_kit_salgad5").value;
      // var a6 = document.getElementById("cont_kit_salgad6").value;
      // var a7 = document.getElementById("cont_kit_salgad7").value;
      // var a8 = document.getElementById("cont_kit_salgad8").value;
      // var a9 = document.getElementById("cont_kit_salgad9").value;
      // var a10 = document.getElementById("cont_kit_salgad10").value;
      // var a11 = document.getElementById("cont_kit_salgad11").value;
      // var a12 = document.getElementById("cont_kit_salgad12").value;
      // var a13 = document.getElementById("cont_kit_salgad13").value;
      if(a1>0) {  salgados = salgados + a1 + " Quibe com Queijo; ";valor= Number(a1)*0.50 + valor;  }
      if(a2>0) {  salgados = salgados + a2 + " Coxinha de Frango; ";valor= Number(a2)*0.50 + valor;  }
      if(a3>0) {  salgados = salgados + a3 + " Bolinha de queijo Provolone; ";valor= Number(a3)*0.50 + valor;  }
      if(a4>0) {  salgados = salgados + a4 + " Risoli de Carne; ";valor= Number(a4)*0.50 + valor;  }
      if(a5>0) {  salgados = salgados + a5 + " Risoli de Presunto e Queijo; ";valor= Number(a5)*0.50 + valor;  }
      // if(a6>0) {  salgados = salgados + a6 + " Americano de Presunto e Queijo; ";valor= Number(a6)*0.50 + valor;  }
      // if(a7>0) {  salgados = salgados + a7 + " Esfirra de carne; ";valor= Number(a7)*0.60 + valor;  }
      // if(a8>0) {  salgados = salgados + a8 + " Esfirra de Frango; ";valor= Number(a8)*0.60 + valor;  }
      // if(a9>0) {  salgados = salgados + a9 + " Pastel de Carne; ";valor= Number(a9)*0.60 + valor;  }
      // if(a10>0) {  salgados = salgados + a10 + " Pastel de Frango; ";valor= Number(a10)*0.60 + valor;  }
      // if(a11>0) {  salgados = salgados + a11 + " Mini dog; ";valor= Number(a11)*0.60 + valor;  }
      // if(a12>0) {  salgados = salgados + a12 + " Tortinha de Frango; ";valor= Number(a12)*0.60 + valor;  }
      // if(a13>0) {  salgados = salgados + a13 + " Empada de Frango; ";valor= Number(a13)*0.60 + valor;  }
    }

    var retorno_salgados = [{"salgados": salgados, "preco": valor}];
    document.getElementById("cont_salgad1").value = 0;
    document.getElementById("cont_salgad2").value= 0;
    document.getElementById("cont_salgad3").value= 0;
    document.getElementById("cont_salgad4").value= 0;
    document.getElementById("cont_salgad5").value= 0;
    document.getElementById("cont_salgad6").value= 0;
    document.getElementById("cont_salgad7").value= 0;
    document.getElementById("cont_salgad8").value= 0;
    document.getElementById("cont_salgad9").value= 0;
    document.getElementById("cont_salgad10").value= 0;
    document.getElementById("cont_salgad11").value= 0;
    document.getElementById("cont_salgad12").value= 0;
    document.getElementById("cont_salgad13").value= 0;
    document.getElementById("cont_kit_salgad1").value = 0;
    document.getElementById("cont_kit_salgad2").value= 0;
    document.getElementById("cont_kit_salgad3").value= 0;
    document.getElementById("cont_kit_salgad4").value= 0;
    document.getElementById("cont_kit_salgad5").value= 0;
    // document.getElementById("cont_kit_salgad6").value= 0;
    // document.getElementById("cont_kit_salgad7").value= 0;
    // document.getElementById("cont_kit_salgad8").value= 0;
    // document.getElementById("cont_kit_salgad9").value= 0;
    // document.getElementById("cont_kit_salgad10").value= 0;
    // document.getElementById("cont_kit_salgad11").value= 0;
    // document.getElementById("cont_kit_salgad12").value= 0;
    // document.getElementById("cont_kit_salgad13").value= 0;

    document.getElementById("cont_kit_promocao_salgad1").value = 0;
    document.getElementById("cont_kit_promocao_salgad2").value= 0;
    document.getElementById("cont_kit_promocao_salgad3").value= 0;
    document.getElementById("cont_kit_promocao_salgad4").value= 0;
    document.getElementById("cont_kit_promocao_salgad5").value= 0;
    return retorno_salgados;
  }

  function ler_descart(){
    var a1 = document.getElementById("cont_descart1").value;
    var a2 = document.getElementById("cont_descart2").value;
    var a3 = document.getElementById("cont_descart3").value;
    var a4 = document.getElementById("cont_descart4").value;
    var valor_descartaveis=0;
    var descartaveis ="";

    if(a1>0) {  descartaveis = descartaveis + a1 + " Copo 200ml; "; valor_descartaveis = valor_descartaveis + Number(a1)*5;  }
    if(a2>0) {  descartaveis = descartaveis + a2 + " Garfo sobremesa; "; valor_descartaveis = valor_descartaveis + Number(a2)*4.5;  }
    if(a3>0) {  descartaveis = descartaveis + a3 + " Pratos; "; valor_descartaveis = valor_descartaveis + Number(a3)*2;  }
    if(a4>0) {  descartaveis = descartaveis + a4 + " Gurdanapos; "; valor_descartaveis = valor_descartaveis + Number(a4)*2.5;  }

    document.getElementById("cont_descart1").value = 0;
    document.getElementById("cont_descart2").value= 0;
    document.getElementById("cont_descart3").value= 0;
    document.getElementById("cont_descart4").value= 0;

    var retorno_descartaveis = [{"descartaveis": descartaveis, "valor_descartaveis": valor_descartaveis }];
    return retorno_descartaveis;
  }

  function mudar_precos_tortas(){

    var tortas = document.getElementsByName("torta");
    for(var c=0;c<tortas.length;c++){
      if(tortas[c].checked){
        var torta = tortas[c].value;
        //tortas[c].checked = false;
      }
    }

    var select= document.getElementById("tamanho_torta");

    if(torta=="Bombom" || torta == "Casadinho"){
      $("#tamanho_torta").empty();
      var option = document.createElement("option");
      option.text = "Pequena - R$ 100,00";
      option.value = "Pequena;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Média - R$ 140,00";
      option.value = "Média;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Grande - R$ 200,00";
      option.value = "Grande;";
      select.add(option);
    }

    else if(torta=="Morango com Leite Ninho"){
      $("#tamanho_torta").empty();
      var option = document.createElement("option");
      option.text = "Pequena - R$ 100,00";
      option.value = "Pequena;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Média - R$ 150,00";
      option.value = "Média;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Grande - R$ 220,00";
      option.value = "Grande;";
      select.add(option);
    }
    else{
      var option = document.createElement("option");
      $("#tamanho_torta").empty();
      option.text = "PP - R$ 40,00";
      option.value = "PP;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Pequena - R$ 80,00";
      option.value = "Pequena;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Média - R$ 130,00";
      option.value = "Média;";
      select.add(option);
      var option = document.createElement("option");
      option.text = "Grande - R$ 180,00";
      option.value = "Grande;";
      select.add(option);

    }


  }


  function adicionar_pedido(){
    // if(document.getElementById("nucleo").value!= "Buscar no Local" && (document.getElementById("endereco").value== "" ||
    // document.getElementById("bairro").value== "" ||document.getElementById("numero_casa").value== "")) {
    //   swal("Por favor, preenche seu endereço, bairro ou número!");
    // }
    if(document.getElementById("name").value== "" || document.getElementById("telefone").value== ""){
      swal("Por favor, preencha nome ou telefone");
    }
    else if(document.getElementById("data").value== "" || document.getElementById("horario").value== ""){
      swal("Por favor, preencha os campos de data e horário de entrega.");
    }


    else{
      swal("Adicionado");
      var bebidas_kit="";
      var tamanho_torta="";
      var valor_kit="";
      var valor_bebidas="";
      var descartaveis = "";
      var valor_descartaveis = 0;

      var docinhos = "";


      var retorno_docinho= ler_docinhos();
      docinhos = retorno_docinho[0].docinhos;

      var retorno_bebida= ler_bebidas();
      bebidas_kit = retorno_bebida[0].bebidas;
      valor_bebidas = retorno_bebida[0].valor;

      if(tipo_kit == 'Kit 5 Pessoas'){
        bebidas_kit = retorno_bebida[0].bebidas;
        valor_bebidas = retorno_bebida[0].valor;
        tamanho_torta = "PP;";
        valor_kit = 88;
        $('#modal_escolhas').modal('hide');

      }
      if(tipo_kit == 'Kit 10 Pessoas'){
        bebidas_kit = retorno_bebida[0].bebidas;
        valor_bebidas = retorno_bebida[0].valor;
        tamanho_torta = "Pequena;";
        valor_kit = 167;
        $('#modal_escolhas').modal('hide');
      }

      if(tipo_kit == 'Kit Prime'){
        bebidas_kit = retorno_bebida[0].bebidas;
        valor_bebidas = retorno_bebida[0].valor;
        tamanho_torta = "Pequena;";
        valor_kit = 238;
        $('#modal_escolhas').modal('hide');
      }

      if(tipo_kit == 'Kit 20 Pessoas'){
        tamanho_torta = "Média;";
        bebidas_kit = retorno_bebida[0].bebidas;
        valor_bebidas = retorno_bebida[0].valor;
        valor_kit = 310;
        $('#modal_escolhas').modal('hide');

      }
      // if(tipo_kit == 'Kit 30 Pessoas'){
      //   bebidas_kit = "1 Coca cola 2L por Kit";
      //   valor_kit = 615;
      //   tamanho_torta = "Grande";
      //   $('#modal_escolhas').modal('hide');
      // }

      if(tipo_kit == 'Tortas'){
        tamanho_torta = document.getElementById("tamanho_torta").value;
        if (tamanho_torta=="PP;") {valor_kit = 40;}
        if (tamanho_torta=="Pequena;") {valor_kit = 80;}
        if (tamanho_torta=="Média;") {valor_kit = 130;}
        if (tamanho_torta=="Grande;") {valor_kit = 180;}
        $('#modal_torta').modal('hide');
      }

      if(tipo_kit == 'Refrigerantes'){
        $('#modal_refrigerante').modal('hide');
      }

      if(tipo_kit == 'Salgados'){
        // valor_kit = 50;
        $('#modal_salgado').modal('hide');
      }

      if(tipo_kit == 'Promocoes'){
        valor_kit = 85;
        $('#modal_promocoes').modal('hide');
      }

      if(tipo_kit == 'Descartaveis'){
        var descart = ler_descart();
        descartaveis = descart[0].descartaveis;
        valor_descartaveis = descart[0].valor_descartaveis;
        $('#modal_descartaveis').modal('hide');
      }

      var name = document.getElementById("name").value;
      var telefone = document.getElementById("telefone").value;
      var endereco = document.getElementById("endereco").value;
      var bairro = document.getElementById("bairro").value;
      var referencia = document.getElementById("referencia").value;
      var nucleo = document.getElementById("nucleo").value;
      var numero_casa = document.getElementById("numero_casa").value;
      var kit = tipo_kit;
      var bebidas = [];

      //bebidas.push(bebidas_kit);

      if(kit=="Tortas") var quantidade_pedidos = document.getElementById("quantidade_pedidos_tortas").value;
      else if(kit=="Salgados") var quantidade_pedidos = document.getElementById("quantidade_pedidos_salgadinhos").value;
      else if(kit=="Promocoes") var quantidade_pedidos = document.getElementById("quantidade_pedidos_promocoes").value;
      else {var quantidade_pedidos = document.getElementById("quantidade_pedidos_kit").value;}

      // var form_bebidas = document.getElementsByName("refri");
      // for(var b=0;b< form_bebidas.length;b++){
      //   if(form_bebidas[b].checked){
      //     bebidas.push(" "+ form_bebidas[b].value);
      //     form_bebidas[b].checked = false;
      //   }
      // }

      //
      // var form = document.getElementsByName("salgadinho");
      // for(var b=0;b< form.length;b++){
      //   if(form[b].checked){
      //     salgados.push(" "+ form[b].value);
      //     form[b].checked = false;
      //   }
      // }


      var tortas = document.getElementsByName("torta");
      for(var c=0;c<tortas.length;c++){
        if(tortas[c].checked){
          var torta = tortas[c].value;
          tortas[c].checked = false;
        }
      }

      var salgad = ler_salgados();
      var salgados = salgad[0].salgados;
      var valor_salgados = salgad[0].preco;

      if(tipo_kit == 'Salgados'){
        valor_kit = valor_salgados;
      }

      if(tipo_kit == 'Tortas'){
        if(torta =="Bombom" || torta =="Casadinho"){
          if (tamanho_torta=="Pequena;") {valor_kit = 100;}
          if (tamanho_torta=="Média;") {valor_kit = 140;}
          if (tamanho_torta=="Grande;") {valor_kit = 200;}
        }
      }
            if(tipo_kit == 'Tortas'){
        if(torta =="Morango com Leite Ninho"){
          if (tamanho_torta=="Pequena;") {valor_kit = 100;}
          if (tamanho_torta=="Média;") {valor_kit = 150;}
          if (tamanho_torta=="Grande;") {valor_kit = 220;}
        }
}
        var descricao = quantidade_pedidos+ " pedido(s) de " + kit;
        valor_kit = Number(quantidade_pedidos)*Number(valor_kit) + Number(valor_bebidas) + Number(valor_descartaveis);

        console.log(bebidas_kit);

        waitSeconds(100);
        indices_pedidos.push(i);
        localStorage.setItem("indices_pedidos", indices_pedidos);
        localStorage.setItem("pedido"+i, JSON.stringify({
          nome: name,
          telefone:telefone,
          descricao: descricao,
          kit:kit,
          salgados:salgados,
          tortas:torta,
          tamanho_torta:tamanho_torta,
          endereco:endereco,
          quantidade_pedidos: quantidade_pedidos,
          bairro:bairro,
          referencia:referencia,
          nucleo:nucleo ,
          numero_casa: numero_casa,
          bebidas:bebidas_kit,
          valor_bebidas:valor_bebidas,
          valor_kit:valor_kit,
          descartaveis: descartaveis,
          valor_descartaveis:valor_descartaveis,
          docinhos:docinhos}));
          i=i+1;
          // $('html,body').animate({
          //   scrollTop: $("#retorno").offset().top
          // }, 2000);

        }

      }


      function conferir_pedido(categoria){

        var conf_refr=-1;
        for(var a1=0;a1<indices_pedidos.length;a1++){
          var pedido = JSON.parse(localStorage.getItem("pedido"+indices_pedidos[a1]));

          refrigerantes = pedido["kit"];
          if (refrigerantes=="Refrigerantes"){
            conf_refr= Number(conf_refr)+1;
          }
        }

        if(Number(conf_refr)==indices_pedidos.length){
          swal("Um pedido não pode ser feito apenas com refrigerantes");
        }
        else{
          if(auxiliar_html==1){
            $("#modal-body").html(old_html);
          }
          else{
            auxiliar_html=1;
            old_html = $("#modal-body").html();
          }
          $('#exampleModalCenter').modal();

          var div = document.getElementById("modal-body");
          var valor=0;
          var nucleo;
          var busca;

          for(var a=0;a<indices_pedidos.length;a++){
            var pedido = JSON.parse(localStorage.getItem("pedido"+indices_pedidos[a]));

            nucleo = pedido["nucleo"];
            var h = document.createElement("p");

            var valor_pedido = pedido["valor_kit"];
            valor_pedido = formataDinheiro(valor_pedido);

            if(pedido["kit"] == "Tortas"){
              h.innerHTML = "</br> <b>Pedido "+(Number(a)+1) + ":</b></br>" + "<b>Descrição: </b> " + pedido["descricao"] +"</br>"
              + "<b>Sabor: </b>" + pedido["tortas"]+ "</br>"
              + "<b>Tamanho : </b>" + pedido["tamanho_torta"] +"</br>"
              + "<b>Quantidade: </b>" + pedido["quantidade_pedidos"] +"</br>"
              + "<b>Valor: </b> " + valor_pedido +"</br>";
              div.append(h);
            }
            if(pedido["kit"] == "Salgados"){
              h.innerHTML = "</br> <b>Pedido "+(Number(a)+1) + ":</b></br>" + "<b>Descrição: </b> " + pedido["descricao"] +"</br>"
              + "<b>Salgados:</b> " + pedido["salgados"] +"</br>"
              + "<b>Quantidade: </b>" + pedido["quantidade_pedidos"] +"</br>"
              + "<b>Valor: </b> " + valor_pedido +"</br>";
              div.append(h);
            }
            if(pedido["kit"] == "Refrigerantes"){

              var valor_pedido = pedido["valor_bebidas"];
              valor_pedido = formataDinheiro(valor_pedido);

              h.innerHTML = "</br> <b>Pedido "+(Number(a)+1) + ":</b></br>" + "<b>Descrição: </b> " + pedido["descricao"] +"</br>"
              + "<b>Bebidas:</b> " + pedido["bebidas"] +"</br>"
              + "<b>Quantidade: </b>" + pedido["quantidade_pedidos"] +"</br>"
              + "<b>Valor: </b> " + valor_pedido +"</br>";
              div.append(h);
            }
            if(pedido["kit"] == "Descartaveis"){
              var valor_pedido = pedido["valor_descartaveis"];
              valor_pedido = formataDinheiro(valor_pedido);

              h.innerHTML = "</br> <b>Pedido "+(Number(a)+1) + ":</b></br>" + "<b>Descrição: </b> " + pedido["descricao"] +"</br>"
              + "<b>Descartáveis:</b> " + pedido["descartaveis"] +"</br>"
              + "<b>Quantidade: </b>" + pedido["quantidade_pedidos"] +"</br>"
              + "<b>Valor: </b> " + valor_pedido +"</br>";
              div.append(h);
            }

            if(pedido["kit"]=="Promocoes" || pedido["kit"]=="Promocoes" || pedido["kit"]=="Promocoes" || pedido["kit"]=="Promocoes"){
              h.innerHTML = "</br> <b>Pedido "+(Number(a)+1) + ":</b></br>" + "<b>Descrição: </b> " + pedido["descricao"] +"</br>"
              + "<b>Salgados:</b> " + pedido["salgados"] +"</br>"
              + "<b>Torta: </b>" + pedido["tortas"]+ "</br>"
              + "<b>Valor: </b> " + valor_pedido +"</br>";
              div.append(h);
            }

            if(pedido["kit"]=="Kit 5 Pessoas" || pedido["kit"]=="Kit 10 Pessoas" || pedido["kit"]=="Kit 20 Pessoas" || pedido["kit"]=="Kit Prime"){
              h.innerHTML = "</br> <b>Pedido "+(Number(a)+1) + ":</b></br>" + "<b>Descrição: </b> " + pedido["descricao"] +"</br>"
              + "<b>Salgados:</b> " + pedido["salgados"] +"</br>"
              + "<b>Torta: </b>" + pedido["tortas"]+ "</br>"
              + "<b>Docinhos: </b>" + pedido["docinhos"]+ "</br>"
              + "<b>Bebidas: </b>" + pedido["bebidas"] +"</br>"
              + "<b>Valor: </b> " + valor_pedido +"</br>";
              div.append(h);
            }



            var btn = document.createElement("button");
            var t = document.createTextNode("Excluir pedido");
            btn.append(t);
            btn.className += 'btn btn-danger';
            btn.id += indices_pedidos[a];
            btn.name+= 'botaoExcluir';
            btn.onclick = function() {
              excluir_pedido(this.id);
            };
            div.append(btn);


            if(pedido["tamanho"]==17){
              h.innerHTML = "</br> <b>Pedido "+a + ":</b></br>" + "Prato Executivo </br>"
              + "Bebidas: " + pedido["bebida"] +"</br>"
              ;
              div.append(h);
              var btn = document.createElement("button");
              var t = document.createTextNode("Excluir pedido");
              btn.append(t);
              btn.className += 'btn btn-danger';
              btn.id += indices_pedidos[a];
              btn.name+= 'botaoExcluir';
              btn.onclick = function() {
                excluir_pedido(this.id);
              };
              div.append(btn);
            }

            if(nucleo =="Buscar no Local"){
              busca = 0;
            }
            else if(nucleo =="Cidade Nova"){
              busca = 3;
            }
            else{
              busca = 5;
            }

            if(a>0){
              busca =0;
            }

            valor = parseInt(valor) + parseInt(pedido["valor_kit"]) + parseInt(busca);
            valor_final = valor;
          }

          var h4 = document.createElement("h4");
          //  h4.innerHTML = "</br>Valor final do pedido: R$"+ valor + ".00 </br> Incluso taxa de entrega de R$"+ busca + ".00" ;

          valor = formataDinheiro(valor);


          h4.innerHTML = "</br>Valor final do pedido: "+ valor;
          document.getElementById("valor_final").append(h4);
        }
      }

      function formataDinheiro(n) {
        return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
      }

      function excluir_pedido(index){

        for( var b = 0; b < indices_pedidos.length; b++){
          if ( indices_pedidos[b] == index) {
            indices_pedidos.splice(b, 1);
            localStorage.setItem("indices_pedidos", indices_pedidos);
            localStorage.removeItem("pedido"+index);
          }
        }

        conferir_pedido("excluir");
      }

      (function ($) {
        "use strict";


        /*==================================================================
        [ Focus Contact2 ]*/
        $('.input100').each(function(){
          $(this).on('blur', function(){
            if($(this).val().trim() != "") {
              $(this).addClass('has-val');
            }
            else {
              $(this).removeClass('has-val');
            }
          })
        })


        /*==================================================================
        [ Validate ]
        var name = $('.validate-input input[name="name"]');
        var email = $('.validate-input input[name="email"]');
        var message = $('.validate-input textarea[name="message"]');


        $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
        showValidate(name);
        check=false;
      }


      if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
      showValidate(email);
      check=false;
    }

    if($(message).val().trim() == ''){
    showValidate(message);
    check=false;
  }

  return check;
});


$('.validate-form .input100').each(function(){
$(this).focus(function(){
hideValidate(this);
});
});

function showValidate(input) {
var thisAlert = $(input).parent();

$(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
var thisAlert = $(input).parent();

$(thisAlert).removeClass('alert-validate');
}

*/

})(jQuery);
