function graficos(index){
if (index=="1") {
  document.getElementById("tela_geral").style.display = "block";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Geral");
  init();
}
if (index=="2") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "block";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Departamentos");
  init2();
}
if (index=="3") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "block";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Colaborador");
  init3();
}
if (index=="4") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "block";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Evolução");
}
if (index=="5") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "block";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Indicadores Padrões");
  geraBase();
  niveis();
}
if (index=="6") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "block";
  document.getElementById("tela_matriz").style.display = "none";
  $("#tema").html("Dashboard Formulários");
  geraBase2();
  Formulario();
}
if (index=="7") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  document.getElementById("tela_matriz").style.display = "block";
  $("#tema").html("Matriz de Orientação");
  matriz();
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


function geraBase(){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores3.php",
    dataType: "json",
    success: function(data) {
      var label = document.createElement("label");
      var labelT = document.createTextNode("Base de Indicadores");
      label.appendChild(labelT);
      var select = document.createElement("select");
      select.className = "form-control";
      select.id = "base2";
      select.setAttribute("onclick","mudaBase(this.value)");
      for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].indicador;
        var optionT = document.createTextNode(data[i].nome_indicador);
        option.appendChild(optionT);
        select.appendChild(option);
        var id_new = data[i].indicador;
      }
      id_new = Number(id_new)+1;
      document.getElementById("id_new").value = id_new;
      var select_base = document.createElement("div");
      select_base.className = "form-group col-md-6";
      select_base.id = "select_base";
      select_base.appendChild(label);
      select_base.appendChild(select);
      var div = document.createElement("div");
      div.className = "form-group col-md-6";
      var label2 = document.createElement("label");
      var labelT2 = document.createTextNode("Base de Indicador");
      label2.appendChild(labelT2);
      div.appendChild(label2);
      var inp = document.createElement("input");
      inp.type = "text";
      inp.id = "base_indicador";
      inp.className = "form-control";
      inp.value = data[0].nome_indicador;
      div.appendChild(inp);
      var div2 = document.createElement("div");
      div2.className = "form-row"
      div2.appendChild(select_base);
      div2.appendChild(div);
      $("#aleatorio").html(div2);
      //////////////////////
      listaForms(data[0].indicador);
      listaForms2(data[0].indicador);
      //////////////////////
    }});
}

function geraBase2(){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores3.php",
    dataType: "json",
    success: function(data) {

      var label = document.createElement("label");
      var labelT = document.createTextNode("Base de Indicadores");
      label.appendChild(labelT);
      label.id = "id_10";
      var select = document.createElement("select");
      select.className = "form-control";
      select.id = "base22";
      for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].indicador;
        var optionT = document.createTextNode(data[i].nome_indicador);
        option.appendChild(optionT);
        select.appendChild(option);
      }
      var div = document.createElement("div");
      div.className="md-form col-12";
      div.appendChild(label);
      div.appendChild(select);
      $("#aux99").html(div);
    }});
}

function mudaBase(id){
var texto = $("#base2 option:selected").text();
document.getElementById("base_indicador").value = texto;
listaForms(id);
listaForms2(id);
}

function SalvaBase(){
var titulo = document.getElementById("base_indicador").value;
var id = document.getElementById("base2").value;
var id_new = document.getElementById("id_new").value;

$.ajax({
  type: 'POST',
  url: "../control/SalvaIndicador2.php",
  dataType: "json",
  data:{titulo:titulo,id:id,id_new:id_new},
  success: function(data) {
    if (data=="1") {
      geraBase();
    }
  }});
}

function listaForms(id){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores.php",
    dataType: "json",
    data:{id:id},
    success: function(data) {

      var table = $('#table3').DataTable();
      table.clear().draw();
      table.destroy();
      var data1 = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].categoria=="1"){
          data[i].categoria = "Competencia Comportamental Gestor";
        }else if (data[i].categoria=="3"){
          data[i].categoria = "Competencia Tecnica Gestor";
        }
      }

      var aux2 = JSON.stringify(data);
        for (var i = 0; i < data.length; i++) {
          if (data[i].categoria=="2"||data[i].categoria=="4"){
         }else {
           data1.push({"id":data[i].id,"texto":data[i].texto,"categoria":data[i].categoria,
           "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
           "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
           });
         }
        }

