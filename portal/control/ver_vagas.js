var global_check = 0;
var global_check2 = "Participando";

function listaVagas2(){
  $.ajax({
    type: 'POST',
    url: "../control/listaVagas2.php",
    dataType: "json",
    success: function(data) {
      var aux = document.createElement("div");
      aux.className = "row";
      data.map(function(item,index){
        var div = document.createElement("div");
        div.className = "col-sm-6";
        var div1 = document.createElement("div");
        div1.className = "bloco_vaga";
        var div2 = document.createElement("div");
        div2.className = "card_vaga";
        var h5 = document.createElement("h5");
        h5.className = "card-title";
        var h5T = document.createTextNode(item.nome);
        h5.appendChild(h5T);
        var p = document.createElement("h6");
        p.className = "card-text";
        var pT = document.createTextNode(item.cidade);
        var p2 = document.createElement("h6");
        p2.className = "card-text font_vaga";
        var pT2 = document.createTextNode(item.endereco);
        p.appendChild(pT);
        p2.appendChild(pT2);
        p.style.paddingLeft = "10px";
        p2.style.paddingLeft = "10px";
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        var a1T = document.createTextNode("Ver Candidaturas");
        a1.appendChild(a1T);
        var a2T = document.createTextNode("Excluir Historico");
        a2.appendChild(a2T);
        a1.className = "btn btn-primary btn_vagas";
        a2.className = "btn btn-primary btn_vagas";
        a3.className = "btn btn-primary btn_vagas";
        a1.setAttribute("onclick","verCandidatura2("+item.id+")");
        a2.setAttribute("onclick","ExcluirHistorico("+item.id+")");
        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(p2);
        div2.appendChild(a1);
        div2.appendChild(a2);
        div1.appendChild(div2);
        div.appendChild(div1);
        aux.appendChild(div);
      });
      $("#VagasHistorico").html(aux);

    }});
}
function ExcluirHistorico(id){
  Swal.fire({
  title: 'Deseja Excluir?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim!'
}).then((result) => {
    if (result.value) {
      Encerar(id);
    }
})
}


function Exclui(id){
  var id = id;
  $.ajax({
    url: "../control/ExcluirHistorico.php",
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
          listaVagas2();
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
    url: "../control/listaVagas.php",
    dataType: "json",
    success: function(data) {
      var aux = document.createElement("div");
      data.map(function(item,index){
        var div = document.createElement("div");
        div.className = "col-sm-6";
        var div1 = document.createElement("div");
        div1.className = "bloco_vaga";
        var div2 = document.createElement("div");
        div2.className = "card_vaga";
        var h5 = document.createElement("h5");
        h5.className = "card-title";
        var h5T = document.createTextNode(item.nome);
        h5.appendChild(h5T);
        var p = document.createElement("h6");
        p.className = "card-text";
        var pT = document.createTextNode(item.cidade);
        var p2 = document.createElement("h6");
        p2.className = "card-text font_vaga";
        var pT2 = document.createTextNode(item.endereco);
        p.appendChild(pT);
        p2.appendChild(pT2);
        p.style.paddingLeft = "10px";
        p2.style.paddingLeft = "10px";
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        var a1T = document.createTextNode("Ver Candidaturas");
        a1.appendChild(a1T);
        var a2T = document.createTextNode("Encerar Vaga");
        a2.appendChild(a2T);
        a1.className = "btn btn-primary btn_vagas";
        a2.className = "btn btn-primary btn_vagas";
        a3.className = "btn btn-primary btn_vagas";
        a1.setAttribute("onclick","verCandidatura("+item.id+")");
        a2.setAttribute("onclick","EncerarCandidatura("+item.id+")");
        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(p2);
        div2.appendChild(a1);
        div2.appendChild(a2);
        div1.appendChild(div2);
        div.appendChild(div1);
        aux.appendChild(div);
      });
      aux.className = "row";
      aux.id = "teste";
      aux.style.width = "100% !important";
      $("#VagasAbertas").html(aux);

    }});
}


