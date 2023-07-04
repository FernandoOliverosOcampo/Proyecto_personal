import Controlador from "./controladorjs/inicio_sesion_controlador.js";

const boton_ingreso = document.getElementById("btn_ingreso");
const boton_registro = document.getElementById("btn_registro");

const Vista = {
  getDatosIniciarSesion() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    return {
      email,
      password
    };
  },

  mostrarMensajeError() {
    alert("ERROR AL INICIAR SESION");
  },

  mostrarMensajeSatisfactorio() {
    console.log("Inicio de sesión satisfactorio");
  },

  limpiarCampos() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
  },

  redirigirAIndex() {
    location.href = "./paginas/principal.html";
  }
};

// Eventos
boton_ingreso.addEventListener('click', () => {
  Controlador.iniciarSesion();
});

boton_registro.addEventListener('click', () => {
  window.location.href = "./paginas/registro_datos.html";
});

export default Vista;
