<?php 
$db_server = "db4free.net";
$db_user = "jakeoswoll";
$db_pass = "assassin";
$database = "assassin";

$con = mysqli_connect($db_server, $db_user, $db_pass);
   
//$sql = "CREATE TABLE IF NOT EXISTS 'users' (
//       'username' text,
//       'password' text,
//       'name' text,
//       PRIMARY KEY (username)
//       )";

//mysqli_query($sql);

   
//$name = $_POST["username"];
//$pw = $_POST["password"];
//$realname = $_POST["name"];

//$sql = "INSERT INTO users (username, password, name)
//       VALUES ($name, $pw, $realname)";
//mysql_query($sql);

mysqli_close($con);
?>		