criarTabela(data1);
				}
			});
}

function listaForms2(id){
  $.ajax({
    type: 'POST',
    url: "../control/buscaIndicadores.php",
    dataType: "json",
    data:{id:id},
    success: function(data) {
      var table = $('#table5').DataTable();
      table.clear().draw();
      table.destroy();
      var data1 = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].categoria=="2") {
          data[i].categoria = "Competencia Comportamental Não Gestor";
        }else if (data[i].categoria=="4") {
          data[i].categoria = "Competencia Tecnica Não Gestor";
        }
      }
      var aux2 = JSON.stringify(data);
        for (var i = 0; i < data.length; i++) {
          if (data[i].categoria=="1"||data[i].categoria=="3"){
         }else {
           data1.push({"id":data[i].id,"texto":data[i].texto,"categoria":data[i].categoria,
           "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")'></button>",
           "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiPergunta("+data[i].id+")'></button>"
           });
         }
        }
criarTabela_2(data1);
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

function criarTabela_2(data){
    var table = document.getElementById('table5');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table5' ) ) {
      table = $('#table5').DataTable();
    }
    else {
      table = $('#table5').DataTable( {
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

///////////////////////////////////////////////////////////////////
function Edita(id,data){
var tipo = "";
  data.map(function(item,index){
    if (item.id==id) {
      tipo = item.categoria+": "+item.texto;
      $("#TituloModalCentralizado").html(tipo);
      $("#id_indicador").val(id);

    }
  });
  $("#modaledit").modal();
  setTimeout(function(){ table_indicador(id) }, 400);
}
///////////////////////////////////////////////////////////////////
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
        data1.push({"id":index,"titulo":item.titulo,"texto":item.texto,
        "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='EditaConteudo("+index+","+aux2+")'></button>",
        "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiConteudo("+index+")'></button>"
        });
      });
  criarTabela2(data1);
        }
      });
}
///////////////////////////////////////////////////////////////////
function criarTabela2(data){
  var tableP = document.createElement("table");
  tableP.className = "table table-striped table-bordered";
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td1T = document.createTextNode("Id");
  td1.appendChild(td1T);
  var td2 = document.createElement("td");
  var td2T = document.createTextNode("Titulo");
  td2.appendChild(td2T);
  var td3 = document.createElement("td");
  var td3T = document.createTextNode("Texto");
  td3.appendChild(td3T);
  var td4 = document.createElement("td");
  var td4T = document.createTextNode("Editar");
  td4.appendChild(td4T);
  var td5 = document.createElement("td");
  var td5T = document.createTextNode("Excluir");
  td5.appendChild(td5T);
  tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);tr.appendChild(td5);
  thead.appendChild(tr);
  tableP.appendChild(thead);tableP.appendChild(tbody);
  tableP.id = "table4";
  $("#table_indicador").html(tableP);



    var table = document.getElementById('table4');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if($.fn.dataTable.isDataTable('#table4')){
      table = $('#table4').DataTable();
    }else {
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
///////////////////////////////////////////////////////////////////


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

function niveis(){
  $.ajax({
    type: 'POST',
    url: "../control/BuscaNiveis.php",
    dataType: "json",
    success: function(data) {
      var exc = data[0].exc;
      var bom = data[0].bom;
      var reg = data[0].reg;
      var ins = data[0].ins;
      exc = JSON.parse(exc);
      bom = JSON.parse(bom);
      reg = JSON.parse(reg);
      ins = JSON.parse(ins);
      exc_min.value = exc[0].min;
      exc_max.value = exc[0].max;
      exc_text.value = exc[0].texto;
      bom_min.value = bom[0].min;
      bom_max.value = bom[0].max;
      bom_text.value = bom[0].texto;
      reg_min.value = reg[0].min;
      reg_max.value = reg[0].max;
      reg_text.value = reg[0].texto;
      ins_min.value = ins[0].min;
      ins_max.value = ins[0].max;
      ins_text.value = ins[0].texto;


    }});

}

function SalvaNiveis(){
var exc_min = document.getElementById("exc_min").value;
var exc_max = document.getElementById("exc_max").value;
var bom_min = document.getElementById("bom_min").value;
var bom_max = document.getElementById("bom_max").value;
var reg_min = document.getElementById("reg_min").value;
var reg_max = document.getElementById("reg_max").value;
var ins_min = document.getElementById("ins_min").value;
var ins_max = document.getElementById("ins_max").value;
var exc_text = document.getElementById("exc_text").value;
var bom_text = document.getElementById("bom_text").value;
var reg_text = document.getElementById("reg_text").value;
var ins_text = document.getElementById("ins_text").value;
//////////////////////////
var exc = [];
var bom = [];
var reg = [];
var ins = [];
/////////////////////////
exc.push({"min":exc_min,"max":exc_max,"texto":exc_text});
bom.push({"min":bom_min,"max":bom_max,"texto":bom_text});
reg.push({"min":reg_min,"max":reg_max,"texto":reg_text});
ins.push({"min":ins_min,"max":ins_max,"texto":ins_text});


$.ajax({
  type: 'POST',
  url: "../control/SalvaNiveis.php",
  dataType: "json",
  data: {exc:exc,bom:bom,reg:reg,ins:ins},
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
              title: 'Niveis Editados Com Sucesso'
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
              title: 'Falha ao Editar Niveis'
            })

        }

  }});


}


