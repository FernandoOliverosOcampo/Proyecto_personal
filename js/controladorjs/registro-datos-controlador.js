import { nombre,apellido,usuario,contraseña} from "../vistajs/registro_datos_vista.js";


//Funcion volver
export const volver = ()=>{
    window.location.href = "../index.html";
}

const registro = [];
export const registrate = ()=>{
    const nombreValor = nombre.value;
    const apellidoValor = apellido.value; 
    const usuarioValor = usuario.value;
    const contraseñaValor = contraseña.value;

    const datos = {
        nombre: nombreValor,
        apellido: apellidoValor,
        usuario: usuarioValor,
        contraseña: contraseñaValor
    };

    const llenarDatos = () => {
        if (datos.nombre.length === 0 || !datos.nombre.match(/[a-zA-Z]/) || datos.apellido.length === 0 || !datos.apellido.match(/[a-zA-Z]/)|| datos.usuario.length === 0 || !datos.usuario.match(/[a-zA-Z]/)|| datos.contraseña.length === 0 || !datos.contraseña.match(/[a-zA-Z]/)){
            alert("Asegurese de llenar los datos con valores correctos");
            console.error("Esta fallando algo")
        } else {
            registro.push(nombreValor, apellidoValor, usuarioValor, contraseñaValor);
            alert("datos ingresados correctamente");
            nombre.value=" ";
            apellido.value="";
            usuario.value = "";
            contraseña.value = "";
            console.log(datos)
        }
    }
    llenarDatos();
};