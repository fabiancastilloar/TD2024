
//Eq7: Ejercicio 1 y 2

//EXERCISE 1: CREACIÓN DE UNA MATRIZ Y COMPRENSIÓN DE SU ITERADOR


var nombreArray = ['dato1', 87243, false, 'dato4', 'datoObjeto'];

console.log(nombreArray); //datos del array deben estar definidos
//antes de su impresion en pantalla

// alt 91 []
// alt 123 {}

var refrigerador = ['Huevos', 'Mantequilla', 'Leche',
 'Verduras', 'Carne','Jugo'];
// 6 elementos


// Tamaño del array:
console.log(`El tamaño de la matriz 'refrigerador' es
${refrigerador.length}`);

console.log(refrigerador);

// Accediendo a elementos índice:
/*
console.log(`Índice 0 es ${refrigerador[0]}`);
console.log(`Índice 1 es ${refrigerador[1]}`);
console.log(`Índice 2 es ${refrigerador[2]}`);
console.log(`Índice 3 es ${refrigerador[3]}`);
console.log(`Índice 4 es ${refrigerador[4]}`);
console.log(`Índice 5 es ${refrigerador[5]}`);
*/

//
console.log(`iterando los indices con for `);
 
 
for(i=0; i < refrigerador.length ;i++){
    console.log(`Índice refrigerador[i] es : ${refrigerador[i]}`); 
}
 
 
// Accediendo a elementos índice:
console.log(`Vamos a acceder al penúltimo elemento:
${refrigerador[refrigerador.length - 2]}`)


console.log(`\n indexOf() Buscar elemento en array y nos devuelve el indice:`)

var refrigerador = 
['Huevos', 'Mantequilla', 'Leche', 'Verduras', 'Carne',
'Jugo'];
//Verduras se encuentra en el índice 3.
//Buscamos el índice:
console.log(`Verduras se encuentra en el índice
'${refrigerador.indexOf('Verduras')}'`);

console.log(`queso se encuentra en el índice
'${refrigerador.indexOf('queso')}'`); //devuelve -1 si No lo encuentra


//EXERCISE 2: MÉTODOS DEL OBJETO ARRAY
console.log(`\n\n EXERCISE 2: MÉTODOS DEL OBJETO ARRAY `);

console.log(`\n  eliminar un elemento del 
final de una matriz, utilizamos el método pop() `);

var closet = ['abrigos', 'camisas', 'poleras', 'zapatos', 'zapatillas',
'pantalones', 'traje'];

console.log(closet);

// Eliminar un elemento del final de una matriz ( .pop() )
console.log(`\n Eliminamos último elemento .pop() : '${closet.pop()}, 
ahora el tamaño de la matriz: es '${closet.length}'`);
console.log(closet);


// Adicionamos un elemento del final de una matriz ( .push() )

console.log(`\n Agregamos un elemento .push()  ${closet.push('Cortavientos')}, 
el elemento agregado es ${closet[closet.length-1 ]} 
ahora el tamaño de la matriz: es  ${closet.length}'`);
console.log(closet);

 
// Eliminar primer elemento de una matriz ( .shift()  ) 
console.log(`\n Original`);
console.log(closet);
console.log(`\n Eliminamos el primer elemento: .shift() 
'${closet.shift()}'`);
console.log(closet);


////////////////////////////////////////////////////////////
//ejemplo de aplicacion

  // Array de ejemplo
  const arregloTest = [
    { title: 'Huevos', text: 'informacion', url:'./assets/img/huevos.jpg'},
    { title: 'Mantequilla', text: 'informacion', url:'./assets/img/mantequilla.jpg'},
    { title: 'Leche', text: 'informacion', url:'./assets/img/leche.jpg'},
    { title: 'Verduras', text: 'informacion', url:'./assets/img/verduras.jpg'},
    { title: 'carne', text: 'informacion' , url:'./assets/img/carne.jpg'},
    { title: 'Jugo', text: 'informacion' , url:'./assets/img/jugo.jpg'} 
];

console.log(arregloTest );

 
// Función para generar las tarjetas
function generadorTarjetas() {
    const container = document.getElementById('contenedor_tarjetas');
    container.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas tarjetas
 
    let cont_indice =0;

 
 
for(i=0; i < arregloTest.length; i++ ){

console.log(arregloTest[i].title);

const codigoTarjetaHTML = `  
<div class="card">
  <img src="${arregloTest[i].url}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${arregloTest[i].title}</h5>
  <p class="card-text">${arregloTest[i].text}  indice:${i} </p>
  </div>
</div>   
`;
container.innerHTML += codigoTarjetaHTML;

}


} 
 
 
function largoArray(){
    //console.log(arregloTest );
alert(`El largo del arreglo es ${arregloTest.length}`);
console.log(`El largo del arreglo es ${arregloTest.length}`);
}
 

function mostrarElementosArray(){

    let cadena="";

    /*
for(i=0; i < refrigerador.length ;i++){    
    console.log(`\n Índice refrigerador[i] es : ${refrigerador[i]}`); 
    cadena += `\n Índice refrigerador[i] es : ${refrigerador[i]}`;
};
*/

for(i=0; i < arregloTest.length ;i++){    
    console.log(`\n Índice ${[i]} [i] es : ${arregloTest[i].title}`); 
    cadena += `\n Índice  ${[i]}  es : ${arregloTest[i].title}`;
};
 
alert(`cadena:  ${cadena}`);
console.log(`cadena:  ${cadena}`);
}



//  Accediendo a elementos índice:
/*
console.log(`Vamos a acceder al penúltimo elemento:
${arregloTest[arregloTest.length  - 2]}`)
*/
function accederElementoIndice(){
    let num = Number(prompt(`Ingresa el numero del Indice `));
    //num=num-1;
    console.log(num);
    alert(`El elemento del indice:  ${arregloTest[num].title}
    
    `);

///////////////////////////////////////////
    const container = document.getElementById('contenedor_tarjetas');
    container.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas tarjetas
 
 
    const codigoTarjetaHTML = `  
      <div class="card">
        <img src="${arregloTest[num].url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${arregloTest[num].title}</h5>
        <p class="card-text">${arregloTest[num].text}</p>
        </div>
      </div>   
    `;
    container.innerHTML += codigoTarjetaHTML;
 
///////////////////////////////////////////
 

}
console.log(`\n  eliminar un elemento del 
final de una matriz, utilizamos el método pop() `);

function eliminarIndiceFinal(){

    arregloTest.pop();
    generadorTarjetas();
}

////////////////////////////
////////////////////////////
















// Llama a la función para generar las tarjetas cuando la página carga
// window.onload = generadorTarjetas;


//


