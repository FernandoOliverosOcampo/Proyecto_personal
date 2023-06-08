import { usuario,contraseña } from "./index.js";

export const paginaRegistro =()=>{
    window.location.href = "./paginas/registro_datos.html";
}

const registro = [];
export const registrate = ()=>{
    
    const usuarioValor = usuario.value;
    const contraseñaValor = contraseña.value;

    const datos = {
        usuario: usuarioValor,
        contraseña: contraseñaValor
    };

    const llenarDatos = () => {
        if (datos.usuario.length === 0 || !datos.usuario.match(/[a-zA-Z]/) || datos.contraseña.length === 0 || !datos.contraseña.match(/[a-zA-Z]/)){
            alert("Asegurese de llenar los datos con valores correctos");
            console.error("Esta fallando algo")
        } else {
            registro.push(usuarioValor, contraseñaValor);
            alert("datos ingresados correctamente");
            usuario.value = "";
            contraseña.value = "";
            console.log(datos)
        }
    }
    llenarDatos();
};

export const redirigirPagina = () => {
      window.location.href = "./paginas/principal.html";
  };