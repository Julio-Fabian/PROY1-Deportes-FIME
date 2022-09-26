const carruselI = document.querySelector(".carruselI");
let intervalo2 = null;
let step2 = 1; // velocidad de movimiento (desplazamiento de 'step' pixeles)
let maxScrollLeft2 = (carruselI.scrollWidth - carruselI.clientWidth);

// funciona mediante un intervalo.
const start2 = () => {
    // inicializamos el intervalo.
    intervalo2 = setInterval(function () {
        carruselI.scrollLeft += step2;

        // revisamos si llegamos al maximo scroll y retornamos al inicio.
        if(carruselI.scrollLeft === maxScrollLeft2) {
            step2 = -1;
        }

        // cuando este en el inicio invertimos el paso del desplazamiento en positivo
        if(carruselI.scrollLeft === 0) {
            step2 = 1;
        }

    }, 10);
}


// cuando seleccionamos la imagen se detiene
const stop2 = () => {
    clearInterval(intervalo2); // esto es un evento del mouse.
}


// evento del mouse.
//                                     // funcion de flecha como las lambda en Java
carruselI.addEventListener('mouseover', () => {
    // cuando colocas el mouse en cima, se detiene
    stop2();
});

carruselI.addEventListener('mouseout', () => {
    // cuando colocas el mouse fuera, reanudas el movimiento
    start2();
}); 

////////////////////// MAIN //////////////////////////////////////////////////

start2();