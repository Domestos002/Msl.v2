

<?

  mail ("info@bz-podkluch.ru",
        "сообщение - с ".$_SERVER['HTTP_REFERER'],
		"<br>Форма: ".$_POST['formName'].
		"<br>Имя: ".$_POST['name'].
		"<br>Телефон: ".$_POST['phone'].
		"<br>Email: ".$_POST['email'].
		"<br>Время для звонка: ".$_POST['time'], "Content-type: text/html; charset=utf-8 \r\n");
  




 include('amo_send.php');







?>
