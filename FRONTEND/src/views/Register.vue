<script>
import LittleHeader from '../components/LittleHeader.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    LittleHeader,
    Footer
  },
  data() {
    return {
      id: 6,
      nombre: '',
      apellido: '', // Asegúrate de agregar esta línea
      correo: '',
      contraseña: '',
      direccion: 'Av dsfsdf'
    }
  },
  methods: {
    async registrarUsuario() {
      try {
        const response = await axios.post('/api/usuarios', {
          id: this.id,
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
          contraseña: this.contraseña,
          direccion: this.direccion
        })
        console.log('Usuario registrado:', response.data)
        // Aquí podrías hacer algo con la respuesta, como redirigir al usuario a otra página o mostrar un mensaje de éxito
      } catch (error) {
        console.error('Error al registrar usuario:', error.response.data.error)
        // Aquí podrías manejar el error, como mostrar un mensaje de error al usuario
      }
    }
  }
}
</script>

<template>
  <LittleHeader />
  <div class="container">
    <form id="registro-form" class="box-visible">
      <h1>Crear cuenta</h1>
      <label for="nombre">Tu nombre:</label>
      <input type="text" id="username" placeholder="Nombres" required v-model="nombre" />
      <label for="nombre">Apellido:</label>
      <input type="text" id="apellido" placeholder="Apellido" required v-model="apellido" />
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Ingrese informacion" required v-model="correo" />
      <label for="password">Contraseña</label>
      <input
        type="password"
        id="password"
        placeholder="Minimo 6 caracteres"
        required
        v-model="contraseña"
      />
      <!-- Botón para enviar el formulario de registro -->
      <button type="submit" id="registro-submit" @click="registrarUsuario">Registrarse</button>
    </form>
  </div>

  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 14px;
}

body {
  background-color: #f0f0f0; /* Cambia el color de fondo del lienzo */
  margin: 0; /* Asegura que no haya margen alrededor del lienzo */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 300px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 4px 10px 10px #ccc;
  border-radius: 20px;
  background-color: #fcfafa;
}

h1 {
  font-size: 30px;
}

input {
  width: 80%;
}

form img {
  width: 200px;
  height: 80px;
  padding: 10px;
}

form input[type='text'],
input[type='password'] {
  outline: 0px;
  border: 1px solid #ccc;
  width: 80%;
  padding: 10px;
}

form label {
  font-weight: 500;
  padding: 10px;
}

.crear-cuenta-btn {
  outline: 0;
  border: 0;
  color: #ffffff; /* Color del texto */
  background-color: #e2c419; /* Color de fondo */
  width: 248px;
  padding: 3px;
  transition: all 0.3s ease-in-out;
  border-radius: 20px; /* Borde redondeado */
  text-align: center;
  color: black;
  font-weight: 480;
  text-decoration: none; /* Sin subrayado */
  font-weight: 500;
}

.crear-cuenta-btn:hover {
  background-color: #d6ba18; /* Color de fondo al pasar el mouse */
}

#registro-form button {
  outline: 0;
  border: 0;
  background-color: #e2c419; /*#96b896*/
  border-radius: 20px;
  cursor: pointer;
  width: 250px;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  color: black;
  font-weight: 480;

  margin-top: 25px;
}
</style>
