
function init(){
  $.ajax({
    url: "../control/BuscaDepartamento.php",
    type: "POST",
    dataType: "json",
    success: function(data3) {

      $.ajax({
        url: "../control/buscaDesemepenho.php",
        type: "POST",
        dataType: "json",
        success: function(data4) {

      var select = document.createElement("select");
      select.id = "pesquisa_select";
      select.className = "form-control form-control-lg";
      select.setAttribute("onchange","geralDashboard()");

      var select2 = document.createElement("select");
      select2.id = "departamento_select";
      select2.className = "form-control form-control-lg";
      select2.setAttribute("onchange","geralDashboard()");

      var option = document.createElement("option");
      option.value = "0";
      var t = document.createTextNode("Todas as Pesquisas");
      option.appendChild(t);
      select.appendChild(option);

      var option2 = document.createElement("option");
      option2.value = "0";
      var t2 = document.createTextNode("Todos os Departamentos");
      option2.appendChild(t2);
      select2.appendChild(option2);

      data4.map(function(item){
        var option = document.createElement("option");
        option.value = item.id;
        var t = document.createTextNode(item.indicador);
        option.appendChild(t);
        select.appendChild(option)
      });
      data3.map(function(item){
        var option2 = document.createElement("option");
        option2.value = item.nome;
        var t2 = document.createTextNode(item.nome);
        option2.appendChild(t2);
        select2.appendChild(option2)
      });
      var label1 = document.createElement("label");
      var label2 = document.createElement("label");
      var labelT1 = document.createTextNode("Avaliação");
      var labelT2 = document.createTextNode("Departamento");
      label1.appendChild(labelT1);
      label2.appendChild(labelT2);
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      div1.className = "form-group col-12";
      div2.className = "form-group col-12";
      div1.appendChild(label1);
      div1.appendChild(select);
      div2.appendChild(label2);
      div2.appendChild(select2);
      var div3 = document.createElement("div");
      div3.className = "col-12";
      div3.appendChild(div1);
      div3.appendChild(div2);
      $("#select_geral").html(div3);
      geralDashboard();

    }});
      }});
}


