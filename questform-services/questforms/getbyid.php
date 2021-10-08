<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isGetRequest()) { 
  if (isset($_GET['idsurvey'])) {
    if (strlen($_GET['idsurvey']) > 0) {
      $idSurvey = $_GET['idsurvey'];
      $result = findFormById($idSurvey);
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