function Formulario(){

  $.ajax({
    type: 'POST',
    url: "../control/buscaDesemepenho.php",
    dataType: "json",
    success: function(data) {
      var data1 = [];
      var aux2 = JSON.stringify(data);
        for (var i = 0; i < data.length; i++) {
         data1.push({"id":data[i].id,"indicador":data[i].indicador,"setores":data[i].setores,
         "inicio":data[i].inicio,"fim":data[i].fim,"responsavel":data[i].responsavel,"respostas":data[i].respostas,
         "botao1":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiDesempenho("+data[i].id+")'></button>"
           });

        }
criarTabela5(data1);
				}
			});
}



///////////////////////////////////////////////////////////////////
function criarTabela5(data){
    var table = document.getElementById('table_forms');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if($.fn.dataTable.isDataTable('#table_forms')){
      table = $('#table_forms').DataTable();
    }else {
      table = $('#table_forms').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "indicador"},
          { data: "respostas"},
          { data: "setores"},
          { data: "inicio"},
          { data: "fim"},
          { data: "responsavel"},
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
///////////////////////////////////////////////////////////////////
function InitPesquisa(){
  document.getElementById("modalepesquisa").style.display = "block";
  $.ajax({
    type: 'POST',
    url: "../control/buscaDesemepenho.php",
    dataType: "json",
    success: function(data) {
      var aux = JSON.stringify(data);
      var select = document.createElement("select");
      select.id = "filtro_indicador";
      select.className = "form-control";
      select.setAttribute("onchange","buscaIndicadores_antigos("+aux+")");


      var label = document.createElement("label");
      var labelt = document.createTextNode("Indicadores");
      label.appendChild(labelt);
      label.for = "filtro_indicador";

      var option = document.createElement("option");
      option.value = "SN";
      var t = document.createTextNode("Padrão");
      option.appendChild(t);
      select.appendChild(option)

      data.map(function(item){
        var option = document.createElement("option");
        option.value = item.id;
        var t = document.createTextNode(item.indicador);
        option.appendChild(t);
        select.appendChild(option)
      });
      document.getElementById("tipos_indicadores").appendChild(label);
      document.getElementById("tipos_indicadores").appendChild(select);

    }});
}
function buscaIndicadores_antigos(data){
  var table = $('#table8').DataTable();
  var table2 = $('#table9').DataTable();
  table.clear().draw();
  table.destroy();
  table2.clear().draw();
  table2.destroy();

  var id_indicador = document.getElementById("filtro_indicador").value;

  if (id_indicador=="SN") {
    console.log(1);
  }else {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id==id_indicador) {
      var titulos = JSON.parse(data[i].titulos);
      var indicadores = JSON.parse(data[i].indicadores);
    }
  }
var gestor = []; var naogestor = []; var titulogestor = []; var titulonaogestor = [];
  for (var i = 0; i < indicadores.length; i++) {
    if (indicadores[i][0]=="1"||indicadores[i][0]=="3") {
      gestor.push(indicadores[i]);
    }else {
      naogestor.push(indicadores[i]);
    }
  }
  for (var i = 0; i < titulos.length; i++) {
    if (titulos[i][1]=="1"||titulos[i][1]=="3") {
      titulogestor.push(titulos[i]);
    }else {
      titulonaogestor.push(titulos[i]);
    }
  }
  console.log(titulogestor);
/////////////////
$.ajax({
  type: 'POST',
  url: "../control/SalvaProvisorio.php",
  dataType: "json",
  data:{gestor:gestor,naogestor:naogestor,titulogestor:titulogestor,titulonaogestor:titulonaogestor},
  success: function(data) {

  }});
var data1 = [];
var aux2 = JSON.stringify(gestor);
  for (var i = 0; i < titulogestor.length; i++) {
    var aux4 = JSON.stringify(titulogestor[i][0]);
   data1.push({"indicador":titulogestor[i][0],"setores":titulogestor[i][1],
   "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='EditaIndicadorAntigo("+aux4+","+aux2+")'></button>",
   "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiIndicadorAntig("+titulogestor[i][0]+")'></button>"
     });
  }
criarTabelaIndicador1(data1);
////////////////
/////////////////
var data2 = [];
var aux3 = JSON.stringify(naogestor);
  for (var i = 0; i < titulonaogestor.length; i++) {
   data2.push({"indicador":titulonaogestor[i][0],"setores":titulonaogestor[i][1],
   "botao1":"<button class='btn btn-info fa fa-edit' type='button' onclick='EditaIndicadorAntigo("+titulonaogestor[i][0]+","+aux3+")'></button>",
   "botao2":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiIndicadorAntig("+titulonaogestor[i][0]+")'></button>"
     });
  }
criarTabelaIndicador2(data2);
    document.getElementById("bloco_indicadores").style.display = "flex";

  }
}
function EditaIndicadorAntigo(titulogestor,gestor){
console.log(titulogestor);
  console.log("--------------");
  console.log(gestor);
}

