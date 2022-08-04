<?php
    include("./config.php");
    $conexion = connect();
    $dificultad = (isset($_POST["dificultad"]) && $_POST["dificultad"] !== "")? $_POST["dificultad"] : false;
    $nombre = (isset($_POST["nombre"]) && $_POST["nombre"] !== "")? $_POST["nombre"] : false;
    $fecha=date("Y/m/d H:i:s");
    $tiempo=date("Y/m/d H:i:s");

    if($dificultad == "facil"){

        $peticion = "INSERT INTO buscaminas VALUES('$nombre', '$fecha', '$tiempo')";
        $query = mysqli_query($conexion, $peticion);

        echo '
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../statics/buscaminas.css">
            <title>Buscaminas</title>
        </head>
        <body id="fondo2">
            <div id=titulo2>Facil</div>
            <button class="boton" id="reset">Reset</button><br>
            <a href="../buscaminas.html"><button class="boton2" id="menu">Menu</button></a>
            <table id="tabla">
                <tbody >

                </tbody>
            </table>
            
            <script src="./buscaminas.js"></script>
        </body>
        </html>
        ';

    }

    if($dificultad == "normal"){
        $peticion2 = "INSERT INTO buscaminas2 VALUES('$nombre', '$fecha', '$tiempo')";
        $query = mysqli_query($conexion, $peticion2);
        echo '
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../statics/buscaminas2.css">
            <title>Buscaminas</title>
        </head>
        <body id="fondo">
            <div id=titulo2>Normal</div>
            <button class="boton" id="reset">Reset</button><br>
            <a href="../buscaminas.html"><button class="boton2" id="menu">Menu</button></a>
            <table id="tabla">
                <tbody>

                </tbody>
            </table>
            
            <script src="./buscaminas2.js"></script>
        </body>
        </html>
        ';
    }

    if($dificultad == "dificil"){
        $peticion3 = "INSERT INTO buscaminas3 VALUES('$nombre', '$fecha', '$tiempo')";
        $query = mysqli_query($conexion, $peticion3);
        echo '
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../statics/buscaminas3.css">
            <title>Buscaminas</title>
        </head>
        <body id="fondo">
            <div id=titulo2>Difícil</div>
            <button class="boton" id="reset">Reset</button><br>
            <a href="../buscaminas.html"><button class="boton2" id="menu">Menu</button></a>
            <table id="tabla">
                <tbody>

                </tbody>
            </table>
            
            <script src="./buscaminas3.js"></script>
        </body>
        </html>
        ';
    }

?>

