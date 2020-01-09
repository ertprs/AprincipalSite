function graficos(index){
if (index=="1") {
  document.getElementById("tela_geral").style.display = "block";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Geral");
}
if (index=="2") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "block";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Departamentos");
}
if (index=="3") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "block";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Colaborador");
}
if (index=="4") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "block";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Evolução");
}
if (index=="5") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "block";
  document.getElementById("tela_forms").style.display = "none";
  $("#tema").html("Dashboard Indicadores");
}
if (index=="6") {
  document.getElementById("tela_geral").style.display = "none";
  document.getElementById("tela_departamento").style.display = "none";
  document.getElementById("tela_colaborador").style.display = "none";
  document.getElementById("tela_evolucao").style.display = "none";
  document.getElementById("tela_indicador").style.display = "none";
  document.getElementById("tela_forms").style.display = "block";
  $("#tema").html("Dashboard Formulários");
}

}

function listaForms(){

}

function listaForms2(){

}
