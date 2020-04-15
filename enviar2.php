<?php 

echo 'http://pl.com/URL/electro/00001111444555';

 if(isset($tienda, $tiponfc, $serie, $url)){
      $response[] = ['nfc'=>'B000000000000000000', 'error'=> false ];
      echo json_encode($response);
 } else {
     $response[] = ['mensaje'=>'Se ha producido un error', 'error' => true ];
     echo json_encode($response);

 }


    //  if(isset($_POST['url'])){
    //      echo $_POST['url'];
    // //    $name =  $_POST['name'];
    // //    $description = $_POST['description'];
    // //    $query = "INSERT INTO tasks(name, Description) values ('$name', '$description')";

    // //    $result = mysqli_query($con, $query);
    // //    if(!$result){
    // //        die('Query Failed.');
    // //    }
    // //    echo 'Task Added Successfully';
    // }
?>