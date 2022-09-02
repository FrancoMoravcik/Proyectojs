
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