function geralDashboard(){
  var pesquisa_select = document.getElementById("pesquisa_select").value;
  var departamento_select = document.getElementById("departamento_select").value;
$.ajax({
  type: 'POST',
  url: "../control/BuscaMatriz.php",
  dataType: "json",
  success: function(data2) {
    var tam = data2[0].matriz;
    $.ajax({
      type: 'POST',
      url: "../control/BuscaRespostaDesempenho2.php",
      dataType: "json",
      data:{pesquisa:pesquisa_select,departamento:departamento_select},
      success: function(data) {
        var tam2 = data.length;
        var tamGestor = 0;
        var tamNaoGestor = 0;
        for (var i = 0; i < data.length; i++) {
          if (data[i].gestor=="true") {
            tamGestor +=1;
          }else {
            tamNaoGestor +=1;
          }
        }
    /////////////////////////////////////////////////////////////////////////////
    if (tam==4) {

      document.getElementById("matriz_desempenho_4").style.display="block";
      var intervalo = data2[0].intervalos_4;
      var texto = data2[0].textos_4;
      texto = JSON.parse(texto);
      intervalo = JSON.parse(intervalo);
      $("#baixo_matriz4_dash").html("Baixo ("+intervalo[0]+" a "+intervalo[1]+")");
      $("#mediobaixo_matriz4_dash").html("Médio Baixo ("+intervalo[2]+" a "+intervalo[3]+")");
      $("#medioalto_matriz4_dash").html("Médio Alto ("+intervalo[4]+" a "+intervalo[5]+")");
      $("#alto_matriz4_dash").html("Alto ("+intervalo[6]+" a "+intervalo[7]+")");
      $("#baixo_matriz4_dash1").html("Baixo ("+intervalo[0]+" a "+intervalo[1]+")");
      $("#mediobaixo_matriz4_dash1").html("Médio Baixo ("+intervalo[2]+" a "+intervalo[3]+")");
      $("#medioalto_matriz4_dash1").html("Médio Alto ("+intervalo[4]+" a "+intervalo[5]+")");
      $("#alto_matriz4_dash1").html("Alto ("+intervalo[6]+" a "+intervalo[7]+")");
      //////////////////////////////////////////////////////////////////
      for (var i = 0; i < 16; i++) {
        var d1 = document.createElement("div");var d2 = document.createElement("div");
        var d3 = document.createElement("div");var d4 = document.createElement("div");
        var d5 = document.createElement("div");
        d5.style.display = "flex";d1.style.height = "100%"; d1.style.width = "100%";
        d2.style.width = "100%";d2.style.height = "20%";d2.style.textAlign = "center";d2.style.fontWeight ="bold";
        d3.style.width = "50%";d3.style.height = "80%";d4.style.width = "50%";d4.style.height = "80%";
        var contG = 0;
        var contNG = 0;
        for (var j = 0; j < tam2; j++) {
          //////////////////////////////////////////
          if(i==0){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==1){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==2){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4]) {
                contNG = contNG+1;
              }
            }
          }else if(i==3){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[6] && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[6] && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6]) {
                contNG = contNG+1;
              }
            }
          }else if(i==4){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6] && Number(data[j].mc)<intervalo[2] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==5){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6]  && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6]  && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6]   && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6]   && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==6){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6]  && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6]  && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6]   && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6]   && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==7){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6]  && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6]  && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mt)<intervalo[6]   && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mtg)<intervalo[6]   && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==8){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4] && Number(data[j].mc)<intervalo[2] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==9){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]  && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]  && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]   && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]   && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==10){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]  && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]  && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[6]   && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[6]   && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==11){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]  && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]  && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]   && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]   && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==12){
              if (data[j].gestor=="true") {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[2]) {
                  contG = contG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[2]) {
                  contG = contG+1;
                }
              }else {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[2]) {
                  contNG = contNG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[2]) {
                  contNG = contNG+1;
                }
              }
            }else if(i==13){
              if (data[j].gestor=="true") {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                  contG = contG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2]) {
                  contG = contG+1;
                }
              }else {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                  contNG = contNG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2]) {
                  contNG = contNG+1;
                }
              }
            }else if(i==14){
              if (data[j].gestor=="true") {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4]) {
                  contG = contG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4]) {
                  contG = contG+1;
                }
              }else {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[6] && Number(data[j].mc)>=intervalo[4]) {
                  contNG = contNG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[6] && Number(data[j].mcg)>=intervalo[4]) {
                  contNG = contNG+1;
                }
              }
            }else if(i==15){
              if (data[j].gestor=="true") {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6]) {
                  contG = contG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6]) {
                  contG = contG+1;
                }
              }else {
                if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<=intervalo[7] && Number(data[j].mc)>=intervalo[6]) {
                  contNG = contNG+1;
                }
                if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<=intervalo[7] && Number(data[j].mcg)>=intervalo[6]) {
                  contNG = contNG+1;
                }
              }
            }
          ///////////////////////////////////////////
        }
        var contG = (contG/(tamGestor*2))*100;
        var contNG = (contNG/(tamNaoGestor*2))*100;
        var por_gestor = contG+"%";var por_Naogestor = contNG+"%";
        var a = i*2;
        var b = a+1;
        var d2t = document.createTextNode(texto[a]);
        var p31 = document.createElement("p");var p31t = document.createTextNode("Gestor");
        var p32 = document.createElement("p");var p32t = document.createTextNode(por_gestor);
        p31.appendChild(p31t);p32.appendChild(p32t);
        var p41 = document.createElement("p");var p41t = document.createTextNode("Não Gestor");
        var p42 = document.createElement("p");var p42t = document.createTextNode(por_Naogestor);
        p41.appendChild(p41t);p42.appendChild(p42t);
        p31.style.textAlign = "center";p32.style.textAlign = "center";
        p41.style.textAlign = "center";p42.style.textAlign = "center";

        d2.appendChild(d2t);
        d2.style.backgroundColor = texto[b];
        d3.style.marginTop = "20%";d4.style.marginTop = "20%";
        d3.appendChild(p31);d3.appendChild(p32);
        d4.appendChild(p41);d4.appendChild(p42);d1.appendChild(d2);d5.appendChild(d3);
        d5.appendChild(d4);d1.appendChild(d5);
        var t2 = i+1;
        var t = "#m4"+t2;
        $(t).html(d1);
      }
      //////////////////////////////////////////////////////////////////
    }else if (tam==3){
      document.getElementById("matriz_desempenho_3").style.display="block";
      var intervalo = data2[0].intervalos_3;
      intervalo = JSON.parse(intervalo);
      var texto = data2[0].textos_3;
      texto = JSON.parse(texto);
      ////////////
      $("#baixo_matriz3_dash").html("Baixo ("+intervalo[0]+" a "+intervalo[1]+")");
      $("#medio_matriz3_dash").html("Médio ("+intervalo[2]+" a "+intervalo[3]+")");
      $("#alto_matriz3_dash").html("Alto ("+intervalo[4]+" a "+intervalo[5]+")");
      $("#baixo_matriz3_dash1").html("Baixo ("+intervalo[0]+" a "+intervalo[1]+")");
      $("#medio_matriz3_dash1").html("Médio ("+intervalo[2]+" a "+intervalo[3]+")");
      $("#alto_matriz3_dash1").html("Alto ("+intervalo[4]+" a "+intervalo[5]+")");
      //////////////////////////////////////////////////////////////////
      for (var i = 0; i < 9; i++) {
        var d1 = document.createElement("div");var d2 = document.createElement("div");
        var d3 = document.createElement("div");var d4 = document.createElement("div");
        var d5 = document.createElement("div");
        d5.style.display = "flex";d1.style.height = "100%"; d1.style.width = "100%";
        d2.style.width = "100%";d2.style.height = "20%";d2.style.textAlign = "center";d2.style.fontWeight ="bold";
        d3.style.width = "50%";d3.style.height = "80%";d4.style.width = "50%";d4.style.height = "80%";
        var contG = 0;
        var contNG = 0;
        for (var j = 0; j < tam2; j++) {
          //////////////////////////////////////////
          if(i==0){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mc)<intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==1){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==2){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mc)<=intervalo[5] && Number(data[j].mc)>=intervalo[4]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mcg)<=intervalo[5] && Number(data[j].mcg)>=intervalo[4]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[4] && Number(data[j].mc)<=intervalo[5] && Number(data[j].mc)>=intervalo[4]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[4] && Number(data[j].mcg)<=intervalo[5] && Number(data[j].mcg)>=intervalo[4]) {
                contNG = contNG+1;
              }
            }
          }else if(i==3){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4] && Number(data[j].mc)<intervalo[2] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==4){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]  && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]  && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]   && Number(data[j].mc)<intervalo[4] && Number(data[j].mc)>=intervalo[2] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]   && Number(data[j].mcg)<intervalo[4] && Number(data[j].mcg)>=intervalo[2] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==5){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]  && Number(data[j].mc)>intervalo[4]  ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]  && Number(data[j].mcg)>intervalo[4] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mt)<intervalo[4]   && Number(data[j].mc)>intervalo[4]  ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mtg)<intervalo[4]   && Number(data[j].mcg)>intervalo[4] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==6){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)<intervalo[2]  && Number(data[j].mc)<intervalo[2] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[2] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)<intervalo[2]  && Number(data[j].mc)<intervalo[2]  ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)<intervalo[2]  && Number(data[j].mcg)<intervalo[2] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==7){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)<intervalo[2]  && Number(data[j].mc)>=intervalo[2] && Number(data[j].mc)<intervalo[4] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)>=intervalo[2] && Number(data[j].mcg)<intervalo[4] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)<intervalo[2]  && Number(data[j].mc)>=intervalo[2] && Number(data[j].mc)<intervalo[4] ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)<intervalo[2]  && Number(data[j].mcg)>=intervalo[2] && Number(data[j].mcg)<intervalo[4] ) {
                contNG = contNG+1;
              }
            }
          }else if(i==8){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)<intervalo[2]  && Number(data[j].mc)>=intervalo[4] ) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)>=intervalo[4] ) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)<intervalo[2]  && Number(data[j].mc)>=intervalo[4]  ) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)<intervalo[2]  && Number(data[j].mcg)>=intervalo[4] ) {
                contNG = contNG+1;
              }
            }
          }
          ///////////////////////////////////////////
        }
        var contG = (contG/(tamGestor*2))*100;
        var contNG = (contNG/(tamNaoGestor*2))*100;
        var por_gestor = contG+"%";var por_Naogestor = contNG+"%";
        var a = i*2;
        var b = a+1;
        var d2t = document.createTextNode(texto[a]);
        var p31 = document.createElement("p");var p31t = document.createTextNode("Gestor");
        var p32 = document.createElement("p");var p32t = document.createTextNode(por_gestor);
        p31.appendChild(p31t);p32.appendChild(p32t);
        var p41 = document.createElement("p");var p41t = document.createTextNode("Não Gestor");
        var p42 = document.createElement("p");var p42t = document.createTextNode(por_Naogestor);
        p41.appendChild(p41t);p42.appendChild(p42t);
        p31.style.textAlign = "center";p32.style.textAlign = "center";
        p41.style.textAlign = "center";p42.style.textAlign = "center";

        d2.appendChild(d2t);
        d2.style.backgroundColor = texto[b];
        d3.style.marginTop = "20%";d4.style.marginTop = "20%";
        d3.appendChild(p31);d3.appendChild(p32);
        d4.appendChild(p41);d4.appendChild(p42);d1.appendChild(d2);d5.appendChild(d3);
        d5.appendChild(d4);d1.appendChild(d5);
        var t2 = i+1;
        var t = "#m3"+t2;
        $(t).html(d1);
      }
      //////////////////////////////////////////////////////////////////

    }else if (tam==2){
      document.getElementById("matriz_desempenho_2").style.display="block";
      var intervalo = data2[0].intervalos_2;
      intervalo = JSON.parse(intervalo);
      var texto = data2[0].textos_2;
      texto = JSON.parse(texto);

      ////////////
      $("#baixo_matriz2_dash").html("Baixo ("+intervalo[0]+" a "+intervalo[1]+")");
      $("#alto_matriz2_dash").html("Alto ("+intervalo[2]+" a "+intervalo[3]+")");
      $("#baixo_matriz2_dash1").html("Baixo ("+intervalo[0]+" a "+intervalo[1]+")");
      $("#alto_matriz2_dash1").html("Alto ("+intervalo[2]+" a "+intervalo[3]+")");
      //////////////////////////////////////////////////////////////////
      for (var i = 0; i < 4; i++) {
        var d1 = document.createElement("div");var d2 = document.createElement("div");
        var d3 = document.createElement("div");var d4 = document.createElement("div");
        var d5 = document.createElement("div");
        d5.style.display = "flex";d1.style.height = "100%"; d1.style.width = "100%";
        d2.style.width = "100%";d2.style.height = "20%";d2.style.textAlign = "center";d2.style.fontWeight ="bold";
        d3.style.width = "50%";d3.style.height = "80%";d4.style.width = "50%";d4.style.height = "80%";
        var contG = 0;
        var contNG = 0;
        for (var j = 0; j < tam2; j++) {
          //////////////////////////////////////////
          if(i==0){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mc)<intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==1){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mc)>=intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mcg)>=intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)>=intervalo[2] && Number(data[j].mc)>=intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)>=intervalo[2] && Number(data[j].mcg)>=intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==2){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)<intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)<intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }else if(i==3){
            if (data[j].gestor=="true") {
              if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)>=intervalo[2]) {
                contG = contG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)>=intervalo[2]) {
                contG = contG+1;
              }
            }else {
              if (Number(data[j].mt)<intervalo[2] && Number(data[j].mc)>=intervalo[2]) {
                contNG = contNG+1;
              }
              if (Number(data[j].mtg)<intervalo[2] && Number(data[j].mcg)>=intervalo[2]) {
                contNG = contNG+1;
              }
            }
          }
          ///////////////////////////////////////////
        }
        var contG = (contG/(tamGestor*2))*100;
        var contNG = (contNG/(tamNaoGestor*2))*100;
        var por_gestor = contG+"%";var por_Naogestor = contNG+"%";
        var a = i*2;
        var b = a+1;
        var d2t = document.createTextNode(texto[a]);
        var p31 = document.createElement("p");var p31t = document.createTextNode("Gestor");
        var p32 = document.createElement("p");var p32t = document.createTextNode(por_gestor);
        p31.appendChild(p31t);p32.appendChild(p32t);
        var p41 = document.createElement("p");var p41t = document.createTextNode("Não Gestor");
        var p42 = document.createElement("p");var p42t = document.createTextNode(por_Naogestor);
        p41.appendChild(p41t);p42.appendChild(p42t);
        p31.style.textAlign = "center";p32.style.textAlign = "center";
        p41.style.textAlign = "center";p42.style.textAlign = "center";

        d2.appendChild(d2t);
        d2.style.backgroundColor = texto[b];
        d3.style.marginTop = "20%";d4.style.marginTop = "20%";
        d3.appendChild(p31);d3.appendChild(p32);
        d4.appendChild(p41);d4.appendChild(p42);d1.appendChild(d2);d5.appendChild(d3);
        d5.appendChild(d4);d1.appendChild(d5);
        var t2 = i+1;
        var t = "#m2"+t2;
        $(t).html(d1);
      }
      //////////////////////////////////////////////////////////////////

    }
    /////////////////////////////////////////////////////////////////////////////
    geral();
    }});
      }});

}

