<?php
//Aseguramos que solo usuarios administradores accedan a esta secci�n
session_start();
if($_SESSION["rango"] != "admin"){
	header("Location: ../views/login.php");
	exit();
}
?>