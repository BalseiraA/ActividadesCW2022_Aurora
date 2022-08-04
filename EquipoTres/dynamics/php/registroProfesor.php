<?php
  include("./config.php");
  $conexion = connect();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>

    <form action='./registro.php' method='post'>
        <fieldset>
            <legend>Registro</legend>
            <input type='text' id='nombre' name='nombre' placeholder='Nombre' required>
            <input type='text' id='apellido' name='apellido' placeholder='Apellido' required>
            <br/>
            <input type='password' id='contrasena' name='contrasena' placeholder='Contraseña' required>
            <input type='password' id='contrasenaConfir' name='contrasenaConfir' placeholder='Confirmar Contraseña' required>
            <br/>
            <input type='email' id='correo' name='correo' placeholder='Correo Electrónico' required>
            <input type='email' id='correoConfir' name='correoConfir' placeholder='Confirmar correo Electrónico' required>
            <br/>
            <input type='number' id='ntrabajador' name='ntrabajador' placeholder='Número de Trabajador' required>
            <input type='text' id='RFC' name='RFC' placeholder='RFC' required>
            <br/>
            <button type='submit'>Crear Cuenta</button>
            <br/>
        </fieldset>
    </form>
    <?php  
        $nombre = (isset($_POST['nombre']) && $_POST["nombre"] != "") ? $_POST['nombre'] : "Falta Nombre";
        $apellido = (isset($_POST['apellido']) && $_POST["apellido"] != "") ? $_POST['apellido'] : "Falta Apellido";
        
        $correo = (isset($_POST['correo']) && $_POST["correo"] != "") ? $_POST['correo'] : "Falta Correo";
        $correoConfir = (isset($_POST['correoConfir']) && $_POST["correoConfir"] != "") ? $_POST['correoConfir'] : "Falta Confirmación de Correo";

        $contrasena = (isset($_POST['contrasena']) && $_POST["contrasena"] != "") ? $_POST['contrasena'] : "Falta Contraseña";
        $contrasena_confir = (isset($_POST['contrasenaConfir']) && $_POST["contrasenaConfir"] != "") ? $_POST['contrasenaConfir'] : "Falta Confirmación de Contraseña";

        $n_trabajador = (isset($_POST['ntrabajador']) && $_POST["ntrabajador"] != "") ? $_POST['ntrabajador'] : "Falta Número de trabajador";
        $rfc = (isset($_POST['RFC']) && $_POST["RFC"] != "") ? $_POST['RFC'] : "Falta RFC";
        
        echo "<br/><br/>";
        echo "<h3>Información de usuario</h3>";
        echo $nombre."<br/>".$apellido."<br/>".$correo."<br/>".$contrasena."<br/>".$n_trabajador."<br/>".$rfc;
    ?>

</body>
</html>








