import config from '../supabase/config.js';

const Modelo ={

    async insertarDatos(nombreFormulario, apellidoFormulario, usuarioFormulario,contraseñaFormulario){
        const datos_insertar = {
            nombre: nombreFormulario,
            apellido:apellidoFormulario,
            email:usuarioFormulario,
            password: contraseñaFormulario,
        }
        const res = await axios({
            method:'POST',
            url:"https://tscfmjlnezdjlzwsmcmx.supabase.co/rest/v1/registro",
            data: datos_insertar,
            headers: config.headers
        });

        return res;
    
    }
  

}
export default Modelo;