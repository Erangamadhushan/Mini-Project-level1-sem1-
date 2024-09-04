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
    </body>
</html>
<!--End the complaint page here-->
