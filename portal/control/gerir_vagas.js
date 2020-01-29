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
      var optionT = document.createTextNode('Escolha Departamento');
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

function SalvaVaga(){
  var nome = document.getElementById("nome").value;
  var setor = document.getElementById("inputSetor").value;
  var funcoes = document.getElementById("funcoes").value;
  var requisitos = document.getElementById("requisitos").value;
  var beneficios = document.getElementById("beneficios").value;
  var jornada = document.getElementById("jornada").value;

  $.ajax({
    url: "../control/SalvaVaga.php",
    type: "POST",
    data: {nome:nome,setor:setor,funcoes:funcoes,requisitos:requisitos,beneficios:beneficios,jornada:jornada},
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
            title: 'Vaga Cadastrada Com Sucesso'
          })
          $("#vagas_form")[0].reset();
          var table = $('#table1').DataTable();
          table.clear().draw();
          table.destroy();
          listaVagas();
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha ao Cadastrar Vaga'
          })

      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });


}

function listaVagas(){
  $.ajax({
    type: 'POST',
    url: "../control/listaVagas.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"nome":data[i].nome,"funcoes":data[i].funcoes,"departamento":data[i].departamento,
      "requisitos":data[i].requisitos,"carga":data[i].carga,"beneficios":data[i].beneficios,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiColaborador("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}

function criarTabela(data){
    var table = document.getElementById('table1');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ($.fn.dataTable.isDataTable('#table1')){
      table = $('#table1').DataTable();
    }
    else {
      table = $('#table1').DataTable( {
        "scrollX": true,
        data: data,
        "columnDefs": [
            { className: "my_class", "targets": [2] },
            { className: "my_class", "targets": [4] },
            { className: "my_class", "targets": [6] }
          ],
        columns: [
          { data: "id"},
          { data: "nome"},
          { data: "funcoes"},
          { data: "departamento"},
          { data: "requisitos"},
          { data: "carga"},
          { data: "beneficios"},
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
