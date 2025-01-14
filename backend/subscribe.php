<?php
    include_once 'config.php';
?>
<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        function testinput($data) {
            $data = trim($data);
            $data = htmlspecialchars($data);
            $data = stripslashes($data);
            return $data;
        }

        $userName = testinput($_REQUEST['userName']);
        $email = testinput($_REQUEST['email']);

        if(!preg_match("/^[a-zA-Z-' ']*$/",$userName)) {
            echo "Invalid userName";
            header("Location:index.html");
        }
        if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
            echo "<script>window.alert('Something went wrong !');</script>";
            header("Location:index.html");
        }

        $sql = "INSERT INTO customer(userName,email)
        VALUES ('$userName','$email')";
        if(mysqli_query($connection,$sql)) {
            echo "<script>window.alert('Data inserted successfully');</script>";
            header("Location:index.html");
        }
        else {
            echo "<script>window.alert('Error in inserting data');</script>";
            header("Location:index.html");

        }

        $connection->close();
    }
?>