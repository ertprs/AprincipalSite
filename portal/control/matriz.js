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
      var intervalos_2 = JSON.parse(data[0].intervalos_2);


        if (matriz=="2") {
          document.getElementById("matriz3").style.display = "none";
          document.getElementById("matriz4").style.display = "none";
          document.getElementById("matriz2").style.display = "block";
          document.getElementById("l1c1").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("l1c2").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("l2c1").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("l2c2").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("intervalo_2_baixoi").value = intervalos_2[0];
          document.getElementById("intervalo_2_baixof").value = intervalos_2[1];
          document.getElementById("intervalo_2_altoi").value = intervalos_2[2];
          document.getElementById("intervalo_2_altof").value = intervalos_2[3];

          // document.getElementById("l1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("l1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          // document.getElementById("l2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          // document.getElementById("l2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
        }else if(matriz=="3"){
          document.getElementById("matriz3").style.display = "block";
          document.getElementById("matriz2").style.display = "none";
          document.getElementById("matriz4").style.display = "none";
          document.getElementById("al1c1").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al1c2").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("al1c3").style.backgroundColor = "rgb(153, 255, 204,0.8)";
          document.getElementById("al2c1").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("al2c2").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al2c3").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("al3c1").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
          document.getElementById("al3c2").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("al3c3").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("al1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("al1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          // document.getElementById("al1c3x").style.backgroundColor = "rgb(153, 255, 204,0.8)";
          // document.getElementById("al2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          // document.getElementById("al2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("al2c3x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          // document.getElementById("al3c1x").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
          // document.getElementById("al3c2x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          // document.getElementById("al3c3x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
        }else if(matriz=="4"){
          document.getElementById("matriz3").style.display = "none";
          document.getElementById("matriz2").style.display = "none";
          document.getElementById("matriz4").style.display = "block";
          document.getElementById("bl1c1").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("bl1c2").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("bl1c3").style.backgroundColor = "rgb(153, 255, 204,0.8)";
          document.getElementById("bl2c1").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("bl2c2").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("bl2c3").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("bl3c1").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
          document.getElementById("bl3c2").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("bl3c3").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("bl1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("bl1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          // document.getElementById("bl1c3x").style.backgroundColor = "rgb(153, 255, 204,0.8)";
          // document.getElementById("bl2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          // document.getElementById("bl2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          // document.getElementById("bl2c3x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          // document.getElementById("bl3c1x").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
          // document.getElementById("bl3c2x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          // document.getElementById("bl3c3x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
        }

    }});
}
