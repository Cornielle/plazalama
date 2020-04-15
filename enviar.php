<?php 
$tienda  =  $_POST['tienda'];
$tiponfc =  $_POST['tipo'];
$serie = $_POST['serie'];
$url = $_POST['url'];

 if(isset($tienda, $tiponfc, $serie, $url) ){
      $response[] = ['nfc'=>'B000000000000000000', 'error'=> false ];
      echo json_encode($response);
 } else {
     $response[] = ['mensaje'=>'Se ha producido un error', 'error' => true ];
     echo json_encode($response);

 }

?>