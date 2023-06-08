// Importaciones
import { registrate, redirigirPagina, paginaRegistro } from "./registros.js";

// DOM
export const usuario = document.getElementById("usuario");
export const contraseña = document.getElementById("contraseña");
const boton_ingreso = document.getElementById("btn_ingreso");
const boton_registro = document.getElementById("btn_registro");

//EVENTOS
boton_ingreso.addEventListener('click', () => {
    redirigirPagina();
//   
});

boton_registro.addEventListener('click', () => {
   paginaRegistro();
 
 });
 
