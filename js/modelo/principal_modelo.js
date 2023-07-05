import config from '../supabase/config.js'
const Modelo = {
  async inicioSesion(email, password) {
    try {
        const res = await axios({
        method: 'GET',
        url: `https://tscfmjlnezdjlzwsmcmx.supabase.co/rest/v1/registro?email=eq.${email}`,
        headers: config.headers,
      });
      console.log(res)
      return res;
      
    } catch (error) {
      console.log(error);
    }
  },
};

export default Modelo;