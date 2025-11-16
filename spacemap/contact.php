<?php

// if the url field is empty, but the message field isn't
if(isset($_POST['url']) && $_POST['url'] == '' && $_POST['message'] != ''){

	// put your email address here
	$youremail = 'sujanpal79@gmail.com';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = " Spacemap  - Contact us form:
	 First Name:  $_POST[fname]
	 Last Name:  $_POST[lname]
	 Phone: $_POST[phone]
	 E-Mail: $_POST[email]
	 Message:$_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// finally, send the message
	mail($youremail, 'Spacemap - Contact us Form', $body, $headers );
	//echo "message sent";

}

// otherwise, let the spammer think that they got their message through

// uncomment these lines to redirect instead of displaying HTML
header('Location:http://spacemap.co.in/');
exit('Redirecting you to http://spacemap.co.in/ ');

?>
