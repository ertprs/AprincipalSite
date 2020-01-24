function rankingDEP(){
  var filtrosPesquisa = document.getElementById("pesFiltro2").value;

  $.ajax({
    url: "../control/BuscaResposta3.php",
    type: "POST",
    dataType: "json",
    data: {filtrosPesquisa:filtrosPesquisa},
    success: function(data) {
      $.ajax({
        url: "../control/BuscaDepartamento.php",
        type: "POST",
        dataType: "json",
        success: function(data2) {
          var ranking = [];
          var ranking2 = [];
          var grafico = [];
        for (var i = 0; i < data2.length; i++) {
          ranking.push({"dep":data2[i].nome,"Total":0,"Pos":0,"Neg":0,"SIM":0,"NAO":0,"MS":0,"SA":0,"IND":0,"IN":0,"MI":0});
          ranking2.push({"dep":data2[i].nome,"Total":0,"Pos":0,"Neg":0,"SIM":0,"NAO":0,"MS":0,"SA":0,"IND":0,"IN":0,"MI":0});
          grafico.push({"dep":data2[i].nome,"Total":0,"Pos":0,"Neg":0,"Ind":0});
          }
          //////////////////////////////////////////////////////////////
          data.map(function(item,index){
            var aux = JSON.parse(item.resposta);
            for (var i = 0; i < data2.length; i++) {
              if(item.departamento==ranking[i].dep){
                for (var j = 0; j < aux.length; j++) {
                  ranking[i].Total += 1;
                  ranking2[i].Total += 1;
                  grafico[i].Total += 1;
                  if (aux[j]=="1") {
                    ranking[i].MI += 1;
                    ranking[i].Neg += 1;
                    ranking2[i].MI += 1;
                    ranking2[i].Neg += 1;
                    grafico[i].Neg += 1;
                   }
                   if (aux[j]=="2") {
                     ranking[i].IN += 1;
                     ranking[i].Neg += 1;
                     ranking2[i].IN += 1;
                     ranking2[i].Neg += 1;
                     grafico[i].Neg += 1;

                    }
                    if (aux[j]=="3") {
                      ranking[i].IND += 1;
                      ranking[i].Neg += 1;
                      ranking2[i].IND += 1;
                      ranking2[i].Neg += 1;
                      grafico[i].Ind += 1;

                     }
                     if (aux[j]=="4") {
                       ranking[i].SA += 1;
                       ranking[i].Pos += 1;
                       ranking2[i].SA += 1;
                       ranking2[i].Pos += 1;
                       grafico[i].Pos += 1;

                      }
                      if (aux[j]=="5") {
                        ranking[i].MS += 1;
                        ranking[i].Pos += 1;
                        ranking2[i].MS += 1;
                        ranking2[i].Pos += 1;
                        grafico[i].Pos += 1;
                       }
                    if (aux[j]=="Não") {
                      ranking[i].NAO += 1;
                      ranking[i].Neg += 1;
                      ranking2[i].NAO += 1;
                      ranking2[i].Neg += 1;
                      grafico[i].Neg += 1;
                     }
                     if (aux[j]=="Sim") {
                       ranking[i].SIM += 1;
                       ranking[i].Pos += 1;
                       ranking2[i].SIM += 1;
                       ranking2[i].Pos += 1;
                       grafico[i].Pos += 1;
                      }
                }
              }
          }

          });


          ranking.sort((a,b)=>{
            return b.Pos - a.Pos;
          })
          grafico.sort((a,b)=>{
            return b.Pos - a.Pos;
          })
          ranking2.sort((a,b)=>{
            return b.Neg - a.Neg;
          })

          var tbody = document.createElement("tbody");

          ranking.map(function(item,index){

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var t1 = document.createTextNode(index+1+"º");
            td1.appendChild(t1);
            var td2 = document.createElement("td");
            var t2 = document.createTextNode(item.dep);
            td2.appendChild(t2);
            var td3 = document.createElement("td");
            var  pos = (item.Pos/item.Total)*100;
            pos = pos.toFixed(2);
            pos = pos+"%";
            if (item.Pos==0) {
              pos ="-";
            }
            var t3 = document.createTextNode(pos);
            td3.appendChild(t3);
            var td4 = document.createElement("td");
            var  neg = (item.Neg/item.Total)*100;
            neg = neg.toFixed(2);
            neg = neg+"%";
            if (item.Neg==0) {
              neg ="-";
            }
            var t4 = document.createTextNode(neg);
            td4.appendChild(t4);
            var td5 = document.createElement("td");
            var  sim = (item.SIM/item.Total)*100;
            sim = sim.toFixed(2);
            sim = sim+"%";
            if (item.SIM==0) {
              sim ="-";
            }
            var t5 = document.createTextNode(sim);
            td5.appendChild(t5);
            var td6 = document.createElement("td");
            var  nao = (item.NAO/item.Total)*100;
            nao = nao.toFixed(2);
            nao = nao+"%";
            if (item.NAO==0) {
              nao ="-";
            }
            var t6 = document.createTextNode(nao);
            td6.appendChild(t6);
            var td7 = document.createElement("td");
            var  mi = (item.MI/item.Total)*100;
            mi = mi.toFixed(2);
            mi = mi+"%";
            if (item.MI==0) {
              mi ="-";
            }
            var t7 = document.createTextNode(mi);
            td7.appendChild(t7);
            var td8 = document.createElement("td");
            var  insa = (item.IN/item.Total)*100;
            insa = insa.toFixed(2);
            insa = insa+"%";
            if (item.IN==0) {
              insa ="-";
            }
            var t8 = document.createTextNode(insa);
            td8.appendChild(t8);
            var td9 = document.createElement("td");
            var  ind = (item.IND/item.Total)*100;
            ind = ind.toFixed(2);
            ind = ind+"%";
            if (item.IND==0) {
              ind ="-";
            }
            var t9 = document.createTextNode(ind);
            td9.appendChild(t9);
            var td10 = document.createElement("td");
            var  sa = (item.SA/item.Total)*100;
            sa = sa.toFixed(2);
            sa = sa+"%";
            if (item.SA==0) {
              sa ="-";
            }
            var t10 = document.createTextNode(sa);
            td10.appendChild(t10);
            var td11 = document.createElement("td");
            var  ms = (item.MS/item.Total)*100;
            ms = ms.toFixed(2);
            ms = ms+"%";
            if (item.MS==0) {
              ms ="-";
            }
            var t11 = document.createTextNode(ms);
            td11.appendChild(t11);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);
            tr.appendChild(td11);
            tbody.appendChild(tr)
          });
          tbody.id = "corpo_dep";
          const pai = document.getElementById("top_dep");
          const filho = pai.querySelector("#corpo_dep");

          if (filho != null) {
          	var node = document.getElementById("corpo_dep");
          	if (node.parentNode) {
          	node.parentNode.removeChild(node);
          	}
          }
          var top_dep = document.getElementById("top_dep");
          top_dep.appendChild(tbody);

          var tbody2 = document.createElement("tbody");

          ranking2.map(function(item,index){

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var t1 = document.createTextNode(index+1+"º");
            td1.appendChild(t1);
            var td2 = document.createElement("td");
            var t2 = document.createTextNode(item.dep);
            td2.appendChild(t2);
            var td3 = document.createElement("td");
            var  pos = (item.Pos/item.Total)*100;
            pos = pos.toFixed(2);
            pos = pos+"%";
            if (item.Pos==0) {
              pos ="-";
            }
            var t3 = document.createTextNode(pos);
            td3.appendChild(t3);
            var td4 = document.createElement("td");
            var  neg = (item.Neg/item.Total)*100;
            neg = neg.toFixed(2);
            neg = neg+"%";
            if (item.Neg==0) {
              neg ="-";
            }
            var t4 = document.createTextNode(neg);
            td4.appendChild(t4);
            var td5 = document.createElement("td");
            var  sim = (item.SIM/item.Total)*100;
            sim = sim.toFixed(2);
            sim = sim+"%";
            if (item.SIM==0) {
              sim ="-";
            }
            var t5 = document.createTextNode(sim);
            td5.appendChild(t5);
            var td6 = document.createElement("td");
            var  nao = (item.NAO/item.Total)*100;
            nao = nao.toFixed(2);
            nao = nao+"%";
            if (item.NAO==0) {
              nao ="-";
            }
            var t6 = document.createTextNode(nao);
            td6.appendChild(t6);
            var td7 = document.createElement("td");
            var  mi = (item.MI/item.Total)*100;
            mi = mi.toFixed(2);
            mi = mi+"%";
            if (item.MI==0) {
              mi ="-";
            }
            var t7 = document.createTextNode(mi);
            td7.appendChild(t7);
            var td8 = document.createElement("td");
            var  insa = (item.IN/item.Total)*100;
            insa = insa.toFixed(2);
            insa = insa+"%";
            if (item.IN==0) {
              insa ="-";
            }
            var t8 = document.createTextNode(insa);
            td8.appendChild(t8);
            var td9 = document.createElement("td");
            var  ind = (item.IND/item.Total)*100;
            ind = ind.toFixed(2);
            ind = ind+"%";
            if (item.IND==0) {
              ind ="-";
            }
            var t9 = document.createTextNode(ind);
            td9.appendChild(t9);
            var td10 = document.createElement("td");
            var  sa = (item.SA/item.Total)*100;
            sa = sa.toFixed(2);
            sa = sa+"%";
            if (item.SA==0) {
              sa ="-";
            }
            var t10 = document.createTextNode(sa);
            td10.appendChild(t10);
            var td11 = document.createElement("td");
            var  ms = (item.MS/item.Total)*100;
            ms = ms.toFixed(2);
            ms = ms+"%";
            if (item.MS==0) {
              ms ="-";
            }
            var t11 = document.createTextNode(ms);
            td11.appendChild(t11);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);
            tr.appendChild(td11);
            tbody2.appendChild(tr)
          });
          tbody2.id = "corpo_dep2";
          const pai2 = document.getElementById("top_dep2");
          const filho2 = pai2.querySelector("#corpo_dep2");

          if (filho2 != null) {
            var node2 = document.getElementById("corpo_dep2");
            if (node2.parentNode) {
            node2.parentNode.removeChild(node2);
            }
          }
          var top_dep2 = document.getElementById("top_dep2");
          top_dep2.appendChild(tbody2);

          var  labels = [];
          var  positivo = [];
          var  negativo = [];
          var  indiferente = [];
          grafico.map(function(item,index){
            labels.push(item.dep)
            var  ps = (item.Pos/item.Total)*100;
            ps = ps.toFixed(2);
            positivo.push(ps);
            var  ng = (item.Neg/item.Total)*100;
            ng = ng.toFixed(2);
            negativo.push(ng)
            var  ind = (item.Ind/item.Total)*100;
            ind = ind.toFixed(2);
            indiferente.push(ind)
          });

          var grafico2 = document.createElement("canvas");
          grafico2.id = "bar-chart-grouped";
          grafico2.style.width = "100%";
          grafico2.style.height = "400px";
          var painel = document.getElementById("Painel_Dep");

          const paix = document.getElementById("Painel_Dep");
          const filhox = paix.querySelector("#bar-chart-grouped");

          if (filhox != null) {
            var nodex = document.getElementById("bar-chart-grouped");
            if (nodex.parentNode) {
            nodex.parentNode.removeChild(nodex);
            }
          }

          painel.appendChild(grafico2);

          new Chart(document.getElementById("bar-chart-grouped"), {
              type: 'bar',
              data: {
                labels: labels,
                datasets: [
                  {
                    label: "Positivo",
                    backgroundColor: "#a2eca2",
                    data: positivo
                  }, {
                    label: "Negativo",
                    backgroundColor: "#e6937a",
                    data: negativo
                  }, {
                    label: "Indiferente",
                    backgroundColor: "#f5e471",
                    data: indiferente
                  }
                ]
              },
              options: {
                title: {
                  display: true,
                  text: 'Ranking de Departamentos Com Maior Indice de Satisfação'
                }
              }
          });

        }
      });
    }
  });
}



