<?php

require_once('connect.php');

///gather the form content
$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$email = $_POST['email'];
$msg = $_POST['message'];

$errors = [];

//validate and clean these values

$fname = trim($fname);
$lname = trim($lname);
$email = trim($email);
$msg = trim($msg);

if(empty($lname)) {
    $errors['last_name'] = 'You must provide your Last Name';
}

if(empty($fname)) {
    $errors['first_name'] = 'You must provide your First Name';
}

if(empty($msg)) {
    $errors['message'] = 'Sorry but this field can not be empty';
}

if(empty($email)) {
    $errors['email'] = 'You must provide an email';
} else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['legit_email'] = 'You must provide a REAL Email';
}

if(empty($errors)) {

    //insert these values as a new row in the contacts table

    $query = "INSERT INTO clients (firstname, lastname, email, comments) VALUES('$fname','$lname','$email','$msg')";

    if(mysqli_query($connect, $query)) {

//format and send these values in an email

$to = 'm_duquedelarosa@fanshaweonline.ca';
$subject = 'You just recevied a message from your Portfolio website!';

$message = "You have received a new contact form submission:\n\n";
$message .= "Full Name: ".$fname." ".$lname."\n";
$message .= "Email: ".$email."\n\n";
//build out rest of message body...

mail($to,$subject,$message);

header('Location: received.php');

}








}


?>