function geral(){
  var pesquisa_select = document.getElementById("pesquisa_select").value;
  var departamento_select = document.getElementById("departamento_select").value;
  var elementechart = document.createElement("canvas");
  elementechart.className = "col-12";
  elementechart.id = "bar-chart";
  $("#div_chart").html(elementechart);
  var elementechart2 = document.createElement("canvas");
  elementechart2.className = "col-12";
  elementechart2.id = "bar-chart-horizontal";
  $("#div_charthorizontal").html(elementechart2);
  $.ajax({
    type: 'POST',
    url: "../control/BuscaRespostaDesempenho2.php",
    dataType: "json",
    data:{pesquisa:pesquisa_select,departamento:departamento_select},
    success: function(data) {
      var gestores_number = 0;
      var nao_gestores_number = 0;
      var gestores_medias = 0;
      var nao_gestores_medias = 0;

      if (data=="0") {
                  new Chart(document.getElementById("bar-chart"), {
                      type: 'horizontalBar',
                      data: {
                        labels: ["Respostas", "Resposta Gestores", "Resposta Não Gestores"],
                        datasets: [
                          {
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                            data: [0,0,0]
                          }
                        ]
                      },
                      options: {
                        legend: { display: false },
                        title: {
                          display: true,
                          text: 'Dados Gerais Avaliação Desempenho'
                        }
                      }
                  });

                  new Chart(document.getElementById("bar-chart-horizontal"), {
                      type: 'horizontalBar',
                      data: {
                        labels: ["Gestores", "Não Gestores"],
                        datasets: [
                          {
                            backgroundColor: ["#3e95cd", "#8e5ea2"],
                            data: [0,0]
                          }
                        ]
                      },
                      options: {
                        legend: { display: false },
                        title: {
                          display: true,
                          text: 'Media das Notas'
                        }
                      }
                  });
                      indicadores_tables(data,pesquisa_select);
      }else {
        data.map(function(item,index){
          if (item.gestor=="true") {
            gestores_number +=1;
          }else {
            nao_gestores_number +=1;
          }
        });
        var cont_gestor = 0;
        var cont_ngestor = 0;
        data.map(function(item,index){
            var aux = JSON.parse(item.resposta);
          if (item.gestor=="true") {
            for (var i = 0; i < aux.length; i++) {
              cont_gestor = cont_gestor+1;
              gestores_medias = gestores_medias+Number(aux[i]);
            }
          }else {
            for (var i = 0; i < aux.length; i++) {
              cont_ngestor = cont_ngestor+1;
              nao_gestores_medias = nao_gestores_medias+Number(aux[i]);
            }
          }
        });

        var r_gestor = gestores_medias/cont_gestor;
        var r_ngestor = nao_gestores_medias/cont_ngestor;


                    new Chart(document.getElementById("bar-chart"), {
                        type: 'horizontalBar',
                        data: {
                          labels: ["Respostas Total", "Resposta Gestores", "Resposta Não Gestores"],
                          datasets: [
                            {
                              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                              data: [data.length,gestores_number,nao_gestores_number,0]
                            }
                          ]
                        },
                        options: {
                          legend: { display: false },
                          title: {
                            display: true,
                            text: 'Dados Gerais Avaliação Desempenho'
                          }
                        }
                    });

                    new Chart(document.getElementById("bar-chart-horizontal"), {
                        type: 'horizontalBar',
                        data: {
                          labels: ["Gestores", "Não Gestores"],
                          datasets: [
                            {
                              backgroundColor: ["#3e95cd", "#8e5ea2"],
                              data: [r_gestor,r_ngestor,0]
                            }
                          ]
                        },
                        options: {
                          legend: { display: false },
                          title: {
                            display: true,
                            text: 'Media das Notas'
                          }
                        }
                    });
              indicadores_tables(data,pesquisa_select);
      }


    }});



}




