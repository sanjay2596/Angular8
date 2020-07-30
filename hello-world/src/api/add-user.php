<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'db.php';

$postdata = file_get_contents('php://input');
$user = json_decode($postdata);
// $model = mysqli_real_escape_string($con, trim($request->data->heading));
// print_r($blog);
 $username = $user->data->username;
$password = $user->data->password;
$role = $user->data->role;
 $status = $user->data->status;

  $sql = "INSERT INTO users(`username`,`password`,`role`,`status`) VALUES ('".$username."','".$password."','".$role."','".$status."');";

// print_r($sql);
if(mysqli_query($con,$sql)) {
    // $cr = 0;
    // while($row = mysqli_fetch_assoc($result))
    // {
    //   $blogs[$cr]['date']    = $row['date'];
    //   $blogs[$cr]['heading'] = $row['heading'];
    //   $blogs[$cr]['content'] = $row['content'];
    //   $blogs[$cr]['author'] = $row['author'];
  
    //   $cr++;
    // }
      
    // echo json_encode(['data'=>$blogs]);
    // print_r($sql);
    http_response_code(200);
}
else
{
  http_response_code(422);
// print_r($sql);

}

?>