<?php 
    define('DB_SERVER', 'localhost');
    define('DB_USER', 'quest_form_user');
    define('DB_PASS', 'quest_form_pass');
    define('DB_NAME', 'questforms');

    function dbConnect() {
        // Connect with the database.
        $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
        // Check for errors during the connection.
        confirmDbConnection();
        // In case of no error, return the connection.
        return $connection;
    }
    function dbDisconnect($connection) {
        mysqli_close($connection);
    }
    // Check's for errors during the connection attempt.
    function confirmDbConnection() {
        if (mysqli_connect_errno()){
            $msg = "Database connection failed: ";
            $msg .= mysqli_connection_error();
            $msg .= " (" . mysqli_connection_errno() . ")";
            exit($msg);
        }
    }
    /** Good pratice: verify if a error hapened during a select query.
     * Para isso e verificado o result set. */
    function confirmResultSet($result_set) {
        if (!$result_set) {
            exit("Database query failed.");
        }
    }
?>