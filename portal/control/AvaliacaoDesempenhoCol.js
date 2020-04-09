function busca_dep(){

  var pesquisa_select = document.getElementById("pesquisa_select2").value;


  var elementechart = document.createElement("canvas");
  elementechart.className = "col-12";
  elementechart.id = "bar-chart2";
  $("#div_chart2").html(elementechart);
  var elementechart3 = document.createElement("canvas");
  elementechart3.className = "col-12";
  elementechart3.id = "bar-chart3";
  $("#div_chart3").html(elementechart3);
  var elementechart4 = document.createElement("canvas");
  elementechart4.className = "col-12";
  elementechart4.id = "bar-chart4";
  $("#div_chart4").html(elementechart4);
  $.ajax({
    type: 'POST',
    url: "../control/BuscaRespostaDesempenho2.php",
    dataType: "json",
    data:{pesquisa:pesquisa_select,departamento:0},
    success: function(data) {
      $.ajax({
        type: 'POST',
        url: "../control/BuscaDepartamento2.php",
        dataType: "json",
        success: function(departamentos) {
      departamento = [];departamentoGestor = [];departamentoNaoGestor = [];
      for (var i = 0; i < departamentos.length; i++) {
        departamento.push({"nome":departamentos[i],"value":0,"qtn":0});
        departamentoGestor.push({"nome":departamentos[i],"value":0,"qtn":0});
        departamentoNaoGestor.push({"nome":departamentos[i],"value":0,"qtn":0});
      }
      for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < departamento.length; j++) {
            if (departamento[j].nome==data[i].departamento) {
              respostas = JSON.parse(data[i].resposta);
              respostas2 = JSON.parse(data[i].resposta2);
              var resposta = calc_media(respostas);
              var resposta2 = calc_media(respostas2);
              if (resposta==0) {
                var media = resposta2;
              }else if (resposta2==0) {
                var media = resposta;
              }else {
                var media = (resposta+resposta2)/2;
              }
              if (data[i].gestor=="true") {
                departamentoGestor[j].value = Number(departamentoGestor[j].value)+media;
                departamentoGestor[j].qtn += 1;
              }else {
                departamentoNaoGestor[j].value = Number(departamentoNaoGestor[j].value)+media;
                departamentoNaoGestor[j].qtn += 1;
              }
              departamento[j].value = Number(departamento[j].value)+media;
              departamento[j].qtn += 1;
            }
          }
      }

      for (var i = 0; i < departamento.length; i++) {
        if (departamento[i].qtn==0||departamento[i].qtn=="0") {
            departamento[i].value = 0.1;
        }else {
          departamento[i].value = Number(departamento[i].value)/Number(departamento[i].qtn);
        }
        if (departamentoGestor[i].qtn==0||departamentoGestor[i].qtn=="0") {
            departamentoGestor[i].value = 0.1;
        }else {
          departamentoGestor[i].value = Number(departamentoGestor[i].value)/Number(departamentoGestor[i].qtn);
        }
        if (departamentoNaoGestor[i].qtn==0||departamentoNaoGestor[i].qtn=="0") {
            departamentoNaoGestor[i].value = 0.1;
        }else {
          departamentoNaoGestor[i].value = Number(departamentoNaoGestor[i].value)/Number(departamentoNaoGestor[i].qtn);
        }
      }

      var labels = [];
      var valores = [];var valoresGestores = [];var valoresNaoGestores = [];
      for (var i = 0; i < departamento.length; i++){
        labels.push(departamento[i].nome);
        valores.push(departamento[i].value);
        valoresGestores.push(departamentoGestor[i].value);
        valoresNaoGestores.push(departamentoNaoGestor[i].value);
      }

    new Chart(document.getElementById("bar-chart2"), {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: valores
              }
            ]
          },
          options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Media Geral das Respostas'
            },
            scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: true
                     }
                 }]
             }
          }
      });
      ////////////////////////////
      new Chart(document.getElementById("bar-chart3"), {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  data: valoresGestores
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Media das Respostas de Gestores'
              },
              scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero: true
                       }
                   }]
               }
            }
        });
        ///////////////////////
        new Chart(document.getElementById("bar-chart4"), {
              type: 'bar',
              data: {
                labels: labels,
                datasets: [{
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: valoresNaoGestores
                  }]},
              options: {
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Media das Respostas de Não Gestores'
                },
                scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
          }});
          ////////////////////////
    }});
    }});
}


function init2(){

      $.ajax({
        url: "../control/buscaDesemepenho.php",
        type: "POST",
        dataType: "json",
        success: function(data4) {

      var select = document.createElement("select");
      select.id = "pesquisa_select2";
      select.className = "form-control form-control-lg";
      select.setAttribute("onchange","busca_dep()");

      var option = document.createElement("option");
      option.value = "0";
      var t = document.createTextNode("Todas as Pesquisas");
      option.appendChild(t);
      select.appendChild(option);

      data4.map(function(item){
        var option = document.createElement("option");
        option.value = item.id;
        var t = document.createTextNode(item.indicador);
        option.appendChild(t);
        select.appendChild(option)
      });

      var label1 = document.createElement("label");
      var labelT1 = document.createTextNode("Avaliação");
      label1.appendChild(labelT1);

      var div1 = document.createElement("div");
      div1.className = "form-group col-12";
      div1.appendChild(label1);
      div1.appendChild(select);
      var div3 = document.createElement("div");
      div3.className = "col-12";
      div3.appendChild(div1);
      $("#select_geral2").html(div3);
      busca_dep();
    }});

}


function init3(){

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
      select.id = "pesquisa_selectCol";
      select.className = "form-control form-control-lg";
      select.setAttribute("onchange","busca_col()");

      var select2 = document.createElement("select");
      select2.id = "departamento_selectCol";
      select2.className = "form-control form-control-lg";
      select2.setAttribute("onchange","busca_col()");

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
      $("#select_geral2").html(div3);
      busca_col();

    }});
      }});
}

function busca_col(){
  var pesquisa_select = document.getElementById("pesquisa_select").value;
  var departamento_select = document.getElementById("departamento_select").value;
  $.ajax({
    type: 'POST',
    url: "../control/BuscaRespostaDesempenho2.php",
    dataType: "json",
    data:{pesquisa:pesquisa_select,departamento:departamento_select},
    success: function(data) {

    }});
}

function unico2(a){
  var b = []
    for (var i = 0; i < a.length; i++) {
      if (i==0) {
        b.push(a[i]);
      }else {
        for (var j = 0; j < b.length; j++) {
          if (b[j]!=a[i]) {
            b.push(a[i]);
          }
        }
      }
    }
    return b;
}


function calc_media(a){

if (a=="null"||a==null) {
return 0;
}else {
  var tam = a.length;
  var valor = 0;
  for (var i = 0; i < tam; i++) {
    valor = Number(a[i])+Number(valor);
  }
  valor = valor/tam;

  return valor;
}

}
