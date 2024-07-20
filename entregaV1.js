/*Jose Palacios
Pre-entrega 1 JS 
Encuentra el conejo
*/


intentoNumero = 1;
acertar = false;

const campo = []; // Array de 0 a 20 llenado con booleano false 
for (i = 0; i <= 20; i++) {
  campo[i]=false;
}

function InicioLugar(max) {   // funcion que obtiene un numero aleatorio entre 0 y 50 para definir donde inicia el conejo
    return Math.floor(Math.random() * max);

  }

function saltos() {   // funcion que define cuantos lugares salta en cada turno y hacia donde
    let movimiento = Math.floor(Math.random() * 5);

    if ((lugar - movimiento) >=0 && (lugar + movimiento) <= 20) {

      switch (movimiento) {
        case 0:  
        
          lugar = lugar-2;
          if (campo[lugar]==true) {

            alert("El conejo no se ha movido de su lugar");
            
          } else {

            campo[lugar]=true; 
            alert("El conejo ha saltado dos posiciones a la izquierda"); 
            return lugar;
            
          }
          
  
             break;
    
        case 1:

             lugar = lugar-1;
          if (campo[lugar]==true) {

            alert("El conejo no se ha movido de su lugar");
            
          } else {

            campo[lugar]=true; 
            alert("El conejo ha saltado una posición a la izquierda");
            return lugar; 
            
          }         
  
             break;
        
        case 2:
          alert("El conejo no se ha movido de su lugar");         
 
              break;
      
        case 3:

              lugar = lugar+1;
              if (campo[lugar]==true) {
    
                alert("El conejo no se ha movido de su lugar");
                
              } else {
    
                campo[lugar]=true; 
                alert("El conejo ha saltado una posición a la derecha"); 
                return lugar;
                
              }         
      
                 break;

        case 4:

              lugar = lugar+2;
              if (campo[lugar]==true) {
    
                alert("El conejo no se ha movido de su lugar");
                
              } else {
    
                campo[lugar]=true; 
                alert("El conejo ha saltado dos posiciones a la derecha"); 
                return lugar;
                
              }         
      
                 break; 
    
          }
      
    } else {

      alert("El conejo no se ha movido de su lugar");

    }

  }

let lugar = InicioLugar(20);
campo[lugar]=true;  // Define donde inicia el conejo





/* 
************************************************************
Inicio del juego
************************************************************
*/

alert("Bienvenido al juego de la culebra \nDebes descubrir donde esta el conejo"); 
 

do {

  console.table(campo); // ver la tabla en consola

  let intento = prompt("Escribe un numero del 0 al 20 donde creas que está el conejo"); 
  if (intento == lugar) {
    acertar = true;
    alert("Acertaste");
    alert("Numero de intentos " + intentoNumero);
    
  } else {

    intentoNumero ++;

    if (intento > lugar) {

      alert("El conejo esta a la izquierda: entre 0 y "+ intento );
      saltos();
      
    } else {

      alert("El conejo esta a la derecha: entre " + intento + " y 20" );
      saltos();
      
    }



  }
  
} while (!acertar);


