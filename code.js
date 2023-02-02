const paginaCompleta = document.querySelector('body'); 
const cambiarTema = document.querySelector('#cambiarTema');

const botonUnoFunFacts = document.querySelector('#botonUno');
const botonDosFunFacts = document.querySelector('#botonDos');
const botonTresFunFacts = document.querySelector('#botonTres');
const botonFunFactsClean = document.querySelector('.cleanUp');

cambiarTema.addEventListener('click', llenarDeColor);
botonUnoFunFacts.addEventListener('click', activarFunFacts);
botonDosFunFacts.addEventListener('click', activarFunFacts);
botonTresFunFacts.addEventListener('click', activarFunFacts);
botonFunFactsClean.addEventListener('click', limpiarFunFacts);

let coloridoActivada = false;


function llenarDeColor(){  
    paginaCompleta.classList.toggle('colorido'); 
    coloridoActivada = !coloridoActivada; 
    return coloridoActivada + console.log(coloridoActivada);     
}

function activarFunFacts(){
    if (coloridoActivada == true){
        paginaCompleta.classList.add('cualEsLaCorrectaColorido');
    }
    if(coloridoActivada == false){
        paginaCompleta.classList.add('cualEsLaCorrecta');
    }
}


function limpiarFunFacts(){
    if (coloridoActivada == true){
        paginaCompleta.classList.remove('cualEsLaCorrectaColorido');
    }
    if(coloridoActivada == false){
        paginaCompleta.classList.remove('cualEsLaCorrecta');
    }
}


/*---------------------------------------------------------------------------------------------------------------------------
const botones = Array.from(document.getElementById('#botonesFunFactsOpciones').children);

botones.forEach(button =>{
    button.addEventListener('click', ({}) =>{
        paginaCompleta.classList.toggle('cualEsLaCorrecta');
    })
})

*/