<?php require_once('../util/initialize.php');?>
<?php
$result = "";
if (isGetRequest()) {
  $page = 0;
  $title = "";
  $status = "";
  $limit = "";
  $order = "";
  
  if (isset($_GET['page'])) {
    $page = $_GET['page'];
  }
  if (isset($_GET['title'])) {
    $title = $_GET['title'];
  }
  if (isset($_GET['status'])) {
    $status = $_GET['status'];
  }
  if (isset($_GET['limit'])) {
    $limit = $_GET['limit'];
  }
  if (isset($_GET['order'])) {
    $order = $_GET['order'];
  }
  
  $result = findAllForms($page, $title, $status, $limit, $order);
  mysqli_close($db);
  $result = formatListResults($result);
} else {
  $result = buildResultMessage(1, '');
}
header(getHeaderText());
header(getAllowOriginText());
die(json_encode($result, JSON_NUMERIC_CHECK));
