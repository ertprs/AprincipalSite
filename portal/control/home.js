var respostas = [];

function Indicadores(id){
  var d = document.createElement("div");
  d.className = "row";
    $.ajax({
      url: "control/buscaRoot.php",
      type: "POST",
      dataType: "json",
      data:{id:id},
      success: function(data2) {

              var  data = JSON.parse(data2[0].root);
              var dashboard =  "false";
              data.map(function(item,index){
                if (item.config1=="true") {
                  dashboard = "true";
                }
              });

        if (dashboard=="true") {
          document.getElementById("indicadores_geral").style.display = "flex";

              $.ajax({
                url: "control/BuscaRespostaHome.php",
                type: "POST",
                dataType: "json",
                success: function(data) {

                  $.ajax({
                    url: "control/BuscatamanhoClima.php",
                    type: "POST",
                    dataType: "json",
                    success: function(data2) {
                      var data3  = data2;
                      var data2  = data2.length;
                      var tam2 = data2;
                      var qtn_resposta = data.length;
                      var pos = 0;
                      var total =0;
                        if (data=="0") {
                          alert("Vazio");
                        }
          //////////////////////////////////////////////////////////////
                      for (var i = 0; i < data.length; i++) {
                        var aux = JSON.parse(data[i].resposta);
                        //loop em todas as perguntas
                        for (var j = 0; j < data2; j++) {
                          total = total+1;
                           if (aux[j]=="4"||aux[j]=="5"||aux[j]=="Sim") {
                             pos = pos+1;
                            }
                        }
                    }
                    var pos2 = (pos/total)*100;
                    pos2 = pos2.toFixed(2);
                    pos2 = pos2+"%";
                    $("#climaOrg").html(pos2);
                  }
                  });

                  }
              });
        }

        $.ajax({
          url: "control/BuscaForms.php",
          type: "POST",
          dataType: "json",
          data: {id:id},
          success: function(data) {

            if (data!="0") {
              for (var i = 0; i < data.length; i++) {
                var al = JSON.parse(data[i].setores);

                if (al!="Todos") {

                  var setor = document.getElementById("setor_user").value;
                  var setor_pesquisa = JSON.parse(data[i].setores);
                  for (var k = 0; k < setor_pesquisa.length; k++) {
                      if (setor_pesquisa[k]==setor) {
                        var div = document.createElement("div");
                        div.className = "col-4";
                        var div2 = document.createElement("div");
                        div2.className = "card gradient-2";
                        if (data[i].verifica=="CLIMA") {
                            div2.setAttribute("onclick","respondaClima("+data[i].id+")");
                        }else if(data[i].verifica=="DESEMPENHO"){
                          div2.setAttribute("onclick","respondaDesempenho("+data[i].id+")");
                        }

                        div2.style.cursor = "pointer";
                        var div3 = document.createElement("div");
                        div3.className = "card-body";
                        var h3 = document.createElement("h2");
                        h3.style.fontSize = "15px !important";
                        h3.className = "card-title text-white";
                        var h3T = document.createTextNode(data[i].indicador);
                        h3.appendChild(h3T);
                        var span = document.createElement("span");
                        span.className = "float-right display-5 opacity-5";
                        var ic = document.createElement("i");
                        ic.className = "fa fa-search";
                        span.appendChild(ic);
                        var div4 = document.createElement("div");
                        div4.className = "d-inline-block";
                        var h2 = document.createElement("h2");
                        h2.style.fontSize = "15px !important";
                        h2.className = "text-white";
                        var h2T = document.createTextNode(" - ");
                        h2.appendChild(h2T);
                        var p = document.createElement("p");
                        p.className = "p_color text-white mb-0";
                        var pT = document.createTextNode(data[i].fim);
                        p.appendChild(pT);
                        div4.appendChild(h2);
                        div4.appendChild(p);
                        div3.appendChild(h3);
                        div3.appendChild(div4);
                        div3.appendChild(span);
                        div2.appendChild(div3);
                        div.appendChild(div2);
                        d.appendChild(div);

                      }
                  }
                }else {
                  var div = document.createElement("div");
                  div.className = "col-4";
                  var div2 = document.createElement("div");
                  div2.className = "card gradient-2";
                  if (data[i].verifica=="CLIMA") {
                      div2.setAttribute("onclick","respondaClima("+data[i].id+")");
                  }else if(data[i].verifica=="DESEMPENHO"){
                    div2.setAttribute("onclick","respondaDesempenho("+data[i].id+")");
                  }

                  div2.style.cursor = "pointer";
                  var div3 = document.createElement("div");
                  div3.className = "card-body";
                  var h3 = document.createElement("h2");
                  h3.style.fontSize = "15px !important";
                  h3.className = "card-title text-white";
                  var h3T = document.createTextNode(data[i].indicador);
                  h3.appendChild(h3T);
                  var span = document.createElement("span");
                  span.className = "float-right display-5 opacity-5";
                  var ic = document.createElement("i");
                  ic.className = "fa fa-search";
                  span.appendChild(ic);
                  var div4 = document.createElement("div");
                  div4.className = "d-inline-block";
                  var h2 = document.createElement("h2");
                  h2.style.fontSize = "15px !important";
                  h2.className = "text-white";
                  var h2T = document.createTextNode(" - ");
                  h2.appendChild(h2T);
                  var p = document.createElement("p");
                  p.className = "p_color text-white mb-0";
                  var pT = document.createTextNode(data[i].fim);
                  p.appendChild(pT);
                  div4.appendChild(h2);
                  div4.appendChild(p);
                  div3.appendChild(h3);
                  div3.appendChild(div4);
                  div3.appendChild(span);
                  div2.appendChild(div3);
                  div.appendChild(div2);
                  d.appendChild(div);

                }

              }

            }



            $.ajax({
              url: "control/BuscaForms_Gestor.php",
              type: "POST",
              dataType: "json",
              data: {id:id},
              success: function(data2) {
                console.log(data2);
                if (data2=="0" && data=="0") {

                  var h3T = document.createTextNode("Busca de Pesquisas Resultou Vazia");
                  var h3 = document.createElement("h4");
                  h3.style.color = "#cec7c7";
                  h3.appendChild(h3T);
                  d.style.justifyContent = "center";
                  d.appendChild(h3);

                }else {
                  data = data2;
                  for (var i = 0; i < data.length; i++) {

                      var div = document.createElement("div");
                      div.className = "col-4";
                      var div2 = document.createElement("div");
                      div2.className = "card gradient-3";
                      div2.setAttribute("onclick","respondaDesempenho2("+data[i].gestor+","+data[i].id+","+data[i].id_pesquisa+","+data[i].id_colaborador+")");
                      div2.style.cursor = "pointer";
                      var div3 = document.createElement("div");
                      div3.className = "card-body";
                      var h3 = document.createElement("h2");
                      h3.style.fontSize = "15px !important";
                      h3.className = "card-title text-white";
                      var h3T = document.createTextNode(data[i].indicador);
                      h3.appendChild(h3T);
                      var span = document.createElement("span");
                      span.className = "float-right display-5 opacity-5";
                      var ic = document.createElement("i");
                      ic.className = "fa fa-search";
                      span.appendChild(ic);
                      var div4 = document.createElement("div");
                      div4.className = "d-inline-block";
                      var h2 = document.createElement("span");
                      h2.className = "text-white";
                      var h2T = document.createTextNode(data[i].nome);
                      h2.appendChild(h2T);
                      h2.style.fontSize = "25px !important";
                      var p = document.createElement("p");
                      p.className = "p_color text-white mb-0";
                      var pT = document.createTextNode(data[i].fim);
                      p.appendChild(pT);
                      div4.appendChild(h2);
                      div4.appendChild(p);
                      div3.appendChild(h3);
                      div3.appendChild(div4);
                      div3.appendChild(span);
                      div2.appendChild(div3);
                      div.appendChild(div2);
                      d.appendChild(div);

                  }

                }

          $("#tela_dash").html(d);

              }});

          }});

    }});



      $.ajax({
        url: "control/BuscaAviso.php",
        type: "POST",
        dataType: "json",
        success: function(data2) {

          var d = document.createElement("div");
          d.className = "row";
          if (data2=="0") {
            var d = document.createElement("div");
            d.className = "row";
            var h3T = document.createTextNode("Busca de Avisos Resultou Vazia");
            var h3 = document.createElement("h4");
            h3.style.color = "#cec7c7";
            h3.appendChild(h3T);
            d.appendChild(h3);
            $("#tela_avisos2").html(d);
          }else {
            for (var i = 0; i < data2.length; i++) {

                var div = document.createElement("div");
                div.className = "col-3";
                var div2 = document.createElement("div");
                div2.className = "card gradient-2";
                div2.setAttribute("onclick","respondaClima("+data2[i].id+")");
                div2.style.cursor = "pointer";
                var div3 = document.createElement("div");
                div3.className = "card-body";
                var h3 = document.createElement("h2");
                h3.className = "card-title text-white";
                var h3T = document.createTextNode(data2[i].indicador);
                h3.appendChild(h3T);
                var span = document.createElement("span");
                span.className = "float-right display-5 opacity-5";
                var ic = document.createElement("i");
                ic.className = "fa fa-search";
                span.appendChild(ic);
                var div4 = document.createElement("div");
                div4.className = "d-inline-block";
                var h2 = document.createElement("h2");
                h2.className = "text-white";
                var h2T = document.createTextNode(" - ");
                h2.appendChild(h2T);
                var p = document.createElement("p");
                p.className = "p_color text-white mb-0";
                var pT = document.createTextNode(data2[i].fim);
                p.appendChild(pT);
                div4.appendChild(h2);
                div4.appendChild(p);
                div3.appendChild(h3);
                div3.appendChild(div4);
                div3.appendChild(span);
                div2.appendChild(div3);
                div.appendChild(div2);
                d.appendChild(div);

            }
                $("#tela_avisos").html(d);
          }



        }});
}


