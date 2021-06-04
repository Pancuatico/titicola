<?php
include "../../connect/db_connection.php";

$trae = $db->prepare("SELECT ch.*, us.nombres, us.apellido1 FROM chat_room ch INNER JOIN users us ON ch.id_user=us.id ORDER BY ch.momento ASC");
$trae->execute();
echo json_encode($trae->fetchAll(PDO::FETCH_ASSOC));

?>