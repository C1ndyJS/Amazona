<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

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
      telefono: ''
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
      this.username = payloadObj.nombre
      this.apellido = payloadObj.apellido
      this.direccion = payloadObj.direccion
      this.telefono = payloadObj.telefono
    }
  }
}
</script>

<template>
  <Header />
  <h1>Este es el perfil</h1>
  <p>{{ username }}</p>
  <p>{{ apellido }}</p>
  <p>{{ direccion }}</p>
  <p>{{ telefono }}</p>
  <Footer />
</template>