function respondaDesempenho(id){


        $.ajax({
          url: "control/BuscapesquisaDesempenho2.php",
          type: "POST",
          dataType: "json",
          data: {id:id},
          success: function(data2) {
            var respostas = data2[0].respostas;

        $.ajax({
          url: "control/BuscaResposta5.php",
          type: "POST",
          dataType: "json",
          data: {id:id,respostas:respostas},
          success: function(data) {


          nome = data2[0].indicador;

          aux2(data,nome,id);
        }});
      }});
}

function respondaDesempenho2(gestor,id_resposta,id_pesquisa,id_colaborador){


      $.ajax({
        url: "control/BuscapesquisaDesempenho2.php",
        type: "POST",
        dataType: "json",
        data: {id:id_pesquisa},
        success: function(data2) {
            var respostas = data2[0].respostas;
            $.ajax({
              url: "control/BuscaResposta5.php",
              type: "POST",
              dataType: "json",
              data: {id:id_pesquisa,respostas:respostas},
              success: function(data) {

              $.ajax({
                url: "control/VerificaUser.php",
                type: "POST",
                dataType: "json",
                data: {id:id_colaborador},
                success: function(data3) {
                  nome = data2[0].indicador;
                  aux22(data,nome,id_resposta,gestor);
                }});

        }});
      }});
}



