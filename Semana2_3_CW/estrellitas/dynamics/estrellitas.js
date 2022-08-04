const dibujara = document.getElementById("dibujar");
const picos = document.getElementById("picos");
const picuda = document.getElementById("picuda");
const color = document.getElementById("color");
const relleno = document.getElementById("relleno");
const canvas = document.getElementById("estrella");
const ctx = canvas.getContext("2d");

function dibujar(){
    ctx.fillStyle = "rgb(245, 240, 255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let puntos = picos.value * 2;
    let angulo = Math.PI * 2 / puntos;
    
    let xinicial=450/2;
    let yinicial=450/2;
    let act = false;
    let radio = 0;
    
    // if(picuda.value == 1){
    //     longitud = 50;
    // }
    // else if(picuda.value == 2){
    //     longitud = 70;
    // }
    // else if(picuda.value == 3){
    //     longitud = 90;
    // }
    // else if(picuda.value == 4){
    //     longitud = 110;
    // }
    // else if(picuda.value == 5){
    //     longitud = 130;
    // }

    ctx.beginPath();
    
    for(let i = 0; i < puntos; i++){
        //ctx.moveTo(xinicial, yinicial);
        if(act == false){
            radio = 150;
            act = true;
        }else{
            radio = picuda.value;
            act=false;
        }
        let angulo2 = i * angulo;
        let xSig = radio * Math.cos(angulo2) + xinicial;
        let ySig = radio * Math.sin(angulo2) + yinicial;

        ctx.lineTo(xSig, ySig);
    }
    ctx.closePath();

    ctx.fillStyle = "#000000";
    if(relleno.checked == true){
        ctx.fillStyle = color.value;
        ctx.fill();
    }  
    ctx.strokeStyle = color.value;
    ctx.stroke();
}

dibujara.addEventListener("click", ()=>{

    if(picos.value >= 4 && picos.value <= 30){
        dibujar();
    }else{
        alert("Has alcanzado el mínimo/máximo de picos!! D:");
    }
    
})
    

    

    //console.log(longitud);
    //console.log(angulo);
