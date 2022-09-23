/*TRABAJO SIMULADOR INTERACTIVO*/
/*
let nombreIngresado = prompt("Ingrese su nombre");


for (let i = 0; i <= 10; i++) {
    if(nombreIngresado != "") {
       alert("bienvenido " + nombreIngresado)
       break;
    }else{
        prompt("Porfavor ingrese su nombre");
    }
}


let marcaIngresado = (prompt("Ingrese la marca de notebook que desea comprar(Asus, Apple, Samsung, Dell, Hp o Lenovo)"));
let modoIngresado = prompt("Indicanos de que modo desea abonarla(Tarjeta de Credito o Debito, Efectivo o transferencia bancaria)");



for (let i = 1; i <= 2; i++) {
    if(marcaIngresado != "" && modoIngresado != ""){
         alert("Usted compro una notebook " + marcaIngresado + " y la pago con: " + modoIngresado );
         break;
}else{
    (prompt("Porfavor Ingrese la marca de notebook que desea comprar(Asus, Apple, Samsung, Dell, Hp o Lenovo) "));
    prompt("Porfavor Indicanos de que modo desea abonarla(Tarjeta de Credito o Debito, Efectivo o transferencia bancaria)"); 
}
    }
    */


    /*
    let nombre = prompt("Ingrese su nombre")
while(nombre == ""){
    nombre = prompt("Porfavor ingrese su nombre")
}while(nombre !== ""){
    alert("hola " + nombre + " Bienvenido/a a nuestra pagina!")
    break
}

let suma = (a,b) => {return a + b}

let precioApple = 299999
let precioDell = 347699
let precioHp = 151981
let precioAsus = 232888 
let envio = 720

let compra = "quiero comprar"
let noCompra = "no gracias"

    let marca = prompt("Que marca te gustaria comprar? las opciones que tenemos a dia de hoy son: Apple, Dell, Hp y Asus")
switch (marca) {
    case "apple" : 
    alert("La notebook de marca Apple tiene un precio de $" + precioApple + " Con el envio quedaria en $" + suma(precioApple, envio)),
    confirmacionDeCompra = prompt("Para confirmar compra escribe (quiero comprar), caso contrario escribe (no gracias)");
    if (confirmacionDeCompra == compra) {
        alert("Felicidades " + nombre +  " compraste un notebook APPLE")
    }else if(confirmacionDeCompra == noCompra) {
        alert("Lo esperamos la proxima, hasta luego " + nombre + "!");
    }
    break;

    case "dell" :
        alert("La notebook de marca Dell tiene un precio de $" + precioDell + " Con el envio quedaria en $" + suma(precioDell, envio)),
        confirmacionDeCompra = prompt("Para confirmar compra escribe (quiero comprar), caso contrario escribe (no gracias)");
        if (confirmacionDeCompra == compra) {
            alert("Felicidades " + nombre +  " compraste un notebook DELL")
        }else if(confirmacionDeCompra == noCompra) {
            alert("Lo esperamos la proxima, hasta luego " + nombre + "!")
        }
        break;

        case "hp" :
        alert("La notebook de marca Hp tiene un precio de $" + precioHp + " Con el envio quedaria en $" + suma(precioHp, envio)),
        confirmacionDeCompra = prompt("Para confirmar compra escribe (quiero comprar), caso contrario escribe (no gracias)");
        if (confirmacionDeCompra == compra) {
            alert("Felicidades " + nombre +  " compraste un notebook HP")
        }else if(confirmacionDeCompra == noCompra) {
            alert("Lo esperamos la proxima, hasta luego " + nombre + "!")
        }
        break;

        case "asus" :
            alert("La notebook de marca Asus tiene un precio de $" + precioAsus + " Con el envio quedaria en $" + suma(precioAsus, envio)),
            confirmacionDeCompra = prompt("Si esta seguro de que quieres comprar escribe (quiero comprar), caso contrario escribe (no gracias)");
            if (confirmacionDeCompra == compra) {
                alert("Felicidades " + nombre +  " compraste un notebook ASUS")
            }else if(confirmacionDeCompra == noCompra) {
                alert("Lo esperamos la proxima, hasta luego " + nombre + "!")
            }
            break;

            default : {
                marca = prompt("Que marca te gustaria comprar? las opciones que tenemos a dia de hoy son: Apple, Dell, Hp y Asus")
            } break;
    }
    */






    /*TRABAJO ARRAYS*/
/*
  class producto { 
        constructor(marca, memoriaRam, sistemaOperativo, precio){
            this.marca = marca;
            this.memoriaRam = memoriaRam;
            this.sistemaOperativo = sistemaOperativo;
            this.precio = precio;
        }

        sumarEnvio (envio){
        this.precio = this.precio + envio;
        }
    }
*/
/*
    const apple = new producto ("Apple", "16Gb", "Apple M1 8-Core CPU", 294999);
    const dell = new producto ("Dell", "8Gb", "AMD Ryzen 7", 379142);
    const lenovo = new producto ("Lenovo", "4Gb", "Intel Celeron", 71999);
    const hp = new producto ("Hp", "8Gb", "Intel core i5", 264859);

    const listaProductos = [apple, dell, lenovo, hp]
    //console.log(listaProductos);
*//*
    listaProductos.push(asus =/*EN ESTE CASO NO HACE FALTA EL (ASUS =)*//* new producto("Asus", "16Gb", "Intel Core i7", 199.225))*/
    //console.log(listaProductos)*/
    
