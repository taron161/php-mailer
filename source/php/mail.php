<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$text = $_POST['text'];
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mesterager@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'jvrj hvbp hogh fshe'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mesterager@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('taron39@yandex.ru');

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Message sent';
}
?>
