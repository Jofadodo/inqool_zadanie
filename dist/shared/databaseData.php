<?php

    function databaseConnect() {
        $servername = "sql.endora.cz:3312";
        $username = "inqooltest";
        $password = "InqoolTest123";
        $dbname = "inqool";

        $connection = new mysqli($servername, $username, $password, $dbname);

        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        }
        return $connection;
    }

    function getResults($sql, $connection) {
        $results = mysqli_query($connection, $sql);

        if ($results);
        else die("Connection failed: " . $connection->connect_error);

        return $results;
    }

    function databaseDisconnect($connection) {
        $connection->close();
    }

    function getDataFromDatabase($sql) {
        $servername = "sql.endora.cz:3312";
        $username = "inqooltest";
        $password = "InqoolTest123";
        $dbname = "inqool";

        $connection = new mysqli($servername, $username, $password, $dbname);

        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        }
        
        $results = mysqli_query($connection, $sql);

        if ($results);
        else die("Connection failed: " . $connection->connect_error);

        $connection->close();
        return $results;
    }
    
?>