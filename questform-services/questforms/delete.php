<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    if (isset($_POST['idSurvey'])) {
        $idSurvey = $_POST['idSurvey'];
        if ($idSurvey > 0) {
            $result = desactiveForm($idSurvey);
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
        $result = buildResultMessage(2, '');
    }
} else {
    $result = buildResultMessage(1, '');
}

header(getHeaderText());
header(getAllowOriginText());
die(json_encode($result, JSON_NUMERIC_CHECK));