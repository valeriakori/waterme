<?php

$plants;
$url = "localhost:8080";
$user = "root";
$pw = "";
$dbName = "test";

$connect = new mysqli($url, $user, $pw, $dbName);

$sql = "SELECT * FROM pflanze";

$result = mysqli_query($connect, $sql);

$json_array = array();
while ($row = mysqli_fetch_assoc($result)) 
{
    $json_array[] = $row;
}

//JSON string wird nicht generiert
echo json_encode($json_array);  

// Das Folgende wird korrekt im Browser angezeigt
echo "<pre>";
print_r($json_array);
echo "</pre>";

?>
