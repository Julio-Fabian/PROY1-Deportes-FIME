const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;
let step = 1; // velocidad de movimiento (desplazamiento de 'step' pixeles)
let maxScrollLeft = (carrusel.scrollWidth - carrusel.clientWidth);

// funciona mediante un intervalo.
const start = () => {
    // inicializamos el intervalo.
    intervalo = setInterval(function () {
        carrusel.scrollLeft += step;

        // revisamos si llegamos al maximo scroll y retornamos al inicio.
        if(carrusel.scrollLeft === maxScrollLeft) {
            step = -1;
        }

        // cuando este en el inicio invertimos el paso del desplazamiento en positivo
        if(carrusel.scrollLeft === 0) {
            step = 1;
        }

    }, 10);
}

/*
// cuando seleccionamos la imagen se detiene
const stop = () => {
    clearInterval(intervalo); // esto es un evento del mouse.
}

// evento del mouse.
//                                     // funcion de flecha como las lambda en Java
carrusel.addEventListener('mouseover', () => {
    // cuando colocas el mouse en cima, se detiene
    stop();
});

carrusel.addEventListener('mouseout', () => {
    // cuando colocas el mouse fuera, reanudas el movimiento
    start();
}); */

////////////////////// MAIN //////////////////////////////////////////////////

start();