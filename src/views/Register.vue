<script>
import LittleHeader from '../components/LittleHeader.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
  components: {
    LittleHeader,
    Footer
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: '',
      direccion: '',
      telefono: '',
      id_ciudad: 1
    }
  },
  methods: {
    async registrarUsuario() {
      try {
        // Verificar si el correo electrónico ya está registrado
        const response = await axios.get(`http://localhost:3003/api/usuarios?correo=${this.correo}`)

        // Si el correo electrónico ya está registrado, mostrar una alerta
        if (response.data.length > 0) {
          alert('El correo electrónico ya está registrado.')
          return // Salir del método sin enviar la solicitud al servidor
        }

        // Si el correo electrónico no está registrado, proceder con el registro
        const registroResponse = await axios.post('http://localhost:3003/api/usuarios', {
          correo: this.correo,
          nombre: this.nombre,
          apellido: this.apellido,
          contrasena: this.contrasena,
          direccion: this.direccion,
          telefono: this.telefono,
          id_ciudad: this.id_ciudad
        })

        console.log('Usuario registrado:', registroResponse.data)
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
      <input type="text" id="nombre" placeholder="Nombres" required v-model="nombre" />
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" placeholder="Apellido" required v-model="apellido" />
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Ingrese su correo electrónico"
        required
        v-model="correo"
      />
      <label for="contrasena">contrasena</label>
      <input
        type="password"
        id="contrasena"
        placeholder="Mínimo 6 caracteres"
        required
        v-model="contrasena"
      />
      <label for="direccion">Dirección:</label>
      <input type="text" id="direccion" placeholder="Ingrese su dirección" v-model="direccion" />
      <label for="telefono">Telefono: </label>
      <input type="text" id="telefono" placeholder="Ingrese su telefono" v-model="telefono" />

      <!-- Botón para enviar el formulario de registro -->
      <button type="button" id="registro-submit" @click="registrarUsuario">Registrarse</button>
    </form>
  </div>

  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px; /* Ajustamos el margen superior */
}

form {
  width: 300px;
  height: auto; /* Cambiamos la altura a automático para que se ajuste al contenido */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hacemos el sombreado más suave */
  border-radius: 20px;
  padding: 20px; /* Añadimos espacio interno al formulario */
  background-color: #fcfafa;
}

h1 {
  font-size: 24px; /* Reducimos el tamaño del título */
  margin-bottom: 20px; /* Añadimos espacio inferior */
}

input {
  width: 100%;
  margin-bottom: 10px; /* Espacio entre los campos */
}

button {
  width: 100%;
  margin-top: 20px; /* Ajustamos el espacio entre el formulario y el botón */
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
