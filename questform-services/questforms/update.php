<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    $inputVals = array(
      'title' => $_POST['title'],
      'description' => $_POST['description'],
      'publicTitle' => $_POST['publicTitle'],
      'publicDescription' => $_POST['publicDescription'],
      'conclusionDescription' => $_POST['conclusionDescription']);
    $validationResult = validateStrings($inputVals);
    if (count($validationResult) <= 0) {
        $idSurvey = $_POST['idSurvey'];
        // #TODO: FAZER UMA VALIDAÇÃO VIA SELECT PARA VER SE O ID EXISTE MESMO
        if ($idSurvey > 0) {
            // Editando um formulário
            $quest_form['idSurvey'] = $idSurvey;
            $quest_form['title'] = $_POST['title'];
            $quest_form['idSurvyStatus'] = $_POST['idSurveyStatus'];
            $quest_form['description'] = $_POST['description'];
            $quest_form['publicTitle'] = $_POST['publicTitle'];
            $quest_form['publicDescription'] = $_POST['publicDescription'];
            $quest_form['conclusionDescription'] = $_POST['conclusionDescription'];
            // #TODO #CORRECAO: Mesmo passando um id que não existe e nada sendo alterado, ainda sim é retornado true
            $result = updateForm($quest_form);
            mysqli_close($db);
            if (!$result) {
                $result = buildResultMessage(0, '');
            } else {
                $result = buildResultMessage(4, '');
            }       
        } else {
            $result = buildResultMessage(2, '');
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