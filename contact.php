<?php

$to = "quilonmobiles.institute@gmail.com";
$subject = "Messages from Quilonmobiles.com";

//data from form
$name = $_POST['name1'];
$email = $_POST['email1'];
$msgs = $_POST['msg1'];

$txt = 'Form details:'.'Name: '.$name.', Email: '.$email.', Message: '.$msgs;


$headers = "<noreply@quilonmobiles.com>";

mail($to,$subject,$txt,$headers);

header('Location: /thankyou.html');

?>