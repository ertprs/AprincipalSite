function Setor(){
  var selectDepartamento = document.getElementById("selectDepartamento");
  $.ajax({
    url: "../control/BuscaDepartamento.php",
    type: "POST",
    dataType: "json",
    success: function(data) {
      var select = document.createElement('select');
      select.id= "inputSetor";
      select.className = "form-control";
      var option = document.createElement('option');
      var optionT = document.createTextNode('Escolha');
      option.selected = "selected";
      option.appendChild(optionT);
      option.value = "0";
      select.appendChild(option);
      for (var i = 0; i < data.length; i++) {
        var option = document.createElement('option');
        var optionT = document.createTextNode(data[i].nome);
        option.value = data[i].nome;
        option.appendChild(optionT);
        select.appendChild(option);
      }
      selectDepartamento.appendChild(select);
    }
  });
}

function SalvaColaborador(){
  var nome = document.getElementById("nome").value;
  var setor = document.getElementById("inputSetor").value;

  $.ajax({
    url: "../control/SalvaColaborador.php",
    type: "POST",
    data: {nome:nome,setor:setor},
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
            title: 'Colaborador Cadastrado Com Sucesso'
          })

      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha ao Cadastrar Colaborador'
          })

      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });


}


function listaColaboradores2(){
  $.ajax({
    type: 'POST',
    url: "../control/listaColaboradoresX.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"nome":data[i].nome,"setor":data[i].setor,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiColaborador("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}
function listaColaboradores(){
  $.ajax({
    type: 'POST',
    url: "../control/listaColaboradoresY.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"nome":data[i].nome,"setor":data[i].setor
  });
    }
criarTabela5(data1);
				}
			});
}

function criarTabela5(data){
    var table = document.getElementById('table1');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table1' ) ) {
      table = $('#table1').DataTable();
    }
    else {
      table = $('#table1').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "nome"},
          { data: "setor"},
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
          { data: "setor"},
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
  title: 'Deseja Excluir?',
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
    url: "../control/ExcluiColaborador.php",
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
            title: 'Colaborador Excluido Com Sucesso'
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
            title: 'Falha Ao Tentar Excluir Colaborador'
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
  $.ajax({
    url: "../control/BuscaDepartamento.php",
    type: "POST",
    dataType: "json",
    success: function(data) {

      var id = document.getElementById("id");
      id.value = dataProduto.id;
      var nome = document.getElementById("nome");
      nome.value = dataProduto.nome;

      var select = document.createElement('select');
      select.id= "inputSetor";
      select.className = "form-control";
      for (var i = 0; i < data.length; i++) {
        var option = document.createElement('option');
        var optionT = document.createTextNode(data[i].nome);
        option.value = data[i].nome;
        option.appendChild(optionT);
        if (data[i].nome==dataProduto.setor) {
        option.selected = "true";
        }
        select.appendChild(option);
      }
      $("#selectModal").html(select);
      $("#modaledit").modal();
    }
  });
}

function EditaCOL(){
  var id = document.getElementById("id").value;
  var nome = document.getElementById("nome").value;
  var setor = document.getElementById("inputSetor").value;
  console.log(id);
  console.log(nome);
  console.log(setor);
  $.ajax({
    url: "../control/EditaColaborador.php",
    type: "POST",
    data: {nome:nome,setor:setor,id:id},
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
            title: 'Colaborador Editado Com Sucesso'
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
            title: 'Falha ao Editar Colaborador'
          })
          $("#modaledit").modal('hide');
      }
    }
  });


}