function EncerarCandidatura(id){
  Swal.fire({
  title: 'Deseja Encerar?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim!'
}).then((result) => {
    if (result.value) {
      Encerar(id);
    }
})
}

function Encerar(id){

  $.ajax({
    url: "../control/EncerarVaga.php",
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
            title: 'Vaga Encerrada'
          })
          window.location.reload();
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao Encerar Vaga'
          })
      }
    }});
}
function verCandidatura(id){
  menu("3");
    setTimeout(function(){
    $.ajax({
      type: 'POST',
      url: "../control/listaVagasEspecifica.php",
      dataType: "json",
      data:{id:id},
      success: function(data) {
          $("#titulo").html("Vaga de: "+data[0].nome);
          $("#depVaga").val("Departamento: "+data[0].departamento);
          $("#horaVaga").val("Carga Horaria: "+data[0].carga);
          $("#funcVaga").val(data[0].funcoes);
          $("#reqVaga").val(data[0].requisitos);
          $("#cidadeVaga").val(data[0].cidade);
          $("#enderecoVaga").val(data[0].endereco);
          $("#benVaga").val(data[0].beneficios);
          var table = $('#table1').DataTable();
          table.clear().draw();
          table.destroy();
            listaCandidatos(id);
    }});
  }, 200);


}
function verCandidatura2(id){
menu("3");
    setTimeout(function(){
      $.ajax({
        type: 'POST',
        url: "../control/listaVagasEspecifica.php",
        dataType: "json",
        data:{id:id},
        success: function(data) {
            $("#titulo").html("Vaga Encerrada Para "+data[0].nome);
            $("#depVaga").val("Departamento: "+data[0].departamento);
            $("#horaVaga").val("Carga Horaria: "+data[0].carga);
            $("#funcVaga").val(data[0].funcoes);
            $("#reqVaga").val(data[0].requisitos);
            $("#cidadeVaga").val(data[0].cidade);
            $("#enderecoVaga").val(data[0].endereco);
            $("#benVaga").val(data[0].beneficios);
              listaCandidatos(id);
      }});
    }, 200);
}

function fecha_vaga() {
  document.getElementById("icon_vaga").setAttribute("onclick","abre_vaga()");
  document.getElementById("icon_vaga").className = "fa fa-plus-square";
  document.getElementById("menu_vaga").style.display = "none";
}

function abre_vaga() {
  document.getElementById("icon_vaga").setAttribute("onclick","fecha_vaga()");
  document.getElementById("icon_vaga").className = "fa fa-minus-square";
  document.getElementById("menu_vaga").style.display = "block";
}
function fecha_vaga2() {
  document.getElementById("icon_vaga2").setAttribute("onclick","abre_vaga2()");
  document.getElementById("icon_vaga2").className = "fa fa-plus-square";
  document.getElementById("menu_vaga2").style.display = "none";
}

function abre_vaga2() {
  document.getElementById("icon_vaga2").setAttribute("onclick","fecha_vaga2()");
  document.getElementById("icon_vaga2").className = "fa fa-minus-square";
  document.getElementById("menu_vaga2").style.display = "block";
}


function menu(id) {
if (id=="1") {
  document.getElementById("VagasAbertas").style.display = "flex";
  document.getElementById("VagasHistorico").style.display = "none";
  document.getElementById("vaga").style.display = "none";
  $("#titulo").html("Gerenciar Vagas Abertas");
}else if (id=="2") {
  document.getElementById("VagasAbertas").style.display = "none";
  document.getElementById("VagasHistorico").style.display = "block";
  document.getElementById("vaga").style.display = "none";
  listaVagas2();
  $("#titulo").html("Historico de Vagas");
}else if (id=="3") {
  document.getElementById("VagasAbertas").style.display = "none";
  document.getElementById("VagasHistorico").style.display = "none";
  document.getElementById("vaga").style.display = "block";
}

}




