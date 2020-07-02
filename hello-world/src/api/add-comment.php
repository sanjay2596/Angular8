<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'db.php';

$postdata = file_get_contents('php://input');
$comment = json_decode($postdata);
// $model = mysqli_real_escape_string($con, trim($request->data->heading));
// print_r($comment);
$text = $comment->data->text;
$username = $comment->data->username;
$status = $comment->data->status;
$time = $comment->data->date;
$blogId = $comment->data->blog_id;

  $sql = "INSERT INTO comments(`text`,`username`,`status`,`time`,`blog_id`) VALUES ('".$text."','".$username."','".$status."','".$time."',".$blogId.");";
// print_r($sql);
if(mysqli_query($con,$sql)) {
    // $cr = 0;
    // while($row = mysqli_fetch_assoc($result))
    // {
    //   $comments[$cr]['date']    = $row['date'];
    //   $comments[$cr]['heading'] = $row['heading'];
    //   $comments[$cr]['content'] = $row['content'];
    //   $comments[$cr]['author'] = $row['author'];
  
    //   $cr++;
    // }
      
    // echo json_encode(['data'=>$comments]);
    // print_r($sql);
    http_response_code(200);
}
else
{
  //http_response_code(422);
 print_r($sql);

}

?>