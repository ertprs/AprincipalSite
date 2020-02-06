function MudaMatriz(){
var id = document.getElementById("tam_matriz").value;
  if (id=="2") {
    document.getElementById("matriz3").style.display = "none";
    document.getElementById("matriz2").style.display = "block";
    document.getElementById("matriz4").style.display = "none";
  }else if(id=="3") {
    document.getElementById("matriz3").style.display = "block";
    document.getElementById("matriz2").style.display = "none";
    document.getElementById("matriz4").style.display = "none";
  }else if(id=="4") {
    document.getElementById("matriz3").style.display = "none";
    document.getElementById("matriz2").style.display = "none";
    document.getElementById("matriz4").style.display = "block";
  }
}

function matriz(){
  $.ajax({
    type: 'POST',
    url: "../control/BuscaMatriz.php",
    dataType: "json",
    success: function(data) {
      var matriz = data[0].matriz;
      $("#tam_matriz").val(matriz);
      var intervalos_2 = JSON.parse(data[0].intervalos_2);
      var textos_2 = JSON.parse(data[0].textos_2);
      var intervalos_3 = JSON.parse(data[0].intervalos_3);
      var textos_3 = JSON.parse(data[0].textos_3);
      var intervalos_4 = JSON.parse(data[0].intervalos_4);
      var textos_4 = JSON.parse(data[0].textos_4);
///////////////////////////////////////////////////////////////
document.getElementById("l1c1").style.backgroundColor = textos_2[1];
document.getElementById("l1c2").style.backgroundColor = textos_2[3];
document.getElementById("l2c1").style.backgroundColor = textos_2[5];
document.getElementById("l2c2").style.backgroundColor = textos_2[7];
$("#alto_matriz2").html("Alto ("+intervalos_2[2]+" a "+intervalos_2[3]+")");
$("#l1c1").html(textos_2[0]);
$("#l1c2").html(textos_2[2]);
$("#baixo_matriz2").html("Baixo ("+intervalos_2[0]+" a "+intervalos_2[1]+")");
$("#l2c1").html(textos_2[4]);
$("#l2c2").html(textos_2[6]);
$("#baixo_matriz22").html("Baixo ("+intervalos_2[0]+" a "+intervalos_2[1]+")");
$("#alto_matriz22").html("Alto ("+intervalos_2[2]+" a "+intervalos_2[3]+")");
$("#intervalo_2_baixoi").val(intervalos_2[0]);
$("#intervalo_2_baixof").val(intervalos_2[1]);
$("#intervalo_2_altoi").val(intervalos_2[2]);
$("#intervalo_2_altof").val(intervalos_2[3]);
$("#l1c1INPUT").val(textos_2[0]);
$("#l1c1COR").val(textos_2[1]);
$("#l1c2INPUT").val(textos_2[2]);
$("#l1c2COR").val(textos_2[3]);
$("#l2c1INPUT").val(textos_2[4]);
$("#l2c1COR").val(textos_2[5]);
$("#l2c2INPUT").val(textos_2[6]);
$("#l2c2COR").val(textos_2[7]);
// document.getElementById("l1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
// document.getElementById("l1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
// document.getElementById("l2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
// document.getElementById("l2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
/////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("al1c1").style.backgroundColor = textos_3[1];
document.getElementById("al1c2").style.backgroundColor = textos_3[3];
document.getElementById("al1c3").style.backgroundColor = textos_3[5];
document.getElementById("al2c1").style.backgroundColor = textos_3[7];
document.getElementById("al2c2").style.backgroundColor = textos_3[9];
document.getElementById("al2c3").style.backgroundColor = textos_3[11];
document.getElementById("al3c1").style.backgroundColor = textos_3[13];
document.getElementById("al3c2").style.backgroundColor = textos_3[15];
document.getElementById("al3c3").style.backgroundColor = textos_3[17];
$("#aintervalo_3_baixoi").val(intervalos_3[0]);
$("#aintervalo_3_baixof").val(intervalos_3[1]);
$("#aintervalo_3_medioi").val(intervalos_3[2]);
$("#aintervalo_3_mediof").val(intervalos_3[3]);
$("#aintervalo_3_altoi").val(intervalos_3[4]);
$("#aintervalo_3_altof").val(intervalos_3[5]);

$("#al1c1INPUT").val(textos_3[0]);
$("#al1c1COR").val(textos_3[1]);
$("#al1c2INPUT").val(textos_3[2]);
$("#al1c2COR").val(textos_3[3]);
$("#al1c3INPUT").val(textos_3[4]);
$("#al1c3COR").val(textos_3[5]);
$("#al2c1INPUT").val(textos_3[6]);
$("#al2c1COR").val(textos_3[7]);
$("#al2c2INPUT").val(textos_3[8]);
$("#al2c2COR").val(textos_3[9]);
$("#al2c3INPUT").val(textos_3[10]);
$("#al2c3COR").val(textos_3[11]);
$("#al3c1INPUT").val(textos_3[12]);
$("#al3c1COR").val(textos_3[13]);
$("#al3c2INPUT").val(textos_3[14]);
$("#al3c2COR").val(textos_3[15]);
$("#al3c3INPUT").val(textos_3[16]);
$("#al3c3COR").val(textos_3[17]);


$("#alto_matriz3").html("Alto ("+intervalos_3[4]+" a "+intervalos_3[5]+")");
$("#al1c1").html(textos_3[0]);
$("#al1c2").html(textos_3[2]);
$("#al1c3").html(textos_3[4]);
$("#medio_matriz3").html("Medio ("+intervalos_3[2]+" a "+intervalos_3[3]+")");
$("#al2c1").html(textos_3[6]);
$("#al2c2").html(textos_3[8]);
$("#al2c3").html(textos_3[10]);
$("#baixo_matriz3").html("Baixo ("+intervalos_3[0]+" a "+intervalos_3[1]+")");
$("#al3c1").html(textos_3[12]);
$("#al3c2").html(textos_3[14]);
$("#al3c3").html(textos_3[16]);
$("#baixo_matriz33").html("Baixo ("+intervalos_3[0]+" a "+intervalos_3[1]+")");
$("#medio_matriz33").html("Medio ("+intervalos_3[2]+" a "+intervalos_3[3]+")");
$("#alto_matriz33").html("Alto ("+intervalos_3[4]+" a "+intervalos_3[5]+")");
// document.getElementById("al1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
// document.getElementById("al1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
// document.getElementById("al1c3x").style.backgroundColor = "rgb(153, 255, 204,0.8)";
// document.getElementById("al2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
// document.getElementById("al2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
// document.getElementById("al2c3x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
// document.getElementById("al3c1x").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
// document.getElementById("al3c2x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
// document.getElementById("al3c3x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
/////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("bl1c1").style.backgroundColor = textos_4[1];
document.getElementById("bl1c2").style.backgroundColor = textos_4[3];
document.getElementById("bl1c3").style.backgroundColor = textos_4[5];
document.getElementById("bl1c4").style.backgroundColor = textos_4[7];
document.getElementById("bl2c1").style.backgroundColor = textos_4[9];
document.getElementById("bl2c2").style.backgroundColor = textos_4[11];
document.getElementById("bl2c3").style.backgroundColor = textos_4[13];
document.getElementById("bl2c4").style.backgroundColor = textos_4[15];
document.getElementById("bl3c1").style.backgroundColor = textos_4[17];
document.getElementById("bl3c2").style.backgroundColor = textos_4[19];
document.getElementById("bl3c3").style.backgroundColor = textos_4[21];
document.getElementById("bl3c4").style.backgroundColor = textos_4[23];
document.getElementById("bl4c1").style.backgroundColor = textos_4[25];
document.getElementById("bl4c2").style.backgroundColor = textos_4[27];
document.getElementById("bl4c3").style.backgroundColor = textos_4[29];
document.getElementById("bl4c4").style.backgroundColor = textos_4[31];



$("#bl1c1INPUT").val(textos_4[0]);
$("#bl1c1COR").val(textos_4[1]);
$("#bl1c2INPUT").val(textos_4[2]);
$("#bl1c2COR").val(textos_4[3]);
$("#bl1c3INPUT").val(textos_4[4]);
$("#bl1c3COR").val(textos_4[5]);
$("#bl1c4INPUT").val(textos_4[6]);
$("#bl1c4COR").val(textos_4[7]);
$("#bl2c1INPUT").val(textos_4[8]);
$("#bl2c1COR").val(textos_4[9]);
$("#bl2c2INPUT").val(textos_4[10]);
$("#bl2c2COR").val(textos_4[11]);
$("#bl2c3INPUT").val(textos_4[12]);
$("#bl2c3COR").val(textos_4[13]);
$("#bl2c4INPUT").val(textos_4[14]);
$("#bl2c4COR").val(textos_4[15]);
$("#bl3c1INPUT").val(textos_4[16]);
$("#bl3c1COR").val(textos_4[17]);
$("#bl3c2INPUT").val(textos_4[18]);
$("#bl3c2COR").val(textos_4[19]);
$("#bl3c3INPUT").val(textos_4[20]);
$("#bl3c3COR").val(textos_4[21]);
$("#bl3c4INPUT").val(textos_4[22]);
$("#bl3c4COR").val(textos_4[23]);
$("#bl4c1INPUT").val(textos_4[24]);
$("#bl4c1COR").val(textos_4[25]);
$("#bl4c2INPUT").val(textos_4[26]);
$("#bl4c2COR").val(textos_4[27]);
$("#bl4c3INPUT").val(textos_4[28]);
$("#bl4c3COR").val(textos_4[29]);
$("#bl4c4INPUT").val(textos_4[30]);
$("#bl4c4COR").val(textos_4[31]);


$("#alto_matriz4").html("Alto ("+intervalos_4[6]+" a "+intervalos_4[7]+")");
$("#bl1c1").html(textos_4[0]);
$("#bl1c2").html(textos_4[2]);
$("#bl1c3").html(textos_4[4]);
$("#bl1c4").html(textos_4[6]);
$("#medio_matriz4").html("Medio Alto ("+intervalos_4[4]+" a "+intervalos_4[5]+")");
$("#bl2c1").html(textos_4[8]);
$("#bl2c2").html(textos_4[10]);
$("#bl2c3").html(textos_4[12]);
$("#bl2c4").html(textos_4[14]);
$("#medio_matriz4").html("Medio Baixo("+intervalos_4[2]+" a "+intervalos_4[3]+")");
$("#bl3c1").html(textos_4[16]);
$("#bl3c2").html(textos_4[18]);
$("#bl3c3").html(textos_4[20]);
$("#bl3c4").html(textos_4[22]);
$("#baixo_matriz4").html("Baixo ("+intervalos_4[0]+" a "+intervalos_4[1]+")");
$("#bl4c1").html(textos_4[24]);
$("#bl4c2").html(textos_4[26]);
$("#bl4c3").html(textos_4[28]);
$("#bl4c4").html(textos_4[30]);
$("#baixo_matriz44").html("Baixo ("+intervalos_4[0]+" a "+intervalos_4[1]+")");
$("#mediob_matriz44").html("Medio ("+intervalos_4[2]+" a "+intervalos_4[3]+")");
$("#medioa_matriz44").html("Medio ("+intervalos_4[4]+" a "+intervalos_4[5]+")");
$("#alto_matriz44").html("Alto ("+intervalos_4[6]+" a "+intervalos_4[7]+")");


$("#bintervalo_4_baixoi").val(intervalos_4[0]);
$("#bintervalo_4_baixof").val(intervalos_4[1]);
$("#bintervalo_4_mediobi").val(intervalos_4[2]);
$("#bintervalo_4_mediobf").val(intervalos_4[3]);
$("#bintervalo_4_medioai").val(intervalos_4[4]);
$("#bintervalo_4_medioaf").val(intervalos_4[5]);
$("#bintervalo_4_altoi").val(intervalos_4[6]);
$("#bintervalo_4_altof").val(intervalos_4[7]);
// document.getElementById("bl1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
// document.getElementById("bl1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
// document.getElementById("bl1c3x").style.backgroundColor = "rgb(153, 255, 204,0.8)";
// document.getElementById("bl2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
// document.getElementById("bl2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
// document.getElementById("bl2c3x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
// document.getElementById("bl3c1x").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
// document.getElementById("bl3c2x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
// document.getElementById("bl3c3x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
/////////////////////////////////////////////////////////////////////////////////////////////////
        if (matriz=="2") {
          document.getElementById("matriz3").style.display = "none";
          document.getElementById("matriz4").style.display = "none";
          document.getElementById("matriz2").style.display = "block";

        }else if(matriz=="3"){
          document.getElementById("matriz3").style.display = "block";
          document.getElementById("matriz2").style.display = "none";
          document.getElementById("matriz4").style.display = "none";

        }else if(matriz=="4"){
          document.getElementById("matriz3").style.display = "none";
          document.getElementById("matriz2").style.display = "none";
          document.getElementById("matriz4").style.display = "block";

        }

    }});
}

