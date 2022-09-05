<?php

    $id = $_REQUEST["q"];

    $servername = "sql.endora.cz:3312";
    $username = "inqooltest";
    $password = "InqoolTest123";
    $dbname = "inqool";

    $connection = new mysqli($servername, $username, $password, $dbname);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
    
    $sql = "SELECT description FROM skills WHERE id='$id'";
    $result = mysqli_query($connection, $sql);

    if ($result);
    else die("Connection failed: " . $connection->connect_error);

    $connection->close();
    foreach ($result as $r) {
        echo $r["description"];
    }

?>

