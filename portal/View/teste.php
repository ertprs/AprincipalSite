<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Ponto Eletronico</title>
    <!-- Favicon icon -->
    <link rel="icon" type="../image/png" sizes="16x16" href="images/favicon.png">

    <link href="../plugins/pg-calendar/css/pignose.calendar.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../plugins/chartist/css/chartist.min.css">
    <link rel="stylesheet" href="../plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css">
    <link href="../css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert2.css">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert2.min.css">
    <link href="../css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
    <link href="../css/buttons.dataTables.min.css" rel="stylesheet" type="text/css">
    <link href="../css/select.dataTables.min.css" rel="stylesheet" type="text/css">
    <link href="../css/dataTables.bootstrap4.css" rel="stylesheet">
    <link href="../css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="../css/select.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../js/bootstrap/bootstrap-select.css">

<body >

        <div class="content-body">

            <div class="container-fluid">
                <div class="row" id="demo">---------</div>
                <button onclick="getLocation()">OK</button>
            </div>
            <!-- #/ container -->
        </div>

    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/climaOrganizacional.js"></script>
    <script src="../js/sweetalert2.all.min.js"></script>
    <script src="../js/sweetalert2.all.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/sweetalert2.min.js"></script>
    <script src="../js/jquery-3.3.1.js"></script>
    <script src="../js/jquery.dataTables.min.js"></script>
    <script src="../js/dataTables.buttons.min.js"></script>
    <script src="../js/buttons.flash.min.js"></script>
    <script src="../js/jszip.min.js"></script>
    <script src="../js/pdfmake.min.js"></script>
    <script src="../js/vfs_fonts.js"></script>
    <script src="../js/buttons.html5.min.js"></script>
    <script src="../js/buttons.print.min.js"></script>
    <script src="../js/bootstrap/popper.js"></script>
    <script src="../js/bootstrap/popper.min.js"></script>
    <script src="../js/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../js/bootstrap/bootstrap-select.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
    <script type="text/javascript">
    $(function () {
        $('.selectpicker').selectpicker();
    });
    </script>
</body>

</html>

<script>
    function getLocation(){
      var x=document.getElementById("demo");
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition,showError);
        }
        else{
            x.innerHTML="Seu browser não suporta Geolocalização.";
        }
    }

    function showPosition(position){
      var lat = -5.3509703;
      var lon = -49.132262999999995;
      var distancia = calc(position.coords.latitude, position.coords.longitude, lat, lon);
      distancia = Number(distancia);
      alert("Distancia : "+distancia+" KM");
    }

    function showError(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                x.innerHTML="Usuário rejeitou a solicitação de Geolocalização.";
                alert("Usuário rejeitou a solicitação de Geolocalização.");
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML="Localização indisponível.";
                alert("Localização indisponível.");
                break;
            case error.TIMEOUT:
                x.innerHTML="A requisição expirou.";
                alert("A requisição expirou.");
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML="Algum erro desconhecido aconteceu.";
                alert("Algum erro desconhecido aconteceu");
                break;
        }
    }

    function calc(lat1, lon1, lat2, lon2){
      let R = 6371;
    	let dLat = (lat2 - lat1) * (Math.PI / 180);
    	let dLon = (lon2 - lon1) * (Math.PI / 180);
    	let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    	let d = R * c;
      d = d.toFixed(2);

    	return d;
    }


</script>
