/*DOM Y EVENTOS EN PRODUCTOS*/

const divProductos = document.getElementById("divProductos");
const productosEnJson = "json/archivo.json"
let productosFetch

fetch(productosEnJson)
.then(respuesta => respuesta.json())
.then(datos => {
datos.forEach(producto => {
    productosFetch= datos.slice(0)
    const cajaProducto = document.createElement("div");
    cajaProducto.className = "cajaProducto";
    cajaProducto.innerHTML = `<a class="aB1SPJs">Hasta en 12 cuotas sin interes</a>
    <img class="${producto.clase}" src="${producto.imagen}">
    <h3 class="h3B3SPJs fs-5">${producto.nombre}</h3>
    <p class="pB3SP">$${producto.precio}</p>
    <button id="btnCompra ${producto.id}" class="boton1B1SPJs">COMPRAR</button>
    <button id="btn ${producto.id}" class="boton2B1SPJs">Añadir al carrito </button>`;
    divProductos.appendChild(cajaProducto);


     const btn = document.getElementById(`btn ${producto.id}`)
    btn.addEventListener("click", () => {
        aniadirAlCarrito(producto.id)
        Toastify({
            text: "Añadiste un producto al carrito",
            gravity: "bottom",
            duration: 1500,
            close: true,
            style: {
                background: "linear-gradient(to right, #2c6e49, #4ab679)"
            }
        }).showToast();
    })
    
    const btnCompra = document.getElementById(`btnCompra ${producto.id}`)
btnCompra.addEventListener("click", () => {
    Swal.fire({
        title: `Compraste este producto por $${producto.precio}`,
        icon: "success",
         confirmButtonText: "Aceptar",
})
})
}) 
})

const carrito = [];
const aniadirAlCarrito = (id) => {
    const producto = productosFetch.find(producto => producto.id === id)
    const productoEnElCarrito = carrito.find(producto => producto.id === id)
    if (productoEnElCarrito) {
        productoEnElCarrito.cantidad++;
    } else {
        carrito.push(producto)
    }
}

const botonCompraDelCarrito = document.getElementById("botonCompraDelCarrito")
botonCompraDelCarrito.addEventListener("click", comprarProductos)

function comprarProductos (){
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    })
Swal.fire({
    title: `Compraste todos productos por $${total}`,
    icon: "success",
     confirmButtonText: "Aceptar",
}).then((resultado) => {
    if(resultado.isConfirmed){
        carrito.splice(0, carrito.length);
actualizarCarrito();
}
})
}


//console.log(carrito)
const botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", actualizarCarrito)

const carritoDeCompras = document.getElementById("carritoDeCompras");
const verProductosEnCarrito = document.getElementById("verProductosEnCarrito");

verProductosEnCarrito.addEventListener("click", actualizarCarrito);

function actualizarCarrito() {
    let aux = "";
    carrito.forEach(producto => {
        aux += `
        <div class="carritoDeCompras">
        <div class="boxcarritoDeComprasImg">
        <img class="${producto.clase} img-fluid" src="${producto.imagen}">
        </div>
        <div class="boxcarritoDeCompras">
        <h3 class="h3B3SPJs">${producto.nombre}</h3>
        <p class="pB3SP">$${producto.precio}</p>
        </div>

        <button id="btnEliminarDelCarrito" onClick = "eliminarDelCarrito(${producto.id})" class="boton2B1SPJs btnEliminarDC">Eliminar del Carrito </button>  
        </div>
        `
    })

    carritoDeCompras.innerHTML = aux;
}


function toastifyBoton(){
    Toastify({
        text: "Eliminaste un producto del carrito",
        gravity: "bottom",
        duration: 1500,
        close: true,
        style: {
            background: "linear-gradient(to right, #2c6e49, #4ab679)"
        }
    }).showToast();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id == id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
    toastifyBoton();
}

const montoDeLaCompra = document.getElementById("montoDeLaCompra")

const btnMontoCompra = document.getElementById("btnMontoCompra")

btnMontoCompra.addEventListener("click", verMonto)

function verMonto() {
    let monto = 0;
    carrito.forEach(producto => {
        monto += producto.precio * producto.cantidad;
    })
    montoDeLaCompra.innerHTML = monto
}

const vaciarCarrito = document.getElementById("vaciarCarrito")

if(vaciarCarrito)
vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: "Seguro que quieres vaciar el carrito?",
        icon: "warning",
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        showCancelText: "Cancelar",
        showCancelColor: "#2c6e49",
    }).then((resultado) => {
        if(resultado.isConfirmed){
            carrito.splice(0, carrito.length);
    actualizarCarrito();
    Swal.fire({
        title: "Ya no tienes productos en el carrito",
        icon: "succes",
        confirmButtonText: "Aceptar",
    })
            }

    })

}) 