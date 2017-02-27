<?php

if($_POST['send']){
	sendMail("Message from ");
}
elseif($_POST['sponsor'])
{
	sendMail("Become a sponsor from ");
}

function sendMail($buttonMessage) {
    $to = "musical@aubg.edu";
	$subject = $buttonMessage . $_POST['namecontact'] . " via the website";
	$message = "Name : " . $_POST['namecontact']
			. "\n\nE-mail : " . $_POST['emailcontact']
			. "\n\nMessage : " . $_POST['message'];

	$headers = "From: \"Automail\" <automail@aubg.bg>" . "\r\n";
	
	if(mail($to, $subject, $message, $headers))
	{
		echo("Thank you for contacting us.");
		echo("</br>You will be redirected in a few seconds.");
		echo "<script>setTimeout(\"location.href='http://www.aubgmusicals.com'; \", 4500);</script>";		
	}else
	{
		echo("There is a problem with the server. Please try again later or use regular mail.");
		
	}
}

?>