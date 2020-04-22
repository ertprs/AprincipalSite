

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Aprincipal Bebê e Mamãe</title>
    <!-- Favicon icon -->
    <link rel="icon" type="../image/png" sizes="16x16" href="images/favicon.png">
    <!-- Pignose Calender -->
    <link href="../plugins/pg-calendar/css/pignose.calendar.min.css" rel="stylesheet">
    <!-- Chartist -->
    <link rel="stylesheet" href="../plugins/chartist/css/chartist.min.css">
    <link rel="stylesheet" href="../plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css">
    <!-- Custom Stylesheet -->
    <link href="../css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert2.css">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert2.min.css">

            <script src="../control/main.js"></script>
</head>

<body onload="Init()">
  <script>
  function Init(){
    //Setor();
    graficos_geral();
  }
  </script>

          <?php
          require_once("menu2.php");
          ?>
        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Metas Mensais</div>
                                <br>
                                <div class="basic-form row">
                                  <div id="aux99" class="col-5">
                                  </div>
                                  <div id="aux98" class="col-7">
                                    <label>Selecione a Loja</label>
                                    <select class="form-control" id="loja" onclick="graficos_geral2()">
                                      <option value="0">TODAS</option>
                                      <option value="1">MATRIZ</option>
                                      <option value="2">PARAUAPEBAS</option>
                                      <option value="3">CIDADE NOVA</option>
                                      <option value="4">EL - MARABÁ</option>
                                      <option value="5">IMPERATRIZ</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="basic-form row" style="margin-top:10px">
                                  <div style="width:68%;height:405px !important;border:solid 1px black;
                                  padding-top:50px;margin-top:30px" id="mixed-chart-div">
                                  </div>
                                  <div style="width:32%;">
                                    <div style="width:99%;height:165px;margin-top:30px;border:solid 1px black;
                                    margin-left:1%"  id="pie-chart-div">

                                    </div>
                                    <div style="width:99%;height:235px;margin-top:5px;border:solid 1px black;
                                    margin-left:1%"  >
                                    <table class="table">
                                      <thead class="thead-dark">
                                        <tr style="font-size: 12px !important;line-height: 1 !important;">
                                          <th scope="col">LOJA</th>
                                          <th scope="col">META</th>
                                          <th scope="col">REALIZADO</th>
                                          <th scope="col">%</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr style="font-size: 12px !important;line-height: 1 !important;">
                                          <th scope="row">1</th>
                                          <td id="meta1">Mark</td>
                                          <td id="realizado1">Otto</td>
                                          <td id="por1">@mdo</td>
                                        </tr>
                                        <tr style="font-size: 12px !important;line-height: 1 !important;">
                                          <th scope="row">2</th>
                                          <td id="meta2">Mark</td>
                                          <td id="realizado2">Otto</td>
                                          <td id="por2">@mdo</td>
                                        </tr>
                                        <tr style="font-size: 12px !important;line-height: 1 !important;">
                                          <th scope="row">3</th>
                                          <td id="meta3">Mark</td>
                                          <td id="realizado3">Otto</td>
                                          <td id="por3">@mdo</td>
                                        </tr>
                                        <tr style="font-size: 12px !important;line-height: 1 !important;">
                                          <th scope="row">4</th>
                                          <td id="meta4">Mark</td>
                                          <td id="realizado4">Otto</td>
                                          <td id="por4">@mdo</td>
                                        </tr>
                                        <tr style="font-size: 12px !important;line-height: 1 !important;">
                                          <th scope="row">5</th>
                                          <td id="meta5">Mark</td>
                                          <td id="realizado5">Otto</td>
                                          <td id="por5">@mdo</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    </div>
                                  </div>
                                  <div style="width:100%;height:230px !important;border:solid 1px black;margin-top:5px" >
                                  <table class="table">
                                    <thead class="thead-dark">
                                      <tr style="font-size: 12px !important;line-height: 1 !important;">
                                        <th scope="col">LOJA</th>
                                        <th scope="col">META</th>
                                        <th scope="col">REALIZADO</th>
                                        <th scope="col">%</th>
                                        <th scope="col">DIAS - UTEIS</th>
                                        <th scope="col">DIAS - FALTA</th>
                                        <th scope="col">DEFICIT MENSAL</th>
                                        <th scope="col">DEFICIT DIARIO</th>
                                        <th scope="col">PROJEÇÃO</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr style="font-size: 12px !important;line-height: 1 !important;">
                                        <th scope="row">1</th>
                                        <td id="meta_1">Mark</td>
                                        <td id="realizado_1">Otto</td>
                                        <td id="por_1">@mdo</td>
                                        <td id="diasuteis_1">Mark</td>
                                        <td id="diasfalta_1">Otto</td>
                                        <td id="deficitmensal_1">@mdo</td>
                                        <td id="deficitdiario_1">Otto</td>
                                        <td id="projecao_1">@mdo</td>
                                      </tr>
                                      <tr style="font-size: 12px !important;line-height: 1 !important;">
                                        <th scope="row">2</th>
                                        <td id="meta_2">Mark</td>
                                        <td id="realizado_2">Otto</td>
                                        <td id="por_2">@mdo</td>
                                        <td id="diasuteis_2">Mark</td>
                                        <td id="diasfalta_2">Otto</td>
                                        <td id="deficitmensal_2">@mdo</td>
                                        <td id="deficitdiario_2">Otto</td>
                                        <td id="projecao_2">@mdo</td>
                                      </tr>
                                      <tr style="font-size: 12px !important;line-height: 1 !important;">
                                        <th scope="row">3</th>
                                        <td id="meta_3">Mark</td>
                                        <td id="realizado_3">Otto</td>
                                        <td id="por_3">@mdo</td>
                                        <td id="diasuteis_3">Mark</td>
                                        <td id="diasfalta_3">Otto</td>
                                        <td id="deficitmensal_3">@mdo</td>
                                        <td id="deficitdiario_3">Otto</td>
                                        <td id="projecao_3">@mdo</td>
                                      </tr>
                                      <tr style="font-size: 12px !important;line-height: 1 !important;">
                                        <th scope="row">4</th>
                                        <td id="meta_4">Mark</td>
                                        <td id="realizado_4">Otto</td>
                                        <td id="por_4">@mdo</td>
                                        <td id="diasuteis_4">Mark</td>
                                        <td id="diasfalta_4">Otto</td>
                                        <td id="deficitmensal_4">@mdo</td>
                                        <td id="deficitdiario_4">Otto</td>
                                        <td id="projecao_4">@mdo</td>
                                      </tr>
                                      <tr style="font-size: 12px !important;line-height: 1 !important;">
                                        <th scope="row">5</th>
                                        <td id="meta_5">Mark</td>
                                        <td id="realizado_5">Otto</td>
                                        <td id="por_5">@mdo</td>
                                        <td id="diasuteis_5">Mark</td>
                                        <td id="diasfalta_5">Otto</td>
                                        <td id="deficitmensal_5">@mdo</td>
                                        <td id="deficitdiario_5">Otto</td>
                                        <td id="projecao_5">@mdo</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- #/ container -->
        </div>
        <!--**********************************
            Content body end
        ***********************************-->


        <!--**********************************
            Footer start
            ***********************************-->
            <div class="footer">
                <div class="copyright">
                    <p>Desenvolvido Por <a href="https://www.portalctech.com.br">CTECH</a> 2020</p>
                </div>
            </div>
        <!--**********************************
            Footer end
        ***********************************-->
    </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/bi.js"></script>
    <script src="../js/sweetalert2.all.min.js"></script>
    <script src="../js/sweetalert2.all.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/sweetalert2.min.js"></script>
    <script src="../plugins/chart.js/Chart.bundle.min.js"></script>
    <script src="../js/plugins-init/chartjs-init.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.7.3/dist/Chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>

</body>

</html>
