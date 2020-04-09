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



function ExcluiVaga(id){
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

      var id = document.getElementById("id_vaga");
      id.value = dataProduto.id;
      var nome = document.getElementById("nome_vaga");
      nome.value = dataProduto.nome;
      var funcoes = document.getElementById("funcoes_vaga");
      funcoes.value = dataProduto.funcoes;
      var req = document.getElementById("requisitos_vaga");
      req.value = dataProduto.requisitos;
      var beneficios = document.getElementById("beneficios_vaga");
      beneficios.value = dataProduto.beneficios;
      var carga = document.getElementById("carga_vaga");
      carga.value = dataProduto.carga;
      var label = document.createElement("label");
      label.for = "inputSetor";
      var labelT = document.createTextNode("Departamento");
      label.appendChild(labelT);
      var div = document.createElement("div");
      div.className="form-group col-12";
      var select = document.createElement('select');
      select.id= "inputSetor2";
      select.className = "form-control";
      for (var i = 0; i < data.length; i++) {
        var option = document.createElement('option');
        var optionT = document.createTextNode(data[i].nome);
        option.value = data[i].nome;
        option.appendChild(optionT);
        if (data[i].nome==dataProduto.departamento) {
        option.selected = "true";
        }
        select.appendChild(option);
      }
      div.appendChild(label);
      div.appendChild(select);
      $("#selectModal").html(div);
      $("#modaledit").modal();
    }
  });
}

function EditaVaga(){
var id_vaga = document.getElementById("id_vaga").value;
var nome_vaga = document.getElementById("nome_vaga").value;
var setor = document.getElementById("inputSetor2").value;
var funcoes = document.getElementById("funcoes_vaga").value;
var requisitos = document.getElementById("requisitos_vaga").value;
var beneficios = document.getElementById("beneficios_vaga").value;
var carga = document.getElementById("carga_vaga").value;
$.ajax({
  url: "../control/EditaVaga.php",
  type: "POST",
  data: {nome:nome_vaga,id:id_vaga,setor:setor,funcoes:funcoes,
  requisitos:requisitos,beneficios:beneficios,carga:carga},
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
          title: 'Vaga Editada Com Sucesso'
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
          title: 'Falha ao Editar vaga'
        })
        $("#modaledit").modal('hide');
    }
  }
});

}

function Exclui(id){
  var id = id;
  $.ajax({
    url: "../control/ExcluiVaga.php",
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
            title: 'Vaga Excluida Com Sucesso'
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
            title: 'Falha Ao Tentar Excluir Vaga'
          })
      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });
}

function listaVagas(){
  $.ajax({
    type: 'POST',
    url: "../control/listaVagas3.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      if (data[i].state=="1") {
        var state = "Aberta";
      }else {
        var state = "Fechada";
      }
      data1.push({"id":data[i].id,"nome":data[i].nome,"funcoes":data[i].funcoes,"departamento":data[i].departamento,
      "requisitos":data[i].requisitos,"carga":data[i].carga,"beneficios":data[i].beneficios,"state":state,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiVaga("+data[i].id+")'></button>"
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
          { data: "state"},
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
