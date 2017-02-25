<?php 
    if(isset($_POST['Name']) and isset($_POST['Email']) and isset($_POST['Message'])){
    $to1 = "nnb130@aubg.edu";
    
    $namefrom = $_POST['Name']; 
    $mailfrom = $_POST['Email']; 
    $message = $_POST['Message'];

	if($namefrom == '' or $mailfrom == '' or $message == '') {
		echo "Error";
		exit();
		} else {
				$subject = "Website Message";
				$headers = "From:" . $mailfrom . $namefrom;


				if(mail($to1,$subject,$message,$headers))
				{
					echo "Ok";
				}
				else
				{
					echo "failed";
				}
				
				echo "Mail Sent. Thanks for your interest!";

				echo $to1;
				echo $subject;
				echo $message;
				echo $headers;
				// You can also use header('Location: thank_you.php'); to redirect to another page.
	}
} else {
    echo "Empty Fields, Please try again.";
    }

?>