function listaCandidatos(id){
  $("#id_vaga").val(id);
  $.ajax({
    type: 'POST',
    url: "../control/listaCandidatos.php",
    dataType: "json",
    data: {id:id},
    success: function(data) {
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var aux2 = JSON.stringify(data);

    for (var i = 0; i <data.length; i++) {
      var perfil = "";
      var img = "";
      var aux100 = JSON.parse(data[i].perfil);
      if (aux100!=null) {
        var aguia = Number(aux100[0].porcentagem);
        var tubarao = Number(aux100[1].porcentagem);
        var gato = Number(aux100[2].porcentagem);
        var lobo =Number(aux100[3].porcentagem);
        if (aguia>tubarao &&aguia>lobo &&aguia>gato){
          perfil = "Aguia";
          img = "../../aguia.jfif"; }
        if (tubarao>aguia &&tubarao>lobo &&tubarao>gato){
          perfil = "Tubarao";
          img = "../../tubarao.jpg"; }
        if (lobo>aguia &&lobo>tubarao &&lobo>gato){
          perfil = "Lobo";
          img = "../../lobo.jfif"; }
        if (gato>aguia &&gato>lobo &&gato>tubarao){
          perfil = "Gato";
          img = "../../gato.png"; }

      }




      var etapa = data[i].etapa+"0%";
      if (data[i].status=="Eliminado") {
        data3.push({"id":data[i].id,"nome":data[i].nome,"perfil":perfil,
        img:"<img src='"+img+"' style='width:50%'></img>",
        "cpf":data[i].cpf,"endereco":data[i].endereco,
        "escolaridade":data[i].escolaridade,"etapa":etapa,"status":data[i].status,
        "botao1":"<a style='color:white !important' class='btn btn-info fa fa-download' type='button'"
         +"href='../"+data[i].curriculo+"' download='curriculo "+data[i].nome+".pdf'></a>",
         "botao2":"<button class='btn btn-warning fa fa-edit' type='button' onclick='AbrirCandidato("+data[i].id+","+aux2+")'></button>",
        "botao3":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiCandidato("+data[i].id+")'></button>"
        });
      }else if (data[i].status=="Banco de Talentos") {
        data2.push({"id":data[i].id,"nome":data[i].nome,"perfil":perfil,
        img:"<img src='"+img+"' style='width:50%'></img>",
        "cpf":data[i].cpf,"endereco":data[i].endereco,
        "escolaridade":data[i].escolaridade,"etapa":etapa,"status":data[i].status,
        "botao1":"<a style='color:white !important' class='btn btn-info fa fa-download' type='button'"
         +"href='../"+data[i].curriculo+"' download='curriculo "+data[i].nome+".pdf'></a>",
         "botao2":"<button class='btn btn-warning fa fa-edit' type='button' onclick='AbrirCandidato("+data[i].id+","+aux2+")'></button>",
        "botao3":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiCandidato("+data[i].id+")'></button>"
        });
      } else {
        data1.push({"id":data[i].id,"nome":data[i].nome,"perfil":perfil,
        img:"<img src='"+img+"' style='width:50%'></img>",
        "cpf":data[i].cpf,"endereco":data[i].endereco,
        "escolaridade":data[i].escolaridade,"etapa":etapa,"status":data[i].status,
        "botao1":"<a style='color:white !important' class='btn btn-info fa fa-download' type='button'"
         +"href='../"+data[i].curriculo+"' download='curriculo "+data[i].nome+".pdf'></a>",
         "botao2":"<button class='btn btn-warning fa fa-edit' type='button' onclick='AbrirCandidato("+data[i].id+","+aux2+")'></button>",
        "botao3":"<button class='btn btn-warning fa fa-times' style='color:white' type='button' onclick='ExcluiCandidato("+data[i].id+")'></button>"
        });
      }


    }
criarTabela(data1);
criarTabela2(data2);
criarTabela3(data3);
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
        columns: [
          { data: "id"},
          { data: "nome"},
          { data: "perfil"},
          { data: "img"},
          { data: "cpf"},
          { data: "endereco"},
          { data: "escolaridade"},
          { data: "status"},
          { data: "etapa"},
          { data: "botao1"},
          { data: "botao2"},
          { data: "botao3"},
        ],
          dom: 'Bfrtip',
           buttons: [
               'excel',
               'pdf',
               'csv'
           ],
            select: true,
        } );

      }

  }


