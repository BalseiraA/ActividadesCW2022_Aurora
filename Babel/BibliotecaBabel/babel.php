<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        
        $frase = (isset($_POST['busqueda']) && $_POST["busqueda"] != "")? $_POST['busqueda'] : "Falta Busqueda";
        $modo = (isset($_POST['modo']) && $_POST["modo"] != "") ? $_POST['modo'] : "Falta Busqueda";
        $zonaH = (isset($_POST['zonaH']) && $_POST["zonaH"] != "") ? $_POST['zonaH'] : "Falta Zona Horaria";
        
        $busqueda = strtoupper($frase);
        $numeros_alea = rand(1, 10000);
        $num_palabs = rand(300, 500);
        $num_a = 0;
        $num_b = -1;

        echo "
            <table border='1'>
                <thead>";
        echo "    
                <th>Libro ".$numeros_alea;
        echo "        
                </th>
                </thead>";
        echo '
            <tbody>
                <tr>
                    <td>'; 
                    
                    switch($modo)
                    {
                        case 'Normal': //Caso tal cual de como se recibe la cadena 
                            $ubicacion = rand(1, $num_palabs);
                        break;

                        case 'OrdenA': //Caso ordenado alfabeticamente (que distinga de mayus y minus)
                            $cad_busq = $busqueda;
                            $arreglo1 = explode (" ", $cad_busq);
                            sort($arreglo1);
                            $ubicacion = rand(1, $num_palabs);
                            $busqueda = implode(" ", $arreglo1);
                        break;
                            
                        case 'Palabras': 
                            $cad_busq = $busqueda; // cadena sea igual a la frase ingresada
                            $arreglo1 = explode (" ", $cad_busq); // cadena se convierte en arreglo
                            $num_a = count($arreglo1); // contamos el numero de elementos que tiene el arreglo
                            $ubicacion = rand(1, $num_palabs/10); // ubicacion random de la spalabras
                            $x=0;
                            break;
                    }
                    
                    for ($i=0; $i<=$num_palabs; $i++){ // Controla el numero de palabras del libro
                        if ($ubicacion == $i && $modo != 'Palabras'){
                            echo '<strong>'.$busqueda.'</strong>';    
                        }
                        if ($num_a > 0 && $modo =='Palabras' && $ubicacion == $i){
                            $num_a--;
                            $num_b++;
                            $i--;    
                            $ubicacion = rand($i, $num_palabs);
                            echo "<strong>$arreglo1[$num_b]</strong>";
                        }
                        else {
                            $long_palab = rand(4,11);
                            for($x=0; $x<$long_palab; $x++){ //longitud de palabra
                                $rango_letras = rand(97, 122);
                                $letra_alea = chr($rango_letras);
                                echo $letra_alea;
                            }
                        }
                        echo " ";
                    }
        echo '
                    </td>
                </tr>
            </tbody>
            </table>
        ';
        
        switch ($zonaH)
        {
            case 'CDMX':
                date_default_timezone_set("America/Mexico_City");
                $zona_horaria = date_default_timezone_get();
                $fecha = date('d-m-y');
                $hora = date('h:i a');
                echo "<b>La consulta fue hecha el ".$fecha." a la hora ".$hora." en la zona horaria ".$zona_horaria."</b>";
                break;

            case 'NUEVAYORK':
                date_default_timezone_set("America/New_York");
                $zona_horaria = date_default_timezone_get();
                $fecha = date('d-m-y');
                $hora = date('h:i a');
                echo "<b>La consulta fue hecha el ".$fecha." a la hora ".$hora." en la zona horaria ".$zona_horaria."</b>";
                break;

            case 'MOSCU':
                date_default_timezone_set("Europe/Moscow");
                $zona_horaria = date_default_timezone_get();
                $fecha = date('d-m-y');
                $hora = date('h:i a');
                echo "<b>La consulta fue hecha el ".$fecha." a la hora ".$hora." en la zona horaria ".$zona_horaria."</b>";
                break;

            case 'SEUL':
                date_default_timezone_set("Asia/Seoul");
                $zona_horaria = date_default_timezone_get();
                $fecha = date('d-m-y');
                $hora = date('h:i a');
                echo "<b>La consulta fue hecha el ".$fecha." a la hora ".$hora." en la zona horaria ".$zona_horaria."</b>";
                break;

            case 'TOKIO':
                date_default_timezone_set("Asia/Tokyo");
                $zona_horaria = date_default_timezone_get();
                $fecha = date('d-m-y');
                $hora = date('h:i a');
                echo "<strong>La consulta fue hecha el ".$fecha." a la hora ".$hora." en la zona horaria ".$zona_horaria."</strong>";
        }
    ?>
</body>
</html>

