<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default {
  components: {
    Header,
    Footer
  }
}
</script>

<template>
    <Header/>
    <div class="container">
        <h1 class="condiciones-uso">Condiciones de uso</h1>
        <p>Bienvenido a nuestra plataforma de venta online.<br>Antes de realizar cualquier compra, te invitamos a leer detenidamente las siguientes condiciones de uso</p>
        <h1>Leer atentamente</h1>
        <h1>Registro de Usuario:</h1>
        <p>Para realizar compras en nuestra plataforma, es necesario que te registres como usuario. <br>Asegúrate de proporcionar información precisa y actualizada durante el proceso de registro. </p>
        <h1>Seguridad de la Cuenta: </h1>
        <p>Es responsabilidad del usuario mantener la seguridad de su cuenta. <br>Te recomendamos elegir contraseñas seguras y no compartirlas con terceros. <br>Notifícanos de inmediato cualquier actividad sospechosa en tu cuenta.</p>
        <h1>Privacidad de los Datos: </h1>
        <p>Respetamos tu privacidad y protegemos tus datos personales según nuestras políticas de privacidad. <br>No compartiremos tu información con terceros sin tu consentimiento.</p>
        <h1>Compra Responsable: </h1>
        <p>Al realizar una compra, asegúrate de revisar detenidamente la descripción del producto, <br>incluyendo sus características, precio y condiciones de envío. Si tienes alguna duda, <br>no dudes en contactarnos antes de confirmar tu compra.</p>
    </div>
    <Footer/>
</template>

<style scoped>
    .container {
    background-color:  #e8d9ca;
    }
    
    .container > h1 {
        text-align: center;
    }

    .container > p {
        text-align: center;
    }
</style>