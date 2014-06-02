<?php 
$server = "";
$username = "";
$password = "";
$database = "";

$con = mysql_connect($server, $username, $password);
mysql_select_db($database, $con);
   
$sql = "CREATE TABLE IF NOT EXISTS 'users' (
       'username' text,
       'password' text,
       PRIMARY KEY ('username)
       )"
mysql_query($sql);
	   
$name = $_POST["username"];
$pw = $_POST["password"];

$sql = "INSERT INTO users (username, password)
       VALUES ($name, $pw)";
mysql_query($sql);

mysql_close($con);
?>		