<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    if (isset($_POST['idQuestion'])) {
        $inputVals = array(
          'idQuestion' => $_POST['idQuestion'],
          'description' => $_POST['description']);     
        $validationResult = validateStrings($inputVals);
        if (count($validationResult) <= 0) { 
            $question['idQuestion'] = $_POST['idQuestion'];
            $question['description'] = $_POST['description'];
            $result = updateQuestion($question);
            // Estou desconetando aqui para não ter que desconectar dentro do inserForm e conseguentemente não conseguir pegar o id aqui
            mysqli_close($db);
            $result = buildResultMessage(0, '');
        } else {
            $result = buildResultMessage(3, '');
        }
    } else {
        $result = "[{ 'resultado': '1', 'mensagem': 'Id da pergunta e obrigatorio'}]";
    }
} else {
    $result = buildResultMessage(1, '');
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
die(json_encode($result));
