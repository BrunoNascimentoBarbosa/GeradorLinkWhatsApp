<?php 

function buldier () {
    $numero = $_POST ["numero"];
    $msg = $_POST ["msg"];
 
    $builderLink = $numero.$msg;

    $action_url = $builderLink;

    echo <h1>$builderLink</h1>;
}
   

 



?>