
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}


function crearProducto(nombre, precio) {
  return new Producto(nombre, precio);
}


const opcionesCarteras = [
  crearProducto("Cartera Zami", 5000),
  crearProducto("Cartera Nare", 7000),
  crearProducto("Cartera Fanny", 4500),
];

const opcionesCeramicas = [
  crearProducto("Posa saquito de té", 2500),
  crearProducto("Bandeja oval jaspeada", 1800),
  crearProducto("Taza de té vainilla gris", 3200),
];

const opcionesBlanqueria = [
  crearProducto("Conjunto de funda de edredón Florence", 30000),
  crearProducto("Conjunto de funda de edredón Honor", 45000),
  crearProducto("Sábana de seda", 35000),
];

// Funcin principal
function tiendaOnline() {
  console.log("Bienvenid@ a la tienda online!");

  let totalCompra = 0;
  let totalProductos = 0;
  const carrito = [];

  while (true) {
    const menu = "Menú:\n1. Ver catálogo\n2. Ordenar productos por precio\n3. Agregar producto al carrito\n4. Ver carrito de compra\n0. Finalizar compra";

    const opcion = parseInt(prompt(menu));

    switch (opcion) {
      case 1:
        mostrarCatalogo();
        break;
      case 2:
        ordenarProductosPorPrecio();
        break;
      case 3:
        agregarProductoAlCarrito();
        break;
      case 4:
        verCarritoDeCompra();
        break;
      case 0:
        finalizarCompra();
        return; 
      default:
        console.log("Opción no válida.");
        break;
    }
  }

  function mostrarCatalogo() {
    console.log("Catálogo de productos:");
    console.log("Carteras:");
    opcionesCarteras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
    console.log("\nCerámicas:");
    opcionesCeramicas.forEach((producto, index) => {
      console.log(`${index + 1 + opcionesCarteras.length}. ${producto.nombre} - $${producto.precio}`);
    });
    console.log("\nBlanqueria:");
    opcionesBlanqueria.forEach((producto, index) => {
      console.log(`${index + 1 + opcionesCarteras.length + opcionesCeramicas.length}. ${producto.nombre} - $${producto.precio}`);
    });
  }

  function ordenarProductosPorPrecio() {
    const todosLosProductos = [...opcionesCarteras, ...opcionesCeramicas, ...opcionesBlanqueria];
    todosLosProductos.sort((a, b) => b.precio - a.precio);
    console.log("Productos ordenados por precio de mayor a menor:");
    todosLosProductos.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
  }

  function agregarProductoAlCarrito() {
    mostrarCatalogo();
    const opcion = parseInt(prompt("Seleccione un producto para agregar al carrito (0 para volver al menú):"));

    if (opcion === 0) {
      return;
    }

    const opcionesTotales = [...opcionesCarteras, ...opcionesCeramicas, ...opcionesBlanqueria];

    if (opcion >= 1 && opcion <= opcionesTotales.length) {
      const productoSeleccionado = opcionesTotales[opcion - 1];
      const cantidad = parseInt(prompt(`Ingresa la cantidad de ${productoSeleccionado.nombre} que deseas comprar:`));

      if (!isNaN(cantidad) && cantidad > 0) {
        const totalProducto = cantidad * productoSeleccionado.precio;
        totalCompra += totalProducto;
        totalProductos += cantidad;

        // agrgar el producto al carrito
        carrito.push({ producto: productoSeleccionado, cantidad });
        console.log(`Compraste ${cantidad} ${productoSeleccionado.nombre}(s) por un total de $${totalProducto}`);
      } else {
        console.log("Cantidad no válida.");
      }
    } else {
      console.log("Opción no válida.");
    }
  }

  function verCarritoDeCompra() {
    console.log("Contenido del carrito:");
    carrito.forEach((item, index) => {
      console.log(`${index + 1}. ${item.cantidad} ${item.producto.nombre}(s) - $${(item.cantidad * item.producto.precio).toFixed(2)}`);
    });
  }

  function finalizarCompra() {
    console.log(`Resumen de la compra:\nTotal de productos comprados: ${totalProductos}\nTotal de la compra: $${totalCompra.toFixed(2)}`);
    console.log("Gracias por tu compra!!");
    
    
    alert("¡Gracias por tu compra!");
  }
}

// invoco menu
tiendaOnline();
