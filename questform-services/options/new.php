<?php require_once('../util/initialize.php');?>
<?php 
$result = "";
if (isPostRequest()) {
    // Read data from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if (property_exists($data, 'idAnswer') && property_exists($data, 'options')) {
        $optionsToSave = array();
        foreach ($data->options as $option) {
            array_push($optionsToSave, $option);
        }
        $result = insertMultipleOptions($data->idAnswer, $optionsToSave);
        $newId = mysqli_insert_id($db);
        // Estou desconetando aqui para não ter que desconectar dentro do inserForm e conseguentemente não conseguir pegar o id aqui
        mysqli_close($db);
        if ($newId > 0) {
            $result = buildResultMessage(0, $newId);
        } else {
            $result = buildResultMessage(4, '');
        }    
    } else {
        $result = buildResultMessage(3, '');
    }
} else {
    $result = buildResultMessage(1, '');
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
die(json_encode($result, JSON_NUMERIC_CHECK));