
function listacol(){
  $.ajax({
    type: 'POST',
    url: "../control/listaColAcesso.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"nome_completo":data[i].nome_completo,"setor":data[i].setor,"root":data[i].root,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Acesso("+data[i].id+","+aux2+")'></button>"
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
          { data: "nome_completo"},
          { data: "setor"},
          { data: "root"},
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

function Acesso(id,data){
  for (var i = 0; i < data.length; i++) {
    if (data[i].id==id) {
      dataProduto = data[i];
    }
  }
      $("#TituloModalCentralizado").html(dataProduto.nome_completo);
      $("#nivel_acesso").val(dataProduto.root);
      $("#id_acesso").val(id);
      $("#modaledit").modal();

}

function SalvaAcesso(){
  var id = document.getElementById("id_acesso").value;
  var nivel = document.getElementById("nivel_acesso").value;
  $.ajax({
    url: "../control/EditaAcesso.php",
    type: "POST",
    data: {nivel:nivel,id:id},
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
            title: 'Nivel Editado Com Sucesso'
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
            title: 'Falha ao Editar Nivel'
          })
      }
    }
  });


}
