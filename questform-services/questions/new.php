<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    $inputVals = array(
        'idSurvey' => $_POST['idSurvey'],
        'description' => $_POST['description']);
    $validationResult = validateStrings($inputVals);
    if (count($validationResult) <= 0) {
        $question = [];
        $question['idSurvey'] = $_POST['idSurvey'];
        $question['description'] = $_POST['description'];
        $question['active'] = 1;
        $result = insertQuestion($question);
        $newId = mysqli_insert_id($db);
        // Estou desconetando aqui para não ter que desconectar dentro do inserForm e conseguentemente não conseguir pegar o id aqui
        mysqli_close($db);
        if ($newId > 0) {
            $result = buildResultMessage(0, $newId);
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