
function listacol(){
  $.ajax({
    type: 'POST',
    url: "../control/listaColAcesso.php",
    dataType: "json",
    success: function(data) {

      var data1 = [];
      var aux2 = JSON.stringify(data);
    for (var i = 0; i <data.length; i++) {
      console.log(i);
      var aux = JSON.parse(data[i].root);
      console.log(aux);
      if (aux==0||aux==""||aux==null||aux=="null"||aux.length == 0) {
        var novoVetor = [];
        novoVetor.push(" Acesso Basico");
      }else {
        var novoVetor = [];
        aux.map(function(item,index){
          if (item.site=="true") {
            novoVetor.push("( Site )");
          }

          if (item.design=="true") {
            novoVetor.push("( Desig )");
          }

          if (item.landing=="true") {
            novoVetor.push("( Landing Page )");
          }
          if (item.colaborador=="true") {
            novoVetor.push("( Colaborador )");
          }

          if (item.forms=="true") {
            novoVetor.push("( Formulario )");
          }

          if (item.vagas=="true") {
            novoVetor.push("( Gerir Vagas )");
          }

          if (item.material=="true") {
            novoVetor.push("( Material EAD )");
          }

          if (item.resultados=="true") {
            novoVetor.push("( Resultados EAD )");
          }
          if (item.curso=="true") {
            novoVetor.push("( Fazer Cursos )");
          }

          if (item.config=="true") {
            novoVetor.push("( Acesso )");
          }
          if (item.config1=="true") {
            novoVetor.push("( Indicadores )");
          }

        });
      }

      data1.push({"nome_completo":data[i].nome,"setor":data[i].setor,"root":novoVetor,
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

      $("#TituloModalCentralizado").html("Acesso do Colaborador: "+dataProduto.nome);
      // $("#nivel_acesso").val(dataProduto.root);
      $("#id_acesso").val(id);
       $("#modaledit").modal();
       var aux = JSON.parse(dataProduto.root);
       aux.map(function(item,index){
         if (item.site=="true") {
           $("#defaultCheck1").prop("checked",true);
         }

         if (item.design=="true") {
             $("#defaultCheck2").prop("checked",true);
         }

         if (item.landing=="true") {
             $("#defaultCheck3").prop("checked",true);
         }
         if (item.colaborador=="true") {
              $("#defaultCheck4").prop("checked",true);
         }

         if (item.forms=="true") {
              $("#defaultCheck5").prop("checked",true);
         }

         if (item.vagas=="true") {
           $("#defaultCheck6").prop("checked",true);
         }

         if (item.material=="true") {
             $("#defaultCheck7").prop("checked",true);
         }

         if (item.resultados=="true") {
             $("#defaultCheck8").prop("checked",true);
         }

         if (item.curso=="true") {
             $("#defaultCheck10").prop("checked",true);
         }

         if (item.config=="true") {
             $("#defaultCheck9").prop("checked",true);
         }
         if (item.config1=="true") {
             $("#defaultCheck9_1").prop("checked",true);
         }
         check();
         if (item.site1=="true") {
           $("#defaultCheck1_1").prop("checked",true);
         }
         if (item.site2=="true") {
           $("#defaultCheck1_2").prop("checked",true);
         }
         if (item.design_1=="true") {
           $("#defaultCheck2_1").prop("checked",true);
         }
         if (item.design_2=="true") {
           $("#defaultCheck2_2").prop("checked",true);
         }
         if (item.design_3=="true") {
           $("#defaultCheck2_3").prop("checked",true);
         }

         if (item.landing_1=="true") {
             $("#defaultCheck3_1").prop("checked",true);
         }
         if (item.colaborador1=="true") {
              $("#defaultCheck4_1").prop("checked",true);
         }
         if (item.colaborador2=="true") {
              $("#defaultCheck4_2").prop("checked",true);
         }

         if (item.forms1=="true") {
              $("#defaultCheck5_1").prop("checked",true);
         }
         if (item.forms2=="true") {
              $("#defaultCheck5_2").prop("checked",true);
         }
         if (item.forms3=="true") {
              $("#defaultCheck5_3").prop("checked",true);
         }
         if (item.forms4=="true") {
              $("#defaultCheck5_4").prop("checked",true);
         }

         if (item.vagas1=="true") {
           $("#defaultCheck6_1").prop("checked",true);
         }
         if (item.vagas2=="true") {
           $("#defaultCheck6_2").prop("checked",true);
         }

         if (item.material1=="true") {
             $("#defaultCheck7_1").prop("checked",true);
         }
         if (item.material2=="true") {
             $("#defaultCheck7_2").prop("checked",true);
         }

         if (item.resultados1=="true") {
             $("#defaultCheck8_1").prop("checked",true);
         }
         if (item.resultados2=="true") {
             $("#defaultCheck8_2").prop("checked",true);
         }

         if (item.curso1=="true") {
             $("#defaultCheck10_1").prop("checked",true);
         }
         if (item.curso2=="true") {
             $("#defaultCheck10_2").prop("checked",true);
         }



       });

}

function SalvaAcesso(){
  var id = document.getElementById("id_acesso").value;
  var nivel = [];

  if($("#defaultCheck1").is(":checked")){
    nivel.push({"site":true});
  }else {
    nivel.push({"site":false});
  }
  if($("#defaultCheck1_1").is(":checked")){
    nivel.push({"site1":true});
  }else {
    nivel.push({"site1":false});
  }
  if($("#defaultCheck1_2").is(":checked")){
    nivel.push({"site2":true});
  }else {
    nivel.push({"site2":false});
  }
  //////////////////////////
  if($("#defaultCheck2").is(":checked")){
    nivel.push({"design":true});
  }else {
    nivel.push({"design":false});
  }
  if($("#defaultCheck2_1").is(":checked")){
    nivel.push({"design_1":true});
  }else {
    nivel.push({"design_1":false});
  }
  if($("#defaultCheck2_2").is(":checked")){
    nivel.push({"design_2":true});
  }else {
    nivel.push({"design_2":false});
  }
  if($("#defaultCheck2_3").is(":checked")){
    nivel.push({"design_3":true});
  }else {
    nivel.push({"design_3":false});
  }
  //////////////////////////
  if($("#defaultCheck3").is(":checked")){
    nivel.push({"landing":true});
  }else {
    nivel.push({"landing":false});
  }
  if($("#defaultCheck3_1").is(":checked")){
    nivel.push({"landing_1":true});
  }else {
    nivel.push({"landing_1":false});
  }
  ///////////////////////////
  if($("#defaultCheck4").is(":checked")){
    nivel.push({"colaborador":true});
  }else {
    nivel.push({"colaborador":false});
  }
  if($("#defaultCheck4_1").is(":checked")){
    nivel.push({"colaborador1":true});
  }else {
    nivel.push({"colaborador1":false});
  }
  if($("#defaultCheck4_2").is(":checked")){
    nivel.push({"colaborador2":true});
  }else {
    nivel.push({"colaborador2":false});
  }
  ////////////////////////////////////
  if($("#defaultCheck5").is(":checked")){
    nivel.push({"forms":true});
  }else {
    nivel.push({"forms":false});
  }
  if($("#defaultCheck5_1").is(":checked")){
    nivel.push({"forms1":true});
  }else {
    nivel.push({"forms1":false});
  }
  if($("#defaultCheck5_2").is(":checked")){
    nivel.push({"forms2":true});
  }else {
    nivel.push({"forms2":false});
  }
  if($("#defaultCheck5_3").is(":checked")){
    nivel.push({"forms3":true});
  }else {
    nivel.push({"forms3":false});
  }
  if($("#defaultCheck5_4").is(":checked")){
    nivel.push({"forms4":true});
  }else {
    nivel.push({"forms4":false});
  }
  /////////////////////////////////
  if($("#defaultCheck6").is(":checked")){
    nivel.push({"vagas":true});
  }else {
    nivel.push({"vagas":false});
  }
  if($("#defaultCheck6_1").is(":checked")){
    nivel.push({"vagas1":true});
  }else {
    nivel.push({"vagas1":false});
  }
  if($("#defaultCheck6_2").is(":checked")){
    nivel.push({"vagas2":true});
  }else {
    nivel.push({"vagas2":false});
  }
////////////////////////////////////////
  if($("#defaultCheck7").is(":checked")){
    nivel.push({"material":true});
  }else {
    nivel.push({"material":false});
  }
  if($("#defaultCheck7_1").is(":checked")){
    nivel.push({"material1":true});
  }else {
    nivel.push({"material1":false});
  }
  if($("#defaultCheck7_2").is(":checked")){
    nivel.push({"material2":true});
  }else {
    nivel.push({"material2":false});
  }
  ///////////////////////////
  if($("#defaultCheck8").is(":checked")){
    nivel.push({"resultados":true});
  }else {
    nivel.push({"resultados":false});
  }
  if($("#defaultCheck8_1").is(":checked")){
    nivel.push({"resultados1":true});
  }else {
    nivel.push({"resultados1":false});
  }
  if($("#defaultCheck8_2").is(":checked")){
    nivel.push({"resultados2":true});
  }else {
    nivel.push({"resultados2":false});
  }
  /////////////////////////
  if($("#defaultCheck9").is(":checked")){
    nivel.push({"config":true});
  }else {
    nivel.push({"config":false});
  }
  if($("#defaultCheck9_1").is(":checked")){
    nivel.push({"config1":true});
  }else {
    nivel.push({"config1":false});
  }
  ///////////////////////////
  if($("#defaultCheck10").is(":checked")){
    nivel.push({"curso":true});
  }else {
    nivel.push({"curso":false});
  }
  if($("#defaultCheck10_1").is(":checked")){
    nivel.push({"curso1":true});
  }else {
    nivel.push({"curso1":false});
  }
  if($("#defaultCheck10_2").is(":checked")){
    nivel.push({"curso2":true});
  }else {
    nivel.push({"curso2":false});
  }
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



function check(){
////////////////////////////////////////////////////
if($("#defaultCheck1").is(":checked")){
  document.getElementById("site_1").style.display = "block";
  document.getElementById("site_2").style.display = "block";
}else {
  document.getElementById("site_1").style.display = "none";
  document.getElementById("site_2").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck2").is(":checked")){
  document.getElementById("design_1").style.display = "block";
  document.getElementById("design_2").style.display = "block";
  document.getElementById("design_3").style.display = "block";
}else {
  document.getElementById("design_1").style.display = "none";
  document.getElementById("design_2").style.display = "none";
  document.getElementById("design_3").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck3").is(":checked")){
  document.getElementById("landing_1").style.display = "block";
}else {
  document.getElementById("landing_1").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck4").is(":checked")){
  document.getElementById("colaborador1").style.display = "block";
  document.getElementById("colaborador2").style.display = "block";
}else {
  document.getElementById("colaborador1").style.display = "none";
  document.getElementById("colaborador2").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck5").is(":checked")){
  document.getElementById("forms1").style.display = "block";
  document.getElementById("forms2").style.display = "block";
  document.getElementById("forms3").style.display = "block";
  document.getElementById("forms4").style.display = "block";
}else {
  document.getElementById("forms1").style.display = "none";
  document.getElementById("forms2").style.display = "none";
  document.getElementById("forms3").style.display = "none";
  document.getElementById("forms4").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck6").is(":checked")){
  document.getElementById("vagas1").style.display = "block";
  document.getElementById("vagas2").style.display = "block";
}else {
  document.getElementById("vagas1").style.display = "none";
  document.getElementById("vagas2").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck7").is(":checked")){
  document.getElementById("Material1").style.display = "block";
  document.getElementById("Material2").style.display = "block";
}else {
  document.getElementById("Material1").style.display = "none";
  document.getElementById("Material2").style.display = "none";
}
////////////////////////////////////////////////////
if($("#defaultCheck8").is(":checked")){
  document.getElementById("resultados1").style.display = "block";
  document.getElementById("resultados2").style.display = "block";
}else {
  document.getElementById("resultados1").style.display = "none";
  document.getElementById("resultados2").style.display = "none";
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
if($("#defaultCheck10").is(":checked")){
  document.getElementById("curso1").style.display = "block";
  document.getElementById("curso2").style.display = "block";
}else {
  document.getElementById("curso1").style.display = "none";
  document.getElementById("curso2").style.display = "none";
}
}