function montaRanking(ranking_resposta_negativas,ranking_resposta_positivas,qtn_resposta){
  var ranking_RN_ES = [];
  var ranking_RP_ES = [];
  var ranking_RN_DI = [];
  var ranking_RP_DI = [];
  ranking_resposta_negativas.map(function(item){
    if (item.tipo=="Escalonada") {
      ranking_RN_ES.push(item);
    }else {
      ranking_RN_DI.push(item);
    }
  });
  ranking_resposta_positivas.map(function(item){
    if (item.tipo=="Escalonada") {
      ranking_RP_ES.push(item);
    }else {
      ranking_RP_DI.push(item);
    }
  });



  var tbody4 = document.createElement("tbody");

  ranking_RP_ES.map(function(item){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tdT = document.createTextNode(item.pergunta)
    td.appendChild(tdT);
    var td2 = document.createElement("td");
    td2.className = "color-primary";
    var por = (item.value/qtn_resposta)*100;
    if (por>=50) {
      por = por.toFixed(2);
      por = por+"%";
      var tdT2 = document.createTextNode(por)
      td2.appendChild(tdT2);
      tr.appendChild(td);
      tr.appendChild(td2);
      tbody4.appendChild(tr);
      tbody4.id = "body1";
    }
  });
  const pai = document.getElementById("corpo_table_ranking_bom");
  const filho = pai.querySelector("#body1");

  if (filho != null) {
  	var node = document.getElementById("body1");
  	if (node.parentNode) {
  	node.parentNode.removeChild(node);
  	}
  }
document.getElementById("corpo_table_ranking_bom").appendChild(tbody4);



  var tbody3 = document.createElement("tbody");

  ranking_RP_DI.map(function(item){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tdT = document.createTextNode(item.pergunta)
    td.appendChild(tdT);
    var td2 = document.createElement("td");
    td2.className = "color-primary";
    var por = (item.value/qtn_resposta)*100;
    if (por>=50) {
      por = por.toFixed(2);
      por = por+"%";
      var tdT2 = document.createTextNode(por)
      td2.appendChild(tdT2);
      tr.appendChild(td)
      tr.appendChild(td2)
      tbody3.appendChild(tr)
      tbody3.id = "body2";
    }
    });
    const pai2 = document.getElementById("corpo_table_ranking_bom2");
    const filho2 = pai2.querySelector("#body2");
    if (filho2 != null) {
    var node2 = document.getElementById("body2");
    if (node2.parentNode) {
    node2.parentNode.removeChild(node2);
    }
    }
    document.getElementById("corpo_table_ranking_bom2").appendChild(tbody3);


  var tbody2 = document.createElement("tbody");
  ranking_RN_ES.map(function(item){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tdT = document.createTextNode(item.pergunta)
    td.appendChild(tdT);
    var td2 = document.createElement("td");
    td2.className = "color-primary";
    var por = (item.value/qtn_resposta)*100;
    if (por>=50) {
      por = por.toFixed(2);
      por = por+"%";
      var tdT2 = document.createTextNode(por)
      td2.appendChild(tdT2);
      tr.appendChild(td)
      tr.appendChild(td2)
      tbody2.appendChild(tr)
      tbody2.id = "body3";
    }
    });
    const pai3 = document.getElementById("corpo_table_ranking_ruim");
    const filho3 = pai3.querySelector("#body3");
    if (filho3 != null) {
    var node3 = document.getElementById("body3");
    if (node3.parentNode) {
    node3.parentNode.removeChild(node3);
    }
    }
    document.getElementById("corpo_table_ranking_ruim").appendChild(tbody2);


var tbody = document.createElement("tbody");
  ranking_RN_DI.map(function(item){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tdT = document.createTextNode(item.pergunta)
    td.appendChild(tdT);
    var td2 = document.createElement("td");
    td2.className = "color-primary";
    var por = (item.value/qtn_resposta)*100;
    if (por>=50) {
      por = por.toFixed(2);
      por = por+"%";
      var tdT2 = document.createTextNode(por)
      td2.appendChild(tdT2);
      tr.appendChild(td)
      tr.appendChild(td2)
      tbody.appendChild(tr)
      tbody.id = "body4";
    }
    });
    const pai4 = document.getElementById("corpo_table_ranking_ruim2");
    const filho4 = pai4.querySelector("#body4");
    if (filho4 != null) {
    var node4 = document.getElementById("body4");
    if (node4.parentNode) {
    node4.parentNode.removeChild(node4);
    }
    }
    document.getElementById("corpo_table_ranking_ruim2").appendChild(tbody);



}