function indicadores_tables(data,pesquisa_select){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores.php",
    dataType: "json",
    data:{id:pesquisa_select},
    success: function(data2) {
      var gestor_tec = [];
      var gestor_comp = [];
      var naogestor_tec = [];
      var naogestor_comp = [];
      for (var i = 0; i < data2.length; i++) {
        if (data2[i].categoria=="1") {
          //Comportamental gestor
          gestor_comp.push({"titulo":data2[i].texto,"nome_indicador":data2[i].nome_indicador,"value":0,"qnt":0});
        }else if (data2[i].categoria=="2") {
          //Comportamental Não Gestor
          naogestor_comp.push({"titulo":data2[i].texto,"nome_indicador":data2[i].nome_indicador,"value":0,"qnt":0});
        }else if (data2[i].categoria=="3") {
          //tecnica gestor
          gestor_tec.push({"titulo":data2[i].texto,"nome_indicador":data2[i].nome_indicador,"value":0,"qnt":0});
        }else if (data2[i].categoria=="4") {
          //tecnica não gestor
          naogestor_tec.push({"titulo":data2[i].texto,"nome_indicador":data2[i].nome_indicador,"value":0,"qnt":0});
        }
      }

      var gestor_comp2 = unico(gestor_comp);
      var gestor_tec2 = unico(gestor_tec);
      var naogestor_comp2 = unico(naogestor_comp);
      var naogestor_tec2 = unico(naogestor_tec);

      data.map(function(item,index){
        var resposta = JSON.parse(item.resposta);
        var indicadores = JSON.parse(item.indicadores);
        var conteudoGestor = [];
        var conteudo = [];
        for (var i = 0; i < indicadores.length; i++) {
          if((item.gestor=="true" && indicadores[i][0]=="1" && indicadores[i][2]!="0")||(item.gestor=="true" && indicadores[i][0]=="3" && indicadores[i][2]!="0")){
            conteudoGestor.push({"categoria":indicadores[i][0],"titulo":indicadores[i][1],"subtitulo":indicadores[i][2],"texto":indicadores[i][3]});
          }else if((item.gestor=="false" && indicadores[i][0]=="2" && indicadores[i][2]!="0")||(item.gestor=="false" && indicadores[i][0]=="4" && indicadores[i][2]!="0")){
            conteudo.push({"categoria":indicadores[i][0],"titulo":indicadores[i][1],"subtitulo":indicadores[i][2],"texto":indicadores[i][3]});
          }
        }
        for (var i = 0; i < resposta.length; i++) {
          if (item.gestor=="true"){
            if(conteudoGestor[i].categoria=="1"){
              for(var j = 0; j < gestor_comp2.length; j++) {
                if(conteudoGestor[i].titulo==gestor_comp2[j].titulo){
                  gestor_comp2[j].value = Number(gestor_comp2[j].value)+ Number(resposta[i]);
                  gestor_comp2[j].qnt += 1;
                }
              }
            }else{
              for(var j = 0; j < gestor_tec2.length; j++) {
                if(conteudoGestor[i].titulo==gestor_tec2[j].titulo){
                  gestor_tec2[j].value =  Number(gestor_tec2[j].value)+Number(resposta[i]);
                  gestor_tec2[j].qnt += 1;
                }
              }
            }
          }else if (item.gestor=="false"){
            if(conteudo[i].categoria=="2"){
              for(var j = 0; j < naogestor_comp2.length; j++) {
                if(conteudo[i].titulo==naogestor_comp2[j].titulo){
                  naogestor_comp2[j].value =Number(naogestor_comp2[j].value)+ Number(resposta[i]);
                  naogestor_comp2[j].qnt += 1;
                }
              }
            }else{
              for(var j = 0; j < naogestor_tec2.length; j++) {
                if(conteudo[i].titulo==naogestor_tec2[j].titulo){
                  naogestor_tec2[j].value =Number(naogestor_tec2[j].value)+ Number(resposta[i]);
                  naogestor_tec2[j].qnt += 1;
                }
              }
            }
          }
        }

      });
      plot_indicadores(gestor_comp2,gestor_tec2,naogestor_comp2,naogestor_tec2);
  }});
}

