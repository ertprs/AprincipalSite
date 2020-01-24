function MudaMatriz(){
var id = document.getElementById("tam_matriz").value;
  if (id=="2") {
    document.getElementById("matriz3").style.display = "none";
    document.getElementById("matriz2").style.display = "block";
  }else if(id=="3") {
    document.getElementById("matriz3").style.display = "block";
    document.getElementById("matriz2").style.display = "none";
  }
}

function matriz(){
  $.ajax({
    type: 'POST',
    url: "../control/BuscaMatriz.php",
    dataType: "json",
    success: function(data) {
      var matriz = data[0].matriz;
        if (matriz=="2") {
          document.getElementById("matriz3").style.display = "none";
          document.getElementById("matriz2").style.display = "block";
          document.getElementById("l1c1").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("l1c2").style.backgroundColor = "rgb(153, 255, 204,0.5";
          document.getElementById("l2c1").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("l2c2").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("l1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("l1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5";
          document.getElementById("l2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("l2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
        }else if(matriz=="3"){
          document.getElementById("matriz3").style.display = "block";
          document.getElementById("matriz2").style.display = "none";
          document.getElementById("al1c1").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al1c2").style.backgroundColor = "rgb(153, 255, 204,0.5";
          document.getElementById("al1c3").style.backgroundColor = "rgb(153, 255, 204,0.8)";
          document.getElementById("al2c1").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("al2c2").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al2c3").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("al3c1").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
          document.getElementById("al3c2").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("al3c3").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al1c1x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al1c2x").style.backgroundColor = "rgb(153, 255, 204,0.5";
          document.getElementById("al1c3x").style.backgroundColor = "rgb(153, 255, 204,0.8)";
          document.getElementById("al2c1x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("al2c2x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
          document.getElementById("al2c3x").style.backgroundColor = "rgb(153, 255, 204,0.5)";
          document.getElementById("al3c1x").style.backgroundColor = "rgba(220, 80, 80, 0.8)";
          document.getElementById("al3c2x").style.backgroundColor = "rgba(220, 80, 80, 0.4)";
          document.getElementById("al3c3x").style.backgroundColor = "rgba(255, 255, 153, 0.5)";
        }

    }});
}
