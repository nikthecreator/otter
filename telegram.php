<?php

    /* https://api.telegram.org/bot1049745488:AAEV49F7pVxKxfSQlGsYzLVRXrMPG-Cx33w/getUpdates,
    где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    // $pos = $_POST['position'];
    $token = "1049745488:AAEV49F7pVxKxfSQlGsYzLVRXrMPG-Cx33w";
    $chat_id = "-345008217";
    $arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    // 'Позиция' => $pos
    );

    foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
    header('Location: thank.html');
    } else {
    echo "Error";
    }
?>