async function aux22(data,nome,id_resposta,gestor){
respostas = [];
var value = 0;
if (gestor=="true") {
  var data = data.filter(function(a){
    return a.categoria == 1 || a.categoria==3;
  })
}else {
  var data = data.filter(function(a){
    return a.categoria == 2 || a.categoria==4;
  })
}
var tecnico = 0;var tecnicoVAL = 0;
var comportamental = 0;var comportamentalVAL = 0;
for (var i = 0; i < data.length; i++) {
  //data.map( async function(item,index){
        var indicador = data[i].texto;
            data2 = JSON.parse(data[i].conteudo);
for (var j = 0; j < data2.length; j++) {
              //data2.map( async function(item2,index2){
                if (j==0) {

                }else {

                  const inputOptions = new Promise((resolve) => {
                          resolve({
                            '1': 'INS',
                            '2': 'INS',
                            '3': 'INS',
                            '4': 'INS',
                            '5': 'REG',
                            '6': 'REG',
                            '7': 'BOM',
                            '8': 'BOM',
                            '9': 'EXC',
                            '10': 'EXC',
                          })
                      })
                      const { value: color } = await Swal.fire({
                        title: data2[j].titulo,
                        text: data2[j].texto,
                        input: 'radio',
                        width:900,
                        inputOptions: inputOptions,
                        inputValidator: (value) => {
                          if (!value) {
                            return 'Você Precisa Escolher Uma Opção!'
                          }
                        }
                      })
                      if (color) {
                        if (data[i].categoria=="1"||data[i].categoria=="2") {
                          comportamental = comportamental+Number(color);
                          comportamentalVAL +=1;
                        }else {
                           tecnicoVAL +=1;
                          tecnico = tecnico+Number(color);
                        }
                          respostas.push(color);
                      }
                }
          //    });

}


  //});

}
var result_comportamental = comportamental/comportamentalVAL;
var result_tecnico = tecnico/tecnicoVAL;
SalvaRespostas22(respostas,id_resposta,result_tecnico,result_comportamental);
}


