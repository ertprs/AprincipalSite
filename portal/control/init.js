var respostas = [];
function formsPend(){

  $.ajax({
    url: "control/BuscaForms.php",
    type: "POST",
    dataType: "json",
    success: function(data) {
      var d = document.createElement("div");
      d.className = "row";
      for (var i = 0; i < data.length; i++) {
        var hoje = new Date().toDateString();
        data2 = data[i].fim.toString();
        data2 = new Date(data2).toDateString();
        if (data2>=hoje) {
          var div = document.createElement("div");
          div.className = "col-lg-3 col-sm-6";
          var div2 = document.createElement("div");
          div2.className = "card gradient-2";
          div2.setAttribute("onclick","respondaClima("+data[i].id+")");
          div2.style.cursor = "pointer";
          var div3 = document.createElement("div");
          div3.className = "card-body";
          var h3 = document.createElement("h2");
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
        }else {
          console.log("Pesquisa Fechada");
        }
      }

      $("#tela_dash").html(d);

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
            aux(data,nome);
        }});
      }});
}

async function aux(data,nome){
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
            respostas.push({r:"SIM"});
          }else {
            respostas.push({r:"NÃO"});
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
                respostas.push({r:color});
            }

      }

    }


    console.log(respostas);
}