function criarTabelaIndicador1(data){
    var table = document.getElementById('table8');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table8' ) ) {
      table = $('#table8').DataTable();
    }
    else {
      table = $('#table8').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "indicador"},
          { data: "setores"},
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


function criarTabelaIndicador2(data){
    var table = document.getElementById('table9');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ( $.fn.dataTable.isDataTable( '#table9' ) ) {
      table = $('#table9').DataTable();
    }
    else {
      table = $('#table9').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "indicador"},
          { data: "setores"},
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

function fecha(){
  document.getElementById("modalepesquisa").style.display = "none";
}

function IniciarPesquisa(){
  var selectedVal = $("#multiselect").val();
  var base = $("#base22").val();
  var baseNome = $("#base22 option:selected").text();

  var indicador = document.getElementById("indicador").value;
  var responsavel = document.getElementById("responsavel").value;
  var inicio2 = document.getElementById("data_init").value;
  var fim2 = document.getElementById("data_end").value;
  var fim = fim2.split("-");
  var inicio = inicio2.split("-");
  fim = fim[0]+"-"+fim[1]+"-"+fim[2];
  inicio = inicio[0]+"-"+inicio[1]+"-"+inicio[2];

  selectedVal = JSON.stringify(selectedVal);
    $.ajax({
      url: "../control/SalvaPesquisaDesempenho.php",
      type: "POST",
      data: {indicador:indicador,responsavel:responsavel,inicio:inicio,fim:fim,
      json:selectedVal,base:base,baseNome:baseNome},
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
              title: 'Pesquisa Iniciada Com Sucesso'
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
              title: 'Falha ao Iniciar Pesquisa'
            })

        }
      },
      error: function(jXHR, textStatus, errorThrown) {}
    });

}

function ExcluiDesempenho(id){
  Swal.fire({
  title: 'Deseja Ecluir?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim!'
}).then((result) => {
    if (result.value) {
      Exclui5(id);
    }
})
}


function Exclui5(id){
  var id = id;
  $.ajax({
    url: "../control/ExcluiDesempenho.php",
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
            title: 'Pesquisa Excluida Com Sucesso'
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
            title: 'Falha Ao Tentar Excluir Pesquisa'
          })
      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });
}
