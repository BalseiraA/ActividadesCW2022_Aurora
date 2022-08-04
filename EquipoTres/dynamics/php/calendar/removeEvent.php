<?php
    include("../config.php");
    $connect = connect();
    $eventId = $_GET['eventId'];
    $sql = "DELETE FROM eventos WHERE Evento_ID = $eventId";
    $result = mysqli_query($connect, $sql);
    if ($result) {
        echo "success";
    } else {
        echo "error";
    }
?>