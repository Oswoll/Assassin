<?php 
$server = "";
$username = "";
$password = "";
$database = "";

$con = mysql_connect($server, $username, $password);
mysql_select_db($database, $con);
	   
$name = $_POST["username"];
$pw = $_POST["password"];

$sql = "SELECT password FROM users WHERE username == '%s'";
$sp = sprintf($sql, $name);
$realpw = mysql_query($sp);
if ($pw == $realpw){
   echo "yes";
}
else{
   echo "no";
}

mysql_close($con);
?>		