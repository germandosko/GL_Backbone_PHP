<?php

require '../siteConfig.php';
require '../Utils/Bootstrap.php';

Bootstrap::setRequiredFiles();


if($_GET){
	if (!empty($_GET['nick']) && !empty($_GET['password'])){
		$user = UserModel::FindBy(array('nick'=>trim($_GET['nick'])), true);
		if (is_object($user)){
			if (md5($_GET['password']) == $user->getPassword()){
				Security::authenticate($user);
				var_dump ((array) $user); 
			} else {
			}
		}
	}
} 


