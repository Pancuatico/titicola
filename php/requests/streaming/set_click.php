<?php
include "../../connect/db_connection.php";

$iduser = 1;

$pone = $db->prepare("INSERT INTO tracking (id_user,evento) VALUES (:iduser,:evento)");
$pone->bindValue(":iduser",$iduser,PDO::PARAM_INT);
$pone->bindValue(":evento",$_POST["evento"],PDO::PARAM_STR);
if($pone->execute()){
  echo json_encode($pone->fetchAll(PDO::FETCH_ASSOC));
}else{
  echo "No se ejecutó la sentencia";
}


?>