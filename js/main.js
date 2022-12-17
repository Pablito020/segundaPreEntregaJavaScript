/* ENTRADA > PROCESO > SALIDA*/ /*(Esto es para acordarme el orden)*/

/*Simulacion de listado de productos*/

/* ENTRADA DE DATOS CON ARRAY */
const productos = [
    {id:1, nombre:"Bolitas Chipa c/u", precio:120, stock:100},
    {id:2, nombre:"Pan x Kilo", precio:350, stock:100},
    {id:3, nombre:"Galletas de Grasa x Kilo", precio:180, stock:100},
    {id:4, nombre:"Cremonas x Kilo", precio:140, stock:100},
    {id:5, nombre:"PrePizzas 6 Unidades", precio:480, stock:100},
    {id:6, nombre:"Facturas x Kilo", precio:500, stock:100},
    {id:7, nombre:"Tortas", precio:900, stock:100},
    {id:8, nombre:"Masa Fina", precio:110, stock:100},
    {id:9, nombre:"Masa Seca", precio:400, stock:100},
    {id:10, nombre:"PrePizza c/u", precio:135, stock:100},
    {id:11, nombre:"Churros c/u", precio:80, stock:100},
    {id:12, nombre:"Pebetes", precio:380, stock:100},
    {id:13, nombre:"Pastaflora|Porción", precio:230, stock:100},
    {id:14, nombre:"Tortas fritas c/u", precio:60, stock:100},
    {id:15, nombre:"Brownies c/u", precio:330, stock:100},
    {id:16, nombre:"Lemon Pie", precio:180, stock:100},
    {id:17, nombre:"Budín", precio:350, stock:100},
    {id:18, nombre:"Galletitas Bolsa", precio:320, stock:100},
    {id:19, nombre:"Alfajores|Caja", precio:1400, stock:100},
    {id:20, nombre:"Pan Dulce", precio:620, stock:100}
]; 

/*Aplico un console.log(productos), para ver mi array en la consola*/

console.log(productos);

/*Definicion de array*/

const carrito = [];

/*Aplico un console.log(carrito), para ver luego el array de mi carrito*/

console.log(carrito)

/* Definicion de clase a mis productos*/

class Producto {
    constructor (id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.iva = 21;
    }

    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}

/*Busco mi producto*/

function buscar(id) {

    return (productos.find(item => item.id === id) || null); /*Me devuelve un objeto de mi clase por medio de ID*/

}

/*Declaro una funcion para poder cargar mis productos a la lista*/

function listarProducto(producto) {

    carrito.push(producto);

}

/*Elimino cosas de mi lista con una funcion*/

function borrarProducto(id) {

    let pos = carrito.findIndex(item => item.id === id);

    if (pos > -1) {

        carrito.splice(pos, 1);

    }
}

/*Busco productos en mi lista de productos*/

function navegarProductos() {

    let contenido_productos = "";

    for (let producto of productos) {

        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";

    }

    return contenido_productos;
}

/*Navego por los productos de mi lista*/

function navegarProductosLista() {

    let contenido_productos = "";

    for (let producto of carrito) {

        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";

    }

    return contenido_productos;
}

/*Cargamos productos del catalogo*/

let cargarProducto = true;

/*Cargamos productos en el carrito*/

cargarProducto = true;

while (cargarProducto) {

    let contenido_productos = navegarProductos();

    /*Ponemos la ID del Producto*/

    let id_producto = parseInt(prompt("Seleccione el Producto a agregar al Simulador Carrito:\n\n" + contenido_productos))

    /*Buscarmos por medio ID*/

    let producto = buscar(id_producto);

    /*Verificamos si el producto es valido*/

    if (producto != null) {

    /*Agrego el posible producto al Carrito*/

        listarProducto(producto);

    } else {

        alert("No existe el Producto con el ID, Vuelve a Ingresar un Numero!");

    }
    
   /*Agregamos un producto mas?*/

    cargarProducto = confirm("Desea agregar un Producto al Carrito?");
}

   /*Eliminamos productos que no queremos o pusimos sin querer en el listado del carrito*/

    cargarProducto = true;

    while (cargarProducto) {

    let contenido_productos = navegarProductosLista();

    /*Busco mi producto mediante una ID*/

    let id_producto = parseInt(prompt("Seleccione el Producto que desee eliminar del Carrito: (0 - Salir)\n\n" + contenido_productos));

    /*Buscamos si el producto existe*/

    if (id_producto > 0) {

    /*Utilizo la funcion de Borrar*/

        borrarProducto(id_producto);

    } else {

        alert("No existe el Producto con el ID!");
        
    }
    
    /*Le propondremos al usuario si quiere eliminar algun producto del carrito*/

    cargarProducto = confirm("Desea eliminar un Producto del Carrito?");
}

    /*Imprimimos la suma total al carrito*/

    let suma = 0;

    let contenido_productos = "";

    for (let prod of carrito) {

    /*Creamos una nueva variable*/

    let producto = new Producto(prod.id, prod.nombre, prod.precio, prod.stock);

    /*Aplicamos iva nuevamente*/

    producto.aplicarIVA();

    contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";

    /* Sumo al Contador "Suma Total" el valor precio del producto*/

    suma += producto.precio;

}

    /*Total del carrito + iva*/

    alert("Productos Seleccionados:\n\n" + contenido_productos + "\n\nTotal a Pagar: $" + suma);