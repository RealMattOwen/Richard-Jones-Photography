<?php

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

		$name = $_POST['name'];

        $email = $_POST['email'];

        $subject = $_POST['subject'];

        $phone = $_POST['phone'];

        $address = $_POST['address'];

        $message = $_POST['message'];	

		require_once "PHPMailer/PHPMailerAutoload.php";

		//PHPMailer Object
		$mail = new PHPMailer;
		
		//Enable SMTP debugging. 
		$mail->SMTPDebug = 3;                               
		//Set PHPMailer to use SMTP.
		$mail->isSMTP();            
		//Set SMTP host name                          
		$mail->Host = "smtp.gmail.com";
		//Set this to true if SMTP host requires authentication to send email
		$mail->SMTPAuth = true;                          
		//Provide username and password     
		$mail->Username = "";
		$mail->Password = "";
		//If SMTP requires TLS encryption then set it
		$mail->SMTPSecure = "tls";                           
		//Set TCP port to connect to 
		$mail->Port = 587;                 

		//From email address and name
		$mail->From = "$email";
		$mail->FromName = "$name";

		//To address and name
		$mail->addAddress("matty101@live.co.uk", "Matthew Owen");

		//Address to which recipient will reply
		$mail->addReplyTo("$email", "Reply");

		//Send HTML or Plain Text email
		$mail->isHTML(true);

		$mail->Subject = "$subject";
		$mail->Body = "Hi Richard, my name is $name and I would like to discuss $subject, so $message.<br>I look forward to hearing back from you, my contact details are:<br>$email<br>$phone<br>$address";
		$mail->AltBody = "Hi Richard, my name is $name and I would like to discuss $subject, so $message.\nI look forward to hearing back from you, my contact details are:\n$email\n$phone\n$address";

		$mail->send();
	}
?>