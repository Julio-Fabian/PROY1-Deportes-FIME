// Este es el JavaScript del carrusel main.
const slider = document.querySelector("#slider"); // es el slider.
let sliderSection = document.querySelectorAll(".slider__section"); // arreglo de las 9 imagenes
let sliderSectionLast = sliderSection[sliderSection.length - 1]; // ultimo elemento 0..8 (para que sea infinito)

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); // intercambiamos el ultimo al primero.


function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]; // tomamos el primero
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__section"); // arreglo de las 9 imagenes
    let sliderSectionLast = sliderSection[sliderSection.length - 1]; // tomamos el ultimo
    
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function() {
    moverDerecha();
});

btnLeft.addEventListener('click', function() {
    moverIzquierda();
});

// funcionamiento automatico.
setInterval(function() {
    moverDerecha();
}, 5000);
