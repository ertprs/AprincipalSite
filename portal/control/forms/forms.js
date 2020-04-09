function BuscaPesquisas(){
  $("#titulo").html("Gerenciar Pesquisa de Satisfação");
  document.getElementById("BannerPesquisas").style.display = "block";
  document.getElementById("BannerPesquisaAberta").style.display = "none";
  $.ajax({
    type: 'POST',
    url: "../control/forms/Buscapesquisas.php",
    dataType: "json",
    success: function(data) {
      var aux = document.createElement("div");
      aux.className = "row";
        data.map(function(item,index){
          var div = document.createElement("div");
          div.className = "col-sm-4";
          var div1 = document.createElement("div");
          div1.className = "bloco_vaga";
          var i = document.createElement("i");
          i.className = "fa fa-close icon_Pesquisa";
          i.setAttribute("onclick","excluirPesquisa("+item.id+")");
          i.style.color = "#f91d81cc";
          i.style.margin = "5px";
          i.style.textAlign = "end";
          var div2 = document.createElement("div");
          div2.className = "card_vaga";
          var h5 = document.createElement("h5");
          h5.className = "card-title";
          var h5T = document.createTextNode(item.nome_formulario);
          h5.appendChild(h5T);
          var p = document.createElement("h6");
          p.className = "card-text";
          var pT = document.createTextNode(item.tipo_formulario+" / "+item.radio_quem);
          p.appendChild(pT);
          p.style.paddingLeft = "10px";
          var a1 = document.createElement("a");
          var b1 = document.createElement("a");
          var a1T = document.createTextNode("Abrir Pesquisa");
          var b1T = document.createTextNode("Copiar Link");
          a1.appendChild(a1T);
          b1.appendChild(b1T);
          a1.className = "btn btn-primary btn_vagas";
          b1.className = "btn btn-primary btn_vagas";
          a1.setAttribute("onclick","AbrirPesquisa("+item.id+")");
          b1.setAttribute("onclick","GeraLink("+item.id+")");
          div2.appendChild(h5);
          div2.appendChild(p);
          div2.appendChild(a1);
          div2.appendChild(b1);
          div1.appendChild(i);
          div1.appendChild(div2);
          div.appendChild(div1);
          aux.appendChild(div);
        });
          console.log(aux);
          $("#BannerPesquisas").html(aux);
  			}
			});
}
function GeraLink(id){
  var text = "https://www.aprincipalbb.com.br/portal/control/forms/responda.php?id="+id;
  $("#text_forms").html(text);
  $("#ExemploModalCentralizado").modal();
}
function copy(){
  const inputTest = document.querySelector("#text_forms");
  inputTest.select();
  document.execCommand('copy');
}
function AbrirPesquisa(id){
  var aux = document.createElement("div");
  $("#graficos").html(aux);
  var table = $('#table1').DataTable();
  table.clear().draw();
  table.destroy();
  document.getElementById("BannerPesquisas").style.display = "none";
  document.getElementById("BannerPesquisaAberta").style.display = "block";
  $.ajax({
    type: 'POST',
    url: "../control/forms/BuscapesquisasID.php",
    dataType: "json",
    data:{id:id},
    success: function(data) {
      $("#titulo").html(data[0].nome_formulario);
      // console.log(data);
      // console.log(data[0].perguntas);
      var perguntas2 = JSON.parse(data[0].perguntas);
      var titulos = [];
      var textos = [];
      var tipos = [];
      for (var i = 0; i < perguntas2.length; i++) {
        titulos[i] = perguntas2[i].titulo;
        textos[i] = perguntas2[i].texto;
        tipos[i] = perguntas2[i].tipo;
      }
      var tam = tipos.length;
      AbrirTabelaPerguntas(id,titulos,textos,tipos,tam);
    }});
}

