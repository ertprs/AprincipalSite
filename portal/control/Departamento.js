function SalvaDepartamento(){
  var nome = document.getElementById("nome").value;
  var outros = document.getElementById("outros").value;

  $.ajax({
    url: "../control/SalvaDepartamento.php",
    type: "POST",
    data: {nome:nome,outros:outros},
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
            title: 'Departamento Cadastrado Com Sucesso'
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
            title: 'Falha ao Cadastrar Departamento'
          })

      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });


}



function listaDepartamentos(){
  $.ajax({
    type: 'POST',
    url: "../control/BuscaDepartamento.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"nome":data[i].nome,"outros":data[i].outros,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiColaborador("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}


function criarTabela(data){
  console.log(data);
    var table = document.getElementById('table2');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table2' ) ) {
      table = $('#table2').DataTable();
    }
    else {
      table = $('#table2').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "nome"},
          { data: "outros"},
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


function ExcluiColaborador(id){
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
    url: "../control/ExcluiDepartamento.php",
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
            title: 'Departamento Excluido Com Sucesso'
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
            title: 'Falha Ao Tentar Excluir Departamento'
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
  var id = document.getElementById("id");
  id.value = dataProduto.id;
  var nome = document.getElementById("nome2");
  nome.value = dataProduto.nome;
  var outros = document.getElementById("outros");
  outros.value = dataProduto.outros;
  $("#modaledit").modal();
}

function EditaDEP(){
  var id = document.getElementById("id").value;
  var nome = document.getElementById("nome").value;
  var outros = document.getElementById("outros").value;
  $.ajax({
    url: "../control/EditaDepartamento.php",
    type: "POST",
    data: {nome:nome,outros:outros,id:id},
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
            title: 'Departamento Editado Com Sucesso'
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
            title: 'Falha ao Editar Departamento'
          })
          $("#modaledit").modal('hide');
      }
    }
  });


}
