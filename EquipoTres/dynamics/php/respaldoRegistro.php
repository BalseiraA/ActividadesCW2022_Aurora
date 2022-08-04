<?php
  include("./config.php");
  $con = connect();
?>

<?php
if (isset($_POST["type"]) || isset($_POST["isStudent"])) {
    if (isset($_POST["isStudent"])) {
        // Viene de la pagina registro.php
        $isStudent = $_POST["isStudent"];
        $name = $_POST["name"];
        $lastName = $_POST["lastName"];
        $correo = $_POST["correo"];
        $contrasena = $_POST["contrasena"];
        if ($isStudent) {
            $ncuenta = $_POST["ncuenta"];
        } else {
            $rfc = $_POST["rfc"];
            $ntrabajador = $_POST["ncuenta"];
        }
        $sql = "INSERT INTO usuario (nombre, apellidos, correo, contrasena, ";
        if ($isStudent) {
            $sql .= "NumCuenta";
        } else {
            $sql .= "RFC, NumTrabajador";
        }
        $sql .= ") VALUES ('$name', '$lastName', '$correo', '$password', ";
        if ($isStudent) {
            $sql .= "'$ncuenta'";
        } else {
            $sql .= "'$rfc', '$ntrabajador'";
        }
        $sql .= ")";
        include("./config.php");
        $connect = connect();
        $result = mysqli_query($connect, $sql);
        if ($result) {
            echo "<script>console.log('Usuario registrado correctamente');</script>";
        } else {
            echo "<script>console.log('Error al registrar usuario');</script>";
            echo $sql;
        }
    } else {
        // Viene de la pagina intermedio.php
        $isStudent = $_POST["type"] == "student";
    }
} else {
    header("location: ./inicio.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../statics/styles/general.css" type="text/css">
    <link rel="stylesheet" href="../statics/styles/registro.css" type="text/css">
    <title>Registro</title>
</head>
<body>
    <div class="container-fluid d-flex text-center vh-100">
        <div class="col-5 container my-auto panel">
            <form action='' method='post'>
                <fieldset>
                    <h1>Registro<?php if ($isStudent) echo 'Alumno';
                                else echo 'Profesor'; ?></h1>
                    <input type="text" id="apodo" name="apodo" placeholder="Apodo" required>
                    <input type='text' id='nombre' name='nombre' placeholder='Nombre' required>
                    <br/>
                    <input type='text' id='apellido' name='apellido' placeholder='Apellidos' required>
                    <input type='password' id='contrasena' name='contrasena' placeholder='Contraseña' required>
                    <br/>
                    <input type='password' id='contrasenaConfir' name='contrasenaConfir' placeholder='Confirmar Contraseña' required>
                    <input type='email' id='correo' name='correo' placeholder='Correo Electrónico' required>
                    <br/>
                    <input type='email' id='confirmEmail' name='confirmEmail' placeholder='Confirmar correo Electrónico' required>
                    <?php if ($isStudent) { ?>
                        <div class="form-group">
                            <label for="ncuenta"></label>
                            <input type="text" class="form-control" id="ncuenta" name="ncuenta" placeholder="Numero de cuenta">
                        </div>
                    <?php } ?>
                    <br/>
                    <?php if ($isStudent) { ?>
                        <div class="form-group">
                            <select name="grupo" id="grupo">
                            </select>
                        </div>
                    <?php } ?>
                    <br>
                    <?php if (!$isStudent) { ?>
                        <div class="form-group">
                            <label for="rfc"></label>
                            <input type="text" class="form-control" id="rfc" name="rfc" placeholder="RFC">
                        </div>
                        <div class="form-group">
                            <label for="ntrabajador"></label>
                            <input type="text" class="form-control" id="ntrabajador" name="ntrabajador" placeholder="Numero de trabajador">
                        </div>
                    <?php } ?>
                    <button type='submit' id="crear">Crear Cuenta</button>
                    <br/>
                    <input type="hidden" name="isStudent" value="<?php if ($isStudent) echo '1';
                                                                else echo '0' ?>">
                </fieldset>
            </form>
        </div>
    </div>
    <?php  
        $apodo = (isset($_POST['apodo']) && $_POST["apodo"] != "") ? $_POST['apodo'] : "Falta Apodo";

        $nombre = (isset($_POST['nombre']) && $_POST["nombre"] != "") ? $_POST['nombre'] : "Falta Nombre";
        $apellido = (isset($_POST['apellido']) && $_POST["apellido"] != "") ? $_POST['apellido'] : "Falta Apellido";
        
        $correo = (isset($_POST['correo']) && $_POST["correo"] != "") ? $_POST['correo'] : "Falta Correo";
        $correoConfir = (isset($_POST['correoConfir']) && $_POST["correoConfir"] != "") ? $_POST['correoConfir'] : "Falta Confirmación de Correo";

        $contrasena = (isset($_POST['contrasena']) && $_POST["contrasena"] != "") ? $_POST['contrasena'] : "Falta Contraseña";
        $contrasena_confir = (isset($_POST['contrasenaConfir']) && $_POST["contrasenaConfir"] != "") ? $_POST['contrasenaConfir'] : "Falta Confirmación de Contraseña";

        $ncuenta = (isset($_POST['ncuenta']) && $_POST["ncuenta"] != "") ? $_POST['ncuenta'] : "Falta Número de Cuenta";
        $grupo = (isset($_POST['grupo']) && $_POST["grupo"] != "") ? $_POST['grupo'] : "Falta Grupo";

        $n_trabajador = (isset($_POST['ntrabajador']) && $_POST["ntrabajador"] != "") ? $_POST['ntrabajador'] : "Falta Número de trabajador";
        $rfc = (isset($_POST['RFC']) && $_POST["RFC"] != "") ? $_POST['RFC'] : "Falta RFC";
        
        echo "<br/><br/>";
        echo "<h3>Información de usuario</h3>";
        echo $nombre."<br/>".$apellido."<br/>".$correo."<br/>".$contrasena."<br/>".$ncuenta."<br>".$grupo."<br>".$apodo;

        $sql = "SELECT Usuario_ID FROM usuario WHERE Usuario_ID LIKE '$apodo'";
        $query = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($query);
        
        if($row == "")
        {
            $sql = "INSERT INTO usuario VALUES ('$apodo', $grupo, '$nombre', '$apellido', '$correo', '$contrasena', '', '$ncuenta', '')";
            mysqli_query($con, $sql);
        }
        else{
            echo "<p>Ese apodo ya está ocupado, intenta uno nuevo</p>";
        }
    ?>

    <script src="../js/registroAlumno.js"></script>

</body>
</html>