function AbrirTabelaPerguntas(id,titulos,textos,tipos,tam){
  $.ajax({
    type: 'POST',
    url: "../control/forms/BuscaResposta.php",
    dataType: "json",
    data:{id:id},
    success: function(data2) {
      var muitoins = []; muitoins.length = tam;
      var ins = []; ins.length = tam;
      var regular = []; regular.length = tam;
      var sat = []; sat.length = tam;
      var muitosat = []; muitosat.length = tam;
      var sim = []; sim.length = tam;
      var nao = []; nao.length = tam;
      var checkbox = [];
      var texto_resposta = [];
      for (var i = 0; i < tam; i++) {
      muitoins[i] = 0;
      ins[i] = 0;
      regular[i] = 0;
      sat[i] = 0;
      muitosat[i] = 0;
      sim[i] = 0;
      nao[i] = 0;
      }

    data2.map(function(item,index){
      console.log(item.id);
      var respostas = JSON.parse(item.respostas);
      for (var i = 0; i < respostas.length; i++) {
        if (tipos[i]=="satisfacao") {
          if (respostas[i].resposta=="Muito Satisfeito") {
            muitosat[i] += 1;
          }else if (respostas[i].resposta=="Satisfeito") {
            sat[i] += 1;
          }else if (respostas[i].resposta=="Regular") {
            regular[i] += 1;
          }else if (respostas[i].resposta=="Insatisfeito") {
            ins[i] += 1;
          }else if (respostas[i].resposta=="Muito Insatisfeito") {
            muitoins[i] += 1;
          }
        }else if (tipos[i]=="checkbox") {
          checkbox[i]= checkbox[i]+"###"+respostas[i].resposta;
        }else if (tipos[i]=="simounao") {
          if (respostas[i].resposta=="Sim") {
            sim[i] += 1;
          }else if (respostas[i].resposta=="Não") {
            nao[i] += 1;
          }
        }else if (tipos[i]=="texto") {
          texto_resposta[i] = texto_resposta[i]+"###"+respostas[i].resposta;
        }
      }
    });
    var simP= [];var naoP= [];
    var muitoinsP= [];var insP= [];var regularP= [];var satP= [];var muitosatP= [];
    var graficos = document.getElementById("graficos");
    for (var i = 0; i < tipos.length; i++) {
      var total = sim[i]+nao[i];
      var total2 = muitoins[i]+ins[i]+regular[i]+sat[i]+muitosat[i];
      if (sim[i]!=0||nao[i]!=0) {
        simP[i] = parseFloat((sim[i]*100)/total).toFixed(2);
        naoP[i] = parseFloat((nao[i]*100)/total).toFixed(2);
        var id = "pie-chart"+i;
        var canvas = document.createElement("canvas");
        canvas.id = id;canvas.className = "col-6";canvas.style.marginBottom="40px"
        graficos.appendChild(canvas);
        new Chart(document.getElementById(id), {
            type: 'pie',
            data: {
              labels: ["Sim", "Não"],
              datasets: [{
                backgroundColor: ["#6cead6", "#f36262"],
                data: [simP[i],naoP[i]] }] },
            options: {
              title: {
                display: true,
                text: titulos[i]}}
        });

        simP[i] = simP[i]+"%";
        naoP[i] = naoP[i]+"%";
      }else {
        simP[i] = 0;
        naoP[i] =0;
      }
      if (muitoins[i]!=0||ins[i]!=0||regular[i]!=0||sat[i]!=0||muitosat[i]!=0) {
        var id = "pie-chart"+i;
        muitoinsP[i] = parseFloat((muitoins[i]*100)/total2).toFixed(2);
        insP[i] = parseFloat((ins[i]*100)/total2).toFixed(2);
        regularP[i] = parseFloat((regular[i]*100)/total2).toFixed(2);
        satP[i] = parseFloat((sat[i]*100)/total2).toFixed(2);
        muitosatP[i] = parseFloat((muitosat[i]*100)/total2).toFixed(2);
        var canvas = document.createElement("canvas");
        canvas.id = id;canvas.className = "col-6";canvas.style.marginBottom="20px";
        graficos.appendChild(canvas);

        new Chart(document.getElementById(id), {
            type: 'pie',
            data: {
              labels: ["M. Satisfeito", "Satisfeito", "Regular", "Insatisfeito", "M. Insatisfeito"],
              datasets: [{
                backgroundColor: ["#028671", "#30d9be","#abafb3", "#f27474", "#f93e3e"],
                data: [muitosatP[i],satP[i],regularP[i],insP[i],muitoinsP[i]] }] },
            options: {
              title: {
                display: true,
                text: titulos[i]}}
        });

        muitoinsP[i] = muitoinsP[i]+"%";insP[i] = insP[i]+"%";regularP[i] = regularP[i]+"%";satP[i] = satP[i]+"%";muitosatP[i] = muitosatP[i]+"%";
      }else {
        muitoinsP[i] = 0;
        insP[i] =0;
        regularP[i] =0;
        satP[i] =0;
        muitosatP[i] =0;
      }
    }


       var data1 = [];
        for (var i = 0; i < tipos.length; i++) {
         data1.push({"titulos":titulos[i],"tipo":tipos[i],"muitosat":muitosatP[i],"sat":satP[i],"regular":regularP[i],"ins":insP[i],
         "muitoins":muitoinsP[i], "checkbox":"----","sim":simP[i],"nao":naoP[i],"texto":"----" });
        }
criarTabela(data1);
    }});

}
///////////////////////////////////////////////////////////////////
function criarTabela(data){
    var table = document.getElementById('table1');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if($.fn.dataTable.isDataTable('#table1')){
      table = $('#table1').DataTable();
    }else {
      table = $('#table1').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "titulos"},
          { data: "tipo"},
          { data: "muitosat"},
          { data: "sat"},
          { data: "regular"},
          { data: "ins"},
          { data: "muitoins"},
          { data: "checkbox"},
          { data: "sim"},
          { data: "nao"},
          { data: "texto"},
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
///////////////////////////////////////////////////////////////////
function excluirPesquisa(id){
  Swal.fire({
  title: 'Tem Certeza que Deseja Excluir Essa Pesquisa?',
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
    url: "../control/forms/ExcluiPesquisa.php",
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
            title: 'Pesquisa Excluida Com Sucesso'
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
            title: 'Falha Ao Tentar Excluir Pesquisa'
          })
      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });
}


