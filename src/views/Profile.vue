<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      direccion: '',
      telefono: '',
      password: '',
      editMode: false
    }
  },
  created() {
    // Verificar si hay un token de sesión almacenado
    const token = localStorage.getItem('token')
    if (!token) {
      // Si no hay token, redirigir al usuario a la página de inicio de sesión
      //this.$router.push('/login')
    } else {
      // Imprimir el token en la consola
      console.log('Token:', token)

      // Decodificar y mostrar el contenido del token
      const payloadBase64 = token.split('.')[1]
      const decodedPayload = atob(payloadBase64)
      const payloadObj = JSON.parse(decodedPayload)
      console.log('Contenido del payload:', payloadObj)
      this.nombre = payloadObj.nombre
      this.apellido = payloadObj.apellido
      this.correo = payloadObj.correo
      this.direccion = payloadObj.direccion
      this.telefono = payloadObj.telefono
    }
  },
  methods: {
    toggleEditMode() {
      if (this.editMode) {
        // Enviar los datos actualizados del perfil al servidor
        this.saveProfile()
      }
      this.editMode = !this.editMode
    },
    async saveProfile() {
      try {
        const { correo, password, nombre, apellido, direccion, telefono } = this
        const nuevoPerfil = { nombre, apellido, direccion, telefono }

        // Realizar la petición axios.put al endpoint de actualización de perfil
        const response = await axios.put('http://localhost:3003/api/usuarios/profile', {
          correo,
          contraseña: password,
          nuevoPerfil
        })

        // Mostrar un mensaje de éxito
        alert('Perfil actualizado correctamente')

        // Actualizar la información del perfil mostrada en la interfaz
        this.nombre = response.data.perfil.nombre
        this.apellido = response.data.perfil.apellido
        this.direccion = response.data.perfil.direccion
        this.telefono = response.data.perfil.telefono
      } catch (error) {
        // Manejar cualquier error que ocurra durante la actualización del perfil
        console.error('Error al actualizar el perfil:', error)
        alert('Error al actualizar el perfil. Por favor, inténtalo de nuevo más tarde.')
      }
    }
  }
}
</script>

<template>
  <Header />

  <div class="profile-container">
    <div class="profile-content">
      <h1>Perfil de Usuario</h1>
      <button class="edit-button" @click="toggleEditMode">
        {{ editMode ? 'Guardar' : 'Editar' }}
      </button>
      <div v-if="!editMode" class="profile-info">
        <p><strong>Correo:</strong> {{ correo }}</p>
        <p><strong>Nombre:</strong> {{ nombre }}</p>
        <p><strong>Apellido:</strong> {{ apellido }}</p>
        <p><strong>Dirección:</strong> {{ direccion }}</p>
        <p><strong>Teléfono:</strong> {{ telefono }}</p>
      </div>
      <div v-else class="profile-form">
        <p><strong>Correo:</strong> {{ correo }}</p>
        <div class="input-group">
          <label for="nombre">Nombre:</label>
          <input id="nombre" type="text" v-model="nombre" placeholder="Nombre" />
        </div>
        <div class="input-group">
          <label for="apellido">Apellido:</label>
          <input id="apellido" type="text" v-model="apellido" placeholder="Apellido" />
        </div>
        <div class="input-group">
          <label for="direccion">Dirección:</label>
          <input id="direccion" type="text" v-model="direccion" placeholder="Dirección" />
        </div>
        <div class="input-group">
          <label for="telefono">Teléfono:</label>
          <input id="telefono" type="text" v-model="telefono" placeholder="Teléfono" />
        </div>
        <div class="input-group">
          <label for="password">Contraseña:</label>
          <input id="password" type="password" v-model="password" placeholder="" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Estilos para el perfil */
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.profile-content {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* Para posicionar el botón de edición */
}

.edit-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.profile-info {
  margin-top: 20px;
}

.profile-info p {
  margin-bottom: 10px;
}

.profile-info strong {
  font-weight: bold;
}

.profile-form {
  margin-top: 20px;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 300px;
}

.input-group label {
  font-weight: bold;
  margin-right: 10px;
  width: 100px; /* Ancho fijo para los labels */
}

.input-group input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
}

/* Estilos para el encabezado y pie de página */
/* Puedes agregar estilos específicos para Header y Footer en sus respectivos componentes si lo deseas */
</style>
