function _numDias(){
  var objData = new Date(),
      numAno = objData.getFullYear(),
      numMes = objData.getMonth()+1,
      numDias = new Date(numAno, numMes, 0).getDate();

  return numDias;
}


function graficos_geral(){
  $.ajax({
    url: "http://170.238.74.48:8080/aprincipal/BI/bi_periodos.php",
    type: "GET",
    dataType: "json",
    success: function(data2) {

      var periodo2 = [];
      for (var i = 0; i < data2.length; i++) {
        var t = data2[i].Periodo.split("/");
        periodo2.push(t[0]+"/"+t[1]);
      }
      var periodo3 = [...new Set(periodo2)];
      periodo2 = periodo3;
       var mixed = document.createElement("canvas");
       var pie = document.createElement("canvas");
       mixed.id = "mixed-chart";
       pie.id = "pie-chart";
       $("#mixed-chart-div").html(mixed);
       $("#pie-chart-div").html(pie);

      var label = document.createElement("label");
      var labelT = document.createTextNode("Selecione o Periodo");
      label.appendChild(labelT);
      label.id = "id_10";
      var select = document.createElement("select");
      select.className = "form-control";
      select.id = "base22";
      select.setAttribute("onclick","graficos_geral2()");

        var periodo = periodo2[0];
      for (var i = 0; i < periodo2.length; i++) {
        var option = document.createElement("option");
        option.value =periodo2[i];
        var optionT = document.createTextNode(periodo2[i]);
        option.appendChild(optionT);
        select.appendChild(option);
      }
      var div = document.createElement("div");
      div.className="md-form col-12";
      div.appendChild(label);
      div.appendChild(select);
      $("#aux99").html(div);

  $.ajax({
    url: "http://170.238.74.48:8080/aprincipal/BI/bi_lojas.php",
    type: "POST",
    dataType: "json",
    data:{periodo:periodo},
    success: function(data) {
      var aux = periodo.split("/");
      aux2 = Number(aux[0]);
      mes = Number(aux[1]);
      aux2 = aux2 -1;
      var periodox = aux2+"/"+aux[1];
      $.ajax({
        url: "http://170.238.74.48:8080/aprincipal/BI/bi_lojas.php",
        type: "POST",
        dataType: "json",
        data:{periodo:periodox},
        success: function(datax) {
          // var objData = new Date();
          // numMes = objData.getMonth()+1;
          $.ajax({
            url: "http://170.238.74.48:8080/aprincipal/BI/feriados.php",
            type: "POST",
            dataType: "json",
            data:{mes:mes},
            success: function(fer) {
      var domingo_passou = Number(fer[0].domingo_passou);
      var dias_uteis = Number(fer[0].dias_uteis);
      var dias_do_mes = Number(fer[0].dias_do_mes);
      var json = fer[0].json;
      console.log(json);
      var dia_atual = Number(fer[0].dia);
      var feriados_passou = 0;
      for (var i = 0; i < json.length; i++) {
        if (Number(json[i].Dia)<=dia_atual) {
          feriados_passou +=1;
        }
      }
      console.log("Feriados_passou "+feriados_passou);

      var dias_uteis_utilizados = dia_atual - Number(feriados_passou) - domingo_passou;
      var dias_uteis_falta = dias_uteis - dias_uteis_utilizados;
      $("#diasuteis_1").html(dias_uteis_utilizados);
      $("#diasuteis_2").html(dias_uteis_utilizados);
      $("#diasuteis_3").html(dias_uteis_utilizados);
      $("#diasuteis_4").html(dias_uteis_utilizados);
      $("#diasuteis_5").html(dias_uteis_utilizados);
      $("#diasfalta_1").html(dias_uteis_falta);
      $("#diasfalta_2").html(dias_uteis_falta);
      $("#diasfalta_3").html(dias_uteis_falta);
      $("#diasfalta_4").html(dias_uteis_falta);
      $("#diasfalta_5").html(dias_uteis_falta);

  var projetada = [];
  var realizada = [];
  var nomes = [];
  var realizada_ant = [];
  var metaGeral = 0;
  var metaRealizada = 0;
  for (var i = 0; i < 5; i++) {
    metaGeral = metaGeral+Number(data[i].MetaProjetada);
    metaRealizada =metaRealizada+Number(data[i].MetaRealizada);
  }

      for (var i = 0; i < 5; i++) {
        projetada.push(data[i].MetaProjetada);
        realizada.push(data[i].MetaRealizada);
        if (data[i].CodLoja=="1") {
          var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#meta1").html(x); $("#meta_1").html(x);
          var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#realizado1").html(y); $("#realizado_1").html(y);
          var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada; por = por.toFixed(1); por = por+"%";
          $("#por1").html(por); $("#por_1").html(por);
          var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);

          if (dias_uteis_falta==0) {
              var deficitDiario = deficitMensal/1;
          }else {
              var deficitDiario = deficitMensal/dias_uteis_falta;
          }
          deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitdiario_1").html(deficitDiario);
          deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitmensal_1").html(deficitMensal);
          var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
          projecao = Number(projecao)+Number(data[i].MetaRealizada);
          projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#projecao_1").html(projecao);
        }
        if (data[i].CodLoja=="2") {
          var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#meta2").html(x); $("#meta_2").html(x);
          var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#realizado2").html(y); $("#realizado_2").html(y);
          var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
          por = por.toFixed(1);
          por = por+"%";
          $("#por2").html(por);
          $("#por_2").html(por);
          var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
          if (dias_uteis_falta==0) {
              var deficitDiario = deficitMensal/1;
          }else {
              var deficitDiario = deficitMensal/dias_uteis_falta;
          }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitdiario_2").html(deficitDiario);
          deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitmensal_2").html(deficitMensal);
          var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
          projecao = Number(projecao)+Number(data[i].MetaRealizada);
          projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#projecao_2").html(projecao);
        }
        if (data[i].CodLoja=="3") {
          var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#meta3").html(x); $("#meta_3").html(x);
          var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#realizado3").html(y); $("#realizado_3").html(y);
          var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
          por = por.toFixed(1);
          por = por+"%";
          $("#por3").html(por);
          $("#por_3").html(por);
          var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
          if (dias_uteis_falta==0) {
              var deficitDiario = deficitMensal/1;
          }else {
              var deficitDiario = deficitMensal/dias_uteis_falta;
          }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitdiario_3").html(deficitDiario);
          deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitmensal_3").html(deficitMensal);
          var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
          projecao = Number(projecao)+Number(data[i].MetaRealizada);
          projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#projecao_3").html(projecao);
        }
        if (data[i].CodLoja=="4") {
          var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#meta4").html(x); $("#meta_4").html(x);
          var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#realizado4").html(y); $("#realizado_4").html(y);
          var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
          por = por.toFixed(1);
          por = por+"%";
          $("#por4").html(por);
          $("#por_4").html(por);
          var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
          if (dias_uteis_falta==0) {
              var deficitDiario = deficitMensal/1;
          }else {
              var deficitDiario = deficitMensal/dias_uteis_falta;
          }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitdiario_4").html(deficitDiario);
          deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitmensal_4").html(deficitMensal);
          var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
          projecao = Number(projecao)+Number(data[i].MetaRealizada);
          projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#projecao_4").html(projecao);
        }
        if (data[i].CodLoja=="5") {
          var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#meta5").html(x); $("#meta_5").html(x);
          var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#realizado5").html(y); $("#realizado_5").html(y);
          var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
          por = por.toFixed(1);
          por = por+"%";
          $("#por5").html(por);
          $("#por_5").html(por);
          var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
          if (dias_uteis_falta==0) {
              var deficitDiario = deficitMensal/1;
          }else {
              var deficitDiario = deficitMensal/dias_uteis_falta;
          }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitdiario_5").html(deficitDiario);
          deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#deficitmensal_5").html(deficitMensal);
          var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
          projecao = Number(projecao)+Number(data[i].MetaRealizada);
          projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
          $("#projecao_5").html(projecao);

        }
        if(datax.length==0){
            realizada_ant.push(0);
        }else{
            realizada_ant.push(datax[i].MetaRealizada);
        }

        var nome_aux = data[i].Empresa.split("(");
        var nome_aux2 = nome_aux[1].split(")");
        nomes.push(nome_aux2[0]);
      }


            /////////////////////////////////////////
if(datax.length==0){
  new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        datasets: [{
            type: "line",
            label: 'Realizada',
            borderColor: "#f3781169",
            data: realizada,
            fill: false,
            order: 2,
            datalabels: {
              color: '#8b0000',
              font: {
                weight: 'bold'
              },
            formatter: function(value, context) {
                var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                  return value2;

              },
              anchor: 'start',
              clamp:true,
              enabled: true,
              enabledOnSeries: [1, 2]
            }
          }, {
            type: "bar",
            label: 'Projetada',
            backgroundColor: "#5bc0de",
            backgroundColorHover: "#3e95cd",
            data: projetada,
            order: 3,
            datalabels: {
              color: '#111111',
              font: {
                weight: 'bold'
              },
              formatter: function(value, context) {
                var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                  return value2;

              },
              anchor: 'start',
              clamp:true,
              enabled: true,
              enabledOnSeries: [1, 2]
            }
          }
        ],
        labels: nomes
      },options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}else {

            new Chart(document.getElementById("mixed-chart"), {
                type: 'bar',
                data: {
                  datasets: [{
                      label: 'Realizada Periodo Anterior',
                      type: "line",
                      borderColor: "#00000052",
                      data: realizada_ant,
                      fill: false,
                      order: 1,
                      datalabels: {
                        color: '#8b0000',
                        font: {
                          weight: 'bold'
                        },
                        formatter: function(value, context) {
                          var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                            return value2;

                        },
                        anchor: 'start',
                        clamp:true,
                        enabled: true,
                        enabledOnSeries: [1, 2]
                      }
                    }, {
                      type: "line",
                      label: 'Realizada',
                      borderColor: "#f3781169",
                      data: realizada,
                      fill: false,
                      order: 2,
                      datalabels: {
                        color: '#8b0000',
                        font: {
                          weight: 'bold'
                        },
                      formatter: function(value, context) {
                          var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                            return value2;

                        },
                        anchor: 'start',
                        clamp:true,
                        enabled: true,
                        enabledOnSeries: [1, 2]
                      }
                    }, {
                      type: "bar",
                      label: 'Projetada',
                      backgroundColor: "#5bc0de",
                      backgroundColorHover: "#3e95cd",
                      data: projetada,
                      order: 3,
                      datalabels: {
                        color: '#111111',
                        font: {
                          weight: 'bold'
                        },
                        formatter: function(value, context) {
                          var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                            return value2;

                        },
                        anchor: 'start',
                        clamp:true,
                        enabled: true,
                        enabledOnSeries: [1, 2]
                      }
                    }
                  ],
                  labels: nomes
                },options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
            });

          }

var por = (metaRealizada*100)/metaGeral;
var por1 = 100-por;
por = por.toFixed(2);
por1 = por1.toFixed(2);
            var ctx = document.getElementById("pie-chart");
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Meta Geral"],
                    datasets: [{
                        data: [por, por1],
                        backgroundColor: [
                            'rgb(1, 184, 170)',
                            '#e9eaea'
                        ],
                        borderColor: [
                            'rgb(1, 184, 170)',
                            '#808080'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI
                }
            });

            ////////////////////////////////////////
    }});
   }});
   }});
   }});

}

