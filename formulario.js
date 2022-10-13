
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

const form = document.getElementById("formContacto")

form.addEventListener("submit", (e) => {
    e.preventDefault();
      const nombreContacto = document.getElementById("nombreContacto").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const comentario = document.getElementById("comentario").value;

    const consultaNueva = new Consulta(nombreContacto, apellido, email, numero, comentario)
    consultas.push(consultaNueva);
    form.reset();
}
)

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
      <p class="pFormularioEnContacto">Nombre: ${consulta.nombreContacto}</p>
      <p class="pFormularioEnContacto">Apellido : ${consulta.apellido}</p>
      <p class="pFormularioEnContacto">Email : ${consulta.email}</p>
      <p class="pFormularioEnContacto">Numero  ${consulta.numero}</p>
      <p class="pFormularioEnContacto">Consulta : ${consulta.comentario}</p> 
      ` ;
      contenedorFormulario.appendChild(divConsulta);
    })
}

