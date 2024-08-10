
  

////////////////////////////////////////////////////////////
//ejemplo de aplicacion

  // Array que muestra los productos que tiene la tienda a disposicion
  const arregloTest = [
    { title: 'Huevos', valorProducto: 1200, url:'./assets/img/huevos.jpg'},
    { title: 'Mantequilla', valorProducto: 2000, url:'./assets/img/mantequilla.jpg'},
    { title: 'Leche', valorProducto: 1000, url:'./assets/img/leche.jpg'},
    { title: 'Verduras', valorProducto: 2500, url:'./assets/img/verduras.jpg'},
    { title: 'carne', valorProducto: 8000 , url:'./assets/img/carne.jpg'},
    { title: 'Jugo', valorProducto: 1100 , url:'./assets/img/jugo.jpg'} 
];

//const miCarrito =new Carrito();

//declaro las variables globales
const listaProductos = [];

console.log(arregloTest );

var sumaGlobalcarrito=0;
 
// Función para generar las tarjetas en el HTML
function generadorTarjetas() {
    const container = document.getElementById('contenedor_tarjetas');
    container.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas tarjetas

    let cont_indice = 0;

    for (i = 0; i < arregloTest.length; i++) {

        console.log(arregloTest[i].title);

        const codigoTarjetaHTML = `  
<div class="card">
<img src="${arregloTest[i].url}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${arregloTest[i].title}</h5>
<p class="card-text"> <b>Precio $:</b> ${arregloTest[i].valorProducto}    </p>
<button onclick=" agregarProducto(${[i]})"
class="btn btn-warning" > Agregar Producto</button>
</div>
</div>   
`;
        container.innerHTML += codigoTarjetaHTML;

        //  <button onclick=" agregarProducto(${arregloTest[i].title}, ${arregloTest[i].valorProducto})"
    }


} //fin generadorTarjetas()
 
 
 
