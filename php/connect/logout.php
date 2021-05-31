<?php
//Destruyo las cookies
if(isset($_COOKIE["cdays"])){                       //si había cookies, las destruyo
  $expTime = 86400*$_COOKIE["cdays"];
  setcookie("email", '', time()-$expTime,"/");
  setcookie("password", '', time()-$expTime,"/");
  setcookie("name", '', time()-$expTime,"/");
  setcookie("cdays", '', time()-$expTime,"/");
}

session_start();

// descoloco todas la variables de la sesión
session_unset();

// Destruyo la sesión
session_destroy();

//Y me voy al inicio
header('Location: ../../index.php');

?>
