// Declaracion de productos
const productos = [
  { nombre: "Cartera", precio: 5000 },
  { nombre: "Sábana", precio: 30000 },
  { nombre: "Cerámica", precio: 2500 },
];

// Funcion principal
function tiendaOnline() {
  console.log("Bienvenid@ a la tienda online!");

  let totalCompra = 0;
  let totalProductos = 0;
  let salirMenu = false;

  do {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
      mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    mensaje += "Ingrese el número del producto que desea comprar (0 para finalizar la compra):";

    const opcion = parseInt(prompt(mensaje));

    switch (opcion) {
      case 0:
        console.log(`Resumen de la compra:\nTotal de productos comprados: ${totalProductos}\nTotal de la compra: $${totalCompra.toFixed(2)}`);
        console.log("Gracias por tu compra!!");
        salirMenu = true;
        // muestra un prompt con el total de la compra
        prompt(`Total de la compra: $${totalCompra.toFixed(2)}\nGracias por Tu compra!`);
        break;
      default:
        if (opcion >= 1 && opcion <= productos.length) {
          const productoSeleccionado = productos[opcion - 1];
          const cantidad = parseInt(prompt(`Ingresa la cantidad de ${productoSeleccionado.nombre} que deseas comprar:`));
          if (!isNaN(cantidad) && cantidad > 0) {
            const totalProducto = cantidad * productoSeleccionado.precio;
            totalCompra += totalProducto;
            totalProductos += cantidad;
            console.log(`Compraste ${cantidad} ${productoSeleccionado.nombre}(s) por un total de $${totalProducto}`);
          } else {
            console.log("Cantidad no válida.");
          }
        } else {
          console.log("Opción no válida.");
        }
        break;
    }
  } while (!salirMenu);
}

// Invoco menu
tiendaOnline();
