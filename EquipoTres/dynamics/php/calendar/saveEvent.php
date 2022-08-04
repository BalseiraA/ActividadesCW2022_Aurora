<?php
    include("../config.php");
    $connect = connect();
    $event = $_POST['evento'];
    $titulo = $event['titulo'];
    $usuario = $event['usuario'];
    $materia = $event['materia'];
    $fecha = $event['fecha'];
    $horaIncio = $event['horaInicio'];
    $horaFin = $event['horaFin'];
    $descripcion = $event['descripcion'];
    $sql = "INSERT INTO `equipotres`.`eventos` (Titulo, Usuario_ID, Materia_ID, Fecha, HoraInicio, HoraFin, Descripcion) VALUES (`$titulo`, $usuario, $materia, `$fecha`, `$horaIncio`, `$horaFin`, `$descripcion`)";
    
    // INSERT INTO `equipotres`.`eventos` (Evento_ID, Materia_ID, Usuario_ID, Titulo, Fecha, HoraInicial, HoraFinal, Descripcion) VALUES (1, 1, 1, 'Taller de Física', '2020-06-01', '08:00:00', '09:00:00', 'Taller de Física');
    
    $result = mysqli_query($connect, $sql);
    if ($result) {
        echo "success";
    } else {
        echo "error";
    }
?>