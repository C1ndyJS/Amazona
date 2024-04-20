<script>
import axios from 'axios';
import LittleHeader from '../components/LittleHeader.vue'
import LittleFooter from '../components/LittleFooter.vue'

export default {
  components: {
    LittleHeader,
    LittleFooter,
  },
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      loginError: '' // Nuevo estado para manejar mensajes de error de inicio de sesión
    };
  },
  computed: {
    inputType() {
      return this.showPassword ? 'text' : 'password';
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3003/api/login', {
          username: this.username,
          password: this.password
        });
        console.log(response.data);
        // Maneja la respuesta según tus necesidades
        // Por ejemplo, puedes guardar los datos del usuario en el estado del componente
        this.userData = response.data;
      } catch (error) {
        console.error('Error:', error);
        // Maneja el error, muestra un mensaje al usuario, etc.
        this.loginError = 'Nombre de usuario o contraseña incorrectos'; // Establece el mensaje de error
      }
    }
  }
}
</script>

<template>
  <LittleHeader/>
  <div class="container">
    <form id="login-form" @submit.prevent="submitForm"> <!-- Agrega el evento @submit.prevent para evitar que el formulario se envíe automáticamente -->
      <label for="aviso">Iniciar sesión</label>
      <div class="input-group">
        <label for="username">Usuario</label>
        <input type="text" id="username" placeholder="Email" v-model="username" required>
      </div>
      <div class="input-group">
        <label for="password">Contraseña</label>
        <input :type="inputType" v-model="password" placeholder="Contraseña" required>
      </div>
      <div class="box-visible">
        <input type="checkbox" v-model="showPassword">
        <label for="visible"> Mostrar Contraseña</label>
      </div>
      <button type="submit" id="submit">Iniciar sesión</button>
      <label for="crear cuenta">¿Eres nuevo aquí?</label>
      <button type="button" class="crear-cuenta-btn">Crea tu cuenta</button> <!-- Cambia el tipo de botón a "button" para evitar envíos automáticos -->
      <router-link :to="{ name: 'forgotPass' }">¿Olvidaste tu contraseña?</router-link>
      <!-- Muestra el mensaje de error si existe -->
      <p v-if="loginError" style="color: red;">{{ loginError }}</p>
    </form>
  </div>
  <LittleFooter/>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

form {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.2px solid black;
  border-radius: 20px;
  background-color: #fcfafa;
}

.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.input-group label {
  font-weight: 500;
  padding: 10px;
  width: 20%; /* Ancho de los labels */
}

.input-group input[type="text"],
.input-group input[type="password"],
.input-group input[type="checkbox"] {
  outline: 0px;
  border: 1px solid #ccc;
  width: 70%; /* Ancho de los inputs */
  margin-bottom: 14px;
  padding: 10px;
}

.box-visible {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.crear-cuenta-btn {
  outline: 0;
  border: 0;
  color: #ffffff;
  background-color: #e2c419;
  width: 50%; /* Ancho del botón */
  padding: 8px; /* Padding del botón */
  transition: all .3s ease-in-out;
  border-radius: 20px;
  text-align: center;
  color: black;
  font-weight: 480;
  text-decoration: none;
  font-weight: 500;
}

.crear-cuenta-btn:hover {
  background-color: #d6ba18;
}

button[type="submit"] {
  outline: 0;
  border: 0;
  background-color: #e2c419;
  border-radius: 20px;
  cursor: pointer;
  width: 50%; /* Ancho del botón */
  padding: 8px; /* Padding del botón */
  transition: all .3s ease-in-out;
  text-align: center;
  color: black;
  font-weight: 500;
}

button[type="submit"]:hover {
  background-color: #d6ba18;
}
</style>