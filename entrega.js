/*Jose Palacios          
* Pre-entrega 1 JS 
* Encuentra el conejo
*
*
* El juego consiste en encontrar el conejo escondido entre los numeros del 1 a una opción elegida 
* el conejo puede saltar a la derecha o la izquierda entre cada turno, o no cambiar de posición.
* el conejo no cambiará de posicion a una ya elegida anteriormente por el usuario. 
* no hay límite de intentos. Al final te indica cuantos intentos realizó el usuario
*
*
* En la consola se puede ver el progreso del array con las posiciones elegidas y la posición del conejo
*/


opcionNumeroMaximo = 10; // enytre 0 y que numero sejugará

let intentoNumero = 1;
let acertar = false;

traerRecord = localStorage.getItem("record");

const campo = []; // Array de 0 hasta ek numero maximo llenado con booleano false - Registra las posiciones usadas (posicion 0 no sera usada)
for (i = 0; i <= opcionNumeroMaximo; i++) {
  campo[i]=false;
}

function InicioLugar(max) {   // funcion que obtiene un numero aleatorio para definir donde inicia el conejo
  return Math.floor(Math.random() * max);

}

function verificarDatos(){
  let numeroElegido = prompt(`Escribe un numero del 1 al ${opcionNumeroMaximo} donde creas que está el conejo`);

  if (!isNaN(numeroElegido)) {     // si elige un número

      while (numeroElegido < 1 || numeroElegido > opcionNumeroMaximo || isNaN(numeroElegido)) {   //opciones por si elige despues de un numero no valido, un NaN      
          numeroElegido = prompt(`No es un número válido. \nDebe ser entre 1 y ${opcionNumeroMaximo}. Intenta de nuevo`);
      }

      return numeroElegido;
     
  } else {         // si elige un NaN

      while (isNaN(numeroElegido)||(numeroElegido < 1 || numeroElegido > opcionNumeroMaximo)) {   //opciones por si elige despues de un NaN un numero no válido
          if (isNaN(numeroElegido)) {
              alert("No es una opcion válida. Por favor, inténtalo de nuevo");               
          }else{
              alert(`No es un número válido. \nDebe ser entre 1 y ${opcionNumeroMaximo}. Intenta de nuevo`);
          }
          numeroElegido = prompt("Ingresa un número válido");             
          }
      }     
      return numeroElegido;     
  }

function conejoQuieto(){
  alert ("El conejo se ha quedado en el mismo lugar");
  console.log(lugarDondeEsta);
}

function cuantosSaltos() {   // funcion que define cuantos lugares salta en cada turno y hacia donde
  let cuantoSalta = Math.floor(Math.random() * 4);  // definiendo cunatos espacios salta (entre 0 y 3)
  let direcciondeSalto = Math.floor(Math.random() * 2);  // definiendo direccion del salto 
  
  if (cuantoSalta == 0 
    || direcciondeSalto==0 &&  (lugarDondeEsta - cuantoSalta)<1 
    || direcciondeSalto==1 &&  (lugarDondeEsta + cuantoSalta)>opcionNumeroMaximo
  ) {

    conejoQuieto()

  } else {

    if (direcciondeSalto==0) {       // izquierda

      if (campo[lugarDondeEsta - cuantoSalta]==true) {

        conejoQuieto()
        
      } else {
        lugarDondeEsta = lugarDondeEsta - cuantoSalta;
        alert ( "Ahora el conejo ha saltado "+ cuantoSalta+ " espacios a la izquierda")
        console.log(lugarDondeEsta);
        
      }
    
  
    } else {   // derecha

      if (campo[lugarDondeEsta + cuantoSalta]==true) {

        conejoQuieto()
        
      } else {

      lugarDondeEsta = lugarDondeEsta + cuantoSalta;
      alert ( "Ahora el conejo ha saltado "+ cuantoSalta+ " espacios a la derecha")
      console.log(lugarDondeEsta);
        
      }     
  
    }

  }

}



let lugarDondeEsta = InicioLugar(opcionNumeroMaximo)+1;  // para eliminar la posicion 0 y quede rango de 1 a 20
console.log("El conejo esta en la posicion "+lugarDondeEsta);  //posicion donde se encuentra el conejo     
console.log("El record es "+ traerRecord);  // record   



/*************************************************************
Inicio del juego
*************************************************************/





function run(){

  alert(`Bienvenido al juego del conejo \n\nInstrucciones: \nDebes descubrir en que número del 1 al ${opcionNumeroMaximo} se encuentra el conejo \n\nEl conejo algunas veces cambia de posición, pero nunca saltará a una posición anteriormente seleccionada `); 
 

  
  do {

  console.table(campo); // ver la tabla en consola

  let intento = verificarDatos(); 

  if (intento == lugarDondeEsta) {
    acertar = true;
    alert("Acertaste");
    alert("Numero de intentos " + intentoNumero);



    if (traerRecord == null || traerRecord > intentoNumero) {
      
      localStorage.setItem("record", intentoNumero);

      alert(` *********** Nuevo record *********** \n  ${intentoNumero} intentos`)

      
    } 

    

    setTimeout(function() {
      location.reload(); // Reinicia el juego despues de 200 ms
  }, 200);
    
  } else {

    intentoNumero ++;
    campo[intento]=true;

    if (intento > lugarDondeEsta) {

      alert("Réstale" );
      cuantosSaltos();
      
    } else {

      alert("Súmale");
      cuantosSaltos();     
    }
  } 
} while (!acertar);

}