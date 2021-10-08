<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    if (isset($_POST['idQuestion'])) {
        $idQuestion = $_POST['idQuestion'];
        if ($idQuestion > 0) {
            $result = desactiveQuestion($idQuestion);
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

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
die(json_encode($result, JSON_NUMERIC_CHECK));