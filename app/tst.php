<? 



function my_city(){
	$ip=$_SERVER['REMOTE_ADDR'];

	$link="http://api.sypexgeo.net/json/$ip";


	$curl=curl_init(); #Сохраняем дескриптор сеанса cURL
	curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
	curl_setopt($curl,CURLOPT_URL,$link);
	curl_setopt($curl,CURLOPT_HEADER,false);
	curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
	curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
	$out=curl_exec($curl); #Инициируем запрос к API и сохраняем ответ в переменную
	curl_close($curl);
   	$json=json_decode($out, JSON_UNESCAPED_UNICODE);

	return $json['city']['name_ru'];
}


$my_city=my_city();

echo($my_city);