function filtros(){
 $.ajax({
   url: "../control/BuscaDepartamento.php",
   type: "POST",
   dataType: "json",
   success: function(data) {
     ////////////////Departamento/////////////
     var select = document.createElement("select");
     select.id = "depFiltro";
     select.className = "form-control col-xctech";
     select.setAttribute("onchange","graficos()");

     var option = document.createElement("option");
     option.value = "0";
     var t = document.createTextNode("Todos Departamentos");
     option.appendChild(t);
     select.appendChild(option)

     data.map(function(item){
       var option = document.createElement("option");
       option.value = item.nome;
       var t = document.createTextNode(item.nome);
       option.appendChild(t);
       select.appendChild(option)
     });
     const pai = document.getElementById("filtros");
     const filho = pai.querySelector("#depFiltro");
     if (filho != null) {
     var node = document.getElementById("depFiltro");
     if (node.parentNode) {
     node.parentNode.removeChild(node);
     }
     }
     document.getElementById("filtros").appendChild(select);

/////////////////////////////////

   }
 });

 $.ajax({
   url: "../control/BuscapesquisaClima.php",
   type: "POST",
   dataType: "json",
   success: function(data) {
     ////////////////Departamento/////////////
     var select = document.createElement("select");
     select.id = "pesFiltro";
     select.className = "form-control col-xctech";
     select.setAttribute("onchange","graficos()");

     var option = document.createElement("option");
     option.value = "0";
     var t = document.createTextNode("Todas Pesquisas");
     option.appendChild(t);
     select.appendChild(option)

     data.map(function(item){
       var option = document.createElement("option");
       option.value = item.indicador;
       var t = document.createTextNode(item.indicador);
       option.appendChild(t);
       select.appendChild(option)
     });
     const pai = document.getElementById("filtros");
     const filho = pai.querySelector("#pesFiltro");
     if (filho != null) {
     var node = document.getElementById("pesFiltro");
     if (node.parentNode) {
     node.parentNode.removeChild(node);
     }
     }
     document.getElementById("filtros").appendChild(select);
/////////////////////////////////
////////////////Departamento/////////////
var select2 = document.createElement("select");
select2.id = "pesFiltro2";
select2.className = "form-control col-xctech";
select2.setAttribute("onchange","rankingDEP()");
select2.style.display = "none";

var option2 = document.createElement("option");
option2.value = "0";
var t2 = document.createTextNode("Todas Pesquisas");
option2.appendChild(t2);
select2.appendChild(option2)

data.map(function(item){
  var option2 = document.createElement("option");
  option2.value = item.indicador;
  var t2 = document.createTextNode(item.indicador);
  option2.appendChild(t2);
  select2.appendChild(option2)
});
const paix = document.getElementById("filtros");
const filhox = paix.querySelector("#depFiltro2");
if (filhox != null) {
var nodex = document.getElementById("depFiltro2");
if (nodex.parentNode) {
nodex.parentNode.removeChild(nodex);
}
}
document.getElementById("filtros").appendChild(select2);

   }
 });

}
function Evolution2(){
  var filtrosDepartamento = document.getElementById("depFiltro").value;
  var filtrosPesquisa = 0;
      $.ajax({
        url: "../control/BuscaResposta.php",
        type: "POST",
        dataType: "json",
        data: {filtrosDepartamento:filtrosDepartamento,filtrosPesquisa:filtrosPesquisa},
        success: function(data) {
      var p1 = document.getElementById("EselectPes11").value;
      var p2 = document.getElementById("EselectPes22").value;
      var p3 = document.getElementById("EselectPes33").value;
      var p4 = document.getElementById("EselectPes44").value;
      var p1V = []; var p2V = [];  var p3V = [];  var p4V = [];
      var i1 = 0;var i2 = 0;var i3 = 0;var i4 = 0;
      var i5 = 0;var i6 = 0;var i7 = 0;
      var result1 = [];
      var result2 = [];
      var result3 = [];
      var result4 = [];

      data.map(function(item,index){
        if (item.id_pesquisa==p1) {
          p1V.push({"id_pesquisa":p1,"id_colaborador":item.id_colaborador,"resposta":item.resposta});
        }
        if (item.id_pesquisa==p2) {
          p2V.push({"id_pesquisa":p2,"id_colaborador":item.id_colaborador,"resposta":item.resposta});
        }
        if (item.id_pesquisa==p3) {
          p3V.push({"id_pesquisa":p3,"id_colaborador":item.id_colaborador,"resposta":item.resposta});
        }
        if (item.id_pesquisa==p4) {
          p4V.push({"id_pesquisa":p4,"id_colaborador":item.id_colaborador,"resposta":item.resposta});
        }
      });


      p1V.map(function(item,index){
        var aux = JSON.parse(item.resposta);
        for (var j = 0; j < aux.length; j++) {
          if (aux[j]=="1") {
            i2 += 1;
           }
           if (aux[j]=="2") {
             i2 += 1;
            }
            if (aux[j]=="3") {
              i3 += 1;
             }
             if (aux[j]=="4") {
               i4 += 1;
              }
              if (aux[j]=="5") {
                i5 += 1;
               }
            if (aux[j]=="Não") {
              i6 += 1;
             }
             if (aux[j]=="Sim") {
               i7 += 1;
              }
        }
      });

      $("#Epos1").html(i4+i5+i7);
      $("#Eneg1").html(i1+i2+i3+i6);
      $("#Esim1").html(i7);
      $("#Enao1").html(i6);
      $("#Emsa1").html(i5);
      $("#Esat1").html(i4);
      $("#Eind1").html(i3);
      $("#Eins1").html(i2);
      $("#Emin1").html(i1);
      $("#Etotal1").html(i1+i2+i3+i4+i5+i6+i7);
      result1.push({"positivo":(i4+i5+i7),"negativo":(i1+i2+i6),"indiferente":i3})

      i1 = 0;i2 = 0;i3 = 0;i4 = 0;i5 = 0;i6 = 0;i7 = 0;
            p2V.map(function(item,index){
              var aux = JSON.parse(item.resposta);
              for (var j = 0; j < aux.length; j++) {
                if (aux[j]=="1") {
                  i2 += 1;
                 }
                 if (aux[j]=="2") {
                   i2 += 1;
                  }
                  if (aux[j]=="3") {
                    i3 += 1;
                   }
                   if (aux[j]=="4") {
                     i4 += 1;
                    }
                    if (aux[j]=="5") {
                      i5 += 1;
                     }
                  if (aux[j]=="Não") {
                    i6 += 1;
                   }
                   if (aux[j]=="Sim") {
                     i7 += 1;
                    }
              }
            });
            $("#Epos2").html(i4+i5+i7);
            $("#Eneg2").html(i1+i2+i3+i6);
            $("#Esim2").html(i7);
            $("#Enao2").html(i6);
            $("#Emsa2").html(i5);
            $("#Esat2").html(i4);
            $("#Eind2").html(i3);
            $("#Eins2").html(i2);
            $("#Emin2").html(i1);
            $("#Etotal2").html(i1+i2+i3+i4+i5+i6+i7);
            result2.push({"positivo":(i4+i5+i7),"negativo":(i1+i2+i6),"indiferente":i3})

            i1 = 0;i2 = 0;i3 = 0;i4 = 0;i5 = 0;i6 = 0;i7 = 0;
                  p3V.map(function(item,index){
                    var aux = JSON.parse(item.resposta);
                    for (var j = 0; j < aux.length; j++) {
                      if (aux[j]=="1") {
                        i2 += 1;
                       }
                       if (aux[j]=="2") {
                         i2 += 1;
                        }
                        if (aux[j]=="3") {
                          i3 += 1;
                         }
                         if (aux[j]=="4") {
                           i4 += 1;
                          }
                          if (aux[j]=="5") {
                            i5 += 1;
                           }
                        if (aux[j]=="Não") {
                          i6 += 1;
                         }
                         if (aux[j]=="Sim") {
                           i7 += 1;
                          }
                    }
                  });
                  $("#Epos3").html(i4+i5+i7);
                  $("#Eneg3").html(i1+i2+i3+i6);
                  $("#Esim3").html(i7);
                  $("#Enao3").html(i6);
                  $("#Emsa3").html(i5);
                  $("#Esat3").html(i4);
                  $("#Eind3").html(i3);
                  $("#Eins3").html(i2);
                  $("#Emin3").html(i1);
                  $("#Etotal3").html(i1+i2+i3+i4+i5+i6+i7);
                  result3.push({"positivo":(i4+i5+i7),"negativo":(i1+i2+i6),"indiferente":i3})

                  i1 = 0;i2 = 0;i3 = 0;i4 = 0;i5 = 0;i6 = 0;i7 = 0;
                        p4V.map(function(item,index){
                          var aux = JSON.parse(item.resposta);
                          for (var j = 0; j < aux.length; j++) {
                            if (aux[j]=="1") {
                              i2 += 1;
                             }
                             if (aux[j]=="2") {
                               i2 += 1;
                              }
                              if (aux[j]=="3") {
                                i3 += 1;
                               }
                               if (aux[j]=="4") {
                                 i4 += 1;
                                }
                                if (aux[j]=="5") {
                                  i5 += 1;
                                 }
                              if (aux[j]=="Não") {
                                i6 += 1;
                               }
                               if (aux[j]=="Sim") {
                                 i7 += 1;
                                }
                          }
                        });
                        $("#Epos4").html(i4+i5+i7);
                        $("#Eneg4").html(i1+i2+i3+i6);
                        $("#Esim4").html(i7);
                        $("#Enao4").html(i6);
                        $("#Emsa4").html(i5);
                        $("#Esat4").html(i4);
                        $("#Eind4").html(i3);
                        $("#Eins4").html(i2);
                        $("#Emin4").html(i1);
                        $("#Etotal4").html(i1+i2+i3+i4+i5+i6+i7);
                        result4.push({"positivo":(i4+i5+i7),"negativo":(i1+i2+i6),"indiferente":i3})

                        var canvas = document.createElement("canvas");
                        canvas.id = "mixed-chart";
                        canvas.style.width = "100%";
                        canvas.style.height = "400px";
                        $("#graficoEvolucao").html(canvas);

                          new Chart(document.getElementById("mixed-chart"), {
                              type: 'bar',
                              data: {
                                labels: ["Pesquisa 1", "Pesquisa 2", "Pesquisa 3", "Pesquisa 4"],
                                datasets: [
                                  {
                                    label: "Linha Positivo",
                                    type: "line",
                                    borderColor: "#a2eca2",
                                    data: [result1[0].positivo,result2[0].positivo,result3[0].positivo,result4[0].positivo],
                                    fill: false
                                  }, {
                                    label: "Linha Negativo",
                                    type: "line",
                                    borderColor: "#e6937a",
                                    data: [result1[0].negativo,result2[0].negativo,result3[0].negativo,result4[0].negativo],
                                    fill: false
                                  }, {
                                    label: "Linha Indiferente",
                                    type: "line",
                                    borderColor: "#f5e471",
                                    data: [result1[0].indiferente,result2[0].indiferente,result3[0].indiferente,result4[0].indiferente],
                                    fill: false
                                  },{
                                    label: "Positivo",
                                    type: "bar",
                                    backgroundColor: "#a2eca2",
                                    data: [result1[0].positivo,result2[0].positivo,result3[0].positivo,result4[0].positivo]
                                  }, {
                                    label: "Negativo",
                                    type: "bar",
                                    backgroundColor: "#e6937a",
                                    data: [result1[0].negativo,result2[0].negativo,result3[0].negativo,result4[0].negativo]
                                  }, {
                                    label: "Indiferente",
                                    type: "bar",
                                    backgroundColor: "#f5e471",
                                    data: [result1[0].indiferente,result2[0].indiferente,result3[0].indiferente,result4[0].indiferente]
                                  }
                                ]
                              },
                              options: {
                                title: {
                                  display: true,
                                  text: 'Grafico de Evolução'
                                }
                                }
                              });




  }
  });
}

