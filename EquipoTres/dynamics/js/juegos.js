const formulario = document.getElementById("formulario");
const botonSopitas = document.getElementById("botonSopitas");
const texTarea = document.getElementById("texTarea");
const contenedor = document.getElementById("contenedor");
const td = document.getElementsByClassName("casilla");

//separa la cadena de palabras en un arreglo de arreglos
function separar(palabras){
    palabras = palabras.toLowerCase();
    arreglo = palabras.split(",");
    for(var i=0; i<arreglo.length; i++){
        arreglo[i] = arreglo[i].split(""); //separa
    }
    arreglo = arreglo.filter((valor) => valor.length != 0);
}

function acomodar(arreglo){
    var y = 0;
    var min = 0;
    var max = 0;
    for (let llave in arreglo){ //controla las palabra
        if (llave % 4 == 0){ //acomoda vertical
            min = 1;
            max = 300;
            y = Math.ceil(Math.random()*(max-min)+min);
            for (let valor of arreglo[llave]){ //controla las letras
                td[y].innerText = valor;
                y += 60;
            }
        } else if (llave % 4 == 3){ //acomoda vertical
            min = 301;
            max = 600;
            y = Math.ceil(Math.random()*(max-min)+min);
            for (let valor of arreglo[llave]){ //controla las letras
                td[y].innerText = valor;
                y += 60;
            }
        } else if (llave % 4 == 2){ //acomoda horizontal
            min = 601;
            max = 900;
            y = Math.ceil(Math.random()*(max-min)+min);
            for (let valor of arreglo[llave]){ //controla las letras
                td[y].innerText = valor;
                y += 1;
            }
        } else if (llave % 4 == 1){ //acomoda horizontal
            min = 901;
            max = 1200;
            y = Math.ceil(Math.random()*(max-min)+min);
            for (let valor of arreglo[llave]){ //controla las letras
                td[y].innerText = valor;
                y += 1;
            }
        }
    }
}

var palabras;
var arreglo;

botonSopitas.addEventListener("click", (evento) => {
    palabras = texTarea.value;
    formulario.style.display = "none";
    contenedor.style.display = "block";
    
    separar(palabras);
    console.log(arreglo);
    console.log(arreglo.length);
    acomodar(arreglo);
    console.log(td);
});

contenedor.addEventListener("click", (evento) => {
    evento.target.style.backgroundColor = "#8C52FF";
});