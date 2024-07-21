/*Jose Palacios          
Pre-entrega 1 JS 
Encuentra el conejo
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
console.log(lugardondeesta);  //posicion donde se encuentra el conejo     










/*************************************************************
Inicio del juego
*************************************************************/

alert("Bienvenido al juego del conejo \nDescubre donde esta el conejo"); 
alert("Instrucciones \nDebes descubrir donde esta el conejo \nEl conejo algunas veces cambia de posición, pero nunca brincará a una posición que ya seleccionaste "); 
 

do {

  console.table(campo); // ver la tabla en consola

  

  let intento = prompt("Escribe un numero del 1 al 20 donde creas que está el conejo"); 




  if (intento == lugardondeesta) {
    acertar = true;
    alert("Acertaste");
    alert("Numero de intentos " + intentoNumero);
    
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