function plot_indicadores(compGestor,tecGestor,comp,tec){

  for (var i = 0; i < compGestor.length; i++) {
    var value = compGestor[i].value;
    var qtn = compGestor[i].qnt;
    compGestor[i].value = Number(value)/Number(qtn);
  }
  for (var i = 0; i < tecGestor.length; i++) {
    var value = tecGestor[i].value;
    var qtn = tecGestor[i].qnt;
    tecGestor[i].value = Number(value)/Number(qtn);
  }
  for (var i = 0; i < comp.length; i++) {
    var value = comp[i].value;
    var qtn = comp[i].qnt;
    comp[i].value = Number(value)/Number(qtn);
  }
  for (var i = 0; i < tec.length; i++) {
    var value = tec[i].value;
    var qtn = tec[i].qnt;
    tec[i].value = Number(value)/Number(qtn);
  }


  table1(compGestor);
  table2(tecGestor);
  table3(comp);
  table4(tec);
}

function table1(data){
  var ids = [];
  var media = [];

  for (var i = 0; i < data.length; i++) {
    ids.push("Indice "+data[i].id);
    media.push(data[i].value);
  }

  if (ids.length<4) {
    var tam = 4 - ids.length;
    for (var i = 0; i < tam; i++) {
      ids.push(" - ");
      media.push(1);
    }
  }

  new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ids,
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: media
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribuição Media dos Indicadores'
      }
    }
});
  var table = document.getElementById('table11');
  var table1 = $('#table11').DataTable();table1.clear().draw();table1.destroy();
  for(var i=0; i<data.length; i++){
    var newRow = document.createElement('tr');
  }
  if ( $.fn.dataTable.isDataTable( '#table11' ) ) {
    table = $('#table11').DataTable();
  }
  else {
    table = $('#table11').DataTable( {
      "scrollX": true,
      data: data,
      columns: [
        { data: "id"},
        { data: "titulo"},
        { data: "value"},
    ],
      dom: 'Bfrtip',
       buttons: [
           'excel',
           'pdf'
       ],
        select: true,
    } );
  }
}

