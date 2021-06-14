<?php
//Aseguramos que solo usuarios administradores accedan a esta sección
session_start();
if($_SESSION["rango"] != "admin"){
	header("Location: ../views/login.php");
	exit();
}
?>