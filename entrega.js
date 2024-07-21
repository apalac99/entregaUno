/*Jose Palacios          
* Pre-entrega 1 JS 
* Encuentra el conejo
*
*
* El juego consiste en encontrar el conejo escondido entre los numeros del 1 al 20 
* el conejo puede saltar a la derecha o la izquierda entre cada turno, o no cambiar de posición.
* el conejo no cambiará de posicion a una ya elegida anteriormente por el usuario. 
* no hay límite de intentos. Al final te indica cuantos intentos realizó el usuario
*
*
* En la consola se puede ver el progreso del array con las posiciones elegidas y la posicion del conejo
*/

let intentoNumero = 1;
let acertar = false;

const campo = []; // Array de 0 a 20 llenado con booleano false - Registra las posiciones usadas (posicion 0 no sera usada)
for (i = 0; i <= 20; i++) {
  campo[i]=false;
}

function InicioLugar(max) {   // funcion que obtiene un numero aleatorio para definir donde inicia el conejo
  return Math.floor(Math.random() * max);

}

function verificarDatos(){
  let x = prompt("Escribe un numero del 1 al 20 donde creas que está el conejo");

  if (!isNaN(x)) {     // si elige un número

      while (x < 1 || x > 20 || isNaN(x)) {   //opciones por si elige despues de un numero no valido, un NaN      
          x = prompt("No es un número válido. \nDebe ser entre 1 y 20. Intenta de nuevo");
      }

      return x;
     
  } else {         // si elige un NaN

      while (isNaN(x)||(x < 1 || x > 20)) {   //opciones por si elige despues de un NaN un numero no válido
          if (isNaN(x)) {
              alert("No es una opcion válida. Por favor, inténtalo de nuevo");               
          }else{
              alert("No es un número válido. \nDebe ser entre 1 y 20. Intenta de nuevo");
          }
          x = prompt("Ingresa un número válido");             
          }
      }     
      return x;     
  }

function quieto(){
  alert ("El conejo se ha quedado en el mismo lugar");
  console.log(lugardondeesta);
}

function saltos() {   // funcion que define cuantos lugares salta en cada turno y hacia donde
  let cuantobrinca = Math.floor(Math.random() * 4);  // definiendo cunatos espacios salta (entre 0 y 3)
  let Ndireccion = Math.floor(Math.random() * 2);  // definiendo direccion del salto 
  
  if (cuantobrinca == 0 
    || Ndireccion==0 &&  (lugardondeesta - cuantobrinca)<1 
    || Ndireccion==1 &&  (lugardondeesta + cuantobrinca)>20
  ) {

    quieto()

  } else {

    if (Ndireccion==0) {       // izquierda

      if (campo[lugardondeesta - cuantobrinca]==true) {

        quieto()
        
      } else {
        lugardondeesta = lugardondeesta - cuantobrinca;
        alert ( "Ahora el conejo ha saltado "+ cuantobrinca+ " espacios a la izquierda")
        console.log(lugardondeesta);
        
      }
    
  
    } else {   // derecha

      if (campo[lugardondeesta + cuantobrinca]==true) {

        quieto()
        
      } else {

      lugardondeesta = lugardondeesta + cuantobrinca;
      alert ( "Ahora el conejo ha saltado "+ cuantobrinca+ " espacios a la derecha")
      console.log(lugardondeesta);
        
      }     
  
    }

  }

}

let lugardondeesta = InicioLugar(20)+1;  // para eliminar la posicion 0 y quede rango de 1 a 20
console.log("El conejo esta en la posicion "+lugardondeesta);  //posicion donde se encuentra el conejo     




/*************************************************************
Inicio del juego
*************************************************************/





function run(){

  alert("Bienvenido al juego del conejo \n\nInstrucciones: \nDebes descubrir en que número del 1 al 20 se encuentra el conejo \n\nEl conejo algunas veces cambia de posición, pero nunca saltará a una posición anteriormente seleccionada "); 
 

  
  do {

  console.table(campo); // ver la tabla en consola

  let intento = verificarDatos(); 

  if (intento == lugardondeesta) {
    acertar = true;
    alert("Acertaste");
    alert("Numero de intentos " + intentoNumero);
    setTimeout(function() {
      location.reload(); // Reinicia el juego despues de 200 ms
  }, 200);
    
  } else {

    intentoNumero ++;
    campo[intento]=true;

    if (intento > lugardondeesta) {

      alert("Réstale" );
      saltos();
      
    } else {

      alert("Súmale");
      saltos();     
    }
  } 
} while (!acertar);

}