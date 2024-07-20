/*Jose Palacios
Pre-entrega 1 JS 
Encuentra el conejo
*/


let intentoNumero = 1;
let acertar = false;
let direccion;

const campo = []; // Array de 0 a 20 llenado con booleano false - Registra las posiciones usadas (posicion 0 no sera usada)
for (i = 0; i <= 20; i++) {
  campo[i]=false;
}

function InicioLugar(max) {   // funcion que obtiene un numero aleatorio para definir donde inicia el conejo
  return Math.floor(Math.random() * max);

}

function saltos() {   // funcion que define cuantos lugares salta en cada turno y hacia donde
  let cuantobrinca = Math.floor(Math.random() * 4);  // definiendo cunatos espacios salta (entre 0 y 3)
  let Ndireccion = Math.floor(Math.random() * 2);  // definiendo direccion del salto 
  if (Ndireccion==0) {
    direccion = "izquierda";
  } else {
    direccion = "derecha";
  }
  //console.log(direccion);
  //console.log(cuantobrinca);

  

}

let lugardondeesta = InicioLugar(20)+1;  // para eliminar la posicion 0 y quede rango de 1 a 20
console.log(lugardondeesta);  //posicion donde se encuentra el conejo     










/* 
************************************************************
Inicio del juego
************************************************************
*/

alert("Bienvenido al juego de la culebra \nDebes descubrir donde esta el conejo"); 
 

do {

  console.table(campo); // ver la tabla en consola

  let intento = prompt("Escribe un numero del 1 al 20 donde creas que está el conejo"); 
  if (intento == lugar) {
    acertar = true;
    alert("Acertaste");
    alert("Numero de intentos " + intentoNumero);
    
  } else {

    intentoNumero ++;
    campo[intento-1]=true;


    if (intento > lugar) {

      alert("El conejo esta a la izquierda: entre 1 y "+ intento );
      saltos();
      
    } else {

      alert("El conejo esta a la derecha: entre " + intento + " y 20" );
      saltos();
      
    }



  }
  
} while (!acertar);