function Evolution(){

  var filtrosDepartamento = document.getElementById("depFiltro").value;
  var filtrosPesquisa = 0;

      $.ajax({
        url: "../control/BuscaResposta.php",
        type: "POST",
        dataType: "json",
        data: {filtrosDepartamento:filtrosDepartamento,filtrosPesquisa:filtrosPesquisa},
        success: function(data) {

          $.ajax({
            url: "../control/BuscapesquisaClima.php",
            type: "POST",
            dataType: "json",
            success: function(data2) {


          var select1 = document.createElement("select");
          select1.className ="form-control form_c";
          select1.setAttribute("onchange","Evolution2()");
          select1.id = "EselectPes11";
          var select2 = document.createElement("select");
          select2.className ="form-control form_c";
          select2.setAttribute("onchange","Evolution2()");
          select2.id = "EselectPes22";
          var select3 = document.createElement("select");
          select3.className ="form-control form_c";
          select3.setAttribute("onchange","Evolution2()");
          select3.id = "EselectPes33";
          var select4 = document.createElement("select");
          select4.className ="form-control form_c";
          select4.setAttribute("onchange","Evolution2()");
          select4.id = "EselectPes44";

          var option1 = document.createElement("option");
          option1.value = "0";
          var option2 = document.createElement("option");
          option2.value = "0";
          var option3 = document.createElement("option");
          option3.value = "0";
          var option4 = document.createElement("option");
          option4.value = "0";
          var t1 = document.createTextNode("Pesquisa 1");
          var t2 = document.createTextNode("Pesquisa 2");
          var t3 = document.createTextNode("Pesquisa 3");
          var t4 = document.createTextNode("Pesquisa 4");
          option1.appendChild(t1);
          select1.appendChild(option1);
          option2.appendChild(t2);
          select2.appendChild(option2);
          option3.appendChild(t3);
          select3.appendChild(option3);
          option4.appendChild(t4);
          select4.appendChild(option4);


          data2.map(function(item,index){
            var option1 = document.createElement("option");
            option1.value = item.id;
            var option2 = document.createElement("option");
            option2.value = item.id;
            var option3 = document.createElement("option");
            option3.value = item.id;
            var option4 = document.createElement("option");
            option4.value = item.id;
            var t1 = document.createTextNode(item.indicador);
            var t2 = document.createTextNode(item.indicador);
            var t3 = document.createTextNode(item.indicador);
            var t4 = document.createTextNode(item.indicador);
            option1.appendChild(t1);
            option2.appendChild(t2);
            option3.appendChild(t3);
            option4.appendChild(t4);
            select1.appendChild(option1)
            select2.appendChild(option2)
            select3.appendChild(option3)
            select4.appendChild(option4)
          });

          $("#EselectPes1").html(select1);
          $("#EselectPes2").html(select2);
          $("#EselectPes3").html(select3);
          $("#EselectPes4").html(select4);

var canvas = document.createElement("canvas");
canvas.id = "mixed-chart";
canvas.style.width = "100%";
canvas.style.height = "400px";
$("#graficoEvolucao").html(canvas);

  new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
          {
            label: "Linha Positivo",
            type: "line",
            borderColor: "#a2eca2",
            data: [1,2,3,4],
            fill: false
          }, {
            label: "Linha Negativo",
            type: "line",
            borderColor: "#e6937a",
            data: [2,3,4,5],
            fill: false
          }, {
            label: "Linha Indiferente",
            type: "line",
            borderColor: "#f5e471",
            data: [0,1,2,3],
            fill: false
          },{
            label: "Positivo",
            type: "bar",
            backgroundColor: "#a2eca2",
            data: [1,2,3,4]
          }, {
            label: "Negativo",
            type: "bar",
            backgroundColor: "#e6937a",
            data: [0,1,2,3]
          }, {
            label: "Indiferente",
            type: "bar",
            backgroundColor: "#f5e471",
            data: [2,3,4,5]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Grafico de Evolução'
        }
        }
      });
    }
    });
  }
});

}

function graficos(index_tela){

if (index_tela=="1") {
document.getElementById("tela_geral").style.display = "block";
document.getElementById("tela_departamento").style.display = "none";
document.getElementById("tela_colaboradores").style.display = "none";
document.getElementById("tela_evolucao").style.display = "none";
document.getElementById("pesFiltro").style.display = "block";
document.getElementById("pesFiltro2").style.display = "none";
document.getElementById("depFiltro").style.display = "block";
$("#tema").html("Dashboard Geral");
}else if (index_tela=="2") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "block";
  document.getElementById("tela_colaboradores").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("pesFiltro").style.display = "none";
  document.getElementById("pesFiltro2").style.display = "block";
  document.getElementById("depFiltro").style.display = "none";
  $("#tema").html("Dashboard Departamento");
  rankingDEP();
}else if (index_tela=="3") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaboradores").style.display = "block";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("pesFiltro").style.display = "block";
  document.getElementById("pesFiltro2").style.display = "none";
  document.getElementById("depFiltro").style.display = "block";
  $("#tema").html("Dashboard Colaboradores");
}else if (index_tela=="4") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaboradores").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "block";
  document.getElementById("pesFiltro").style.display = "none";
  document.getElementById("pesFiltro2").style.display = "none";
  document.getElementById("depFiltro").style.display = "block";
  Evolution();
  $("#tema").html("Dashboard Evolução");
}

