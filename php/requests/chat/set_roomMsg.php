<?php
session_start();
include "../../connect/db_connection.php";
$msg = $_POST["msg"];
$sql = "INSERT INTO chat_room (id_user,texto) VALUES (:iduser, :texto)";
$pone = $db->prepare($sql);
$pone->bindValue(":iduser",$_SESSION["userID"],PDO::PARAM_INT);
$pone->bindValue(":texto",$texto,PDO::PARAM_INT);
$pone->execute();

?>