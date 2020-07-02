<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
/**
 * Returns the list of comments.
 */
require 'db.php';
$id = explode("=",$_SERVER['QUERY_STRING'])[1];

$comments = [];
$sql = "SELECT id,comments.text AS comment,comments.time AS posted_on, username FROM comments WHERE status = 'approved' AND blog_id=".$id;

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $comments[$cr]['id']    = $row['id'];
    $comments[$cr]['comment']    = $row['comment'];
    $comments[$cr]['posted_on'] = $row['posted_on'];
    $comments[$cr]['username'] = $row['username'];
    $cr++;
  }
    
  echo json_encode(['data'=>$comments]);
}
else
{
  http_response_code(404);
}
// $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//   echo $id;
// echo $_SERVER['QUERY_STRING'];
?>