

<?

  mail ("info@bz-podkluch.ru",
        "сообщение - с ".$_SERVER['HTTP_REFERER'],
		"<br>Форма: ".$_POST['formName'].
		"<br>Желаема ниша: ".$_POST['vibor'].
		"<br>Бюджет: ".$_POST['price'].
		"<br>Город: ".$_POST['gorod'].
		"<br>Телефона: ".$_POST['phone'], "Content-type: text/html; charset=utf-8 \r\n");
  


 include('amo_send.php');




?>
