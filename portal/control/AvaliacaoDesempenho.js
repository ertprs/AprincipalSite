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

  $.ajax({
    url: "../control/SalvaIndicador.php",
    type: "POST",
    data: {texto:texto,tipo:tipo},
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
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"texto":data[i].texto,"tipo":data[i].tipo,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}




function criarTabela(data){
    var table = document.getElementById('indicadoresTable');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#indicadoresTable' ) ) {
      table = $('#indicadoresTable').DataTable();
    }
    else {
      table = $('#indicadoresTable').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "texto"},
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
