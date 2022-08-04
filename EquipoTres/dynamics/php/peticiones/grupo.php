<?php

    require "../config.php";
    $con = connect();

    if(!$con)
    {
        echo "No se pudo conectar a la base de datos";
    }
    else
    {
        $sql = "SELECT Grupo_ID, Turno_ID FROM grupo NATURAL JOIN turno";
        $res = mysqli_query($con, $sql);

        $resultados = [];

        while($row = mysqli_fetch_assoc($res)){
            $resultados[] = $row;

        }
        //var_dump($resultados);

        

        echo json_encode($resultados);
    }

?>