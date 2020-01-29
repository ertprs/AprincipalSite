function graficos(index){
if (index=="1") {
  document.getElementById("tela_geral").style.display = "block";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Geral");
}
if (index=="2") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "block";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Departamentos");
}
if (index=="3") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "block";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Colaborador");
}
if (index=="4") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "block";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Evolução");
}
if (index=="5") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "block";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Indicadores");
  listaForms();
  listaForms2();
  niveis();
}
if (index=="6") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "block";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Formulários");
}
if (index=="7") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "block";
  $("#tema").html("Matriz de Orientação");
  matriz();
}

}

function SalvaIndicador(){
  var texto = document.getElementById("texto_indicador").value;
  var tipo = document.getElementById("tipo_indicador").value;
  var array2 = [];
  array2.push({"titulo":0,"texto":0});

  $.ajax({
    url: "../control/SalvaIndicador.php",
    type: "POST",
    data: {texto:texto,tipo:tipo,json:array2},
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
            title: 'Indicador Cadastrada Com Sucesso'
          })
          setTimeout(function(){
          window.location.reload();
        }, 500);
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha ao Cadastrar Indicador'
          })

      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });


}




function listaForms(){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].categoria=="1"){
          data[i].categoria = "Competencia Comportamental Gestor";
        }else if (data[i].categoria=="2"){
          data[i].categoria = "Competencia Comportamental Não Gestor";
        }
      }

      var aux2 = JSON.stringify(data);
        for (var i = 0; i < data.length; i++) {
          if (data[i].categoria=="3"||data[i].categoria=="4"){
           console.log(1);
         }else {
           data1.push({"id":data[i].id,"texto":data[i].texto,"categoria":data[i].categoria,
           "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
           "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
           });
         }
        }
criarTabela(data1);
				}
			});
}

function listaForms2(){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].categoria=="3") {
          data[i].categoria = "Competencia Tecnica Gestor";
        }else if (data[i].categoria=="4") {
          data[i].categoria = "Competencia Tecnica Não Gestor";
        }
      }
      var aux2 = JSON.stringify(data);
        for (var i = 0; i < data.length; i++) {
          if (data[i].categoria=="1"||data[i].categoria=="2"){
           console.log(1);
         }else {
           data1.push({"id":data[i].id,"texto":data[i].texto,"categoria":data[i].categoria,
           "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
           "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
           });
         }
        }
criarTabela_2(data1);
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
          { data: "texto"},
          { data: "categoria"},
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

function criarTabela_2(data){
    var table = document.getElementById('table5');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table5' ) ) {
      table = $('#table5').DataTable();
    }
    else {
      table = $('#table5').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "texto"},
          { data: "categoria"},
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
///////////////////////////////////////////////////////////////////
function Edita(id,data){
var tipo = "";
  data.map(function(item,index){
    if (item.id==id) {
      tipo = item.categoria+": "+item.texto;
      $("#TituloModalCentralizado").html(tipo);
      $("#id_indicador").val(id);

    }
  });
  $("#modaledit").modal();
  setTimeout(function(){ table_indicador(id) }, 400);
}
///////////////////////////////////////////////////////////////////
function table_indicador(id){
  console.log(id);
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores2.php",
    dataType: "json",
    data:{id:id},
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.parse(data[0].conteudo);
      aux2.splice(0, 1);
      aux2.map(function(item,index){
        data1.push({"id":index,"titulo":item.titulo,"texto":item.texto,
        "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='EditaConteudo("+index+","+aux2+")'></button>",
        "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiConteudo("+index+")'></button>"
        });
      });
  criarTabela2(data1);
        }
      });
}
///////////////////////////////////////////////////////////////////
function criarTabela2(data){
  var tableP = document.createElement("table");
  tableP.className = "table table-striped table-bordered";
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td1T = document.createTextNode("Id");
  td1.appendChild(td1T);
  var td2 = document.createElement("td");
  var td2T = document.createTextNode("Titulo");
  td2.appendChild(td2T);
  var td3 = document.createElement("td");
  var td3T = document.createTextNode("Texto");
  td3.appendChild(td3T);
  var td4 = document.createElement("td");
  var td4T = document.createTextNode("Editar");
  td4.appendChild(td4T);
  var td5 = document.createElement("td");
  var td5T = document.createTextNode("Excluir");
  td5.appendChild(td5T);
  tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);tr.appendChild(td5);
  thead.appendChild(tr);
  tableP.appendChild(thead);tableP.appendChild(tbody);
  tableP.id = "table4";
  $("#table_indicador").html(tableP);



    var table = document.getElementById('table4');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if($.fn.dataTable.isDataTable('#table4')){
      table = $('#table4').DataTable();
    }else {
      table = $('#table4').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "titulo"},
          { data: "texto"},
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
///////////////////////////////////////////////////////////////////


