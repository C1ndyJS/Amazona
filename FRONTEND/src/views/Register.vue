<template>
  <div>
    <LittleHeader />
    <div class="container">
      <form id="registro-form" class="box-visible">
        <h1>Crear cuenta</h1>
        <label for="nombre">Tu nombre:</label>
        <input type="text" id="nombre" placeholder="Nombres" required v-model="nombre" />
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" placeholder="Apellido" required v-model="apellido" />
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Ingrese su correo electrónico" required v-model="correo" />
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" placeholder="Mínimo 6 caracteres" required v-model="contrasena" />
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" placeholder="Ingrese su dirección" v-model="direccion" />
        <label for="telefono">Teléfono: </label>
        <input type="text" id="telefono" placeholder="Ingrese su teléfono" v-model="telefono" />
        
        <button type="button" id="registro-submit" @click="registrarUsuario">Registrarse</button>
        <div v-if="mensajeError" class="error">{{ mensajeError }}</div>
        <div v-if="mensajeExito" class="exito">{{ mensajeExito }}</div>
      </form>
    </div>
    <Footer />
  </div>
</template>

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
      id_ciudad: 1,
      rol: 0,
      mensajeError: '',
      mensajeExito: ''
    }
  },
  methods: {
    async registrarUsuario() {
      this.mensajeError = ''
      this.mensajeExito = ''
      
      try {
        // Verificar si el correo electrónico ya está registrado
        const response = await axios.get(`http://localhost:3003/api/usuarios/${this.correo}`)

        // Registrar usuario
        const registroResponse = await axios.post('http://localhost:3003/api/usuarios', {
          correo: this.correo,
          nombre: this.nombre,
          apellido: this.apellido,
          contrasena: this.contrasena,
          direccion: this.direccion,
          telefono: this.telefono,
          rol: this.rol,
          id_ciudad: this.id_ciudad
        })

        this.mensajeExito = 'Usuario registrado con éxito.'
        
        // Limpiar formulario después de registro exitoso
        this.nombre = ''
        this.apellido = ''
        this.correo = ''
        this.contrasena = ''
        this.direccion = ''
        this.telefono = ''
        this.id_ciudad = 1
        this.rol = 0

        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      } catch (error) {
        console.error('Error al registrar usuario:', error)
        this.mensajeError = 'Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.'
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

form {
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  background-color: #fcfafa;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  margin-bottom: 10px;
}

button {
  width: 100%;
  margin-top: 20px;
}

form img {
  width: 200px;
  height: 80px;
  padding: 10px;
}

form input[type='text'],
input[type='password'] {
  outline: 0;
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
  color: #ffffff;
  background-color: #e2c419;
  width: 248px;
  padding: 3px;
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  text-align: center;
  color: black;
  font-weight: 480;
  text-decoration: none;
}

.crear-cuenta-btn:hover {
  background-color: #d6ba18;
}

#registro-form button {
  outline: 0;
  border: 0;
  background-color: #e2c419;
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

.error {
  color: red;
  margin-top: 10px;
}

.exito {
  color: green;
  margin-top: 10px;
}
</style>