function criarTabela2(data){
    var table = document.getElementById('table2');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ($.fn.dataTable.isDataTable('#table2')){
      table = $('#table2').DataTable();
    }
    else {
      table = $('#table2').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "nome"},
          { data: "perfil"},
          { data: "img"},
          { data: "cpf"},
          { data: "endereco"},
          { data: "escolaridade"},
          { data: "status"},
          { data: "etapa"},
          { data: "botao1"},
          { data: "botao2"},
          { data: "botao3"},
      ],
        dom: 'Bfrtip',
         buttons: [
             'excel',
             'pdf',
             'csv'
         ],
          select: true,
      } );
    }


}


function criarTabela3(data){
    var table = document.getElementById('table3');
    for(var i=0; i<data.length; i++){
      var newRow = document.createElement('tr');
    }
    if ($.fn.dataTable.isDataTable('#table3')){
      table = $('#table3').DataTable();
    }
    else {
      table = $('#table3').DataTable( {
        "scrollX": true,
        data: data,
        columns: [
          { data: "id"},
          { data: "nome"},
          { data: "perfil"},
          { data: "img"},
          { data: "cpf"},
          { data: "endereco"},
          { data: "escolaridade"},
          { data: "status"},
          { data: "etapa"},
          { data: "botao1"},
          { data: "botao2"},
          { data: "botao3"},
        ],
          dom: 'Bfrtip',
           buttons: [
               'excel',
               'pdf',
               'csv'
           ],
            select: true,
        } );
      }
      aux22();
  }

  function aux22(){
    var table = $('#table1').DataTable();
    var table2 = $('#table2').DataTable();
    var table3 = $('#table3').DataTable();
    table.button().add( 3, {
        action: function () {
            mover(1);
        },
        text: 'Mover Varios'
    });
    table.button().add( 4, {
        action: function () {
            email(1);
        },
        text: 'Enviar E-mail'
    });
    table2.button().add( 3, {
        action: function () {
            mover(2);
        },
        text: 'Mover Varios'
    });
    table2.button().add( 4, {
        action: function () {
            email(2);
        },
        text: 'Enviar E-mail'
    });
    table3.button().add( 3, {
        action: function () {
            mover(3);
        },
        text: 'Mover Varios'
    });
    table3.button().add( 4, {
        action: function () {
            email(3);
        },
        text: 'Enviar E-mail'
    });
  }

function mover(){
  alert("Mover");
}
function email(table){
  var id = document.getElementById("id_vaga").value;
  if (table==1) {

    $.ajax({
      type: 'POST',
      url: "../control/EnviaEmail.php",
      dataType: "json",
      data: {id:id,tipo:"Selecionado"},
      success: function(data) {

      }});

  }else if (table==2) {

        $.ajax({
          type: 'POST',
          url: "../control/EnviaEmail.php",
          dataType: "json",
          data: {id:id,tipo:"Banco de Talentos"},
          success: function(data) {

          }});


  }else if (table==3) {

        $.ajax({
          type: 'POST',
          url: "../control/EnviaEmail.php",
          dataType: "json",
          data: {id:id,tipo:"Eliminado"},
          success: function(data) {

          }});


  }
}