var filtrosDepartamento = document.getElementById("depFiltro").value;
var filtrosPesquisa = document.getElementById("pesFiltro").value;

    $.ajax({
      url: "../control/BuscaResposta.php",
      type: "POST",
      dataType: "json",
      data: {filtrosDepartamento:filtrosDepartamento,filtrosPesquisa:filtrosPesquisa},
      success: function(data) {

        $.ajax({
          url: "../control/BuscatamanhoClima.php",
          type: "POST",
          dataType: "json",
          success: function(data2) {
            var data3  = data2;
            var data2  = data2.length;
            var tam2 = data2;
            var qtn_resposta = data.length;
            var pos = 0;
            var ind = 0;
            var neg = 0;
            var total =0;
            var ranking_resposta_positivas = [];
            var ranking_resposta_negativas = [];
            var ranking = [];
            var colaboradores = [];
            for (var i = 0; i < data.length; i++) {
              colaboradores.push({"nome":data[i].nome,"satis":0});
            }

            for (var i = 0; i < data2; i++) {
              ranking_resposta_positivas.push({"pergunta":data3[i].pergunta,"value":0,"tipo":data3[i].tipo});
              ranking_resposta_negativas.push({"pergunta":data3[i].pergunta,"value":0,"tipo":data3[i].tipo});
              ranking.push({"pergunta":data3[i].pergunta,"tipo":data3[i].tipo,"SIM":0,"NAO":0,"MS":0,"SA":0,"IND":0,"IN":0,"MI":0});
              }
              if (data=="0") {
                //Colocar sweetalert2
                alert("Vazio");
              }

//////////////////////////////////////////////////////////////
              for (var i = 0; i < data.length; i++) {
                var aux = JSON.parse(data[i].resposta);
                //loop em todas as perguntas
                for (var j = 0; j < data2; j++) {
                  if (aux[j]=="1") {
                    ranking[j].MI += 1;
                   }
                   if (aux[j]=="2") {
                     ranking[j].IN += 1;
                    }
                    if (aux[j]=="3") {
                      ranking[j].IND += 1;
                     }
                     if (aux[j]=="4") {
                       ranking[j].SA += 1;
                      }
                      if (aux[j]=="5") {
                        ranking[j].MS += 1;
                       }
                    if (aux[j]=="Não") {
                      ranking[j].NAO += 1;
                     }
                     if (aux[j]=="Sim") {
                       ranking[j].SIM += 1;
                      }
                }
            }

            var tbody = document.createElement("tbody");

              ranking.map(function(item,index){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var t1 = document.createTextNode(index+1);
                td1.appendChild(t1);
                td1.className = "ctech2";
                var td2 = document.createElement("td");
                var t2 = document.createTextNode(item.pergunta);
                td2.appendChild(t2);
                td2.className = "ctech2";
                var td3 = document.createElement("td");
                var t3 = document.createTextNode(item.SIM);
                td3.appendChild(t3);
                td3.className = "ctech3";
                var td4 = document.createElement("td");
                var t4 = document.createTextNode(item.NAO);
                td4.appendChild(t4);
                td4.style.borderRight = "solid 1px";
                td4.className = "ctech3";
                var td5 = document.createElement("td");
                var t5 = document.createTextNode(item.MS);
                td5.appendChild(t5);
                td5.className = "ctech3";
                var td6 = document.createElement("td");
                var t6 = document.createTextNode(item.SA);
                td6.appendChild(t6);
                td6.className = "ctech3";
                var td7 = document.createElement("td");
                var t7 = document.createTextNode(item.IND);
                td7.appendChild(t7);
                td7.className = "ctech3";
                var td8 = document.createElement("td");
                var t8 = document.createTextNode(item.IN);
                td8.appendChild(t8);
                td8.className = "ctech3";
                var td9 = document.createElement("td");
                var t9 = document.createTextNode(item.MI);
                td9.appendChild(t9);
                td9.className = "ctech3";
                var td10 = document.createElement("td");
                var t10 = document.createTextNode(qtn_resposta);
                td10.appendChild(t10);
                td10.className = "ctech2";
                var td11 = document.createElement("td");
                var t11 = document.createTextNode(item.SA+item.MS);
                td11.appendChild(t11);
                td11.className = "ctech3";
                var td12 = document.createElement("td");
                var r = ((item.SA+item.MS)/qtn_resposta)*100;
                r = r.toFixed(2);
                var t12 = document.createTextNode(r+"%");
                td12.appendChild(t12);
                td12.className = "ctech2";
                var td13 = document.createElement("td");
                var t13 = document.createTextNode(item.IN+item.MI);
                td13.appendChild(t13);
                td13.className = "ctech3";
                var td14 = document.createElement("td");
                r =((item.IN+item.MI)/qtn_resposta)*100;
                r = r.toFixed(2);
                var t14 = document.createTextNode(r+"%");
                td14.appendChild(t14);
                td14.className = "ctech2";
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);
                tr.appendChild(td10);
                tr.appendChild(td11);
                tr.appendChild(td12);
                tr.appendChild(td13);
                tr.appendChild(td14);
                tbody.appendChild(tr)
                tbody.id = "body5";
              });
            const pai5 = document.getElementById("ranking2");
            const filho5 = pai5.querySelector("#body5");
            if (filho5 != null) {
            var node5 = document.getElementById("body5");
            if (node5.parentNode) {
            node5.parentNode.removeChild(node5);
            }
            }
            document.getElementById("ranking2").appendChild(tbody);

            ///////////////////////////////////////////////
            //Loop em todas as resposta
            for (var i = 0; i < data.length; i++) {
              var aux = JSON.parse(data[i].resposta);
              //loop em todas as perguntas
              for (var j = 0; j < data2; j++) {
                total = total+1;
                if (aux[j]=="1"||aux[j]=="2"||aux[j]=="Não") {
                  neg = neg+1;
                  ranking_resposta_negativas[j].value += 1;
                 }
                 if (aux[j]=="4"||aux[j]=="5"||aux[j]=="Sim") {
                   pos = pos+1;
                   ranking_resposta_positivas[j].value += 1;
                  }
                  if (aux[j]=="3") {
                    ranking_resposta_negativas[j].value += 1;
                    ind = ind+1;
                   }
              }
          }

          ranking_resposta_negativas.sort((a,b)=>{
            return b.value - a.value;
          })
          ranking_resposta_positivas.sort((a,b)=>{
            return b.value - a.value;
          })

          montaRanking(ranking_resposta_negativas,ranking_resposta_positivas,qtn_resposta)

              for (var i = 0; i < data.length; i++) {
                var aux = JSON.parse(data[i].resposta);

               for (var j = 0; j < aux.length; j++) {
                   if (aux[j]=="4"||aux[j]=="5"||aux[j]=="Sim") {
                    colaboradores[i].satis +=1;
                   }
                  }

                }

                colaboradores.sort((a,b)=>{
                  return b.satis - a.satis;
                })
                var tam = colaboradores.length;
                tam= tam/2;
                var tbody = document.createElement("tbody");
                var tbody2 = document.createElement("tbody");
                var test = [];
                colaboradores.map(function(item,index){
                  if(index<tam){
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var t1 = document.createTextNode(item.nome);
                    td1.appendChild(t1);
                    td1.className = "top_col";
                    td1.style.borderLeft = "solid 1px";
                    var td2 = document.createElement("td");
                    var val = (item.satis/tam2)*100;
                    val = val.toFixed(2);
                    val2 = 100-val;
                    val = val+"%";
                    val2 = val2+"%";
                    var t2 = document.createTextNode(val);
                    td2.appendChild(t2);
                    td2.className = "top_col";
                    var td3 = document.createElement("td");
                    var t3 = document.createTextNode(val2);
                    td3.appendChild(t3);
                    td3.className = "top_col";
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tbody.appendChild(tr)
                    tbody.id = "top_body";
                  }else{
                    test.push(item);
                  }

                });
                test.sort((a,b)=>{
                  return a.satis - b.satis;
                });

                test.map(function(item,index){
                  var tr2 = document.createElement("tr");
                  var td12 = document.createElement("td");
                  var t12 = document.createTextNode(item.nome);
                  td12.appendChild(t12);
                  td12.className = "top_col";
                  td12.style.borderLeft = "solid 1px";
                  var td22 = document.createElement("td");
                  var val = (item.satis/tam2)*100;
                  val = val.toFixed(2);
                  val2 = 100-val;
                  val = val+"%";
                  val2 = val2+"%";
                  var t22 = document.createTextNode(val2);
                  td22.appendChild(t22);
                  td22.className = "top_col";
                  var td32 = document.createElement("td");
                  var t32 = document.createTextNode(val);
                  td32.appendChild(t32);
                  td32.className = "top_col";
                  tr2.appendChild(td12);
                  tr2.appendChild(td22);
                  tr2.appendChild(td32);
                  tbody2.appendChild(tr2)
                  tbody2.id = "top_body2";
              });

                const pai8 = document.getElementById("top_col_1");
                const filho8 = pai8.querySelector("#top_body");
                if (filho8 != null) {
                var node8 = document.getElementById("top_body");
                if (node8.parentNode) {
                node8.parentNode.removeChild(node8);
                }
                }
                const pai9 = document.getElementById("top_col_2");
                const filho9 = pai9.querySelector("#top_body2");
                if (filho9 != null) {
                var node9 = document.getElementById("top_body2");
                if (node9.parentNode) {
                node9.parentNode.removeChild(node9);
                }
                }
                document.getElementById("top_col_1").appendChild(tbody);
                document.getElementById("top_col_2").appendChild(tbody2);




          var dataAux = []
          dataAux.push(pos);
          dataAux.push(neg);
          dataAux.push(ind);
          var pos2 = (pos/total)*100;
          pos2 = pos2.toFixed(2);
          pos2 = pos2+"%";
          var neg2 = (neg/total)*100;
          neg2 = neg2.toFixed(2);
          neg2 = neg2+"%";
          var ind2 = (ind/total)*100;
          ind2 = ind2.toFixed(2);
          ind2 = ind2+"%";
          $("#pos_qtn").html(pos);
          $("#neg_qtn").html(neg);
          $("#ind_qtn").html(ind);
          $("#pos_qtn2").html(pos2);
          $("#neg_qtn2").html(neg2);
          $("#ind_qtn2").html(ind2);
          new Chart(document.getElementById("doughnut-chart"), {
              type: 'doughnut',
              data: {
                labels: ["Positiva", "Negativa", "Indiferente"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#a2eca2", "#e6937a","#f5e471"],
                    data: dataAux
                  }
                ]
              },
              options: {
                title: {
                  display: true,
                  text: '% de respostas'
                }
              }
          });

          new Chart(document.getElementById("bar-chart-horizontal"), {
              type: 'horizontalBar',
              data: {
                labels: ["Positiva", "Negativa", "Indiferente"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#a2eca2", "#e6937a","#f5e471"],
                    data: dataAux
                  }
                ]
              },
              options: {
                  legend: {
                    display: false,
                    labels: {
                      fontColor: '#000'
                            }
                          },
                title: {
                  display: true,
                  text: '% de respostas',
                  labels: {
                    fontColor: '#000'
                        }
                }
              }
          });


          $.ajax({
            url: "../control/BuscaCol.php",
            type: "POST",
            dataType: "json",
            success: function(data4) {

              $.ajax({
                url: "../control/BuscapesquisaClima.php",
                type: "POST",
                dataType: "json",
                success: function(data5) {

                  var select = document.createElement("select");
                  select.className ="form-control";
                  select.setAttribute("onchange","indTable()");
                  var option = document.createElement("option");
                  option.value = "0";
                  var t = document.createTextNode("Colaborador");
                  option.appendChild(t);
                  select.appendChild(option)
                  select.id = "selectCol2";

                  var select1 = document.createElement("select");
                  select1.className ="form-control form_c";
                  select1.setAttribute("onchange","indTable()");
                  select1.id = "selectPes11";
                  var select2 = document.createElement("select");
                  select2.className ="form-control form_c";
                  select2.setAttribute("onchange","indTable()");
                  select2.id = "selectPes22";
                  var select3 = document.createElement("select");
                  select3.className ="form-control form_c";
                  select3.setAttribute("onchange","indTable()");
                  select3.id = "selectPes33";
                  var select4 = document.createElement("select");
                  select4.className ="form-control form_c";
                  select4.setAttribute("onchange","indTable()");
                  select4.id = "selectPes44";

                  var option1 = document.createElement("option");
                  option1.value = "0";
                  var option2 = document.createElement("option");
                  option2.value = "0";
                  var option3 = document.createElement("option");
                  option3.value = "0";
                  var option4 = document.createElement("option");
                  option4.value = "0";
                  var t1 = document.createTextNode("Pesquisa 1");
                  var t2 = document.createTextNode("Pesquisa 2");
                  var t3 = document.createTextNode("Pesquisa 3");
                  var t4 = document.createTextNode("Pesquisa 4");
                  option1.appendChild(t1);
                  select1.appendChild(option1);
                  option2.appendChild(t2);
                  select2.appendChild(option2);
                  option3.appendChild(t3);
                  select3.appendChild(option3);
                  option4.appendChild(t4);
                  select4.appendChild(option4);


                  data4.map(function(item,index){
                    var option = document.createElement("option");
                    option.value = item.nome;
                    var t = document.createTextNode(item.nome);
                    option.appendChild(t);
                    select.appendChild(option)
                  });


                  data5.map(function(item,index){

                    var option1 = document.createElement("option");
                    option1.value = item.id;
                    var option2 = document.createElement("option");
                    option2.value = item.id;
                    var option3 = document.createElement("option");
                    option3.value = item.id;
                    var option4 = document.createElement("option");
                    option4.value = item.id;
                    var t1 = document.createTextNode(item.indicador);
                    var t2 = document.createTextNode(item.indicador);
                    var t3 = document.createTextNode(item.indicador);
                    var t4 = document.createTextNode(item.indicador);

                    option1.appendChild(t1);
                    option2.appendChild(t2);
                    option3.appendChild(t3);
                    option4.appendChild(t4);
                    select1.appendChild(option1)
                    select2.appendChild(option2)
                    select3.appendChild(option3)
                    select4.appendChild(option4)
                  });

                  $("#selectCol").html(select);
                  $("#selectPes1").html(select1);
                  $("#selectPes2").html(select2);
                  $("#selectPes3").html(select3);
                  $("#selectPes4").html(select4);

                }
              });


              }
            });



        }
        });

        }
    });


}
function indTable(){
  var colaborador = document.getElementById("selectCol2").value;
  var selectPes1 = document.getElementById("selectPes11").value;
  var selectPes2 = document.getElementById("selectPes22").value;
  var selectPes3 = document.getElementById("selectPes33").value;
  var selectPes4 = document.getElementById("selectPes44").value;
  if (colaborador!="0") {
    $.ajax({
      url: "../control/BuscaResposta2.php",
      type: "POST",
      data: {colaborador:colaborador,selectPes1:selectPes1,selectPes2:selectPes2,selectPes3:selectPes3,
      selectPes4:selectPes4},
      success: function(data) {
        var data = JSON.parse(data);

        if (selectPes1!="0") {
          var pos = 0;
          var neg = 0;
          var sim = 0;
          var nao = 0;
          var msa = 0;
          var sat = 0;
          var ind = 0;
          var ins = 0;
          var min = 0;
          var total = 0;

              data.map((item,index)=>{
                if (item.id_pesquisa==selectPes1) {
                  var aux = JSON.parse(item.resposta);
                  total = aux.length;
                  for (var j = 0; j < aux.length; j++) {

                    ////////////////////////////////
                    var i = j+1;
                    var a2 = "#L"+i+"P1";

                    if (aux[j]=="1") {
                      min += 1;
                      $(a2).html("Muito Insatisfeito");
                     }
                     if (aux[j]=="2") {
                       ins += 1;
                       $(a2).html("Insatisfeito");
                      }
                      if (aux[j]=="3") {
                        ind += 1;
                        $(a2).html("Indiferente");
                       }
                       if (aux[j]=="4") {
                         sat += 1;
                         $(a2).html("Satisfeito");
                        }
                        if (aux[j]=="5") {
                          msa += 1;
                          $(a2).html("Muito Satisfeito");
                         }
                      if (aux[j]=="Não") {
                        nao += 1;
                        $(a2).html(aux[j]);
                       }
                       if (aux[j]=="Sim") {
                         sim += 1;
                         $(a2).html(aux[j]);
                        }
                  }
                  pos = sim+msa+sat;
                  neg = nao+min+ins;
                  pos = (pos/total)*100;
                  neg = (neg/total)*100;
                  pos = pos.toFixed(2);
                  neg = neg.toFixed(2);
                  pos = pos+"%";
                  neg = neg+"%";
                  $("#pos1").html(pos);
                  $("#neg1").html(neg);
                  $("#sim1").html(sim);
                  $("#nao1").html(nao);
                  $("#msa1").html(msa);
                  $("#sat1").html(sat);
                  $("#ind1").html(ind);
                  $("#ins1").html(ins);
                  $("#min1").html(min);
                  $("#total1").html(total);
                }
              });



        }else {
          $("#pos1").html("-");
          $("#neg1").html("-");
          $("#sim1").html("-");
          $("#nao1").html("-");
          $("#msa1").html("-");
          $("#sat1").html("-");
          $("#ind1").html("-");
          $("#ins1").html("-");
          $("#min1").html("-");
          $("#total1").html("-");
          var tam = $("#aux2 tbody tr").length;
          var tam2 = tam-1;
          for (var j = 0; j < tam2; j++) {
            var i = j+1;
            var a2 = "#L"+i+"P1";
            $(a2).html("-");
          }

        }

        if (selectPes2!="0") {
          var pos = 0;
          var neg = 0;
          var sim = 0;
          var nao = 0;
          var msa = 0;
          var sat = 0;
          var ind = 0;
          var ins = 0;
          var min = 0;
          var total = 0;


              data.map((item,index)=>{
                if (item.id_pesquisa==selectPes2) {
                  var aux = JSON.parse(item.resposta);
                  total = aux.length;
                  for (var j = 0; j < aux.length; j++) {
                    ////////////////////////////////
                    var i = j+1;
                    var a2 = "#L"+i+"P2";

                    if (aux[j]=="1") {
                      min += 1;
                      $(a2).html("Muito Insatisfeito");
                     }
                     if (aux[j]=="2") {
                       ins += 1;
                       $(a2).html("Insatisfeito");
                      }
                      if (aux[j]=="3") {
                        ind += 1;
                        $(a2).html("Indiferente");
                       }
                       if (aux[j]=="4") {
                         sat += 1;
                         $(a2).html("Satisfeito");
                        }
                        if (aux[j]=="5") {
                          msa += 1;
                          $(a2).html("Muito Satisfeito");
                         }
                      if (aux[j]=="Não") {
                        nao += 1;
                        $(a2).html(aux[j]);
                       }
                       if (aux[j]=="Sim") {
                         sim += 1;
                         $(a2).html(aux[j]);
                        }
                  }
                  pos = sim+msa+sat;
                  neg = nao+min+ins;
                  pos = (pos/total)*100;
                  neg = (neg/total)*100;
                  neg = neg.toFixed(2);
                  pos = pos.toFixed(2);
                  pos = pos+"%";
                  neg = neg+"%";
                  $("#pos2").html(pos);
                  $("#neg2").html(neg);
                  $("#sim2").html(sim);
                  $("#nao2").html(nao);
                  $("#msa2").html(msa);
                  $("#sat2").html(sat);
                  $("#ind2").html(ind);
                  $("#ins2").html(ins);
                  $("#min2").html(min);
                  $("#total2").html(total);
                }
              });

        }else {
          $("#pos2").html("-");
          $("#neg2").html("-");
          $("#sim2").html("-");
          $("#nao2").html("-");
          $("#msa2").html("-");
          $("#sat2").html("-");
          $("#ind2").html("-");
          $("#ins2").html("-");
          $("#min2").html("-");
          $("#total2").html("-");
          var tam = $("#aux2 tbody tr").length;
          var tam2 = tam-1;
          for (var j = 0; j < tam2; j++) {
            var i = j+1;
            var a2 = "#L"+i+"P2";
            $(a2).html("-");
          }

        }

        if (selectPes3!="0") {
          var pos = 0;
          var neg = 0;
          var sim = 0;
          var nao = 0;
          var msa = 0;
          var sat = 0;
          var ind = 0;
          var ins = 0;
          var min = 0;
          var total = 0;

              data.map((item,index)=>{
                if (item.id_pesquisa==selectPes3) {
                  var aux = JSON.parse(item.resposta);
                  total = aux.length;
                  for (var j = 0; j < aux.length; j++) {
                    ////////////////////////////////
                    var i = j+1;
                    var a2 = "#L"+i+"P3";

                    if (aux[j]=="1") {
                      min += 1;
                      $(a2).html("Muito Insatisfeito");
                     }
                     if (aux[j]=="2") {
                       ins += 1;
                       $(a2).html("Insatisfeito");
                      }
                      if (aux[j]=="3") {
                        ind += 1;
                        $(a2).html("Indiferente");
                       }
                       if (aux[j]=="4") {
                         sat += 1;
                         $(a2).html("Satisfeito");
                        }
                        if (aux[j]=="5") {
                          msa += 1;
                          $(a2).html("Muito Satisfeito");
                         }
                      if (aux[j]=="Não") {
                        nao += 1;
                        $(a2).html(aux[j]);
                       }
                       if (aux[j]=="Sim") {
                         sim += 1;
                         $(a2).html(aux[j]);
                        }
                  }
                  pos = sim+msa+sat;
                  neg = nao+min+ins;
                  pos = (pos/total)*100;
                  neg = (neg/total)*100;
                  pos = pos.toFixed(2);
                  neg = neg.toFixed(2);
                  pos = pos+"%";
                  neg = neg+"%";
                  $("#pos3").html(pos);
                  $("#neg3").html(neg);
                  $("#sim3").html(sim);
                  $("#nao3").html(nao);
                  $("#msa3").html(msa);
                  $("#sat3").html(sat);
                  $("#ind3").html(ind);
                  $("#ins3").html(ins);
                  $("#min3").html(min);
                  $("#total3").html(total);
                }
              });

        }else {
          $("#pos3").html("-");
          $("#neg3").html("-");
          $("#sim3").html("-");
          $("#nao3").html("-");
          $("#msa3").html("-");
          $("#sat3").html("-");
          $("#ind3").html("-");
          $("#ins3").html("-");
          $("#min3").html("-");
          $("#total3").html("-");
          var tam = $("#aux2 tbody tr").length;
          var tam2 = tam-1;
          for (var j = 0; j < tam2; j++) {
            var i = j+1;
            var a2 = "#L"+i+"P3";
            $(a2).html("-");
          }
        }
        if (selectPes4!="0") {
          var pos = 0;
          var neg = 0;
          var sim = 0;
          var nao = 0;
          var msa = 0;
          var sat = 0;
          var ind = 0;
          var ins = 0;
          var min = 0;
          var total = 0;

              data.map((item,index)=>{
                if (item.id_pesquisa==selectPes4) {
                  var aux = JSON.parse(item.resposta);
                  total = aux.length;
                  for (var j = 0; j < aux.length; j++) {
                    ////////////////////////////////
                    var i = j+1;
                    var a2 = "#L"+i+"P4";

                    if (aux[j]=="1") {
                      min += 1;
                      $(a2).html("Muito Insatisfeito");
                     }
                     if (aux[j]=="2") {
                       ins += 1;
                       $(a2).html("Insatisfeito");
                      }
                      if (aux[j]=="3") {
                        ind += 1;
                        $(a2).html("Indiferente");
                       }
                       if (aux[j]=="4") {
                         sat += 1;
                         $(a2).html("Satisfeito");
                        }
                        if (aux[j]=="5") {
                          msa += 1;
                          $(a2).html("Muito Satisfeito");
                         }
                      if (aux[j]=="Não") {
                        nao += 1;
                        $(a2).html(aux[j]);
                       }
                       if (aux[j]=="Sim") {
                         sim += 1;
                         $(a2).html(aux[j]);
                        }
                  }
                  pos = sim+msa+sat;
                  neg = nao+min+ins;
                  pos = (pos/total)*100;
                  neg = (neg/total)*100;
                  pos = pos.toFixed(2);
                  neg = neg.toFixed(2);
                  pos = pos+"%";
                  neg = neg+"%";
                  $("#pos4").html(pos);
                  $("#neg4").html(neg);
                  $("#sim4").html(sim);
                  $("#nao4").html(nao);
                  $("#msa4").html(msa);
                  $("#sat4").html(sat);
                  $("#ind4").html(ind);
                  $("#ins4").html(ins);
                  $("#min4").html(min);
                  $("#total4").html(total);
                }
              });

        }else {
          $("#pos4").html("-");
          $("#neg4").html("-");
          $("#sim4").html("-");
          $("#nao4").html("-");
          $("#msa4").html("-");
          $("#sat4").html("-");
          $("#ind4").html("-");
          $("#ins4").html("-");
          $("#min4").html("-");
          $("#total4").html("-");
          var tam = $("#aux2 tbody tr").length;
          var tam2 = tam-1;
          for (var j = 0; j < tam2; j++) {
            var i = j+1;
            var a2 = "#L"+i+"P4";
            $(a2).html("-");
          }
        }

      }
    });


    // }});
  }

}

