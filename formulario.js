

class Consulta {
    constructor(nombreContacto, apellido, email, numero, comentario) {
        this.nombreContacto = nombreContacto;
        this.apellido = apellido;
        this.email = email;
        this.numero = numero;
        this.comentario = comentario;
    }
}


const consultas = [];

if(localStorage.getItem("consultas")){
    let consulta = JSON.parse(localStorage.getItem("consultas"))
    for(let i = 0; i < consulta.length; i++){
        consultas.push(consulta[i])
    }
}

const form = document.getElementById("formContacto")

botonContacto = document.getElementById("botonContacto")
botonContacto.addEventListener("click", () =>{
Toastify({
    text: "Ya enviaste tu consulta",
    duration: 2000,
    gravity:"bottom",
    close: true,
    style:{
        background: "linear-gradient(to right, #2c6e49, #4ab679)",
    },
}).showToast();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarConsulta();
})

function agregarConsulta() {
    const nombreContacto = document.getElementById("nombreContacto").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const comentario = document.getElementById("comentario").value;

    const consultaNueva = new Consulta(nombreContacto, apellido, email, numero, comentario)
    consultas.push(consultaNueva);

    localStorage.setItem("consultas", JSON.stringify(consultas));
    form.reset();
}

const contenedorFormulario = document.getElementById("contenedorFormulario");
const verMensaje = document.getElementById("verMensaje");

verMensaje.addEventListener("click", () => {
    mostrarConsultas();
    
})



function mostrarConsultas() {
    contenedorFormulario.innerHTML = "";
    consultas.forEach(consulta => {
        const divConsulta = document.createElement("div");
        divConsulta.innerHTML = `
      
      <p>Nombre: ${consulta.nombreContacto}</p>
      <p>Apellido: ${consulta.apellido}</p>
      <p>Email: ${consulta.email}</p>
      <p>Numero: ${consulta.numero}</p>
      <p>Consulta: ${consulta.comentario}</p>
      <button id="btnEliminarConsulta">Eliminar consulta</button
 
      ` ;
      contenedorFormulario.appendChild(divConsulta);
    })
const btnEliminarConsulta = document.getElementById("btnEliminarConsulta")

if(btnEliminarConsulta)
btnEliminarConsulta.addEventListener("click", () => {
    eliminarConsulta()
})

function eliminarConsulta(){
    contenedorFormulario.remove()
    localStorage.clear()
}

   
}

