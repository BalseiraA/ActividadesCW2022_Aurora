fetch("../php/peticiones/grupo.php")
    .then((response)=>{
        return response.json();
    })
    .then((datosJSON) => {
        if(datosJSON){
            console.log(datosJSON);

            let selectGrupos = document.getElementById("grupo");
            for(let grupo of datosJSON){
                selectGrupos.innerHTML+="<option value='"+ grupo.Turno_ID +"'>" + grupo.Grupo_ID + "</option>";
            }  
        }
        
    })

// const crear = document.getElementById("crear");

// crear.addEventListener("click", ()=>{


// })