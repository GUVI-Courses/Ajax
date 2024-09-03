<?php
header('Content-Type:text/xml');

echo  '<response>';

$email=$_GET['emaildata'];
$emails=array('anees@gmail.com','guvi@gmail.com','rahul@gmail.com');
if(in_array($email,$emails)){
    echo 'Email is eligible '.$email.'';
}
elseif($email==''){
    echo 'Enter Your Email';
}
else{
    echo 'Sorry You are not eligible '.$email.'';
}

echo '</response>'
?>