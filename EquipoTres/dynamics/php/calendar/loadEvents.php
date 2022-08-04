<?php
    include("../config.php");
    $connect = connect();
    $month = $_GET['month'];
    $year = $_GET['year'];
    $day = $_GET['day'];
    if ($day === "") {
        $sql = "SELECT *, (SELECT COUNT(*) FROM eventos WHERE e.fecha = fecha GROUP BY fecha) Conteo FROM eventos e WHERE month(fecha) = $month AND year(fecha) = $year";
    } else {
        $sql = "SELECT *, (SELECT COUNT(*) FROM eventos WHERE e.fecha = fecha GROUP BY fecha) Conteo ";
        $sql = $sql . "FROM eventos e INNER JOIN materias m ON e.Materia_ID = m.Materia_ID ";
        $sql = $sql . "WHERE month(fecha) = $month AND year(fecha) = $year AND day(fecha) = $day";
    }
    $result = mysqli_query($connect, $sql);
    $events = array();
    while($row = mysqli_fetch_assoc($result)){
        $events[] = $row;
    }
    echo json_encode($events);
?>