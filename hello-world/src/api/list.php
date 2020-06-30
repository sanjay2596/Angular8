<?php
/**
 * Returns the list of cars.
 */
require 'dp.php';
    
$cars = [];
$sql = "SELECT id, content, heading FROM blogs";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id']    = $row['id'];
    $cars[$cr]['heading'] = $row['heading'];
    $cars[$cr]['content'] = $row['content'];
    $cr++;
  }
    
  echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}

?>