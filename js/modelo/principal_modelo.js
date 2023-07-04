// const supabaseUrl = 'https://tscfmjlnezdjlzwsmcmx.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzY2ZtamxuZXpkamx6d3NtY214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0ODk2ODEsImV4cCI6MjAwNDA2NTY4MX0.S1vQ1CYSpjvrwXIwSFC1_8dxin8I9XN8aXOdt6zCTWg';

// const Modelo = {
//   async inicioSesion(email, password) {
//     try {
//       const response = await axios.post(
//         `${supabaseUrl}/auth/v1/token?grant_type=password`,
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             apikey: supabaseKey,
//           },
//         }
//       );

//       const data = response.data;

//       if (response.status === 200) {
//         return data;
//       } else {
//         throw new Error('Error al iniciar sesión');
//       }
//     } catch (error) {
//       throw new Error('Error en la solicitud');
//     }
//   },
// };

// export default Modelo;




const Modelo = {
  async inicioSesion(email, password) {
    try {
      const datosInsertar = {
        email: email,
        password: password,
      };

      const res = await axios({
        method: 'POST',
        url: 'https://tscfmjlnezdjlzwsmcmx.supabase.co/auth/v1/token?grant_type=password',
        data: datosInsertar,
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzY2ZtamxuZXpkamx6d3NtY214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3OTQzNzIsImV4cCI6MjAwMzM3MDM3Mn0.gdpyWxzzsdi1IFeH8EZoa8i8jTnu41WVLuz50nfpigw',
        },
      });

      return res.data;
    } catch (error) {
      throw new Error('Error en la solicitud');
    }
  },
};

export default Modelo;