function graficos_geral2(){
  var periodo = document.getElementById("base22").value;
  var loja = document.getElementById("loja").value;
  var mixed = document.createElement("canvas");
  var pie = document.createElement("canvas");
  mixed.id = "mixed-chart";
  pie.id = "pie-chart";
  $("#mixed-chart-div").html(mixed);
  $("#pie-chart-div").html(pie);

  $.ajax({
    url: "http://170.238.74.48:8080/aprincipal/BI/bi_lojas.php",
    type: "POST",
    dataType: "json",
    data:{periodo:periodo},
    success: function(data) {
      var aux = periodo.split("/");
      aux2 = Number(aux[0]);
      mes = Number(aux[1]);
      aux2 = aux2 -1;
      var periodox = aux2+"/"+aux[1];
      $.ajax({
        url: "http://170.238.74.48:8080/aprincipal/BI/bi_lojas.php",
        type: "POST",
        dataType: "json",
        data:{periodo:periodox},
        success: function(datax) {
          $.ajax({
            url: "http://170.238.74.48:8080/aprincipal/BI/feriados.php",
            type: "POST",
            dataType: "json",
            data:{mes:mes},
            success: function(fer) {
      var domingo_passou = Number(fer[0].domingo_passou);
      var dias_uteis = Number(fer[0].dias_uteis);
      var dias_do_mes = Number(fer[0].dias_do_mes);
      var json = fer[0].json;
      var dia_atual = Number(fer[0].dia);
      var feriados_passou = 0;
      for (var i = 0; i < json.length; i++) {
        if (Number(json[i].Dia)<=dia_atual) {
          feriados_passou +=1;
        }
      }


      var dias_uteis_utilizados = dia_atual - Number(feriados_passou) - domingo_passou;
      var dias_uteis_falta = dias_uteis - dias_uteis_utilizados;


      $("#diasuteis_1").html(dias_uteis_utilizados);
      $("#diasuteis_2").html(dias_uteis_utilizados);
      $("#diasuteis_3").html(dias_uteis_utilizados);
      $("#diasuteis_4").html(dias_uteis_utilizados);
      $("#diasuteis_5").html(dias_uteis_utilizados);
      $("#diasfalta_1").html(dias_uteis_falta);
      $("#diasfalta_2").html(dias_uteis_falta);
      $("#diasfalta_3").html(dias_uteis_falta);
      $("#diasfalta_4").html(dias_uteis_falta);
      $("#diasfalta_5").html(dias_uteis_falta);

  var projetada = [];
  var realizada = [];
  var nomes = [];
  var realizada_ant = [];
  var metaGeral = 0;
  var metaRealizada = 0;

  for (var i = 0; i < 5; i++) {
      if (loja=="0") {
        metaGeral = metaGeral+Number(data[i].MetaProjetada);
        metaRealizada =metaRealizada+Number(data[i].MetaRealizada);
      } else {
        if (loja==data[i].CodLoja) {
              metaGeral = metaGeral+Number(data[i].MetaProjetada);
              metaRealizada =metaRealizada+Number(data[i].MetaRealizada);
      }
    }

  }


      for (var i = 0; i < 5; i++) {
        if (loja=="0") {
          projetada.push(data[i].MetaProjetada);
          realizada.push(data[i].MetaRealizada);
          if (data[i].CodLoja=="1") {
            var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#meta1").html(x); $("#meta_1").html(x);
            var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#realizado1").html(y); $("#realizado_1").html(y);
            var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada; por = por.toFixed(1); por = por+"%";
            $("#por1").html(por); $("#por_1").html(por);
            var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);

            if (dias_uteis_falta==0) {
                var deficitDiario = deficitMensal/1;
            }else {
                var deficitDiario = deficitMensal/dias_uteis_falta;
            }
            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitdiario_1").html(deficitDiario);
            deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitmensal_1").html(deficitMensal);
            var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
            projecao = Number(projecao)+Number(data[i].MetaRealizada);
            projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#projecao_1").html(projecao);
          }
          if (data[i].CodLoja=="2") {
            var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#meta2").html(x); $("#meta_2").html(x);
            var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#realizado2").html(y); $("#realizado_2").html(y);
            var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
            por = por.toFixed(1);
            por = por+"%";
            $("#por2").html(por);
            $("#por_2").html(por);
            var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
            if (dias_uteis_falta==0) {
                var deficitDiario = deficitMensal/1;
            }else {
                var deficitDiario = deficitMensal/dias_uteis_falta;
            }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitdiario_2").html(deficitDiario);
            deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitmensal_2").html(deficitMensal);
            var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
            projecao = Number(projecao)+Number(data[i].MetaRealizada);
            projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#projecao_2").html(projecao);
          }
          if (data[i].CodLoja=="3") {
            var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#meta3").html(x); $("#meta_3").html(x);
            var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#realizado3").html(y); $("#realizado_3").html(y);
            var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
            por = por.toFixed(1);
            por = por+"%";
            $("#por3").html(por);
            $("#por_3").html(por);
            var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
            if (dias_uteis_falta==0) {
                var deficitDiario = deficitMensal/1;
            }else {
                var deficitDiario = deficitMensal/dias_uteis_falta;
            }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitdiario_3").html(deficitDiario);
            deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitmensal_3").html(deficitMensal);
            var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
            projecao = Number(projecao)+Number(data[i].MetaRealizada);
            projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#projecao_3").html(projecao);
          }
          if (data[i].CodLoja=="4") {
            var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#meta4").html(x); $("#meta_4").html(x);
            var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#realizado4").html(y); $("#realizado_4").html(y);
            var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
            por = por.toFixed(1);
            por = por+"%";
            $("#por4").html(por);
            $("#por_4").html(por);
            var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
            if (dias_uteis_falta==0) {
                var deficitDiario = deficitMensal/1;
            }else {
                var deficitDiario = deficitMensal/dias_uteis_falta;
            }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitdiario_4").html(deficitDiario);
            deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitmensal_4").html(deficitMensal);
            var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
            projecao = Number(projecao)+Number(data[i].MetaRealizada);
            projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#projecao_4").html(projecao);
          }
          if (data[i].CodLoja=="5") {
            var x =  parseFloat((data[i].MetaProjetada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#meta5").html(x); $("#meta_5").html(x);
            var y =  parseFloat((data[i].MetaRealizada).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#realizado5").html(y); $("#realizado_5").html(y);
            var por = (100*Number(data[i].MetaRealizada))/data[i].MetaProjetada;
            por = por.toFixed(1);
            por = por+"%";
            $("#por5").html(por);
            $("#por_5").html(por);
            var deficitMensal = Number(data[i].MetaProjetada) - Number(data[i].MetaRealizada);
            if (dias_uteis_falta==0) {
                var deficitDiario = deficitMensal/1;
            }else {
                var deficitDiario = deficitMensal/dias_uteis_falta;
            }            deficitDiario =  parseFloat((deficitDiario).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitdiario_5").html(deficitDiario);
            deficitMensal =  parseFloat((deficitMensal).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#deficitmensal_5").html(deficitMensal);
            var projecao = ((data[i].MetaRealizada/dias_uteis_utilizados)*dias_uteis_falta);
            projecao = Number(projecao)+Number(data[i].MetaRealizada);
            projecao =  parseFloat((projecao).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
            $("#projecao_5").html(projecao);

          }
          if(datax.length==0){
              realizada_ant.push(0);
          }else{
              realizada_ant.push(datax[i].MetaRealizada);
          }

          var nome_aux = data[i].Empresa.split("(");
          var nome_aux2 = nome_aux[1].split(")");
          nomes.push(nome_aux2[0]);
        }else {
          if (loja==data[i].CodLoja) {
            projetada.push(data[i].MetaProjetada);
            realizada.push(data[i].MetaRealizada);

            if(datax.length==0){
                realizada_ant.push(0);
            }else{
                realizada_ant.push(datax[i].MetaRealizada);
            }

            var nome_aux = data[i].Empresa.split("(");
            var nome_aux2 = nome_aux[1].split(")");
            nomes.push(nome_aux2[0]);
          }
        }

      }

            /////////////////////////////////////////


            /////////////////////////////////////////
  if(datax.length==0){
  new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        datasets: [{
            type: "line",
            label: 'Realizada',
            borderColor: "#f3781169",
            data: realizada,
            fill: false,
            order: 2,
            datalabels: {
              color: '#8b0000',
              font: {
                weight: 'bold'
              },
            formatter: function(value, context) {
                var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                  return value2;

              },
              anchor: 'start',
              clamp:true,
              enabled: true,
              enabledOnSeries: [1, 2]
            }
          }, {
            type: "bar",
            label: 'Projetada',
            backgroundColor: "#5bc0de",
            backgroundColorHover: "#3e95cd",
            data: projetada,
            order: 3,
            datalabels: {
              color: '#111111',
              font: {
                weight: 'bold'
              },
              formatter: function(value, context) {
                var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                  return value2;

              },
              anchor: 'start',
              clamp:true,
              enabled: true,
              enabledOnSeries: [1, 2]
            }
          }
        ],
        labels: nomes
      },options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  }else {

            new Chart(document.getElementById("mixed-chart"), {
                type: 'bar',
                data: {
                  datasets: [{
                      label: 'Realizada Periodo Anterior',
                      type: "line",
                      borderColor: "#00000052",
                      data: realizada_ant,
                      fill: false,
                      order: 1,
                      datalabels: {
                        color: '#8b0000',
                        font: {
                          weight: 'bold'
                        },
                        formatter: function(value, context) {
                          var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                            return value2;

                        },
                        anchor: 'start',
                        clamp:true,
                        enabled: true,
                        enabledOnSeries: [1, 2]
                      }
                    }, {
                      type: "line",
                      label: 'Realizada',
                      borderColor: "#f3781169",
                      data: realizada,
                      fill: false,
                      order: 2,
                      datalabels: {
                        color: '#8b0000',
                        font: {
                          weight: 'bold'
                        },
                      formatter: function(value, context) {
                          var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                            return value2;

                        },
                        anchor: 'start',
                        clamp:true,
                        enabled: true,
                        enabledOnSeries: [1, 2]
                      }
                    }, {
                      type: "bar",
                      label: 'Projetada',
                      backgroundColor: "#5bc0de",
                      backgroundColorHover: "#3e95cd",
                      data: projetada,
                      order: 3,
                      datalabels: {
                        color: '#111111',
                        font: {
                          weight: 'bold'
                        },
                        formatter: function(value, context) {
                          var value2 = parseFloat((value).toString().replace(",",".")).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
                            return value2;

                        },
                        anchor: 'start',
                        clamp:true,
                        enabled: true,
                        enabledOnSeries: [1, 2]
                      }
                    }
                  ],
                  labels: nomes
                },options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
            });

          }
var por = (metaRealizada*100)/metaGeral;
var por1 = 100-por;
por = por.toFixed(2);
por1 = por1.toFixed(2);
            var ctx = document.getElementById("pie-chart");
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Meta Geral"],
                    datasets: [{
                        data: [por, por1],
                        backgroundColor: [
                            'rgb(1, 184, 170)',
                            '#e9eaea'
                        ],
                        borderColor: [
                            'rgb(1, 184, 170)',
                            '#808080'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI
                }
            });

            ////////////////////////////////////////
    }});  }});  }});

}
