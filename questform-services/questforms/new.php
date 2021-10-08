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
        $quest_form = [];
        $quest_form['title'] = $_POST['title'];
        $quest_form['idSurveyStatus'] = 1;
        $quest_form['description'] = $_POST['description'];
        $quest_form['publicTitle'] = $_POST['publicTitle'];
        $quest_form['publicDescription'] = $_POST['publicDescription'];
        $quest_form['conclusionDescription'] = $_POST['conclusionDescription'];
        $quest_form['active'] = 1;
        $result = insertForm($quest_form);
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