function envia_() {
  var element = document.getElementById("imagem");
  var imagem = "";
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    imagem = reader.result;
    SalvaNoticia(imagem);
  }
  reader.readAsDataURL(file);
}

function EditaNot(){
  var element = document.getElementById("imagem4");
  var imagem = "";
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    imagem = reader.result;
    EditaNoticia(imagem);
  }
  reader.readAsDataURL(file);
}

function previa() {
  var element = document.getElementById("imagem");
  var imagem = "";
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    imagem = reader.result;
    previa2(imagem);
  }
  reader.readAsDataURL(file);
}

function previa3(img){
  var titulo = document.getElementById("titulo").value;
  var resumo = document.getElementById("resumo").value;
  document.getElementById("titulo2").innerHTML = titulo;
  document.getElementById("resumo2").innerHTML = resumo;
}

function previa2(img){
  var titulo = document.getElementById("titulo").value;
  var resumo = document.getElementById("resumo").value;
  var texto = document.getElementById("texto").value;
  document.getElementById("img2").src = img;
  document.getElementById("titulo2").innerHTML = titulo;
  document.getElementById("resumo2").innerHTML = resumo;
}

function EditaNoticia(img){
  var titulo = document.getElementById("titulo4").value;
  var resumo = document.getElementById("resumo4").value;
  var texto = document.getElementById("texto4").value;
  var id = document.getElementById("id4").value;

    $.ajax({
      type: 'POST',
      url: "../control/EditaNoticia.php",
      data: {titulo:titulo,resumo:resumo,texto:texto,img:img,id:id},
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
              title: 'Editado Com Sucesso'
            })
        }else {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000
            })

            Toast.fire({
              type: 'error',
              title: 'Falha Ao Editar'
            })
        }
      }
    });
}

function SalvaNoticia(img){
  var titulo = document.getElementById("titulo").value;
  var resumo = document.getElementById("resumo").value;
  var texto = document.getElementById("texto").value;

  $.ajax({
    type: 'POST',
    url: "../control/SalvaNoticia.php",
    data: {titulo:titulo,resumo:resumo,texto:texto,img:img},
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



function listaNoticias(){
  $.ajax({
    type: 'POST',
    url: "../control/listaNoticias.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      data1.push({"id":data[i].id,"fotos":data[i].fotos,"data":data[i].data,"titulo":data[i].titulo,"resumo":data[i].resumo,
      "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
      "botao2":"<button class='btn btn-warning fa fa-times' type='button' onclick='ExcluiNoticias("+data[i].id+")'></button>"
      });
    }
criarTabela(data1);
				}
			});
}
function editRefresh(){
  var titulo = document.getElementById("titulo4").value;
  var resumo = document.getElementById("resumo4").value;
  document.getElementById("tituloX").innerHTML = titulo;
  document.getElementById("resumoX").innerHTML = resumo;
}

function IMG(){

  var element = document.getElementById("imagem4");
  var imagem = "";
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    imagem = reader.result;
    previaX(imagem);
  }
  reader.readAsDataURL(file);
}

function previaX(img){
  var titulo = document.getElementById("titulo4").value;
  var resumo = document.getElementById("resumo4").value;
  document.getElementById("img24").src = img;
  document.getElementById("tituloX").innerHTML = titulo;
  document.getElementById("resumoX").innerHTML = resumo;
}

function Edita(id,data){
  for (var i = 0; i < data.length; i++) {
    if (data[i].id==id) {
      dataProduto = data[i];
    }
  }
      var titulo4 = document.getElementById("titulo4");
      titulo4.value = dataProduto.titulo;
      var resumo4 = document.getElementById("resumo4");
      resumo4.value = dataProduto.resumo;
      var texto4 = document.getElementById("texto4");
      texto4.value = dataProduto.texto;
      document.getElementById("id4").value = id;
      document.getElementById("tituloX").innerHTML = dataProduto.titulo;
      document.getElementById("resumoX").innerHTML = dataProduto.resumo;
      var img24 = document.getElementById("img24");
      img24.src = "../"+dataProduto.fotos;
      $("#modaledit").modal();
}

function ExcluiNoticias(id){

  $.ajax({
    type: 'POST',
    url: "../control/ExcluiNoticia.php",
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
  console.log(data);
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
          { data: "data"},
          { data: "resumo"},
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
