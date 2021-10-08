<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isGetRequest()) { 
  if (isset($_GET['idquestion'])) {
    if (strlen($_GET['idquestion']) > 0) {
      $idQuestion = $_GET['idquestion'];
      $result = findQuestionById($idQuestion);
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
