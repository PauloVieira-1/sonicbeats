<?php
header("Content-type: text/plain; charset=UTF-8");

$sender_name = $_POST['name'];
$sender_email = $_POST['email'];
$send_phone = $_POST['phone'];
$spec = $_POST['spec'];
$material = $_POST['material'];
$description = $_POST['description'];

mail("paulo1vieira.2004@gmail.com", "Product Request", "Name: $sender_name\nEmail: $sender_email\nPhone: $send_phone\nSpec: $spec\nMaterial: $material\nDescription: $description", "From: $sender_name <$sender_email>");
?>
