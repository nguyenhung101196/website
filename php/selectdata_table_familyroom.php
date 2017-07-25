<?php 
    include('connectdb.php');
?>
<?php
  $query="select * from family_living_room ";
  $rs=$con->query($query);
    while($row=$rs->fetch_assoc()){
        $data[]=$row;
    }
    print json_encode($data);
 ?>