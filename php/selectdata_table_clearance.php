<?php 
    include('connectdb.php');
?>
<?php
  $query="select * from clearance ";
  $rs=$con->query($query);
    while($row=$rs->fetch_assoc()){
        $data[]=$row;
    }
    print json_encode($data);
 ?>