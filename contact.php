
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <meta name="description" content="html,css,javascript,php,bootstrap,jquery,anjularJS"/>
        <title>Contact Us</title>
        <link rel="icon" type="text/x-icon" href="image_video/main_logo1.png"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

        <style>
            body{
                display:flex;
                justify-content:center;
                align-items:center;
                min-height:100vh;
                background-image:url('image_video/nine-arch.jpg');
                object-fit:cover;
            }
            .main{
                padding:50px 100px;
                background-color:rgba(0,0,0,0.6);
                border-radius:10px;
            }
            .main::before{
                content:'';
                inset:3px;
                background-color:#fff;
                width:100%;
                height:100%;
            }
            form {
                display:flex;
                flex-direction:column;
                gap:30px;
            }
            form textarea {
                width:100%;
                min-height:30vh;
                resize:none;
            }
        </style>

</head>
<body>
    <div class="main">
        <div>
            <h2>Send Email :</h2>
            <div>
                <h5>Send To :
                     <?php
                        
                        if($_SERVER['REQUEST_METHOD'] == "POST") {
                            $email = $_REQUEST['email'];
                            echo $email;
                        }
                        
                    ?>
                </h5>
                
            </div>
            <div>
                <form  onsubmit="submitForm()" name="comment" >
                    <textarea id="comment" placeholder="Enter your text here..." name="commentBox"></textarea>
                    <input type="submit" class="btn btn-warning" value="Send"/>
                </form>
                
            </div>
            
        </div>
    </div>




</body>
</html>
<!--End the contact us page here-->
