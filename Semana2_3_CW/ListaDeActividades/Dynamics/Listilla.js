const input = document.getElementById("input");
const agregar = document.getElementById("agrega");
const materia = document.getElementById("materia");
const lista = document.getElementById("lista");
const Otros = document.getElementById("otro");
const boton = document.getElementsByClassName("boton");
const hecha = document.getElementsByClassName("hecha");
var materias = ['Matematicas', 'Física', 'Español', 'Quimica'];

agregar.addEventListener("click", () => {
    if(Otros.value == '') {
        if(input.value != ''){
            lista.innerHTML += '<div>' + materia.value + ': ' + input.value + '<button class="boton">Borrar</button>' + '<button class="hecha">Hecha</button></div>';
        }
        else {
            alert("Primero añade una tarea padrino o.O");
        }
    }
    else if(input.value != ''){
        let i=0;
        let existe=0;
        do{//Esta sección fue posible gracias a la union de neuronas de Gabriel, Mia y yo :D
            if(Otros.value == materias[i])
                existe=1;
                i+=1;
        }while(i<materias.length)
        if(existe==0){
            materia.innerHTML += '<option value= "' + Otros.value + '">' + Otros.value + '</option>';
            lista.innerHTML += '<div>' + Otros.value + ': ' + input.value + '<button class="boton">Borrar</button><button class="Hecha">Hecha</button></div>';
            materias.push(Otros.value);
        }
        else
            lista.innerHTML += '<div">' + Otros.value + ': ' + input.value + '<button class="boton">Borrar</button><button class="Hecha">Hecha</button></div>';    
    }
    else {
        alert("Primero añade una tarea padrino o.O");
    }
    Otros.value='';
    input.value='';
});

lista.addEventListener("click", (evento) => {
        if(evento.target.className === 'boton'){
            evento.target.parentElement.outerHTML = '';
        }
});