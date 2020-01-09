<?php
require_once '../dompdf/vendor/autoload.php';

$figura1 = $_POST['figura1'];
$figura2 = $_POST['figura2'];
$figura3 = $_POST['figura3'];
$figura4 = $_POST['figura4'];
$figura4 = $_POST['figura5'];
$nomeClientePdf = "Teste";
use Dompdf\Dompdf;

$dompdf = new Dompdf;
$style = "
	<style>
	@page {size: 21cm 29.7cm; margin: 0;}
.titulo{
  text-align:center;
  width: 100%;
  max-width: 100%;
	display:flex;
	justify-content: center;
	margin: 5px;
}
.col-6{
	max-width: 190px !important;
	width: 190px !important;
	max-height: 195px !important;
	height: 195px !important;
	margin: 15px;
  }

.figura{
		max-width: 750px !important;
		width: 750px !important;
		max-height: 200px !important;
		height: 200px !important;
		margin: 15px;
	}

.figura2{
	max-width: 140px !important;
	width: 140px !important;
	max-height: 90px !important;
	height: 90px !important;
}
	</style>
";


$figura = "<div class='titulo'>
							<img class='figura2' src='../img/logo.png' alt='sing up image'>
						</div>
						<div class='titulo'>
							<h2 style='margin:10px'>Relatorio Geral de Clima Organizacional</h2>
						</div>
						<hr style='border: solid 1px;color:#cec7c7;margin:5px;'>
						<div class='row' style='max-width:100%;width:100%;'>
  						<img  class='figura'  src='".$figura1."' alt='sing up image'>
						</div>
						";


$pagina1 = "<div style='padding-left:-9px !important;max-width:819px !important;width:819px !important;height:1122px;'>.$figura.</div>";
	$html = $style.$pagina1;
	$dompdf->loadHtml($html);
	ob_clean();
	$dompdf->setPaper('A4', 'portrait');
	$dompdf->render();
	$dompdf->stream($nomeClientePdf.'.pdf');
	// $dompdf->stream('Proposta - Cliente '.$nomeClientePdf.'.pdf', array("Attachment" => false));

?>