function indTable2(){
var pesFiltro = document.getElementById("pesFiltro").value;

      $.ajax({
        url: "../control/BuscatamanhoClima.php",
        type: "POST",
        dataType: "json",
        success: function(data2) {
          //////////////////////////////////////////

          var tbodyX = document.createElement("tbody");
          tbodyX.id = "aux2_body";

                    data2.map((item,index)=>{
                      var tr = document.createElement("tr");
                      tr.style.textAlign = "center";
                      var td1 = document.createElement("td");
                      var td2 = document.createElement("td");
                      var td3 = document.createElement("td");
                      var td4 = document.createElement("td");
                      var td5 = document.createElement("td");
                      var td6 = document.createElement("td");
                      var i = index+1;
                      var td1T = document.createTextNode(i);
                      td1.appendChild(td1T);
                      var td2T = document.createTextNode(item.pergunta);
                      td2.appendChild(td2T);
                      td3.id = "L"+i+"P1";
                      td4.id = "L"+i+"P2";
                      td5.id = "L"+i+"P3";
                      td6.id = "L"+i+"P4";
                      tr.appendChild(td1);
                      tr.appendChild(td2);
                      tr.appendChild(td3);
                      tr.appendChild(td4);
                      tr.appendChild(td5);
                      tr.appendChild(td6);
                      tbodyX.appendChild(tr);
                    });
                    const pai = document.getElementById("aux2");
                    const filho = pai.querySelector("#aux2_body");

                    if (filho != null) {
                      var node = document.getElementById("aux2_body");
                      if (node.parentNode) {
                      node.parentNode.removeChild(node);
                      }
                    }
                    document.getElementById("aux2").appendChild(tbodyX);
            }
            });

}

