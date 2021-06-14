<?php
//Aseguramos que solo usuarios logueados accedan a esta sección
session_start();
if(!$_SESSION['loggedin']){
	header("Location: ../views/login.php");
	exit();
}
?>