function table2(data){

  var ids = [];
  var media = [];

  for (var i = 0; i < data.length; i++) {
    ids.push("Indice "+data[i].id);
    media.push(data[i].value);
  }

  if (ids.length<4) {
    var tam = 4 - ids.length;
    for (var i = 0; i < tam; i++) {
      ids.push(" - ");
      media.push(1);
    }
  }

  new Chart(document.getElementById("radar-chart2"), {
    type: 'radar',
    data: {
      labels: ids,
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: media
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribuição Media dos Indicadores'
      }
    }
});


  var table2 = $('#table22').DataTable();table2.clear().draw();table2.destroy();

  var table = document.getElementById('table22');
  for(var i=0; i<data.length; i++){
    var newRow = document.createElement('tr');
  }
  if ( $.fn.dataTable.isDataTable( '#table22' ) ) {
    table = $('#table22').DataTable();
  }
  else {
    table = $('#table22').DataTable( {
      "scrollX": true,
      data: data,
      columns: [
        { data: "id"},
        { data: "titulo"},
        { data: "value"},
    ],
      dom: 'Bfrtip',
       buttons: [
           'excel',
           'pdf'
       ],
        select: true,
    } );
  }
}

function table3(data){
  var ids = [];
  var media = [];

  for (var i = 0; i < data.length; i++) {
    ids.push("Indice "+data[i].id);
    media.push(data[i].value);
  }

  if (ids.length<4) {
    var tam = 4 - ids.length;
    for (var i = 0; i < tam; i++) {
      ids.push(" - ");
      media.push(1);
    }
  }

  new Chart(document.getElementById("radar-chart3"), {
    type: 'radar',
    data: {
      labels: ids,
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: media
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribuição Media dos Indicadores'
      }
    }
});
  var table3 = $('#table33').DataTable();table3.clear().draw();table3.destroy();

  var table = document.getElementById('table33');
  for(var i=0; i<data.length; i++){
    var newRow = document.createElement('tr');
  }
  if ( $.fn.dataTable.isDataTable( '#table33' ) ) {
    table = $('#table33').DataTable();
  }
  else {
    table = $('#table33').DataTable( {
      "scrollX": true,
      data: data,
      columns: [
        { data: "id"},
        { data: "titulo"},
        { data: "value"},
    ],
      dom: 'Bfrtip',
       buttons: [
           'excel',
           'pdf'
       ],
        select: true,
    } );
  }
}

