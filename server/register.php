<?php 
$db_server = "db4free.net";
$db_user = "jakeoswoll";
$db_pass = "assassin";
$database = "assassin";

$con = mysqli_connect($db_server, $db_user, $db_pass);
   
mysqli_select_db($con, $database);

$sql = "CREATE TABLE IF NOT EXISTS 'users' (
       'name' text,
       'uuid' int,
       PRIMARY KEY (name)
       )";

mysqli_query($con, $sql);

   
//$name = $_POST["username"];
//$pw = $_POST["password"];
//$realname = $_POST["name"];

$sql = "INSERT INTO users (name, uuid)
       VALUES ('nick', '111')";
mysqli_query($con, $sql);

mysqli_close($con);
?>		