<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
/**
 * Returns the list of replies.
 */
require 'db.php';
$ids = explode(",",explode("=",$_SERVER['QUERY_STRING'])[1]);
$condition= '';
if(count($ids) == 1) {
    $condition .= "comment_id=".$ids[0];
} else {
    foreach($ids as $id ) {
        $condition .= "comment_id=".$id." ";
        if($id != end($ids)) {
            $condition .= "OR ";
        }
    }
}

$replies = [];
$sql = "SELECT replies.text AS reply,replies.time AS posted_on, username,comment_id FROM replies  WHERE ".$condition;

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $replies[$cr]['reply']    = $row['reply'];
    $replies[$cr]['posted_on'] = $row['posted_on'];
    $replies[$cr]['username'] = $row['username'];
    $replies[$cr]['comment_id'] = $row['comment_id'];
    $cr++;
  }
    
  echo json_encode(['data'=>$replies]);
}
else
{
  http_response_code(404);
}
// $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//   echo $id;

?>