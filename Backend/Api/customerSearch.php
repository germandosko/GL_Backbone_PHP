<?php

require '../siteConfig.php';
require '../Utils/Bootstrap.php';

Bootstrap::setRequiredFiles();
if(!empty($_POST['customerName'])){
	$customers = CustomerModel::FindBy(array('lastName'=>$_POST['customerName'], 'businessName'=>$_POST['customerName']), false, true);
	print_r(json_encode($customers));
	} else {
	$customers = array();
}
	
 


