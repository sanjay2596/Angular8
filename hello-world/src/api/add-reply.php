<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'db.php';

$postdata = file_get_contents('php://input');
$reply = json_decode($postdata);

$text = $reply->data->text;
$username = $reply->data->username;
$status = $reply->data->status;
$time = $reply->data->time;
$commentId = $reply->data->comment_id;

  $sql = "INSERT INTO replies(`text`,`username`,`status`,`time`,`comment_id`) VALUES ('".$text."','".$username."','".$status."','".$time."',".$commentId.");";
// print_r($sql);
if(mysqli_query($con,$sql)) {
    // $cr = 0;
    // while($row = mysqli_fetch_assoc($result))
    // {
    //   $replys[$cr]['date']    = $row['date'];
    //   $replys[$cr]['heading'] = $row['heading'];
    //   $replys[$cr]['content'] = $row['content'];
    //   $replys[$cr]['author'] = $row['author'];
  
    //   $cr++;
    // }
      
    // echo json_encode(['data'=>$replys]);
    // print_r($sql);
    http_response_code(200);
}
else
{
  //http_response_code(422);
 print_r($sql);

}

?>