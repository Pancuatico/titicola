<?php
include "../../connect/db_connection.php";

$trae = $db->prepare("SELECT tr.*, us.nombres, us.apellido1 FROM tracking tr INNER JOIN users us ON tr.id_user=us.id ORDER BY tr.momento DESC");
$trae->execute();

echo json_encode($trae->fetchAll(PDO::FETCH_ASSOC));

?>