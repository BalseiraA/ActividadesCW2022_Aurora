<?php
      $db_host = "localhost";
      $db_user = "root";
      $db_pass = ""; 
      $db_schema = "wikianime";

    define("DBUSER","root");
    define("DBHOST","localhost");
    define("PASSWORD","");
    define("DB","wikianime");

    function connect()
    {
        $con=mysqli_connect(DBHOST,DBUSER, PASSWORD, DB);
        if(!$con){
            mysqli_connect_error();
            mysqli_connect_errno();
            echo "No se pudo acceder a la base de datos";
        }
        return $con;
    }
  ?>

