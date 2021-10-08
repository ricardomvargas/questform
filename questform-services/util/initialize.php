<?php
    ob_start(); //output buffering is turned on.
    // Build the base URL for redirect:
    require_once('functions.php');
    require_once('../database/db.php');
    require_once('../database/query_functions.php');
    // Page names
    $pageForms = 'Forms';
    $pageUsers = 'Users';
    $pageMyForm = 'My Form';
    $pageQuestions = 'Form questions';
    $pageQuestion = 'Question';
    $pageQuestionOptions = 'Question and options';
    $requiredFieldSpan = '<span class=\'text-small text-danger\'>*This field is required.</span>';
    $idForm = 0;
    $idQuestion = 0;
    $db = dbConnect();
?>