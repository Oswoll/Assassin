<?php
$con=mysql_connect("localhost:7777","nick","stuff");
if (mysql_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysql_connect_error();
}


$sql = "CREATE DATABASE assassin";
if (mysql_query($con,$sql)) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . mysql_error($con);
}
mysql_close($con);
?>