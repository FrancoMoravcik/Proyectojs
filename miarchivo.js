/*DOM Y EVENTOS EN PRODUCTOS*/

/*
class Producto {
    constructor(id, imagen, nombre, precio, clase, cantidad) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.clase = clase;
        this.cantidad = cantidad;
    }
}
*/
/*
const asus1 = new Producto(1, "img/Asus5.webp", "Notebook Asus X515ea 15 Fhd Corei5 8gb", 198000, "imgJs1", 1);
const hp1 = new Producto(2, "img/hp3.webp", "Notebook Hp Probook 450 G8 i7 8gb", 448000, "imgJs2", 1);
const apple1 = new Producto(3, "img/apple3.webp", "Notebook Macbook Pro M1", 790000, "imgJs3", 1);
const lenovo3 = new Producto(4, "img/lenovo6.webp", "Notebook Lenovo Legion 16 Q R7 32gb", 650000, "imgJs4", 1);
const asus3 = new Producto(5, "img/asus6.webp", "Notebook Asus Rog Zephyryus R9 16gb", 626000, "imgJs5", 1);
const hp3 = new Producto(6, "img/hp2.webp", "Notebook Hp Celeron 4gb", 151000, "imgJs6", 1);
const dell2 = new Producto(8, "img/dell2.webp", "Notebook Dell G15 Ryzen 7 16gb", 347000, "imgJs7", 1);
const samsung1 = new Producto(7, "img/samsung1.webp", "Notebook Samsung Galaxy Book Pro 360 2en 1", 270000, "imgJs8", 1);

const arrayProductos = [asus1, hp1, apple1, lenovo3, asus3, hp3, samsung1, dell2];
*/

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
    <a href="productoi.html"><button class="boton1B1SPJs">COMPRAR</button></a>
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
}) 
})


const carrito = [];
const aniadirAlCarrito = (id) => {
    const producto = productosFetch.find(producto => producto.id === id)
    const productoEnElCarito = carrito.find(producto => producto.id === id)
    if (productoEnElCarito) {
        productoEnElCarito.cantidad++;
    } else {
        carrito.push(producto)
    }
}
//console.log(carrito)

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
    const producto = carrito.find(producto => producto.id === id);
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