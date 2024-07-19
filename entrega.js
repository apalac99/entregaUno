/*Jose Palacios
Pre-entrega 1 JS 
Encuentra el conejo
*/




const campo = []; // de 0 a 50
for (i = 0; i <= 50; i++) {
  campo[i]=false;
}

function getRandomInt(max) {   // funcion que obtiene un numero aleatorio entre 0 y 50
    return Math.floor(Math.random() * max);

  }

lugar = getRandomInt(50);
campo[lugar]=true;
console.table(campo);


intentoNumero = 1;

//alert("Bienvenido al juego de la culebra \nDebes descubrir donde esta el conejo"); 
 


do {
  intento = prompt("Intento", intentoNumero + " Escribe un numero del 0 al 50 donde creas que está el conejo");  // propmt
  
} while (  );


