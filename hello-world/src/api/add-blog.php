<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'db.php';

$postdata = file_get_contents('php://input');
$blog = json_decode($postdata);
// $model = mysqli_real_escape_string($con, trim($request->data->heading));
// print_r($blog);
 $heading = $blog->data->heading;
$author = $blog->data->author;
$content = $blog->data->content;
 $date = $blog->data->date;
 $status = 'published';

  $sql = "INSERT INTO blogs(`heading`,`content`,`author`,`date`,`status`) VALUES ('".$heading."','".$content."','".$author."','".$date."','".$status."');";
//   $sql = "INSERT INTO blogs(`heading`,`content`,`author`,`date`,`status`) VALUES ('".$heading."','".$content."','".$author."','".$date."');";

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