//importaciones
import { volver,registrate } from "../controladorjs/registro-datos-controlador.js";


//fin importaciones

//dom
const inputField = document.querySelector('.input-field');
const inputLabel = document.querySelector('.input-label');
const btnvolver = document.getElementById('btn_volver')
export const nombre = document.getElementById('nombre');
export const apellido = document.getElementById('apellido');
export const usuario = document.getElementById('usuario');
export const contraseña = document.getElementById('contraseña');
const btnenviar = document.getElementById('btn_enviar');
//fin dom


//funcion de los botones
btnvolver.addEventListener('click', ()=>{
  volver();
})

btnenviar.addEventListener('click', ()=>{
  registrate();
})
//fin funcion de los botones


//placeholder
inputField.addEventListener('input', function() {
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