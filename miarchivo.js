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

    const apple = new producto ("Apple", "16Gb", "Apple M1 8-Core CPU", 294999);
    const dell = new producto ("Dell", "8Gb", "AMD Ryzen 7", 379142);
    const lenovo = new producto ("Lenovo", "4Gb", "Intel Celeron", 71999);
    const hp = new producto ("Hp", "8Gb", "Intel core i5", 264859);

    const listaProductos = [apple, dell, lenovo, hp]
    //console.log(listaProductos);

    listaProductos.push(asus = new producto("Asus", "16Gb", "Intel Core i7", 199.225))
    //console.log(listaProductos)

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