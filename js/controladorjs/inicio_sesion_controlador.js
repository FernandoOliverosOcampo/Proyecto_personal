import Vista from '../index.js';
import Modelo from '../modelo/principal_modelo.js';

const Controlador = {
  async iniciarSesion() {
    const { email, password } = Vista.getDatosIniciarSesion();

    try {
      const respuesta = await Modelo.inicioSesion(email, password);
      if (respuesta.status >= 200 && respuesta.status < 300) {
        Vista.mostrarMensajeSatisfactorio();
        Vista.limpiarCampos();
        Vista.redirigirAIndex();
      } else {
        Vista.mostrarMensajeError();
      }
    } catch (error) {
      Vista.mostrarMensajeError();
    }
  }
};

export default Controlador;




















// import Vista from '../index.js';
// import Modelo from '../modelo/principal_modelo.js';

// const Controlador = {
//   async iniciarSesion() {
//     const { email, password } = Vista.getDatosIniciarSesion();

//     try {
//       const respuesta = await Modelo.inicioSesion(email, password);
//       if (respuesta.status === 200) {
//         Vista.mostrarMensajeSatisfactorio();
//         Vista.limpiarCampos();
//         Vista.redirigirAIndex();
//       } else {
//         Vista.mostrarMensajeError();
//       }
//     } catch (error) {
//       Vista.mostrarMensajeError();
//     }
//   }
// };

// export default Controlador;
