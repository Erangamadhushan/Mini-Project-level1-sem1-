<?php
    include_once 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
                <div class="mt-3">
                    <label for="name">Name :</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                </div>
                <div class="mt-3">
                    <label for="email">Email :</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div class="mt-3">
                    <label for="reason">Reason for Complaint :</label>
                    <input type="text" name="reason" id="reason" required/>
                </div>
                <div class="mt-3">
                    <label for="details">Details :</label>
                    <textarea name="details" id="details">

                    </textarea>
                </div>
                <div class="my-3">
                    <input type="submit" value="Submit" class="btn btn-primary"/>
                </div>
            </form>
        </div>
        <?php
            if($_SERVER['REQUEST_METHOD'] == 'POST') {
                function testinput($data) {
                    $data = trim($data);
                    $data = htmlspecialchars($data);
                    $data = stripslashes($data);
                    return $data;
                }

                $Name = testinput($_REQUEST['name']);
                $email = testinput($_REQUEST['email']);
                $content = testinput($_REQUEST['reason']);

                if(!preg_match("/^[a-zA-Z-' ']*$/",$userName)) {
                    echo "Invalid userName";
                    header("Location:index.html");
                }
                if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
                    echo "<script>window.alert('Something went wrong !');</script>";
                    header("Location:index.html");
                }

                $sql = "INSERT INTO customer(name,email,reason)
                VALUES ('$userName','$email','$content')";
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
    </body>
</html>
<!--End the complaint page here-->
