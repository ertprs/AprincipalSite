function graficos(index){
if (index=="1") {
  document.getElementById("tela_geral").style.display = "block";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Geral");
}
if (index=="2") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "block";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Departamentos");
}
if (index=="3") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "block";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Colaborador");
}
if (index=="4") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "block";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Evolução");
}
if (index=="5") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "block";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Indicadores");
  listaForms();
}
if (index=="6") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "block";
  $("#tema").html("Dashboard Formulários");
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


function table_indicador(id){
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
        console.log(item);
        console.log(item.titulo);
        data1.push({"id":index,"titulo":item.titulo,"texto":item.texto,
        "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='EditaConteudo("+index+","+aux2+")'></button>",
        "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiConteudo("+index+")'></button>"
        });
      });

  criarTabela2(data1);
        }
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
        if (data[i].categoria=="comp_gestor") {
          data[i].categoria = "Competencia Comportamental Gestor";
        }else if (item.categoria=="comp_naogestor") {
          data[i].categoria = "Competencia Comportamental Não Gestor";
        }else if (item.categoria=="tec_gestor") {
          data[i].categoria = "Competencia Tecnica Gestor";
        }else if (item.categoria=="tec_naogestor") {
          data[i].categoria = "Competencia Tecnica Não Gestor";
        }
      }
      var aux2 = JSON.stringify(data);

    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"texto":data[i].texto,"categoria":data[i].categoria,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
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

function Edita(id,data){
var tipo = "";
  data.map(function(item,index){
    if (item.id==id) {
      if (item.categoria=="comp_gestor") {
        tipo = "Competencia Comportamental Gestor:"
      }else if (item.categoria=="comp_naogestor") {
        tipo = "Competencia Comportamental Não Gestor:"
      }else if (item.categoria=="tec_gestor") {
        tipo = "Competencia Tecnica Gestor:"
      }else if (item.categoria=="tec_naogestor") {
        tipo = "Competencia Tecnica Não Gestor:"
      }
      tipo = tipo+" "+item.texto;
      $("#TituloModalCentralizado").html(tipo);
      $("#id_indicador").val(id);
    }
  });
  $("#modaledit").modal();
  setTimeout(function(){ table_indicador(id) }, 200);
}

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