/*
   function sumarEnvioAlPrecio (array){
    for(producto of array){
        if(producto.marca === "Dell"){
            producto.sumarEnvio(850)
        }else if(producto.marca === "Hp"){
            listaProductos.splice(3,1)
        }
    }
   }

   sumarEnvioAlPrecio(listaProductos)
   console.log(listaProductos)
   */
   

   /*PRIMER ENTREGA PROYECTO FINAL*/
   /*
class producto {
    constructor (nombre, memoriaRam, procesador, precio){
    this.nombre = nombre;
    this.memoriaRam = memoriaRam;
    this.procesador = procesador;
    this.precio = precio;
    }}
 
    const apple = new producto ("Apple", "16Gb", "Apple M1 8-Core CPU", 294999);
    const dell = new producto ("Dell", "8Gb", "AMD Ryzen 7", 379142);
    const lenovo = new producto ("Lenovo", "4Gb", "Intel Celeron", 71999);
    const hp = new producto ("Hp", "8Gb", "Intel core i5", 264859);
    const asus = new producto ("Asus", "16Gb", "Intel Core i7", 199.225);
  
const arrayProductos = []

function marcarOpcion (){
    alert("Bienvenido")
    let primerasOpciones = parseInt(prompt("Ingrese una opcion: \n 1)Ver productos \n 2)Salir"))
    return primerasOpciones
}


function verProductos (){
    let segundasOpciones = parseInt(prompt("Ingrese el numero para agregar al carrito: \n 1) Apple \n 2) Dell \n 3) Lenovo \n 4) Hp \n 5) Asus \n 6) Salir"))
    return segundasOpciones
}

function compraRealizadaApple(){
    alert("felicidades compraste una notebook APPLE" )
}

function compraRealizadaDell(){
    alert("felicidades compraste una notebook DELL" )
}

function compraRealizadaLenovo(){
    alert("felicidades compraste una notebook LENOVO" )
}

function compraRealizadaHp(){
    alert("felicidades compraste una notebook Hp" )
}

function compraRealizadaAsus(){
    alert("felicidades compraste una notebook ASUS" )
}

switch (marcarOpcion()) {
    case 1 :
      verProductos();
      break;
        case 2 : 
        alert("Gracias por visitar nuestra pagina")
        break;
}

let listaProductosParaElegir = verProductos()
switch (listaProductosParaElegir) {
    case 1 :
        arrayProductos.push(apple)
        console.log(arrayProductos)
        let preguntaApple1 = prompt("Quieres ver el producto o ir a comprar? responder con (ver producto) (comprar)");{
           if (preguntaApple1 == "ver producto") {
           let preguntaApple2 = prompt("Elegiste una notebook Apple de 16GB de memoria RAM, Procesador M1 8-Core CPU con un precio de $294999 \n Quieres comprar? responder con si o con no");{
                if(preguntaApple2 == "si"){
                    compraRealizadaApple()
                }else if(preguntaApple2 == "no"){
                    alert("Gracias por visitar nuestra pagina")
            }
            }
           }else if (preguntaApple1 == "comprar"){
            compraRealizadaApple()
           }
        }
        break;
        case 2 :
            arrayProductos.push(dell)
            console.log(arrayProductos)
         let preguntaDell1 = prompt("Quieres ver el producto o ir a comprar? responder con (ver producto) (comprar)");{
           if (preguntaDell1 == "ver producto"){
            let preguntaDell2 = prompt("Elegiste una notebook Dell de 8GB de memoria RAM, Procesador AMD Ryzen 7 con un precio de $379142 \n Quieres comprar? responder con si o con no");{
                if (preguntaDell2 == "si"){
                    compraRealizadaDell()
                }else if (preguntaDell2 == "no"){
                    alert("Gracias por visitar nuestra pagina")
                }
            }
           }else if(preguntaDell1 == "comprar"){
            compraRealizadaDell()
           }
        }
        break;
        case 3 :
            arrayProductos.push(lenovo)
            console.log(arrayProductos)
            let preguntaLenovo1 = prompt("Quieres ver el producto o ir a comprar? responder con (ver producto) (comprar)");{
                if (preguntaLenovo1 == "ver producto"){
                 let preguntaLenovo2 = prompt("Elegiste una notebook Lenovo de 4GB de memoria RAM, Procesador Intel Celeron con un precio de $71999 \n Quieres comprar? responder con si o con no");{
                     if (preguntaLenovo2 == "si"){
                         compraRealizadaLenovo()
                     }else if (preguntaLenovo2 == "no"){
                         alert("Gracias por visitar nuestra pagina")
                     }
                 }
                }else if(preguntaLenovo1 == "comprar"){
                 compraRealizadaLenovo()
                }
             }
        break;
        case 4 :
            arrayProductos.push(hp)
            console.log(arrayProductos)
            let preguntaHp1 = prompt("Quieres ver el producto o ir a comprar? responder con (ver producto) (comprar)");{
                if (preguntaHp1 == "ver producto"){
                 let preguntaHp2 = prompt("Elegiste una notebook HP de 8GB de memoria RAM, Procesador Intel core i5 con un precio de $264859 \n Quieres comprar? responder con si o con no");{
                     if (preguntaHp2 == "si"){
                         compraRealizadaHp()
                     }else if (preguntaHp2 == "no"){
                         alert("Gracias por visitar nuestra pagina")
                     }
                 }
                }else if(preguntaHp1 == "comprar"){
                 compraRealizadaHp()
                }
             }
        break;
        case 5 :
            arrayProductos.push(asus)
            console.log(arrayProductos)
            let preguntaAsus1 = prompt("Quieres ver el producto o ir a comprar? responder con (ver producto) (comprar)");{
                if (preguntaAsus1 == "ver producto"){
                 let preguntaAsus2 = prompt("Elegiste una notebookaAsus de 16GB de memoria RAM, Procesador Intel Core i7 con un precio de $199.225 \n Quieres comprar? responder con si o con no");{
                     if (preguntaAsus2 == "si"){
                         compraRealizadaAsus()
                     }else if (preguntaAsus2 == "no"){
                         alert("Gracias por visitar nuestra pagina")
                     }
                 }
                }else if(preguntaAsus1 == "comprar"){
                 compraRealizadaAsus()
                }
             }
        break;
        case 6 : 
        alert("Gracias por visitar nuestra pagina")
        break;
}
*/

