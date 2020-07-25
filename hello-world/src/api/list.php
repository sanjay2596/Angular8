<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
/**
 * Returns the list of blogs.
 */
require 'db.php';
    
$blogs = [];
$sql = "SELECT id, content, heading FROM blogs WHERE status = 'published'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $blogs[$cr]['id']    = $row['id'];
    $blogs[$cr]['heading'] = $row['heading'];
    $blogs[$cr]['content'] = $row['content'];
    $cr++;
  }
    
  echo json_encode(['data'=>$blogs]);
}
else
{
  http_response_code(404);
}

//  echo 'reached';

?>