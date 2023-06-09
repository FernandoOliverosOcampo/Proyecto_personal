// Importaciones


// DOM
export const usuario = document.getElementById("usuario");
export const contraseña = document.getElementById("contraseña");
const boton_ingreso = document.getElementById("btn_ingreso");
const boton_registro = document.getElementById("btn_registro");

//EVENTOS
boton_ingreso.addEventListener('click', () => {
  window.location.href = "../paginas/principal.html";
   
});

boton_registro.addEventListener('click', () => {
   
   window.location.href = "../paginas/registro_datos.html";
 
 });
 