async function mostrar(){
  respostas = [];
  var id = document.getElementById('id').value;
  $.ajax({
    url: "BuscaForms.php",
    type: "POST",
    dataType: "json",
    data: {id:id},
    success: async function(data) {
      console.log(data[0]);
      var perguntas = JSON.parse(data[0].perguntas);
      console.log(perguntas);
      var tam = perguntas.length;
      for(var i=-1; i< tam;i++){
        if (i==-1) {
          const value= await Swal.fire({
              title: data[0].nome_formulario,
              text: "Bem-vindo! No final do formulário você receberá um PRESENTE. Tire um print dela para valer o benefício!",
              imageUrl: 'https://www.aprincipalbb.com.br/images/logo3.png',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Começar a responder!',
              cancelButtonText: 'Não'
            }).then((result) => {
            if (result.value) {
              console.log("Continuar");
            }else {
              i = tam+1;
            }
          })
        }else {
          if (perguntas[i].tipo=="satisfacao") {
            //////////////////////////////
                   const wrapper = document.createElement('div');
                   wrapper.innerHTML = '<iframe name="fotos" align="left" frameborder="0" style="height:220; width: 100% !important;" scrolling="auto" src="estrelas.html" >';
                   var a =0;
                   const { value: resposta } = await  Swal.fire({
                     title: perguntas[i].titulo,
                     allowOutsideClick: false,
                     allowEscapeKey: false,
                     html: wrapper,
                     focusConfirm: false,
                     confirmButtonText:
                     '<i class="fa fa-thumbs-up"></i> Próximo!',
                     confirmButtonAriaLabel: 'Thumbs up, great!',});
                   if (resposta) {
                     var resposta2= localStorage.getItem("estrela");
                     if(resposta2){
                       respostas.push({resposta:resposta2});
                     }else{
                       respostas.push({resposta:"--"});
                     }
                     localStorage.clear();}
            ///////////////////////////////
          }else if (perguntas[i].tipo=="checkbox") {
            //Rádio-VT-Facebook-Instagram-Indicações-Outros
            var aux = perguntas[i].texto;
            resultado = aux.split("-");
            var option = [];
            for (var j = 0; j < resultado.length;j++) {
              var res = resultado[j];
              option[res]=res;
            }
            console.log(option);
            const { value: resposta } = await Swal.fire({
              title: perguntas[i].titulo,
              allowOutsideClick: false,
              allowEscapeKey: false,
              input: 'select',
              inputOptions: option,
              inputPlaceholder: 'Selecione uma opção',
              showCancelButton: true,
            });
            if (resposta) {
              respostas.push({resposta:resposta});
            }
          }else if (perguntas[i].tipo=="simounao") {
            const value = await Swal.fire({
                title: perguntas[i].titulo,
                text: perguntas[i].texto,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'SIM',
                cancelButtonText: 'NÃO'
              }).then((result) => {
              if (result.value) {
                respostas.push({resposta:"Sim"});
              }else {
                respostas.push({resposta:"Não"});
              }
            })
          }else if (perguntas[i].tipo=="texto") {
            const { value: resposta } = await Swal.fire({
              title: perguntas[i].titulo,
              text: perguntas[i].texto,
              allowOutsideClick: false,
              allowEscapeKey: false,
              input: 'text',
              showCancelButton: true,
              inputValidator: (value) => {
                if (value.length<2) {
                  return 'Sua resposta precisa ter no mínimo 3 caracteres!'
                }
              }
            })

            if (resposta) {
              respostas.push({resposta:resposta});
            }
            else{
              respostas.push({resposta:" "});
            }

          }
        }
      }
      SalvaResposta(respostas,id);

        Swal.fire({
          title: 'Obrigado!',
          text: 'Você é parte de nossa história.',
          imageUrl: '../../../images/ergino.jpeg',
          imageWidth: 500,
          imageHeight: 500,
          imageAlt: 'Custom image',
        })

    }});

}

function SalvaResposta(respostas,id){
  $.ajax({
    url: "SalvaResposta.php",
    type: "POST",
    data: {id:id,respostas:respostas},
    success: function(data) {

    }});
}



function salvar_valor(numero){
  localStorage.setItem("estrela", numero);
}