function SalvaPergunta(){
  var pergunta = document.getElementById("pergunta").value;
  var tipo = document.getElementById("inputTipo").value;

  $.ajax({
    url: "../control/SalvaPergunta.php",
    type: "POST",
    data: {pergunta:pergunta,tipo:tipo},
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
            title: 'Pergunta Cadastrada Com Sucesso'
          })
          setTimeout(function(){
          window.location.reload();
        }, 1000);
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha ao Cadastrar Pergunta'
          })

      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });


}



function listaForms(){
  $.ajax({
    type: 'POST',
    url: "../control/listaForms.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"pergunta":data[i].pergunta,"tipo":data[i].tipo,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}

function listaForms2(){
  $.ajax({
    type: 'POST',
    url: "../control/listaForms2.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"indicador":data[i].indicador,"setores":data[i].setores,"inicio":data[i].inicio,"fim":data[i].fim,"responsavel":data[i].responsavel,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>"
      });
    }
criarTabela2(data1);
				}
			});
}

function criarTabela(data){
    var table = document.getElementById('table3');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table3' ) ) {
      table = $('#table3').DataTable();
    }
    else {
      table = $('#table3').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "pergunta"},
          { data: "tipo"},
          { data: "botao1"},
          { data: "botao2"},
      ],
        dom: 'Bfrtip',
         buttons: [
             'excel',
             'pdf',
             'copy',
             'csv',
             'print'
         ],
          select: true,
      } );
    }
}