function table4(data){
  var ids = [];
  var media = [];

  for (var i = 0; i < data.length; i++) {
    ids.push("Indice "+data[i].id);
    media.push(data[i].value);
  }

  if (ids.length<4) {
    var tam = 4 - ids.length;
    for (var i = 0; i < tam; i++) {
      ids.push(" - ");
      media.push(1);
    }
  }

  new Chart(document.getElementById("radar-chart4"), {
    type: 'radar',
    data: {
      labels: ids,
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: media
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribuição Media dos Indicadores'
      }
    }
});
  var table4 = $('#table44').DataTable();table4.clear().draw();table4.destroy();
  var table = document.getElementById('table44');
  for(var i=0; i<data.length; i++){
    var newRow = document.createElement('tr');
  }
  if ( $.fn.dataTable.isDataTable( '#table44' ) ) {
    table = $('#table44').DataTable();
  }
  else {
    table = $('#table44').DataTable( {
      "scrollX": true,
      data: data,
      columns: [
        { data: "id"},
        { data: "titulo"},
        { data: "value"},
    ],
      dom: 'Bfrtip',
       buttons: [
           'excel',
           'pdf'
       ],
        select: true,
    } );
  }
}

function unico(a) {
  var b = []
    for (var i = 0; i < a.length; i++) {
      if (i==0) {
        b.push({"id":i,"titulo":a[i].titulo,"nome_indicador":a[i].nome_indicador,"value":0,"qnt":0});
      }else {
        for (var j = 0; j < b.length; j++) {
          if (b[j].titulo!=a[i].titulo) {
            b.push({"id":i,"titulo":a[i].titulo,"nome_indicador":a[i].nome_indicador,"value":0,"qnt":0});
          }
        }
      }
    }
    return b;
}
