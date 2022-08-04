const tabla = document.getElementById("tabla");
const bombi = document.getElementsByClassName("bombi");
var tablero = [];
var muerte = 0;
var colocar;
let fila;
let col;
let cuenta = 0;
let time= 0;


function minas(){
    for(let i = 0; i<8; i++){
        tablero.push([]);
        for(let j=0; j<8; j++){
            tablero[i].push(0);
        }
    }
    for (fila=0; fila <8 ; fila++) { 
        for (col=0; col <8 ; col++) {
            if(muerte != 10){
                colocar=Math.floor(Math.random()*4);
                if(colocar === 1){
                    tablero[fila][col]= 9;
                    muerte+=1;
                }
                else{
                    tablero[fila][col]= 0;
                }
            }
            else{
                tablero[fila][col]= 0;
            }
            
        }
    }
}
function crear(){
    console.log(tablero);
    for (fila=0; fila <8 ; fila++) { 
        for ( col=0; col <8 ; col++) {
            if(tablero[fila][col]==9){
                if(fila-1>=0 && col-1>=0)
                    if(tablero[fila-1][col-1]!==9 && fila-1>=0 && col-1>=0){
                        tablero[fila-1][col-1]+=1;
                    }
                if(fila-1>=0)
                    if(tablero[fila-1][col]!=9 && fila-1>=0){
                        tablero[fila-1][col]+=1;
                }
                if(fila-1>=0 && col+1<=7)
                    if(tablero[fila-1][col+1]!=9 && fila-1>=0 && col+1<=7){
                        tablero[fila-1][col+1]+=1;
                }
                if(col-1>=0)
                    if(tablero[fila][col-1]!=9 && col-1>=0){
                        tablero[fila][col-1]+=1;
                }
                if(col+1<=7)
                    if(tablero[fila][col+1]!=9 && col+1<=7){
                        tablero[fila][col+1]+=1;
                }
                if(fila+1<=7 && col-1>=0)
                    if(tablero[fila+1][col-1]!=9 && fila+1<=7 && col-1>=0){
                        tablero[fila+1][col-1]+=1;
                }
                if(fila+1<=7)
                    if(tablero[fila+1][col]!= 9 && fila+1<=7){
                        tablero[fila+1][col]+=1;
                }
                if(fila+1<=7 && col+1<=7)
                    if(tablero[fila+1][col+1]!= 9 && fila+1<=7 && col+1<=7){
                        tablero[fila+1][col+1]+=1;
                }
            }
        }
    }
    for (fila=0; fila <8 ; fila++) { 
        var cadena = '<tr>';
        for (col=0; col <8 ; col++) {     
            if(tablero[fila][col] == 9){
                cadena += "<td class='bombi'></td>";
            }
            else{ 
                cadena += "<td class='taLibre' value='" + tablero[fila][col] + "'>" + tablero[fila][col] + "</td>";
            } 
        }
        cadena += '</tr>';
        tabla.innerHTML+= cadena;
    }
}
minas();
crear();
function timer(){  
    var t=setTimeout("timer()",1000);  
    time++;  
}

// tabla.addEventListener("mouseover", (evento) => {
//     if(evento.target.className != 'taMarcada' && evento.target.className != 'taAbierta')
//         evento.target.className = "mouseover";
// })
// tabla.addEventListener("mouseout", (evento) => {
//     if(evento.target.className != 'taMarcada' && evento.target.className != 'taAbierta')
//         evento.target.className = "taLibre";
// })

tabla.addEventListener("click", (evento) => {
    if(evento.target.className == 'bombi'){
        evento.target.className = 'muerte';
        //console.log("muerte");
        
        let reset = confirm("Te has intoxicado!! ¿Desea jugar de nuevo?");
            if(reset){
                tabla.innerHTML='';
                muerte=0;
                minas();
                crear();
            }
    }
    if(evento.target.className === 'taLibre'){
        evento.target.className = 'taAbierta';
        abiertas++;
        console.log('libre');
    }
});
tabla.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
    if(evento.target.className == 'taLibre')
        evento.target.className = "taMarcada";
    if(evento.target.className == 'bombi'){
        evento.target.className = "taMarcada";
        cuenta++;
        console.log(cuenta);
    }
    if(cuenta == 10){
    let ganao = confirm("¡¡Felicidades!! Has ganado!! ¿Jugar de nuevo?");
    if(ganao){
        tabla.innerHTML='';
        cuenta=0;
        muerte=0;
        minas();
        crear();
        console.log("has ganao");
    }
}
})