function AbrirCandidato(id,data2){
  for (var i = 0; i < data2.length; i++) {
    if (data2[i].id==id) {
      data = data2[i];
    }
  }

  $("#modaledit").modal();
  $("#TituloModalCentralizado").html(data.nome);
  $("#cpf_modal").val(data.cpf);
  $("#escolaridade_modal").val(data.escolaridade);
  $("#endereco_modal").val(data.endereco);
  document.getElementById("btn_cur").href = "../curriculos/"+data.curriculo;
  document.getElementById("btn_cur").download = "curriculo "+data.nome+".pdf";
  $("#id_can").val(data.id);
  $("#etapa2").val(data.status).change();
  global_check = data.etapa;
  global_check2 = data.status;
  if (data.etapa=="1") {
    document.getElementById("barra_prog").ariaValuenow ="10";
    document.getElementById("barra_prog").style.width ="10%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-danger progress-bar-striped";
    $("#barra_prog").html("&nbsp;10% de Progresso");
    $("#inlineRadio1").click();
    $("#etapa").val("1").change();

  }else if (data.etapa=="2") {
    document.getElementById("barra_prog").ariaValuenow ="20";
    document.getElementById("barra_prog").style.width ="20%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-danger progress-bar-striped";
    $("#barra_prog").html("&nbsp;20% de Progresso");
    $("#etapa").val("2").change();
  }else if (data.etapa=="3") {
    document.getElementById("barra_prog").ariaValuenow ="30";
    document.getElementById("barra_prog").style.width ="30%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-warning progress-bar-striped";
    $("#barra_prog").html("&nbsp;30% de Progresso");
    $("#etapa").val("3").change();
  }else if (data.etapa=="4") {
    document.getElementById("barra_prog").ariaValuenow ="40";
    document.getElementById("barra_prog").style.width ="40%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-warning progress-bar-striped";
    $("#barra_prog").html("&nbsp;40% de Progresso");
    $("#etapa").val("4").change();
  }else if (data.etapa=="5") {
    document.getElementById("barra_prog").ariaValuenow ="50";
    document.getElementById("barra_prog").style.width ="50%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-warning progress-bar-striped";
    $("#barra_prog").html("&nbsp;50% de Progresso");
    $("#etapa").val("5").change();
  }else if (data.etapa=="6") {
    document.getElementById("barra_prog").ariaValuenow ="60";
    document.getElementById("barra_prog").style.width ="60%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-warning progress-bar-striped";
    $("#barra_prog").html("&nbsp;60% de Progresso");
    $("#etapa").val("6").change();
  }else if (data.etapa=="7") {
    document.getElementById("barra_prog").ariaValuenow ="70";
    document.getElementById("barra_prog").style.width ="70%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-info progress-bar-striped";
    $("#barra_prog").html("&nbsp;70% de Progresso");
    $("#etapa").val("7").change();
  }else if (data.etapa=="8") {
    document.getElementById("barra_prog").ariaValuenow ="80";
    document.getElementById("barra_prog").style.width ="80%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-info progress-bar-striped";
    $("#barra_prog").html("&nbsp;80% de Progresso");
    $("#etapa").val("8").change();
  }else if (data.etapa=="9") {
    document.getElementById("barra_prog").ariaValuenow ="90";
    document.getElementById("barra_prog").style.width ="90%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-info progress-bar-striped";
    $("#barra_prog").html("&nbsp;100% de Progresso");
    $("#etapa").val("9").change();
  }else if (data.etapa=="10") {
    document.getElementById("barra_prog").ariaValuenow ="100";
    document.getElementById("barra_prog").style.width ="100%";
    document.getElementById("barra_prog").className ="progress-bar progress-bar-success progress-bar-striped";
    $("#barra_prog").html("&nbsp;100% de Progresso");
    $("#etapa").val("10").change();
  }
}

function Captura(id){
global_check = id;
}
function Captura2(id){
global_check2 = id;
}

function ExcluiCandidato(id){
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

function SalvaEtapa(){
  var id = document.getElementById("id_can").value;
  var id2 = document.getElementById("id_vaga").value;
  $.ajax({
    url: "../control/SalvaEtapa.php",
    type: "POST",
    data: {etapa:global_check,status:global_check2,id:id},
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
            title: 'Candidato Editado Com Sucesso'
          })
          var table = $('#table1').DataTable();
          table.clear().draw();
          table.destroy();
          listaCandidatos(id2);
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          })

          Toast.fire({
            type: 'error',
            title: 'Falha Ao EDitar Candidato'
          })
      }
    }});
}

function Exclui(id){
  var id = id;
  $.ajax({
    url: "../control/ExcluiCandidato.php",
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
            title: 'Candidato Excluido Com Sucesso'
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
            title: 'Falha Ao Tentar Excluir Candidato'
          })
      }
    },
    error: function(jXHR, textStatus, errorThrown) {}
  });
}
