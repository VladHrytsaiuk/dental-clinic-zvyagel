<?php 
$content = "";
foreach($_POST as $key => $value) {
	if($value){
		$content .= "<b>$key</b>: <i>$value</i>\n";
	}
}
if(trim($content)){
	$content = "<b>Message from site:</b>\n".$content;
	$apiToken = "6754532115:AAEY7Q0uanL2s3pT1TInVfRhn2ot7Z9Lh74";
	$data = [
		'chat_id' => '@DentalClinic_CLIENT',
		'text' => $content,
		'parse_mode' => 'HTML'
	];
	$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
}

?>