async function aux2(data,nome,id){
respostas = [];
var value = 0;
var gestor = document.getElementById("gestor").value;
console.log("gestor: "+gestor);
if (gestor=="true") {
  var data = data.filter(function(a){
    return a.categoria == 1 || a.categoria==3;
  })
}else {
  var data = data.filter(function(a){
    return a.categoria == 2 || a.categoria==4;
  })
}

var tecnico = 0;var tecnicoVAL = 0;
var comportamental = 0;var comportamentalVAL = 0;
for (var i = 0; i < data.length; i++) {
        var indicador = data[i].texto;
            data2 = JSON.parse(data[i].conteudo);
for (var j = 0; j < data2.length; j++) {

                if (j==0) {

                }else {


                  const inputOptions = new Promise((resolve) => {
                          resolve({
                            '1': 'INS',
                            '2': 'INS',
                            '3': 'INS',
                            '4': 'INS',
                            '5': 'REG',
                            '6': 'REG',
                            '7': 'BOM',
                            '8': 'BOM',
                            '9': 'EXC',
                            '10': 'EXC',
                          })
                      })
                      const { value: color } = await Swal.fire({
                        title: data2[j].titulo,
                        text: data2[j].texto,
                        input: 'radio',
                        width:900,
                        inputOptions: inputOptions,
                        inputValidator: (value) => {
                          if (!value) {
                            return 'Você Precisa Escolher Uma Opção!'
                          }
                        }
                      })
                      if (color) {
                        if (data[i].categoria=="1"||data[i].categoria=="2") {
                          comportamental = comportamental+Number(color);
                          comportamentalVAL +=1;
                        }else {
                           tecnicoVAL +=1;
                          tecnico = tecnico+Number(color);
                        }
                          respostas.push(color);
                      }
                }

}

}
var result_comportamental = comportamental/comportamentalVAL;
var result_tecnico = tecnico/tecnicoVAL;
SalvaRespostas2(respostas,id,result_tecnico,result_comportamental);
}



function SalvaRespostas2(respostas,id,tecnico,comportamental){
  var login = document.getElementById("login_user").value;
  var senha = document.getElementById("senha_user").value;
  var gestor = "FALSE";
  $.ajax({
    url: "control/SalvaRespostas2.php",
    type: "POST",
    dataType: "json",
    data: {id:id,respostas:respostas,login:login,senha:senha,gestor:gestor,tecnico:tecnico,comportamental:comportamental},
    success: function(data2) {

      if (data2=="1") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'success',
            title: 'Resposta Computada Com Sucesso'
          })
          setTimeout(function(){
            document.location.reload();
          }, 3000);

      }else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Computar'
          })
      }
    }});

}



function SalvaRespostas22(respostas,id,tecnico,comportamental){
  $.ajax({
    url: "control/SalvaRespostas3.php",
    type: "POST",
    dataType: "json",
    data: {respostas:respostas,id:id,tecnico:tecnico,comportamental:comportamental},
    success: function(data2) {
      if (data2=="1") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })
          Toast.fire({
            type: 'success',
            title: 'Resposta Computada Com Sucesso'
          })
          setTimeout(function(){
            document.location.reload();
          }, 3000);
      }else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Computar'
          })
      }
    }});

}



function respondaClima(id){
  $.ajax({
    url: "control/BuscaResposta4.php",
    type: "POST",
    dataType: "json",
    data: {id:id},
    success: function(data) {

      $.ajax({
        url: "control/BuscapesquisaClima2.php",
        type: "POST",
        dataType: "json",
        data: {id:id},
        success: function(data2) {
          nome = data2[0].indicador;
            aux(data,nome,id);
        }});
      }});
}


async function aux(data,nome,id){
respostas = [];
var value = 0;
  for(var i=0; i< data.length;i++){
var j = i+1;
      if (data[i].tipo=="Dicotômica") {
        const value= await Swal.fire({
          title: "Pergunta "+j,
            text: data[i].pergunta,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
          }).then((result) => {
          if (result.value) {
            respostas.push("Sim");
          }else {
            respostas.push("Não");
          }
        })
      }else {

        const inputOptions = new Promise((resolve) => {
                resolve({
                  '1': 'Muito Insatisfeito',
                  '2': 'Insatisfeito',
                  '3': 'Indiferente',
                  '4': 'Satisfeito',
                  '5': 'Muito Satisfeito'
                })
            })

            const { value: color } = await Swal.fire({
              title: "Pergunta "+j,
              text: data[i].pergunta,
              input: 'radio',
              width:900,
              inputOptions: inputOptions,
              inputValidator: (value) => {
                if (!value) {
                  return 'Você Precisa Escolher Uma Opção!'
                }
              }
            })
            if (color) {
                respostas.push(color);
            }
      }
    }
SalvaRespostas(respostas,id);
}


function SalvaRespostas(respostas,id){
  var login = document.getElementById("login_user").value;
  var senha = document.getElementById("senha_user").value;
  $.ajax({
    url: "control/SalvaRespostas.php",
    type: "POST",
    dataType: "json",
    data: {id:id,respostas:respostas,login:login,senha:senha},
    success: function(data2) {

      if (data2=="1") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'success',
            title: 'Resposta Computada Com Sucesso'
          })
          setTimeout(function(){
            document.location.reload();
          }, 1000);

      }else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Computar'
          })
      }
    }});

}