/*TRABAJO CON DOM*/

const seccion2Productos = document.getElementById("seccion2Productos");

class Producto {
    constructor (imagen, nombre, precio) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
       
    } 
}

const asus1 = new Producto("img/Asus5.webp" ,"Notebook Asus X515ea 15 Fhd Corei5 8gb", 199.220);
const hp1 = new Producto("img/hp3.webp","Notebook Hp Probook 450 G8 i7 8gb", 448.120);
const apple1 = new Producto("img/apple3.webp", "Notebook Macbook Pro M1", 799.999);
const apple3 = new Producto("img/apple2.jpg", "Notebook Macbook Air M1 Space Gray", 294.999);
const lenovo3 = new Producto("img/lenovo6.webp" ,"Notebook Lenovo Legion 16 Q R7 32gb", 649.999);
const apple2 = new Producto("img/apple1.jpg", "Notebook Macbook Air M1 Silver", 294.999);
/**/const lenovo1 = new Producto("img/lenovo5.webp" ,"Notebook Lenovo 2 en 1 Ideapad D33010.1 Celeron", 71.999);
/**/const asus2 = new Producto("img/asus1.webp", "Notebook Asus X515ea 15 Fhd Core i7 8gb", 232.880);
/**/const hp2 = new Producto("img/hp4.webp " ,"Notebook Hp Victus 15.6 i5 8gb", 264.859);
/**/const lenovo2 = new Producto("img/lenovo4.webp","Notebook Lenovo E14 Fhd i5 16gb", 385.150);
/**/const asus3 = new Producto("img/asus6.webp","Notebook Asus Rog Zephyryus R9 16gb", 626.259);
/**/const hp3= new Producto("img/hp2.webp", "Notebook Hp Celeron 4gb", 151.980);
/**/const dell1 = new Producto("img/dell1.webp","Notebook Dell g15 Core i7 16GB", 379.140);
/**/const dell2 = new Producto("img/dell2.webp", "Notebook Dell G15 Ryzen 7 16gb", 347.6999);
//const samsung1 = new Producto("img/samsung1.webp","Notebook Samsung Galaxy Book Pro 360 2en 1", 269.999);

const arrayProductos = [asus1, hp1, apple1, apple2, lenovo3, dell2];

arrayProductos.forEach(Producto => {
    const cajaProducto = document.createElement("div");
cajaProducto.className = "cajaProducto"
    cajaProducto.innerHTML = `<a class="aB1SPJs">Hasta en 12 cuotas sin interes</a>
    <img class="img4SPJs" src="${Producto.imagen}">
    <h3 class="h3B3SPJs">${Producto.nombre}</h3>
    <p class="pB3SP">$${Producto.precio}</p>
    <a href="productoi.html"><button class="boton1B1SPJs">COMPRAR</button></a>
    <button class="boton2B1SPJs">Añadir al carrito </button>`

    seccion2Productos.appendChild(cajaProducto)

})


/*TRABAJO CON EVENTOS*/
