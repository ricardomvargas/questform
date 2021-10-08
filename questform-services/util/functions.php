<?php
function getHeaderText() {
  return "Content-Type: application/json";
}
function getAllowOriginText() {
  return "Access-Control-Allow-Origin: http://localhost:3000";
}
function buildResultMessage($number, $extra) {
  $messages = array('success', 'invalid request', 'invalid parameter', 'obrigatory field null', 'general error');
  $response = "[";
  $response .= "{ 'result': " . $number . " }, ";
  if (strlen($extra) > 0) {
    $response .= "{ 'message': '" . $messages[$number] .  "' }, ";
    $response .= "{ 'extra': " . $extra . " } ";
  } else {
    $response .= "{ 'message': '" . $messages[$number] .  "' } ";
  }
  $response .= "]";
  return $response;
}
// Function to format data list and the total values
function formatListResults($response) {
  try {
    if ($response == []) {
      $totalItens = 0;  
    } else {
      $totalItens = intval($response['0']['results']);
    }
    $newResponse = (object)['list' => $response, 'total' => $totalItens];
    return $newResponse;
  } catch (exception $e) {
    return $response;
  }
}
// Function that find the server path.
function urlFor($script_path) {
  // add the leading '/' if not present
  if($script_path[0] != '/') {
    $script_path = "/" . $script_path;
  }
  return $script_path;
}
// Removes special char from url query strings.
function url_Encode($string="") {
  // #TODO: Reseach about the function bellow and write a better method name for it.
  return urlencode($string);
}
// Format special character form HTML.
function html_SpecialChar($string="") {
  // #TODO: Reseach about the function bellow and write a better method name for it.
  return htmlspecialchars($string);
}
function valueOrEmpty($string) {
  if (isset($string)) {
    return $string;
  } 
  return '';
}
/** Method for redirect user to a 404 error page. After re-write the page protocol, is just
 * redirect the user to a 404 page. Although the code bellow just perform a exit(); */
function error404(){
  header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");
  exit();
}
function error500() {
  header($_SERVER["SERVER_PROTOCOL"] . " 500 Internal Server Error");
  exit();
}
/* It's a good pratice perform a 'exit' after rediret the user to ensure that no other PHP code
  will run. But why 'exit' without '()'? */
function redirectTo($location) {
  // #TODO: Reseach about the function bellow and make it work in my project.
  header("Location: " . $location);
  exit;
}
function isPostRequest() {
  return $_SERVER['REQUEST_METHOD'] == 'POST';
}
function isGetRequest() {
  return $_SERVER['REQUEST_METHOD'] == 'GET';
}
// Check if a string has value
function validateString($data) {
  $validation = true;
  if (isset($data)) {
    if ($data == '') {
      $validation = false;
    }
  } else {
    $validation = false;
  }
  return $validation;
}
// Check if a number is less or iqual to 0 (zero).
function validateNumber($data) {
  $validation = true;
  if (isset($data)) {
    if ($data <= 0) {
      $validation = false;
    }
  } else {
    $validation = false;
  }
  return $validation;
}
/* Check if there's a empty string in an assoc array. Return a list with
* the name of parameters that doesn't have value. */
function validateStrings($items) {
  $result = [];
  foreach ($items as $key => $value) {
    if (!validateString($value)) {
      array_push($result, $key);
    }
  }
  return $result;
}
/* Check if the variables in the assoc array are set. Return a list with
* the name of parameters that doesn't have value. */
function verifyIsAllSet($items) {
  $result = [];
  foreach ($items as $key => $value) {
    if (!isset($value)) {
      array_push($result, $key);
    }
  }
  return $result;
}
?>
