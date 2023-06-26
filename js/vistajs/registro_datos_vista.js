//importaciones
import Controlador from "../controladorjs/registro-datos-controlador.js";

//fin importaciones
const inputField = document.querySelector('.input-field');
const inputLabel = document.querySelector('.input-label');
const btnvolver = document.getElementById('btn_volver')
btnvolver.addEventListener('click', () => {
  window.location.href = "../index.html";
})
//dom
const btnenviar = document.getElementById('btn_enviar');

btnenviar.addEventListener('click', () => {
  console.log("estoy haciendo click")

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: "Deseas ingresar los datos a la BD",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const nombreFormulario = document.getElementById('nombre').value;
      const apellidoFormulario = document.getElementById('apellido').value;
      const usuarioFormulario = document.getElementById('usuario').value;
      const contraseñaFormulario = document.getElementById('contraseña').value;
      //Controlador.insertarImagenes(imagenes)
      Controlador.contenidoAgregar(nombreFormulario, apellidoFormulario, usuarioFormulario, contraseñaFormulario);

    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'No se ha eliminado nada',
        'error'
      )
    }
  })

})

const Vista = {

  mostrarMensajeError(mensaje) {
    Swal.fire({
      icon: 'error',
      title: 'Algo salió mal',
      text: mensaje,
    })
  },

  mostrarAlertaSatisfactorio(mensaje) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  },

}
export default Vista;

//fin dom
//placeholder
inputField.addEventListener('input', function () {
  if (inputField.value !== '') {
    inputLabel.style.top = '-10px';
    inputLabel.style.transform = 'translateY(0%)';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#333';
    inputLabel.style.backgroundColor = 'white';
    inputLabel.style.opacity = '0.85';
  } else {
    inputLabel.style.top = '50%';
    inputLabel.style.transform = 'translateY(-50%)';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#999';
    inputLabel.style.backgroundColor = '';
  }
});