window.addEventListener("load", () =>{
    const opciones = document.getElementById("opciones");
    const texto = document.getElementById("texto");
    const nombres = document.getElementById("nombre");
    const genero = document.getElementById("genero");
    const descripcion = document.getElementById("descripcion");
    const publicacion = document.getElementById("publicacion");
    const personajes = document.getElementById("personajes");

    /*INTENTO DE HACER QUE DEPENDIENDO DEL ANIME SE MUESTRE LA INFORMACION*/
    opciones.addEventListener("click", (evento)=>{
        const anime_elegido = evento.target; 
        const id_anime = anime_elegido.id;
        console.log(id_anime);
        fetch("dynamics/php/anime.php?id="+ id_anime)
        .then((response)=>{
            return response.json();
        })
        .then((datosJSON)=>{
            if(datosJSON){
                console.log(datosJSON);
                nombres.innerHTML = "Nombre:<div class='info'>"+datosJSON.nombre+"</div>";
                genero.innerHTML = "Genero:<div class='info'>"+datosJSON.genero+"</div>";
                descripcion.innerHTML = "Descripción:<div class='info'>"+datosJSON.descripcion+"</div>";
                publicacion.innerHTML = "Publicación:<div class='info'>"+datosJSON.publicacion+"</div>";
                // personajes.innerHTML = "Personajes: <div class='info'>"+datosJSON.personajes+"</div>"
                texto.style.display = "block";
            }
        });
        
        
    })
    
    

});



