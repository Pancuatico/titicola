<?php
session_start();
require('db_connection.php');

if(isset($_COOKIE["email"]) and isset($_COOKIE["password"])){   //si vengo aquí automáticamente por detectar cookies en el php de donde vengo
    $email = $_COOKIE['email'];                                 //agarro cookie email
    $password = $_COOKIE['password'];                           //agarro cookie password
    $location = $_GET["location"];                              //agarro el nombre del php de donde vengo (sin el .php)
}else{                                                          //si vengo aquí por haber logueado manualmente desde algún formulario de ingreso
  $email = $_POST['email'];                                     //agarro email
  $password = $_POST['password'];                               //agarro password
  $location = $_POST["location"];                               //agarro el nombre del php de donde vengo (sin el .php)
}

$sql = "SELECT ua.*, up.nombre1, up.apellido1 FROM user_access ua INNER JOIN user_personal up ON ua.id=up.id_user WHERE ua.email = :email AND ua.pass = :pass";
$result = $db->prepare($sql);
$result->bindValue(":email",$email,PDO::PARAM_STR);
$result->bindValue(":pass",$password,PDO::PARAM_STR);
$result->execute();                                         //se hizo la consulta que comprueba que coincidan password y email
$cookie_days = 30;                                          //las cookies durarán 30 días

if($result->rowCount()>0){                                  //si hubo un resultado (lo habrá solo cuando coincidan el email y contraseña)
  $row = $result->fetchAll(PDO::FETCH_ASSOC);               //agarro todo
  if(isset($_POST['remember-me'])){                         //si se envió el formulario con el check de remember-me, creo las cookies
    setcookie("email", $_POST['email'], time() + (86400 * $cookie_days), "/"); // 86400 = 1 día
    setcookie("password", $_POST['password'], time() + (86400 * $cookie_days), "/");
    setcookie("name", $row[0]['nombre1'], time() + (86400 * $cookie_days), "/");
    setcookie("cdays", $cookie_days, time() + (86400 * $cookie_days), "/");  //usaré esta cookie para cerrar sesión
  }
  if($row[0]['estado_cuenta'] == "inactiva"){    //si no ha activado su cuenta mediante correo
    echo 1;
  }else{                                              //si su cuenta ya ha sido confirmada mediante correo, creo las variables de sesión
    $_SESSION['loggedin'] = true;
    $_SESSION['nombre1'] = $row[0]['nombre1'];
    $_SESSION['apellido1'] = $row[0]['apellido1'];
    $_SESSION['userID'] = $row[0]['id'];
    $_SESSION['rango'] = $row[0]['rango'];
    $_SESSION['start'] = time();
    $_SESSION['expire'] = $_SESSION['start'] + (50 * 60);
    if($location=="home" or $location=="index"){  //si vengo desde index.php o home.php con las cookies (no por logueo manual)
      header("location:../../$location.php");     //redirijo al lugar de donde vengo
    }else{                                        //si vengo desde index.php o home.php pero por logueo manual
      echo json_encode($_SESSION);                //devuelvo un JSON con toda la variable de sesión
    }
  }
}else{
  echo 0;
}



 ?>