function criarTabela2(data){
    var table = document.getElementById('table4');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table4' ) ) {
      table = $('#table4').DataTable();
    }
    else {
      table = $('#table4').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "indicador"},
          { data: "setores"},
          { data: "inicio"},
          { data: "fim"},
          { data: "responsavel"},
          { data: "botao1"},
      ],
        dom: 'Bfrtip',
         buttons: [
             'excel',
             'pdf',
             'copy',
             'csv',
             'print'
         ],
          select: true,
      } );
    }
}
function InitPesquisa(){
  $("#modalepesquisa").modal();


}

function IniciarPesquisa(){
  var selectedVal = $("#multiselect").val();
  var indicador = document.getElementById("indicador").value;
  var responsavel = document.getElementById("responsavel").value;
  var inicio = document.getElementById("data_init").value;
  var fim = document.getElementById("data_end").value;
  selectedVal = JSON.stringify(selectedVal);
    $.ajax({
      url: "../control/SalvaPesquisa.php",
      type: "POST",
      data: {indicador:indicador,responsavel:responsavel,inicio:inicio,fim:fim,
      json:selectedVal},
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
              title: 'Pesquisa Iniciada Com Sucesso'
            })
            setTimeout(function(){
            window.location.reload();
          }, 1000);
        } else {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000
            })

            Toast.fire({
              type: 'error',
              title: 'Falha ao Iniciar Pesquisa'
            })

        }
      },
      error: function(jXHR, textStatus, errorThrown) {}
    });

}



function ExcluiPergunta(id){
  Swal.fire({
  title: 'Deseja Ecluir?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim!'
}).then((result) => {
    if (result.value) {
      Exclui(id);
    }
})
}


function Exclui(id){
  var id = id;
  $.ajax({
    url: "../control/ExcluiPergunta.php",
    type: "POST",
    data: {id:id},
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
            title: 'Pergunta Excluida Com Sucesso'
          })
          setTimeout(function(){
          window.location.reload();
        }, 1000);
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Tentar Excluir Pergunta'
          })
      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });
}

function Edita(id,data){
  for (var i = 0; i < data.length; i++) {
    if (data[i].id==id) {
      dataProduto = data[i];
    }
  }
      var pergunta2 = document.getElementById("pergunta2");
      pergunta2.value = dataProduto.pergunta;
      var id = document.getElementById("id");
      id.value = dataProduto.id;
      $("#inputTipo2").val(dataProduto.tipo).change();
      $("#modaledit").modal();
}

function EditaPergunta(){
  var id = document.getElementById("id").value;
  var pergunta = document.getElementById("pergunta2").value;
  var tipo = document.getElementById("inputTipo2").value;

  $.ajax({
    url: "../control/EditaPerguntaClimaOrganizacional.php",
    type: "POST",
    data: {pergunta:pergunta,tipo:tipo,id:id},
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
            title: 'Pergunta Editada Com Sucesso'
          })
          $("#modaledit").modal('hide');

          setTimeout(function(){
          window.location.reload();
        }, 1000);

      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha ao Editar Pergunta'
          })
          $("#modaledit").modal('hide');
      }
    }
  });


}




////////////////////////////////////////////////////////////////
//Essa função é o POP-UP que pergunta qual relatorio vai ser gerado
function Relatorio(){
  Swal.fire({
            title: 'Tipo de Relatorio',
            html: '<div style="display:flex">'+
                  '<input style="margin-left:15px;margin-right:10px;margin-top:8px" type="checkbox" id="geral"/><h3>Geral</h3>'+
                  '<input style="margin-left:15px;margin-right:10px;margin-top:8px" type="checkbox" id="departamento"/><h3>Departamento</h3>'+
                  '<input style="margin-left:15px;margin-right:10px;margin-top:8px" type="checkbox" id="colaboradores" /><h3>Colaboradores</h3>'+
                  '<input style="margin-left:15px;margin-right:10px;margin-top:8px" type="checkbox" id="evolucao" /><h3>Evolução</h3></div>',
            confirmButtonText: 'Gerar Relatorio',
            preConfirm: () => {
              var geral = Swal.getPopup().querySelector('#geral').checked
              var departamento = Swal.getPopup().querySelector('#departamento').checked
              var colaboradores = Swal.getPopup().querySelector('#colaboradores').checked
              var evolucao = Swal.getPopup().querySelector('#evolucao').checked
              return {geral: geral, departamento: departamento,colaboradores: colaboradores, evolucao: evolucao}
            }
          }).then((result) => {
            RelatorioX(result);
          })
}

//essa funcção recebe o resultado do pop up e chama a funcção que de gerar relatorio
function RelatorioX(result){
  console.log(result.value);
  if (result.value.geral==true) {
    //aqui gera o Relatorio quando o geral ta selecionado
    Relatorio1();
  }else if (result.value.geral==false) {
    ////fazer os graficos para os demais casos
  }
}


function Relatorio1(){
  html2canvas($("#linha1"), {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("img/jpg",1.0);
      document.getElementById("figura1").value = myImage;
      $("#btn_dep").click();
      setTimeout(function(){
        Relatorio2();
      }, 500);
    }
  });
}

function Relatorio2(){
  html2canvas($("#Painel_Dep"), {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("img/jpg",1.0);
      document.getElementById("figura2").value = myImage;
      $("#btn_evo").click();
      setTimeout(function(){
        Relatorio3();
      }, 500);
    }
  });
}

function Relatorio3(){
  html2canvas($("#graficoEvolucao"), {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("img/png",1.0);
      document.getElementById("figura3").value = myImage;
      console.log(myImage);
      pdfClima.submit();
    }
  });
}
