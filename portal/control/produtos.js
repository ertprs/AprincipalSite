
function envia_() {
  var element = document.getElementById("imagem");
  var imagem = "";
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    imagem = reader.result;
    SalvaProduto(imagem);
  }
  reader.readAsDataURL(file);
}


function SalvaProduto(img){
  var titulo = document.getElementById("titulo").value;

  $.ajax({
    type: 'POST',
    url: "../control/SalvaProduto.php",
    data: {titulo:titulo,img:img},
    success: function(data) {
      if (data=="1") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'success',
            title: 'Salvo Com Sucesso'
          })
          setTimeout(function(){
            document.location.reload();
          }, 1000);

      }else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Salvar'
          })
      }
    }
  });

}



function listaProdutos(){
  $.ajax({
    type: 'POST',
    url: "../control/listaProdutos.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"fotos":data[i].foto,"titulo":data[i].titulo,
      "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiNoticias("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}


function ExcluiNoticias(id){
alert(id);
  $.ajax({
    type: 'POST',
    url: "../control/ExcluiProduto.php",
    data: {id:id},
    success: function(data) {
      if (data=="1") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'success',
            title: 'Noticia Excluida'
          })
          setTimeout(function(){
            document.location.reload();
          }, 1000);

      }else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Excluir'
          })
      }
    }
  });
}

function criarTabela(data){
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
          { data: "fotos"},
          { data: "titulo"},
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
