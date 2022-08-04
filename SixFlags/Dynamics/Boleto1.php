<?php
    $nombre = (isset($_POST['nombre']) && $_POST["nombre"] != "")? $_POST ['nombre'] : "no especifico";
    $apellidos = (isset($_POST['apellidos']) && $_POST["apellidos"] != "")? $_POST ['apellidos'] : "no especifico";
    $edad = (isset($_POST['edad']) && $_POST["edad"] != "")? $_POST ['edad'] : "no especifico";
    $direccion = (isset($_POST['direccion']) && $_POST["direccion"] != "")? $_POST ['direccion'] : "no especifico";
    $num_boletos = (isset($_POST['num_boletos']) && $_POST["num_boletos"] != "")? $_POST ['num_boletos'] : "no especifico";
    $tipo_boletos = (isset($_POST['tipo_boletos']) && $_POST["tipo_boletos"] != "")? $_POST ['tipo_boletos'] : "no especifico";

    if($tipo_boletos == "uno"){
        echo '<title>Boleto Normal</title>';
        $imagen = "src=../Statics/Img/Grrr.jpg alt=Grrr width=500";
        $boleto = "Normal";
        $frase = "El normalito, el tranquilito UwU";
    } 
    elseif($tipo_boletos == "dos"){
        echo'<title>Boleto Cansao</title>';
        $imagen = "src=../Statics/Img/Cansao.jpg alt=Cansao width=500";
        $boleto = "Cansao Papito";
        $frase = "Tas cansao, necesitas un descanso, te entendemos...";
    }
    elseif($tipo_boletos == "tres"){
        echo'<title>Boleto Colapso</title>';
        $imagen = "src=../Statics/Img/Colapso.jpg alt=Colapso width=500";
        $boleto = "Colapso";
        $frase = "Tas bien?";
    }
    elseif($tipo_boletos == "cuatro"){
        echo'<title>Boleto Peludo</title>';
        $imagen = "src=../Statics/Img/DePelos.jpg alt=De Pelos width=500";
        $boleto = "De Pelos";
        $frase = "No tienes ni un pelo de tonto ;)";
    }
    elseif($tipo_boletos == "cinco"){
        echo'<title>Boleto Flash</title>';
        $imagen = "src=../Statics/Img/NoPuedo.jpg alt=No puedo width=500";
        $boleto = "Flah Pass";
        $frase = "No tienes mucho tiempo, tienes tarea!!";
    }
    
    $i = 0;
    for($i = 0; $i < $num_boletos; $i++){
        echo "<table border=1 style=border-collapse:collapse; cellpadding=25px>    
            <thead>
                <tr>
                    <th colspan=4><h1>Six Flags</h1><th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>$nombre</td>
                    <td>$apellidos</td>
                    <td>$edad</td>
                    <td rowspan=3><img $imagen></td>

                </tr>
                <tr>
                    <td>$direccion</td>
                    <td>$num_boletos</td>
                    <td>$boleto</td>
                </tr>
                <tr>
                    <td colspan=3>$frase</td>
                </tr>
            </tbody>
        </table>
        <br><br>";
    }
    
?>