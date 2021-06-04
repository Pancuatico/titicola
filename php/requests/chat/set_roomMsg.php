<?php
session_start();
include "../../connect/db_connection.php";
$texto = $_POST["texto"];
$iduser = 1;
$pone = $db->prepare("INSERT INTO chat_room (id_user,texto) VALUES (:iduser, :texto)");
$pone->bindValue(":iduser",$iduser,PDO::PARAM_INT);
$pone->bindValue(":texto",$texto,PDO::PARAM_STR);
if($pone->execute()) echo 1;
else echo "No se pudo ejecutar la sentencia sql";

?>