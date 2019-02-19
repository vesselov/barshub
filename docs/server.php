<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subj'];
$textarea = $_POST['textarea'];

$mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Письмо</h2>
            <ul>
            <li>Имя: ' . $name . '</li>
            <li>Email: ' . $email . '</li>
            <li> Тема :' . $subject .' </li>
            <li>Текст сообщения: ' . $textarea . '</li>
           
        </ul>
    </body>
</html>    
';
$headers = "From: Администратор сайта <admin@barshub.ru>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('vesselov.zhenya@gmail.com', 'Письмо', $mail_message, $headers);
$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>