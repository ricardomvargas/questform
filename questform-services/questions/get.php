<?php require_once('../util/initialize.php');?>
<?php
$result = "";
if (isGetRequest()) {
  $page = 0;
  $description = "";
  $idQuestForm = "";
  
  if (isset($_GET['page'])) {
    $page = $_GET['page'];
  }
  if (isset($_GET['desc'])) {
    $description = $_GET['desc'];
  }
  if (isset($_GET['idform'])) {
    $idQuestForm = $_GET['idform'];
  }
  
  $result = findAllQuestions($page, $idQuestForm, $description);
  mysqli_close($db);
  $result = formatListResults($result);
} else {
  $result = buildResultMessage(1, '');
}
header(getHeaderText());
header(getAllowOriginText());
die(json_encode($result, JSON_NUMERIC_CHECK));
