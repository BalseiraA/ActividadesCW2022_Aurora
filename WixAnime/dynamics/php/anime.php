<?php

require "config.php";
$con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

if(!$con)
{
    echo "No se pudo conectar a la base de datos";
}
else
{
    $id=(isset($_GET['id']) && $_GET["id"] != "")? $_GET['id'] : false;

    $sql = "SELECT 
            id_anime, nombre, descripcion, publicacion, genero 
            FROM anime 
            NATURAL JOIN genero
            WHERE id_anime = '$id'
          ";
    $res1 = mysqli_query($con, $sql);

    $sql = "SELECT id_personaje, genero, nombre, alias, edad, estado, interesAmoroso, id_anime FROM personaje NATURAL JOIN animehaspersonaje WHERE id_anime=$id";

    $res2 = mysqli_query($con, $sql);

    $resultados = [];
    
    // var_dump($res1, $res2);
    if($res1 == true && $res2 == true){
      $row1 = mysqli_fetch_assoc($res1);
      $row2 = mysqli_fetch_assoc($res2);
      $datos = array(
                    "id" => $row1["id_anime"],
                    "nombre" => $row1["nombre"],
                    "descripcion" => $row1["descripcion"],
                    "publicacion" => $row1["publicacion"], 
                    "genero" => $row1["genero"],
                    "idP" => $row2["id_personaje"],
                    "generoP" => $row2["genero"],
                    "nombreP" => $row2["nombre"],
                    "alias" => $row2["alias"],
                    "edad" => $row2["edad"],
                    "estado" => $row2["estado"], 
                    "interesAmoroso" => $row2["interesAmoroso"]
                  );       
        $resultados = $datos;
    }else{
      echo mysqli_error($con);
    }
  
    echo json_encode($resultados);
}