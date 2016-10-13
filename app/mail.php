<?php
if(isset($_POST['phone'])) {

    $message = ''; //message body

//    $message .= $fullname . $phone;

    if(isset($_POST['budget']) && $_POST['budget']) {
        $message .= "Бюджет:\r\n" . $_POST['budget'] . "\r\n\r\n";
    }

    if(isset($_POST['city']) && $_POST['city']) {
        $message .= "Город:\r\n" . $_POST['city'] . "\r\n\r\n";
    }

    if(isset($_POST[' niche']) && $_POST['niche']) {
        $message .= "Нисша:\r\n" . $_POST[' niche'] . "\r\n\r\n";
    }

    if(isset($_POST['name']) && $_POST['name']) {
        $message .= "ФИО:\r\n" . $_POST[' name'] . "\r\n\r\n";
    }

    if(isset($_POST[' phone']) && $_POST['phone']) {
        $message .= "Телефон:\r\n" . $_POST[' phone'] . "\r\n\r\n";
    }

    $from_email = 'no-repeat@mail.ru'; //sender email
    $recipient_email = 'frontline_tz@mail.ru'; //recipient email
    $recipient_email = 'na@yasno.mobi'; //recipient email
    $subject = "Готовый бизнес - Заявка"; //subject of email


    $boundary = md5("sanwebe");


//header
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From:".$from_email."\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

//plain text
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=utf-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($message));


    $sentMail = @mail($recipient_email, $subject, $body, $headers);

    if($sentMail) {
        echo 1;
    }else{
        die('Could not send mail! Please check your PHP mail configuration.');
    }
}