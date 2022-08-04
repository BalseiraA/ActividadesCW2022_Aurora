<?php

session_name("Sesion_usuario");
session_id("123456789");
session_start();

if (isset($_SESSION["usuario"])) {
    header("location: ./vista_materias.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../statics/styles/general.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../statics/styles/intermedio.css" type="text/css">
    <link rel="stylesheet" href="../../statics/styles/index.css" type="text/css">
    <title>Plataforma Educativa</title>
</head>

<body>
    <div class="container-fluid d-flex text-center vh-100">
        <div class="col-5 container my-auto panel">
            <h1 class="title">!Bienvenid@ a CoyoAulas!</h1>
            <form action='' method='post'>
                <div class="row">
                    <div class="col-7 mx-auto mb-4">
                        <br/>
                        <div class="form-group">
                            <input id='apodo' name='apodo' type='apodo' placeholder='Apodo' class="form-control">
                            <br/>
                        </div>
                        <div class="form-group">
                            <input id='contrasena' name='contrasena' type='password' placeholder='Contraseña' class="form-control">
                        </div>
                    </div>
                </div>
                <button type='submit'>Iniciar Sesión</button>
                <br/>

                <?php
                    $apodo = (isset($_POST["apodo"]) && $_POST["apodo"] !== "")? $_POST["apodo"] : false;
                    $contrasena = (isset($_POST["contrasena"]) && $_POST["contrasena"] !== "")? $_POST["contrasena"] : false;
                    
                    if($apodo != ""){
                        include("./config.php");
                        $con = connect();
                    
                        $sql = "SELECT * FROM usuario WHERE Usuario_ID LIKE '$apodo';";
                        $query = mysqli_query($con, $sql);

                        $row = mysqli_fetch_array($query);

                        if($row == ""){
                            echo "
                            <p>No estás registrado :(</p>";
                        }
                        else {
                            $sql = "SELECT * FROM usuario WHERE contrasena LIKE '$contrasena';";
                            $query = mysqli_query($con, $sql);
                            $row = mysqli_fetch_array($query);
                            if($row == ""){
                                echo"<p>Contraseña incorrecta</p>";
                            } else {
                                header("location: ./vista_materias.php");
                            }
                        }
                    }
                
                ?>
            </form>

            <!-- Formulario Registro  -->
            <form action='./intermedio.php' method='post'>
                <label>¿Aún no te has registrado?</label>
                <br/>
                <button>Crea una cuenta</button>    
            </form>
        </div>
    </div>
    <script src="../js/index.js"></script>

</body>

</html>