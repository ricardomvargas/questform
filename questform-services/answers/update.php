<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    $inputVals = array(
        'idAnswer' => $_POST['idAnswer'],
        'idTypeAnswer' => $_POST['idTypeAnswer']);
    $validationResult = validateStrings($inputVals);
    if (count($validationResult) <= 0) {
        $answer = [];
        $minChar = null;
        $maxChar= null;
        $singleOptionTemplate = null;
        if (isset($_POST['minChar'])) {
          $minChar = $_POST['minChar'];
        }
        if (isset($_POST['maxChar'])) {
          $maxChar = $_POST['maxChar'];  
        }
        if (isset($_POST['singleOptionTemplate'])) {
          $singleOptionTemplate = $_POST['singleOptionTemplate'];
        }
        
        $answer['idAnswer'] = $_POST['idAnswer'];
        $answer['idTypeAnswer'] = $_POST['idTypeAnswer'];
        $answer['maxChar'] = $minChar;
        $answer['minChar'] = $maxChar;
        $answer['singleOptionTemplate'] = $singleOptionTemplate;
        $result = updateAnswer($answer);
        // Estou desconetando aqui para não ter que desconectar dentro do inserForm e conseguentemente não conseguir pegar o id aqui
        mysqli_close($db);
        if ($result) {
            $result = buildResultMessage(0, '');
        } else {
            $result = buildResultMessage(4, '');
        }    
    } else {
        $result = buildResultMessage(3, '');
    }
} else {
    $result = buildResultMessage(1, '');
}

header(getHeaderText());
header(getAllowOriginText());
die(json_encode($result, JSON_NUMERIC_CHECK));