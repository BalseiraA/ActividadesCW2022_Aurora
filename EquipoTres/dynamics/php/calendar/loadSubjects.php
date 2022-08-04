<?php
    include("../config.php");
    $connect = connect();
    $sql = "SELECT * FROM materias";
    $result = mysqli_query($connect, $sql);
    $materias = array();
    while($row = mysqli_fetch_assoc($result)){
        $materias[] = $row;
    }
    echo json_encode($materias);
?>
