
function Indicadores(){

    $.ajax({
      url: "control/BuscaRespostaHome.php",
      type: "POST",
      dataType: "json",
      success: function(data) {

        $.ajax({
          url: "control/BuscatamanhoClima.php",
          type: "POST",
          dataType: "json",
          success: function(data2) {
            var data3  = data2;
            var data2  = data2.length;
            var tam2 = data2;
            var qtn_resposta = data.length;
            var pos = 0;
            var total =0;
              if (data=="0") {
                alert("Vazio");
              }
//////////////////////////////////////////////////////////////
            for (var i = 0; i < data.length; i++) {
              var aux = JSON.parse(data[i].resposta);
              //loop em todas as perguntas
              for (var j = 0; j < data2; j++) {
                total = total+1;
                 if (aux[j]=="4"||aux[j]=="5"||aux[j]=="Sim") {
                   pos = pos+1;
                  }
              }
          }
          var pos2 = (pos/total)*100;
          pos2 = pos2.toFixed(2);
          pos2 = pos2+"%";
          $("#climaOrg").html(pos2);
        }
        });

        }
    });


}
