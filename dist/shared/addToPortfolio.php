<?php

    include 'shared/databaseData.php';

    $header = $_POST["header"];
    $description = $_POST["description"];
    $date = $_POST["date"];

    $servername = "sql.endora.cz:3312";
    $username = "inqooltest";
    $password = "InqoolTest123";
    $dbname = "inqool";

    $connection = new mysqli($servername, $username, $password, $dbname);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $sql = "INSERT INTO portfolio (header, description, date) VALUES ('$header', '$description', '$date')";

    if (mysqli_query($connection, $sql));
    else die("Connection failed: " . $connection->connect_error);

    $connection->close();
    header("Location: ../index.php");

?>