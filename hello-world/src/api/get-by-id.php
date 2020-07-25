<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
/**
 * Returns the list of blogs.
 */
require 'db.php';
$id = explode("=",$_SERVER['QUERY_STRING'])[1];

$blogs = [];
$sql = "SELECT content, heading, author FROM blogs WHERE id=".$id;

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $blogs[$cr]['id']    = $row['id'];
    $blogs[$cr]['heading'] = $row['heading'];
    $blogs[$cr]['content'] = $row['content'];
    $blogs[$cr]['author'] = $row['author'];

    $cr++;
  }
    
  echo json_encode(['data'=>$blogs]);
}
else
{
  http_response_code(404);
}
// $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//   echo $id;

?>