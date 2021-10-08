<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isGetRequest()) { 
  if (isset($_GET['idanswer'])) {
      if (strlen($_GET['idanswer']) > 0) {
        $idAnswer = $_GET['idanswer'];
        $result = findAnswerById($idAnswer);
        mysqli_close($db);
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
