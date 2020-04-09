<?php
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
$id = $_POST['id'];

$dia = date("d");
$mes = date("m");
$ano = date("Y");

$query = "SELECT a.gestor,a.id,a.id_colaborador,a.nome,a.resposta,a.id_pesquisa,a.departamento,a.resposta2,a.id_gestor,
 b.indicador, b.responsavel,b.inicio,b.fim,b.setores,b.perguntas,b.verifica FROM respostadesempenho as a,
 pesquisadesempenho as b where a.id_gestor='$id' and a.id_pesquisa=b.id and (a.resposta2 is null)";
$result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
$data = array();
if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
  $data[] = $row;
}

$max = sizeof($data);
$novo_vetor = array();
for($i=0; $i <$max ; $i++){
    $text = $data[$i]["fim"];
    $dia2 = substr($text, 0, 2);
    $mes2 = substr($text, 3, 2);
    $ano2 = substr($text, 6, 4);
    $dataFim = $ano2.$mes2.$dia2;
    $dataAtual = $ano.$mes.$dia;
        if($dataFim>$dataAtual){
          array_push($novo_vetor,$data[$i]);
        }
}
echo json_encode($novo_vetor);
}else {
  echo "0";
}

?>
