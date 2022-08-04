const botonAnadir = document.getElementById("anadir");
const espacio = document.getElementById("espacio-Trabajo");
let formulario = document.createElement("form");
let celda = document.createElement("fieldset");
let input1 = document.createElement("input");
let texto = document.createElement("textarea");
let input2 = document.createElement("input");
let fecha = document.createElement("input");



botonAnadir.addEventListener("click",() =>
{
    botonAnadir.style.display = "none";
    formulario.setAttribute("id", "añadirTareas");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Título del material");
    texto.setAttribute("rows", "10");
    texto.setAttribute("cols", "100");
    texto.setAttribute("placeholder", "Descripción");
    texto.setAttribute("id", "descripcion");
    input2.setAttribute("type", "file");
    input2.setAttribute("placeholder", "Archivos a compartir");
    input2.setAttribute("multiple", "");
    fecha.setAttribute("type", "date");

    console.log("Añadir tarea");
    celda.innerHTML += '<h2>AÑADIR NUEVO MATERIAL</h2>'
    espacio.append(formulario);
    formulario.append(celda);
    celda.append(input1);
    celda.innerHTML += '<br><br>';
    celda.append(texto);
    celda.innerHTML += '<br><br>';
    celda.append(input2);
    celda.innerHTML += '<br><br>Tipo de material: <select><option value="material">Material de estudio</option><option value="asignacion">Asignación</option></select><br><br>';
    celda.innerHTML += 'Fecha de entrega';
    celda.append(fecha);
    celda.innerHTML += '<br><br><button id="Publicar">Publicar</button>';
});

const publicar = document.getElementById("Publicar");
publicar.addEventListener("click", ()=>
{
    console.log("tarea publicada");
    botonAnadir.style.display = "block";
});