function SalvaMatriz(){
  var matriz =  document.getElementById("tam_matriz").value;
  if (matriz=="0") {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      })

      Toast.fire({
        type: 'error',
        title: 'Selecione um Tamanho de Matriz'
      })
  }else if(matriz=="2") {
    var l1c1 = document.getElementById("l1c1INPUT").value;
    var l1c1C = document.getElementById("l1c1COR").value;
    var l1c2 = document.getElementById("l1c2INPUT").value;
    var l1c2C = document.getElementById("l1c2COR").value;
    var l2c1 = document.getElementById("l2c1INPUT").value;
    var l2c1C = document.getElementById("l2c1COR").value;
    var l2c2 = document.getElementById("l2c2INPUT").value;
    var l2c2C = document.getElementById("l2c2COR").value;
    var i_2_baixoi = document.getElementById("intervalo_2_baixoi").value;
    var i_2_baixof = document.getElementById("intervalo_2_baixof").value;
    var i_2_altoi = document.getElementById("intervalo_2_altoi").value;
    var i_2_altof = document.getElementById("intervalo_2_altof").value;
    var intervalo = [];
    intervalo.push(i_2_baixoi,i_2_baixof,i_2_altoi,i_2_altof);
    var textos = [];
    textos.push(l1c1,l1c1C,l1c2,l1c2C,l2c1,l2c1C,l2c2,l2c2C);
    $.ajax({
      url: "../control/SalvaMatriz.php",
      type: "POST",
      data: {matriz:matriz,intervalo:intervalo,textos:textos},
      success: function(data) {
        if (data=="1") {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              customClass: {popup:"swal2Teste"}
            })

            Toast.fire({
              type: 'success',
              title: 'Matriz Salva'
            })
        }else {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              customClass: {popup:"swal2Teste"}
            })

            Toast.fire({
              type: 'error',
              title: 'Falha ao Salvar'
            })
        }
      }});

  }else if(matriz=="3") {
    var l1c1 = document.getElementById("al1c1INPUT").value;
    var l1c1C = document.getElementById("al1c1COR").value;
    var l1c2 = document.getElementById("al1c2INPUT").value;
    var l1c2C = document.getElementById("al1c2COR").value;
    var l1c3 = document.getElementById("al1c3INPUT").value;
    var l1c3C = document.getElementById("al1c3COR").value;
    var l2c1 = document.getElementById("al2c1INPUT").value;
    var l2c1C = document.getElementById("al2c1COR").value;
    var l2c2 = document.getElementById("al2c2INPUT").value;
    var l2c2C = document.getElementById("al2c2COR").value;
    var l2c3 = document.getElementById("al2c3INPUT").value;
    var l2c3C = document.getElementById("al2c3COR").value;
    var l3c1 = document.getElementById("al3c1INPUT").value;
    var l3c1C = document.getElementById("al3c1COR").value;
    var l3c2 = document.getElementById("al3c2INPUT").value;
    var l3c2C = document.getElementById("al3c2COR").value;
    var l3c3 = document.getElementById("al3c3INPUT").value;
    var l3c3C = document.getElementById("al3c3COR").value;
    var i_3_baixoi = document.getElementById("aintervalo_3_baixoi").value;
    var i_3_baixof = document.getElementById("aintervalo_3_baixof").value;
    var i_3_medioi = document.getElementById("aintervalo_3_medioi").value;
    var i_3_mediof = document.getElementById("aintervalo_3_mediof").value;
    var i_3_altoi = document.getElementById("aintervalo_3_altoi").value;
    var i_3_altof = document.getElementById("aintervalo_3_altof").value;
    var intervalo = [];
    intervalo.push(i_3_baixoi,i_3_baixof,i_3_medioi,i_3_mediof,i_3_altoi,i_3_altof);
    var textos = [];
    textos.push(l1c1,l1c1C,l1c2,l1c2C,l1c3,l1c3C,l2c1,l2c1C,l2c2,l2c2C,l2c3,l2c3C,l3c1,l3c1C,l3c2,l3c2C,l3c3,l3c3C);
    $.ajax({
      url: "../control/SalvaMatriz.php",
      type: "POST",
      data: {matriz:matriz,intervalo:intervalo,textos:textos},
      success: function(data) {
        if (data=="1") {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              customClass: {popup:"swal2Teste"}
            })

            Toast.fire({
              type: 'success',
              title: 'Matriz Salva'
            })
        }else {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              customClass: {popup:"swal2Teste"}
            })

            Toast.fire({
              type: 'error',
              title: 'Falha ao Salvar'
            })
        }
      }});
  }else if(matriz=="4") {
    var l1c1 = document.getElementById("bl1c1INPUT").value;
    var l1c1C = document.getElementById("bl1c1COR").value;
    var l1c2 = document.getElementById("bl1c2INPUT").value;
    var l1c2C = document.getElementById("bl1c2COR").value;
    var l1c3 = document.getElementById("bl1c3INPUT").value;
    var l1c3C = document.getElementById("bl1c3COR").value;
    var l1c4 = document.getElementById("bl1c4INPUT").value;
    var l1c4C = document.getElementById("bl1c4COR").value;
    var l2c1 = document.getElementById("bl2c1INPUT").value;
    var l2c1C = document.getElementById("bl2c1COR").value;
    var l2c2 = document.getElementById("bl2c2INPUT").value;
    var l2c2C = document.getElementById("bl2c2COR").value;
    var l2c3 = document.getElementById("bl2c3INPUT").value;
    var l2c3C = document.getElementById("bl2c3COR").value;
    var l2c4 = document.getElementById("bl2c4INPUT").value;
    var l2c4C = document.getElementById("bl2c4COR").value;
    var l3c1 = document.getElementById("bl3c1INPUT").value;
    var l3c1C = document.getElementById("bl3c1COR").value;
    var l3c2 = document.getElementById("bl3c2INPUT").value;
    var l3c2C = document.getElementById("bl3c2COR").value;
    var l3c3 = document.getElementById("bl3c3INPUT").value;
    var l3c3C = document.getElementById("bl3c3COR").value;
    var l3c4 = document.getElementById("bl3c4INPUT").value;
    var l3c4C = document.getElementById("bl3c4COR").value;
    var l4c1 = document.getElementById("bl4c1INPUT").value;
    var l4c1C = document.getElementById("bl4c1COR").value;
    var l4c2 = document.getElementById("bl4c2INPUT").value;
    var l4c2C = document.getElementById("bl4c2COR").value;
    var l4c3 = document.getElementById("bl4c3INPUT").value;
    var l4c3C = document.getElementById("bl4c3COR").value;
    var l4c4 = document.getElementById("bl4c4INPUT").value;
    var l4c4C = document.getElementById("bl4c4COR").value;
    var i_3_baixoi = document.getElementById("bintervalo_4_baixoi").value;
    var i_3_baixof = document.getElementById("bintervalo_4_baixof").value;
    var i_3_mediobi = document.getElementById("bintervalo_4_mediobi").value;
    var i_3_mediobf = document.getElementById("bintervalo_4_mediobf").value;
    var i_3_medioai = document.getElementById("bintervalo_4_medioai").value;
    var i_3_medioaf = document.getElementById("bintervalo_4_medioaf").value;
    var i_3_altoi = document.getElementById("bintervalo_4_altoi").value;
    var i_3_altof = document.getElementById("bintervalo_4_altof").value;
    var intervalo = [];
    intervalo.push(i_3_baixoi,i_3_baixof,i_3_mediobi,i_3_mediobf,i_3_medioai,i_3_medioaf,i_3_altoi,i_3_altof);
    var textos = [];
    textos.push(l1c1,l1c1C,l1c2,l1c2C,l1c3,l1c3C,l1c4,l1c4C,l2c1,l2c1C,l2c2,l2c2C,l2c3,l2c3C,l2c4,l2c4C,
      l3c1,l3c1C,l3c2,l3c2C,l3c3,l3c3C,l3c4,l3c4C,l4c1,l4c1C,l4c2,l4c2C,l4c3,l4c3C,l4c4,l4c4C);
    $.ajax({
      url: "../control/SalvaMatriz.php",
      type: "POST",
      data: {matriz:matriz,intervalo:intervalo,textos:textos},
      success: function(data) {
        if (data=="1") {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              customClass: {popup:"swal2Teste"}
            })

            Toast.fire({
              type: 'success',
              title: 'Matriz Salva'
            })
        }else {
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              customClass: {popup:"swal2Teste"}
            })

            Toast.fire({
              type: 'error',
              title: 'Falha ao Salvar'
            })
        }
      }});
  }
}
