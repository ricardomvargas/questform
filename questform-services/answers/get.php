<?php require_once('../util/initialize.php');?>
<?php
$result = "";
if (isGetRequest()) {
  $page = 0;
  $idQuestion = "";
  
  if (isset($_GET['page'])) {
    $page = $_GET['page'];
  }
  if (isset($_GET['idquestion'])) {
    if (strlen($_GET['idquestion']) > 0) {
      $idQuestion = $_GET['idquestion'];
      $result = findAnswer($page, $idQuestion);
      mysqli_close($db);
      $result = formatListResults($result);
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
