

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

    <link href="../css/baby2.css" rel="stylesheet">
    <link href="../css/uploadimagens2.css" rel="stylesheet">
    <link href="../css/cropper2.css" rel="stylesheet">
    <link href="../css/bootstrap.css" rel="stylesheet" type="text/css">

            <script src="../control/main.js"></script>
</head>

<body onload="Init()">
  <script>
  function Init(){
    cod();
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
                                <div class="card-title">Gerar Cartão Vendedores</div>
                                <br>
                                <div class="basic-form">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Nome</label>
                                                <input type="text" id="nome" class="form-control" placeholder="Insira o Nome" maxlength="25" onblur="gerarCard()">
                                            </div>
                                            <!-- <div class="form-group col-md-6">
                                                <label>Codigo</label>
                                                <input type="text" id="codigo" class="form-control" placeholder="codigo" maxlength="4" onblur="gerarCard()">
                                            </div> -->
                                        </div>
                                        <div class="form-row" style="display:flex;justify-content:center">
                                          <div class="row img_class col-10" style="display:flex;justify-content:center">
                                            <div id="rowImagemPrincipalY"  style="display:flex;">
                                              <div class="form-group col-6">
                                                <div class="labelFormInputInterno form-label-group">
                                                  <input accept="image/png, image/jpeg, image/jpg" type="file" id="fotoPrincipalY" name="fotoPrincipalY" class="form-control" required="required" onchange="carregaImagemPreviewY(this)"/>
                                                  <label id="labelFotoPrincipalY" class="labelFotoPrincipalY" for="fotoPrincipalY">Clique Aqui Para Inserir Uma Foto 3x4 Sem Fundo</label>
                                                  <label id="labelFotoPrincipal2Y">
                                                    <label id="labelFotoPrincipal2InternaY" class="labelFotoPrincipalY" for="fotoPrincipalY"> Deseja Trocar de Imagem?</label>
                                                  </label>
                                                </div>
                                              </div>
                                              <div id="divPreviewFotoPrincipalY" class="form-group col-6">
                                                <img id="previewFotoPrincipalY" class="previewFoto" src="" alt="">
                                              </div>
                                              <div id="previewFotoPrincipalNaoCarregadoY"  class="labelFormInputInterno form-group col-12">
                                                Sem Nenhuma Foto
                                              </div>
                                            </div>
                                            <input type="hidden" id="foto11"></input>
                                          </div>
                                        </div>

                                        <div class="card-body" id="card" style="justify-content:center;display:flex">
                                          <div id="cardAp">
                                            <div id="cardApint">

                                            </div>
                                            <div id="cardNome">
                                              <span id="nome_card2">Walace Rodrigues da Silva<span>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="card-body" id="buttons" style="justify-content:center;display:flex">
                                          <a class="btn btn-primary btn-circle btn-lg" style="margin-right:5px" onclick="gerar()" style="cursor:pointer">
                                            <i  style="color:white"  class="fa fa-download"></i>
                                          </a>
                                          <a class="btn btn-warning btn-circle btn-lg" onclick="refresh()" style="cursor:pointer">
                                            <i style="color:white"   class="fa fa-times" aria-hidden="true"></i>
                                          </a>
                                        </div>
                                    </form>
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

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalCroppImagem" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog"
      aria-labelledby="modalCroppImagem" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <label class="labelTitulo">Ajuste a imagem</label>
            <div class="divImagemCropped">
              <img id="image" src="">
            </div>
            <div class="divBotaoModalCropp">
              <a onclick="$('#modalCroppImagem').modal('hide'); cropper.destroy();" class=" btn btn-primary genric-btn danger radius">Cancelar</a>
              <a onclick="cropImagem()" class="btn btn-primary  genric-btn primary radius">Pronto</a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/Colaborador.js"></script>
    <script src="../js/sweetalert2.all.min.js"></script>
    <script src="../js/sweetalert2.all.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/sweetalert2.min.js"></script>

    <script src="../js/jquery/jquery.min.js"></script>
    <script src="../js/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../js/baby2.js"></script>
    <script src="../js/jquery.mask.js"></script>
    <script src="../js/canvasjs.min.js"></script>
    <script src="../js/html2canvas.js"></script>
    <script src="../js/html2canvas.min.js"></script>
    <script src="../js/html2canvas.svg.js"></script>
    <script src="../js/html2canvas.svg.min.js"></script>
    <script src="../js/uploadimagens2.js"></script>
    <script src="../js/cropper.js"></script>
    <script src="../js/FileSaver.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jsbarcode/3.6.0/JsBarcode.all.min.js"></script>

</body>

</html>
