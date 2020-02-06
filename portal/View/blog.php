

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

    <link href="../css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
    <link href="../css/buttons.dataTables.min.css" rel="stylesheet" type="text/css">
    <link href="../css/select.dataTables.min.css" rel="stylesheet" type="text/css">
    <link href="../css/dataTables.bootstrap4.css" rel="stylesheet">
    <link href="../css/jquery.dataTables.min.css" rel="stylesheet">

            <script src="../control/main.js"></script>
    </head>

<body onload="Init()">
  <script>
  function Init(){
    listaNoticias();
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
                                <div class="card-title">Cadastrar Noticias</div>
                                <br>
                                <div class="row">
                                  <div class="basic-form col-7">
                                      <form>
                                          <div class="form-row">
                                              <div class="form-group col-md-6">
                                                  <label>Titulo</label>
                                                  <input type="text" id="titulo" onblur="previa3()" class="form-control" placeholder="Titulo" maxlength="50">
                                              </div>
                                              <div class="form-group col-md-6">
                                                  <label>Categoria</label>
                                                  <input type="text" id="cat" class="form-control" placeholder="Categoria" maxlength="50">
                                                  <ul class="sugestoes"></ul>
                                              </div>
                                              <div class="form-group col-md-12">
                                                  <label>Resumo</label>
                                                  <input type="text" id="resumo" onblur="previa3()" class="form-control" placeholder="Resumo" maxlength="130">
                                              </div>
                                              <div class="form-group col-md-12">
                                                  <label>Texto</label>
                                                  <textarea id="texto" style="height:100px" class="form-control" placeholder="Conteudo"></textarea>
                                              </div>
                                              <div class="form-group col-md-12">
                                                  <label>Imagem (Dimensões Necessarias: 690px por 468px)</label>
                                                  <input type="file" id="imagem" onchange="previa()" class="form-control" accept="image/*">
                                              </div>
                                          </div>
                                          <div style="display:flex;justify-content:space-between">
                                            <button type="button" onclick="envia_()" class="btn btn-primary col-5">Enviar Noticia</button>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="basic-form col-1" display="flex" style="margin-top:20%">
                                    <i class="fa fa-arrow-circle-right" style="font-size:50px" aria-hidden="true"></i>
                                  </div>
                                  <div class="basic-form col-4">
                                    <div class="card-title" style="text-align:center;overflow: hidden;">Previa da Noticias</div>
                                    <div id="card" style="text-align:center;width:100%;background-color:#dee2e65c">
                                      <img id="img2" class="col-12" display="block" style="width:100% !important;padding-right: 0px !important;padding-left:0px !important">
                                      <h4 id="titulo2" display="block" style="text-align:center;overflow: hidden;margin-top:20px"></h4>
                                      <h6 id="resumo2" display="block" style="text-align:justify;overflow: hidden;margin-left:15px;margin-right:15px"></h6>
                                      <button type="button" class="wall btn btn-warning col-4">Ler Mais</button>
                                      <br>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Noticias Cadastradas</div>
                                <br>
                                <div class="row">
                                    <div class="basic-form">
                                        <div id="tableNoticias">
                                          <table id="table1" style="width:100%" class="table table-striped table-bordered" >
                                            <thead>
                                              <tr>
                                                <td>Id</td>
                                                <td>Foto</td>
                                                <td>Titulo</td>
                                                <td>Data</td>
                                                <td>Resumo</td>
                                                <td>Editar</td>
                                                <td>Excluir</td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                          </table>
                                        </div>
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

    <!-- Modal Login -->
    <div class="modal fade" id="modaledit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document" style="max-width:1000px !important">
        <div class="modal-content">
          <div class="modal-header text-center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row">
            <div class="basic-form col-7" style="margin:10px !important">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Titulo</label>
                            <input type="text" id="titulo4" onblur="editRefresh()" class="form-control" placeholder="Titulo" maxlength="50">
                        </div>
                        <div class="form-group col-md-6">
                            <label>Resumo</label>
                            <input type="text" id="resumo4"  onblur="editRefresh()" class="form-control" placeholder="Resumo" maxlength="130">
                        </div>
                        <div class="form-group col-md-12">
                            <label>Texto</label>
                            <textarea id="texto4" style="height:100px" class="form-control" placeholder="Conteudo"></textarea>
                        </div>
                        <div class="form-group col-md-12">
                            <label>Imagem (Dimensões Necessarias: 690px por 468px)</label>
                            <input type="file" id="imagem4" onchange="IMG()" class="form-control" accept="image/*">
                        </div>
                    </div>
                    <input type="hidden" id="id4">
                </form>
            </div>
            <div class="basic-form col-4"  style="margin:10px !important">
              <div class="card-title" style="text-align:center;overflow: hidden;">Previa da Noticias</div>
              <div id="card44" style="text-align:center;width:100%;background-color:#dee2e65c">
                <img id="img24" class="col-12" display="block" style="width:100% !important;padding-right: 0px !important;padding-left:0px !important">
                <h4 id="tituloX" display="block" style="text-align:center;overflow: hidden;margin-top:20px"></h4>
                <h6 id="resumoX" display="block" style="text-align:justify;overflow: hidden;margin-left:15px;margin-right:15px"></h6>
                <button type="button" class="wall btn btn-warning col-4">Ler Mais</button>
                <br>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-primary" style="width:10rem" onclick="EditaNot()">Editar Noticia</button>
          </div>'
        </div>
      </div>
    </div>
    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/blog.js"></script>
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
    <script src="../js/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
