<?php
    $servername = "localhost:3307";
    $username = "root";
    $password = "";
    $dbName = "miniproject";

    $connection = new mysqli($servername,$username,$password,$dbName);

    if($connection->connect_error){
        die("Connection failed".$connection->connect_error);
    }
    else {
        echo "<script>window.alert('Connected Successfully');</script>";
    }
?>
