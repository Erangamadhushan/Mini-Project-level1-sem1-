 <?php
    if($_SERVER['REQUEST_METHOD'] == "POST") {
    function testinput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $email = testinput($_REQUEST['email']);
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        $message = "Input Field not valid Plese check first ";
    }
    else {
        $message = "Input Information is recorded !";
    }
    
 
}


?>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"/>
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
            }
            body{
                text-align:center;
                font-size:60px;

            }
            button {
                font-size:36px;
                padding:10px 25px;
            }
        </style>
    <body data-bs-theme="dark">
        <div class="text-white">
            <?php
                echo $message."<br/>";
            ?>
            
            <button type="button" onclick="history.go(-1)" class="btn btn-outline-danger py-3 px-5">Back</button>
        </div>
    </body>
</html>
<!--End the backend page here-->