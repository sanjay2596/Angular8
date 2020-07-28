<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
/**
 * Returns the list of blogs.
 */
require 'db.php';
$postdata = file_get_contents('php://input');
$user = json_decode($postdata);
// $model = mysqli_real_escape_string($con, trim($request->data->heading));
// print_r($blog);
 $uname = $user->data->uname;
$password = $user->data->password;

$sql = "SELECT * from users where username='".$uname."' and password='".$password."'";

$users = [];

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['id']    = $row['id'];
    $users[$cr]['uname'] = $row['username'];
    $users[$cr]['password'] = $row['password'];
    $users[$cr]['role'] = $row['role'];
    $users[$cr]['status'] = $row['status'];
    $cr++;
  }
    
  echo json_encode(['data'=>$users]);
}
else
{
  http_response_code(404);
}
// $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//   echo $id;

?>