//  Accediendo a elementos índice:
//necesario para mostrar las tarjeta de productos
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
        <p class="card-text">${arregloTest[num].valorProducto} </p>

      </div>   
    `;
    container.innerHTML += codigoTarjetaHTML;
 
///////////////////////////////////////////
 

}
  

//Crea una clase Producto con los atributos ‘nombre’ y ‘precio’. (2 puntos)
// Definición de la clase   (ECMA6)

class Producto{
    constructor(nombreProducto, precioProducto ){
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        //this.cantidadProducto = cantidadProducto;
 
 
    }
}
 

 //agregarProducto(${arregloTest[i].title}, ${arregloTest[i].valorProducto})

 //Crea una función que permita agregar productos al carrito. (3 puntos)

 function agregarProducto(indiceArregloProductosInput){
     console.log("entro a agregarProducto");

 
     //este es el indice del arreglo que contiene los productos originales
     //con el objetivo de consultar luego los atributos que lo componen (nombre, valor)
     let indiceArregloProductos = indiceArregloProductosInput;

     //creo instancia de ProductoSeleccionado
     const miProductoSeleccionado = new Producto(arregloTest[indiceArregloProductos].title,
         arregloTest[indiceArregloProductos].valorProducto);

     //creo instancia de Carrito
     const miCarrito = new Carrito();
 

     // Envio a miCarrito el array miProductoSeleccionado ;
     miCarrito.almacenarProductosSeleccionados(miProductoSeleccionado);
 
     console.log("\n miProductoSeleccionado = ");
     console.log("miProductoSeleccionado es = " + miProductoSeleccionado.nombreProducto);
     console.log("con valor = " + miProductoSeleccionado.precioProducto);
     console.log("----------------------------------------\n ");

   //almaceno la variable del largo del indice de la lista de productos
      let largoArregloProductos=listaProductos.length;
       document.getElementById('contenedorIcono').textContent = 
       ` ${largoArregloProductos} `;
 
 
     //muestra el resumen de lo que hay en el carrito
     miCarrito.resumenProducto();

     //Calcula el total de la compra.
     miCarrito.calculaTotalCompra();

 
 }
 
    // Symbol para identificar al Carrito
    var simboloCarrito= Symbol('id');  

//Crea la clase Carrito que tenga como atributo un arreglo 
//para almacenar los productos seleccionados. (2 puntos)

class Carrito {
    constructor() {
        this.idCarrito = null;

        this.listaProductos = listaProductos;

        this.sumaTotalCarrito = 0;

        // ID del carrito usando Symbol
        this[simboloCarrito] = 'carrito_' + (listaProductos.length + 1); 

        console.log("Entro a carrito");

        this.almacenarProductosSeleccionados = function (miProductoSeleccionado) {

            //adiciono al arreglo listaProductos el producto seleccionado en el HTML
            listaProductos.push(miProductoSeleccionado);

        }
  //////////////////////////////////////////////////////////////////////////////////////////
  //esta seccion de codigo es para mostrar por consola
  //los elementos que componen a listaProductos  
        this.resumenProducto = function () {

            console.log("listaProductos")

            let cadena = '\n';
            for (i = 0; i < listaProductos.length; i++) {

                cadena += "\n" + "nombreProducto : " + this.listaProductos[i].nombreProducto  
                + " precioProducto: " + this.listaProductos[i].precioProducto;

            }//fin for 

            //cadena que muestra cada uno de los elementos del arreglo
            console.log(" cadena listaProductos \n = " + cadena)
 
           //alert( "cadena listaProductos \n ="  + cadena);//ddborrar
          
        }
  //////////////////////////////////////////////////////////////////////////////////////////
 // Crea una función que permita calcular el total de la compra. (2 puntos)
        this.calculaTotalCompra = function () {

            let sumaTotalCarrito = 0;
            //recorro el arreglo y resuelvo la suma de todos los valores 
            //correspondientes al precio del producto
            for (i = 0; i < this.listaProductos.length; i++) {
                sumaTotalCarrito += this.listaProductos[i].precioProducto 
            }//fin for 

            sumaGlobalcarrito=sumaTotalCarrito;
             
            console.log(" Total Carritos \n = " + sumaTotalCarrito) 
            
        }// fin this.resumenProducto

    }//fin constructor 

}//fin class Carrito

            // Obtén una referencia al botón oculto y al botón que lo mostrará
            const botonOculto = document.getElementById('miBoton');
            const botonMostrar = document.getElementById('mostrarBoton');
    
            botonMostrar.addEventListener('click', function() {
                // Cambia el estilo del botón oculto para mostrarlo
                botonOculto.style.display = 'block';
            });

// Función para irCarrito()
function irCarrito() {

        // Obtén una referencia al botón que se ocultará y al botón de ocultar
        const botonParaOcultar = document.getElementById('mostrarBoton');
        botonParaOcultar.style.display = 'none';

 

    if( listaProductos.length==0){
        alert(`Debes comprar al menos un producto 
        antes de ir al carrito`)
        location.reload();
    }
    //se limpia el contenedor de tarjetas para dar paso a la informacion del carrito
    const container = document.getElementById('contenedor_tarjetas');
    container.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas tarjetas
    
    //tituloPagina
    const tituloPagina = document.getElementById('tituloPagina');
    tituloPagina.innerHTML = 'Carrito de Compras'; // Limpia el contenedor antes de añadir nuevas tarjetas

    const containerCarrito = document.getElementById('contenedor_carrito');
    containerCarrito.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas tarjetas
    
    //let cadenaCarro = "<table ><tbody>"; // Inicia la tabla y el cuerpo de la tabla
    let cadenaCarro = `<hr><hr><br><br><table class="table-bordered"`+`><tbody>` ; // Inicia la tabla y el cuerpo de la tabla
    
    for (let i = 0; i < listaProductos.length; i++) {
        // Cada producto debe estar en una fila de la tabla
        cadenaCarro += "<tr>";
        cadenaCarro += `
            <td>${listaProductos[i].nombreProducto}</td>
            <td>${listaProductos[i].precioProducto}</td>
        `;
        cadenaCarro += "</tr>";
    }
    cadenaCarro += "<tr><td>------------</td><td>+------------</td></tr>";
    cadenaCarro += "<tr>";
    cadenaCarro += `<td> <b>Total de la compra</b> </td>`
    cadenaCarro += `<td> <b> ${sumaGlobalcarrito} </b></td>`
    cadenaCarro += "</tr>";

    cadenaCarro += "</tbody></table>"; // Cierra el cuerpo de la tabla y la tabla
    
    containerCarrito.innerHTML = cadenaCarro;
 

} //fin irCarrito()
 

function terminarCompra(){
    alert(`Compra finalizada con exito!!!`)
    //se refresca toda la pagina y vuelve al punto de partida con 
    //las tarjetas de productos
    location.reload();
 }




/*
1.- Lee atentamente el siguiente enunciado:
Imagina que estás construyendo una aplicación para que los usuarios gestionen su compra de supermercado. Deberás implementar un sistema que permita agregar productos al carrito, ver el total de la compra, aplicar descuentos y finalizar la compra.
2.- Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
•
ok Crea una clase Producto con los atributos ‘nombre’ y ‘precio’. (2 puntos)
•
ok Crea la clase Carrito que tenga como atributo un arreglo para almacenar los productos seleccionados. (2 puntos)
•
ok Crea una función que permita agregar productos al carrito. (3 puntos)
•
Crea una función que permita calcular el total de la compra. (2 puntos)
•
Crea una función que permita finalizar la compra. (2 puntos)
•
Crea una función que permita mostrar los detalles de la compra. (2 puntos)
•
Valida que los datos que se ingresen correspondan con los productos vendidos y, de lo contrario, vuelve a solicitar al usuario que ingrese la información hasta que sea correcta. (2 puntos)
•
Permite que el usuario siga agregando productos al carrito hasta que decida no continuar agregando más. (3 puntos).
•
Verifica que código esté bien estructurado, siga buenas prácticas y sea fácil de entender. (2 puntos)
•
Puntaje máximo: 20 puntos.
*/









// Llama a la función para generar las tarjetas cuando la página carga
window.onload = generadorTarjetas;


//


