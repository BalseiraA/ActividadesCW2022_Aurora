<?php
  include("./config.php");
  $conexion = connect();

  echo '<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="../../bootstrap-5.2.0-beta1-dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="../../statics/styles/calendar.css">
            <link rel="stylesheet" href="../../statics/styles/index.css">
            <title id="titulo">Página de inicio</title>
        </head>
        <body>

            <!-- Barra de navegación -->   
            <div id="barra">
              <nav class="navbar navbar-expand-lg bg-light">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Menu
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="menu">
                          <li><a class="dropdown-item" href="#" id="perfil">Perfil</a></li>
                          <li><a class="dropdown-item" href="#" id="materias">Materias</a></li>
                          <li><a class="dropdown-item" href="#" id="tablero">Tablero</a></li>
                          <li><a class="dropdown-item" href="#" id="calendario">Calendario</a></li>
                          <li><a class="dropdown-item" href="#" id="juegos">Juegos</a></li>
                        </ul>
                      </li>
                    </ul>
                  <span class="navbar-brand" id="tit">PÁGINA DE INICIO</span>
              </nav>
            </div>
            <!-- Barra de navegación -->
          <div id="mostrar">
          </div>';
          

  echo'
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
          <script src="../js/index.js"></script>
          
        </body>
        </html>';

?>