<?php
try {
	$dbname = "forusers";
	$dbuser = 'root';
	$dbpass = '';
	$params = 'mysql:host=localhost;dbname='.$dbname.';charset=utf8';
	$db = new PDO($params, $dbuser, $dbpass);
} catch (PDOException $e) {
	die('Error: ' . $e->getMessage());
}
?>