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

            // echo $_GET["cmd"];
            // $output = exec($command);

            echo "The button was pressed!";
        }
    ?>

    <form method="post">
        <label for="cmd_input">Command: </label><input type="text" id="cmd_input">
        <input type="submit" name="cmd_button" class="button" value="Go!" />
    </form>
</head>
  
</html>