function SalvaConteudo(){
var id = document.getElementById("id_indicador").value;
var titulo = document.getElementById("titulo_interno").value;
var texto = document.getElementById("texto_interno").value;
$.ajax({
  type: 'POST',
  url: "../control/SalvaConteudo.php",
  dataType: "json",
  data:{id:id,titulo:titulo,texto:texto},
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
          title: 'Sub Indicador Cadastrado Com Sucesso'
        })
        setTimeout(function(){
        window.location.reload();
      }, 500);
    } else {
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000
        })

        Toast.fire({
          type: 'error',
          title: 'Falha ao Cadastrar Sub Indicador'
        })

    }

  }});
}

function niveis(){
  $.ajax({
    type: 'POST',
    url: "../control/BuscaNiveis.php",
    dataType: "json",
    success: function(data) {
      var exc = data[0].exc;
      var bom = data[0].bom;
      var reg = data[0].reg;
      var ins = data[0].ins;
      exc = JSON.parse(exc);
      bom = JSON.parse(bom);
      reg = JSON.parse(reg);
      ins = JSON.parse(ins);
      exc_min.value = exc[0].min;
      exc_max.value = exc[0].max;
      exc_text.value = exc[0].texto;
      bom_min.value = bom[0].min;
      bom_max.value = bom[0].max;
      bom_text.value = bom[0].texto;
      reg_min.value = reg[0].min;
      reg_max.value = reg[0].max;
      reg_text.value = reg[0].texto;
      ins_min.value = ins[0].min;
      ins_max.value = ins[0].max;
      ins_text.value = ins[0].texto;


    }});

}

function SalvaNiveis(){
var exc_min = document.getElementById("exc_min").value;
var exc_max = document.getElementById("exc_max").value;
var bom_min = document.getElementById("bom_min").value;
var bom_max = document.getElementById("bom_max").value;
var reg_min = document.getElementById("reg_min").value;
var reg_max = document.getElementById("reg_max").value;
var ins_min = document.getElementById("ins_min").value;
var ins_max = document.getElementById("ins_max").value;
var exc_text = document.getElementById("exc_text").value;
var bom_text = document.getElementById("bom_text").value;
var reg_text = document.getElementById("reg_text").value;
var ins_text = document.getElementById("ins_text").value;
//////////////////////////
var exc = [];
var bom = [];
var reg = [];
var ins = [];
/////////////////////////
exc.push({"min":exc_min,"max":exc_max,"texto":exc_text});
bom.push({"min":bom_min,"max":bom_max,"texto":bom_text});
reg.push({"min":reg_min,"max":reg_max,"texto":reg_text});
ins.push({"min":ins_min,"max":ins_max,"texto":ins_text});


$.ajax({
  type: 'POST',
  url: "../control/SalvaNiveis.php",
  dataType: "json",
  data: {exc:exc,bom:bom,reg:reg,ins:ins},
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
              title: 'Niveis Editados Com Sucesso'
            })
            setTimeout(function(){
            window.location.reload();
          }, 500);
        } else {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000
            })

            Toast.fire({
              type: 'error',
              title: 'Falha ao Editar Niveis'
            })

        }

  }});


}
