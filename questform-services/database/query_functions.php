<?php
    /*************************************
     * NOTES
    *************************************
    * 1 - The $db variabel it's is needed in order to perform the select statment.
    * But the variable is in another scope, to bring it to this scope just run: global $db;
    * 2 - It's not obligatory use simple quotes in the db parameter. But is a good security pratice.
    * Helps against sql injection.
    * 3 - Good pratice to write 'Limit 1' at the end of an update query to make sure
    * that only one line was updated.
    */
    /*************************************
     * FORMS
    *************************************/
    // $page: Not obrigatory but has a default value of 0 (zero) if not defined.
    // $title: Not obrigatory, filter list by title value.
    // $status: Not obrigatory, filter list by id_status_forms value.
    function findAllForms($page, $title, $status, $limit, $order) {
        global $db;
        $where = 'WHERE f.active = 1 ';
        $orderBy = ' ';
        if (validateString($limit)) {
            $limit = 'LIMIT 0,' . $limit . ' ; ';
        } else {
            $limit = 'LIMIT 0,10 ; ';
        }
        if (validateString($title)) {
            $where .= " AND title like '%" . $title . "%' ";
        }
        if (validateString($status)) {
            $where .= " AND idSurveyStatus = '" . $status . "' ";
        } if ($page > 0) {
            $newLimit = ($page * 10);
            $limit = 'LIMIT ' . $newLimit . ',10; ';
        } if (validateString($order)) {
            $orderBy = 'ORDER BY f.idSurvey ' . $order . ' ';
        }
        $query = 'SELECT f.*, ';
        $query .= '(SELECT COUNT(idQuestion) FROM question as q WHERE q.idSurvey = f.idSurvey) as totalQuestions, ';
        $query .= '(SELECT COUNT(idSurvey) FROM survey as qf WHERE qf.active = 1) as results ';
        $query .= 'FROM survey as f ';
        $query .= $where;
        $query .= $orderBy;
        $query .= $limit;
        $response = mysqli_query($db, $query);
        return mysqli_fetch_all($response, MYSQLI_ASSOC);
    }
    function findFormById($id) {
        global $db;
        $query = "SELECT * FROM survey ";
        $query .= "WHERE idSurvey='" . $id . "' ";
        $query .= "AND active='1'; ";
        $response = mysqli_query($db, $query);
        return mysqli_fetch_object($response);
    }
    function updateSurvey($survey) {
        global $db;
        $sql = "UPDATE survey SET ";
        $sql .= "title='" . $survey['title'] . "', ";
        $sql .= "idSurveyStatus='" . $survey['idSurveyStatus'] . "', ";
        $sql .= "description='" . $survey['description'] . "', ";
        $sql .= "publicTitle='" . $survey['publicTitle'] . "', ";
        $sql .= "publicDescription='" . $survey['publicDescription'] . "', ";
        $sql .= "conclusionDescription='" . $survey['conclusionDescription'] . "' ";
        $sql .= "WHERE idSurvey='" . $survey['idSurvey'] . "' ";
        $sql .= "LIMIT 1";
        $result = mysqli_query($db, $sql);
        if ($result) {
            //dbDisconnect($db);
        } else {
            echo mysqli_error($db);
            dbDisconnect($db);
            exit;
        }
    }  
    function insertSurvey($survey) {
        global $db;
        $sql = "INSERT INTO survey ";
        $sql .= "(idSurveyStatus, title, description, publicTitle, publicDescription, conclusionDescription, createDate, active) ";
        $sql .= "VALUES (";
        $sql .= "'" . $survey['idSurveyStatus'] . "',";
        $sql .= "'" . $survey['title'] . "',";
        $sql .= "'" . $survey['description'] . "',";
        $sql .= "'" . $survey['publicTitle'] . "',";
        $sql .= "'" . $survey['publicDescription'] . "',";
        $sql .= "'" . $survey['conclusionDescription'] . "',";
        $sql .= "now(),";
        $sql .= "'" . $survey['active'] . "'";
        $sql .= ")";
        $result = mysqli_query($db, $sql);
        if ($result) {
            // se eu desconecatar aqui, não consigo pegar o id depois
            //dbDisconnect($db);
        } else {
            // Caso ocorra um erro o mesmo é exibido.
            echo mysqli_error($db);
            dbDisconnect($db);
            // 'exit' evita que qualquer código PHP seja executada depois desse ponto
            exit;
        }
    }
    function desactiveSurvey($idSurvey) {
        global $db;
        $sql = "UPDATE survey SET ";
        $sql .= "active='0' ";
        $sql .= "WHERE idSurvey='" . $idSurvey . "' ";
        $sql .= "LIMIT 1; ";
        $result = mysqli_query($db, $sql);
        if ($result) {
            //dbDisconnect($db);
        } else {
            echo mysqli_error($db);
            dbDisconnect($db);
            exit;
        }
    }
    /*************************************
     * QUESTIONS
    *************************************/
    // $page: Not obrigatory but has a default value of 0 (zero) if not defined.
    // $idQuestForm: Not obrigatory, filter list by idSurvey value.
    // $description: Not obrigatory, filter list by description value.
    function findAllQuestions($page, $idQuestForm, $description) {
        global $db;
        $where = 'WHERE q.active = 1 ';
        $limit = 'LIMIT 0,10 ; ';
        if (validateString($idQuestForm)) {
            $where .= " AND q.idSurvey = '" . $idQuestForm . "' ";
        }
        if (validateString($description)) {
            $where .= " AND q.description like '%" . $description . "%' ";
        }
        if ($page > 0) {
            $newLimit = ($page * 10);
            $limit = 'LIMIT ' . $newLimit . ',10; ';
        } 
        $query = "SELECT q.*, ";
        $query .= "(SELECT COUNT(idQuestion) FROM question as qt WHERE qt.active = 1) as results ";
        $query .= "FROM question as q ";
        $query .= $where;
        $query .= $limit;
        $response = mysqli_query($db, $query);
        return mysqli_fetch_all($response, MYSQLI_ASSOC);
    }
    function findQuestionById($id) {
        global $db;
        $query = "SELECT * FROM question ";
        $query .= "WHERE idQuestion='" . $id . "' ";
        $query .= "AND active='1'; ";
        $response = mysqli_query($db, $query);
        return mysqli_fetch_object($response);
    }
    function insertQuestion($question) {
        global $db;
        $query = "INSERT INTO question ";
        $query .= "(idSurvey, description, active) ";
        $query .= "VALUES (";
        $query .= "'" . $question['idSurvey'] . "', ";
        $query .= "'" . $question['description'] . "', ";
        $query .= "'" . $question['active'] . "'";
        $query .= ");";
        $result = mysqli_query($db, $query);
        return checkResult($result);
    }
    function updateQuestion($question) {
        global $db;
        $query = "UPDATE question SET ";
        $query .= "description='" . $question['description'] . "' ";
        $query .= "WHERE idQuestion='" . $question['idQuestion'] . "' ";
        $query .= "LIMIT 1; ";
        $result = mysqli_query($db, $query);
        return checkResult($result);
    }
    function desactiveQuestion($idQuestion) {
        global $db;
        $sql = "UPDATE question SET ";
        $sql .= "active='0' ";
        $sql .= "WHERE idQuestion='" . $idQuestion . "' ";
        $sql .= "LIMIT 1; ";
        $result = mysqli_query($db, $sql);
        if ($result) {
            //dbDisconnect($db);
        } else {
            echo mysqli_error($db);
            dbDisconnect($db);
            exit;
        }
    }
    /*************************************
     * ANSWER
    *************************************/
    // $page: Not obrigatory but has a default value of 0 (zero) if not defined.
    // $idQuestion: Not obrigatory, filter list by idQuestion value.
    function findAnswer($page, $idQuestion) {
        global $db;
        $limit = 'LIMIT 0,10 ; ';
        if ($page > 0) {
            $newLimit = ($page * 10);
            $limit = 'LIMIT ' . $newLimit . ',10; ';
        }
        $query = "SELECT a.*, ";
        $query .= "(SELECT COUNT(idAnswer) FROM answer as an WHERE an.active = 1) as results ";
        $query .= "FROM answer a ";
        $query .= "WHERE a.idQuestion='" . $idQuestion . "' ";
        $query .= $limit;
        $response = mysqli_query($db, $query);
        return mysqli_fetch_all($response, MYSQLI_ASSOC);
    }
    function findAnswerById($id) {
        global $db;
        $query = "SELECT * FROM answer ";
        $query .= "WHERE idAnswer='" . $id . "' ";
        $query .= "AND active='1'; ";
        $response = mysqli_query($db, $query);
        return mysqli_fetch_object($response);
    }
    function insertAnswer($answer) {
        global $db;
        $query = "INSERT INTO answer ";
        $query .= "(idQuestion, idTypeAnswer, maxChar, minChar, singleOptionTemplate, active) ";
        $query .= "VALUES (";
        $query .= "'" . $answer['idQuestion'] . "', ";
        $query .= "'" . $answer['idTypeAnswer'] . "', ";
        $query .= "'" . $answer['maxChar'] . "', ";
        $query .= "'" . $answer['minChar'] . "', ";
        $query .= "'" . $answer['singleOptionTemplate'] . "', ";
        $query .= "'1'";
        $query .= ")";
        $result = mysqli_query($db, $query);
        return checkResult($result);
    }
    function updateAnswer($answer) {
        global $db;
        $query = "UPDATE answer SET ";
        $query .= "idTypeAnswer='" . $answer['idTypeAnswer'] . "', ";
        $query .= "maxChar='" . $answer['maxChar'] . "', ";
        $query .= "minChar='" . $answer['minChar'] . "', ";
        $query .= "singleOptionTemplate='" . $answer['singleOptionTemplate'] . "' ";
        $query .= "WHERE idAnswer='" . $answer['idAnswer'] . "' ";
        $query .= "LIMIT 1";
        $result = mysqli_query($db, $query);
        return checkResult($result);
    }
    /*************************************
     * ANSWER OPTIONS
    *************************************/
    // $page: Not obrigatory but has a default value of 0 (zero) if not defined.
    // $idAnswer: Not obrigatory, filter list by idAnswer value.
    function findOptions($page, $idAnswer) {
        global $db;
        $limit = 'LIMIT 0,10 ; ';
        if ($page > 0) {
            $newLimit = ($page * 10);
            $limit = 'LIMIT ' . $newLimit . ',10; ';
        }
        $query = "SELECT o.*, ";
        $query .= "(SELECT COUNT(idOptionAnswer) FROM optionAnswer) as results ";
        $query .= "FROM optionAnswer as o ";
        $query .= "WHERE o.idAnswer='" . $idAnswer . "' ";
        $query .= "ORDER BY o.idOptionAnswer ASC ";
        $query .= $limit;
        $response = mysqli_query($db, $query);
        return mysqli_fetch_all($response, MYSQLI_ASSOC);
    }
    function insertMultipleOptions($idAnswer, $optionsAnswers) {
        global $db;

        $queryPattern = "INSERT INTO optionAnswer ";
        $queryPattern .= "(idAnswer, description) ";
        $queryPattern .= "VALUES ('{0}', '{1}'); ";
        $query = "";

        foreach($optionsAnswers as $option) {
            $tempStr = "";
            for ($i = 0; $i < 2; $i++) {
                switch ($i) {
                    case 0:
                        $tempStr = str_replace('{0}', $idAnswer, $queryPattern);
                    break;
                    case 1:
                        $tempStr = str_replace('{1}', $option->description, $tempStr);
                    break;
                }
            }
            $query .= $tempStr;
        }

        $result = mysqli_multi_query($db, $query);
        return checkResult($result);
    }
    function deleteOpitionByAnswer($idAnswer) {
        global $db;
        $query = "DELETE FROM optionAnswer ";
        $query .= "WHERE idAnswer='" . $idAnswer . "'; ";
        $result = mysqli_multi_query($db, $query);
        return checkResult($result);
    }
    /*************************************
     * FUNÇÕES AUXILIARES
    *************************************/
    function checkResult($result) {
        if ($result) {
            return true;
        } else {
            echo mysqli_error($db);
            dbDisconnect($db);
            exit;
        }
    }
?>