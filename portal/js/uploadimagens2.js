
var fotoPrincipalBase64Y = "";
var segundaFotoBase64Y = "";
var terceiraFotoBase64Y = "";
var quartaFotoBase64Y = "";
var fotoPrincipalBase64xY = "";
var segundaFotoBase64xY = "";
var terceiraFotoBase64xY = "";
var quartaFotoBase64xY = "";
var cropper = null;

var numeroImagensY = 3;

function carregaImagemPreviewY(event){
    var file = event.files[0];
    var reader = new FileReader();

    reader.readAsDataURL(file);
    if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024 * 10){
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            document.getElementById('submit').disabled = true;
            alert("Arquivo Muito Grande");
        }
        else{
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            $('#modalCroppImagem').modal('show');
            reader.onload = function(fileReaded) {
              sessionStorage.setItem("imagemAtual",event.id);

              $("#image").attr("src", fileReaded.target.result);
              const image = document.getElementById('image');
              setTimeout(() => {
                  cropper = new Cropper(image, {
                      aspectRatio: 0.9 / 1,
                      crop(event) { },
                  });
              }, 1000);
            }
        }
    }

}



function cropImagem(){
  var defineImagem = sessionStorage.getItem("imagemAtual");
    var options = {
      width: 170,
      height: 190,
    }

  var imagemCortada = cropper.getCroppedCanvas(options);
  var dataUrlImagem = imagemCortada.toDataURL();

if (defineImagem === "fotoPrincipalY") {
      previewFotoPrincipalNaoCarregadoY.style.display = "none";
      labelFotoPrincipalY.style.display = "none";
      labelFotoPrincipal2Y.style.display = "inline-block";
      labelFotoPrincipal2InternaY.style.display = "inline-block";
      previewFotoPrincipalY.src = dataUrlImagem;
      divPreviewFotoPrincipalY.style.display = "flex";
      //document.getElementById('foto11').value = dataUrlImagem;
      var data = "url("+dataUrlImagem+")";
      document.getElementById("cardApint").style.backgroundImage = data;
      document.getElementById("cardApint").style.backgroundRepeat = "no-repeat";
      document.getElementById("cardApint").style.backgroundSize = "170px 190px";
  }

  cropper.destroy();
  $('#modalCroppImagem').modal('hide');
}



function adicionaDivImagem() {
    var numeroLinha;
    var idInput;
    var idLabel;
    var textoLabel;
    var idLabel2;
    var idLabelInterna;
    var idDivPreview;
    var idPreview;
    var idPreviewNaoCarregado;
    if (numeroImagens < 5) {
        numeroImagens++;
    console.log(numeroImagens);

        if (numeroImagens === 4) {
            numeroLinha = "rowQuartaImagem";
            idInput = "quartaFoto";
            idLabel = "labelQuartaFoto";
            textoLabel = "Clique para adicionar a quarta imagem - Tamanho Máximo: 4MB";
            idLabel2 = "labelQuartaFoto2";
            idLabelInterna = "labelQuartaFoto2Interna";
            idDivPreview = "divPreviewQuartaFoto";
            idPreview = "previewQuartaFoto";
            idPreviewNaoCarregado = "previewQuartaFotoNaoCarregado";
        }else if (numeroImagens === 5) {
            numeroLinha = "rowQuintaImagem";
            idInput = "quintaFoto";
            idLabel = "labelQuintaFoto";
            textoLabel = "Clique para adicionar a quinta imagem - Tamanho Máximo: 4MB";
            idLabel2 = "labelQuintaFoto2";
            idLabelInterna = "labelQuintaFoto2Interna";
            idDivPreview = "divPreviewQuintaFoto";
            idPreview = "previewQuintaFoto";
            idPreviewNaoCarregado = "previewQuintaFotoNaoCarregado";
        }

        $("#divContainer").append('<div id="'+numeroLinha+'" class="form-row"> <div class="col-md-6"><div class="labelFormInputInterno form-label-group"><input accept="image/png, image/jpeg, image/jpg" type="file" id="'+idInput+'" name="'+idInput+'" class="form-control" required="required" onchange="carregaImagemPreview(this)"/>        <label id="'+idLabel+'" class="labelFotoPrincipal" for="'+idInput+'">'+textoLabel+'</label><label id="'+idLabel2+'">Imagem carregada.&nbsp; &nbsp; <label id="'+idLabelInterna+'" class="labelFotoPrincipal" for="'+idInput+'"> Trocar?</label></label></div></div><div id="'+idDivPreview+'" class="col-md-6"><img id="'+idPreview+'" class="previewFoto" src="" alt=""></div><div id="'+idPreviewNaoCarregado+'"  class="labelFormInputInterno col-md-6">Nenhuma Imagem Carregada</div></div>');

        var numeroImagensProximaAcao = numeroImagens+1;
        if (numeroImagensProximaAcao < 6) {
            $("#quantidadeImagens").html("("+numeroImagensProximaAcao+"/5)");
        }

    }
}
