function valida(nivel){
  if (nivel=="4") {
    document.getElementById("cabecalho_marketing").style.display = "block"
    document.getElementById("marketing1").style.display = "block"
    document.getElementById("marketing2").style.display = "block"
    document.getElementById("marketing3").style.display = "block"
    document.getElementById("cabecalho_rh").style.display = "block"
    document.getElementById("rh1").style.display = "block"
    document.getElementById("rh2").style.display = "block"
    document.getElementById("rh3").style.display = "block"
    document.getElementById("cabecalho_ead").style.display = "block"
    document.getElementById("ead1").style.display = "block"
    document.getElementById("ead2").style.display = "block"
    document.getElementById("cabecalho_configuracao").style.display = "block"
    document.getElementById("configuracao1").style.display = "block"
  }else if(nivel=="3") {
    document.getElementById("cabecalho_rh").style.display = "block"
    document.getElementById("rh1").style.display = "block"
    document.getElementById("rh2").style.display = "block"
    document.getElementById("rh3").style.display = "block"
    document.getElementById("cabecalho_ead").style.display = "block"
    document.getElementById("ead1").style.display = "block"
    document.getElementById("ead2").style.display = "block"
  }else if(nivel=="2") {
    document.getElementById("cabecalho_marketing").style.display = "block"
    document.getElementById("marketing1").style.display = "block"
    document.getElementById("marketing2").style.display = "block"
    document.getElementById("marketing3").style.display = "block"
    document.getElementById("cabecalho_ead").style.display = "block"
    document.getElementById("ead1").style.display = "block"
    document.getElementById("ead2").style.display = "block"
  }else if(nivel=="1") {
    document.getElementById("ead3").style.display = "block"

  }

}
