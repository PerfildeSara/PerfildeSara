const paginaCompleta = document.querySelector('body'); 
const cambiarTema = document.querySelector('#cambiarTema');
const botonUnoFunFacts = document.querySelector('#botonUno');
const botonDosFunFacts = document.querySelector('#botonDos');
const botonTresFunFacts = document.querySelector('#botonTres');

cambiarTema.addEventListener('click', llenarDeColor);
botonUnoFunFacts.addEventListener('click', activarFunFacts);
botonDosFunFacts.addEventListener('click', activarFunFacts);
botonTresFunFacts.addEventListener('click', activarFunFacts);


let fondoOscuro = true;
let fondoColorido = false;

function llenarDeColor(){  
    paginaCompleta.classList.toggle('colorido'); 
    paginaCompleta.classList.remove('respuestaOscura','respuestaColorida');
    fondoOscuro = !fondoOscuro; 
    fondoColorido = !fondoColorido; 

    return fondoColorido + fondoOscuro + console.log(fondoColorido, fondoOscuro);     
}

function activarFunFacts(){
    if (fondoColorido == true && fondoOscuro == false){
        paginaCompleta.classList.add('respuestaColorida');
        console.log("click en estado colorido"); 
    }
    else if(fondoOscuro == true && fondoColorido == false){
        paginaCompleta.classList.add('respuestaOscura');
        console.log("click en estado oscuro"); 
    }
}

const limpiarFunFactsClean = document.querySelector('.cleanUp');
limpiarFunFactsClean.addEventListener('click', limpiarFunFacts);

function limpiarFunFacts(){
    paginaCompleta.classList.remove('respuestaOscura','respuestaColorida');
}
/*---------------------------------------------------------------------------------------------------------------------------




const botones = Array.from(document.getElementById('#botonesFunFactsOpciones').children);

botones.forEach(button =>{
    button.addEventListener('click', ({}) =>{
        paginaCompleta.classList.toggle('cualEsLaCorrecta');
    })
})

*/