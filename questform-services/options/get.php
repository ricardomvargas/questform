<?php require_once('../util/initialize.php');?>
<?php
$result = "";
if (isGetRequest()) {
  $page = 0;
  $idAnswer = "";
  
  if (isset($_GET['page'])) {
    $page = $_GET['page'];
  }
  if (isset($_GET['idanswer'])) {
    if (strlen($_GET['idanswer']) > 0) {
      $idAnswer = $_GET['idanswer'];
      $result = findOptions($page, $idAnswer);
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
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
die(json_encode($result, JSON_NUMERIC_CHECK));
