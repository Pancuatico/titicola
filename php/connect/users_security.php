<?php
//Aseguramos que solo usuarios logueados accedan a esta secci�n
session_start();
if(!$_SESSION['loggedin']){
	header("Location: ../views/login.php");
	exit();
}
?>