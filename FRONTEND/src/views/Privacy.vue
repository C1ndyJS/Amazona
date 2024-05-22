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
        <h1 class="aviso-privacidad">Aviso de Privacidad</h1>
        <p>Este aviso de privacidad establece cómo nuestra empresa recopila, utiliza y protege la información personal que <br>usted proporciona al utilizar nuestro sitio web. Es importante que lea este aviso de privacidad para comprender cómo manejamos su información y qué derechos tiene en relación con ella.</p>
        <h2>Leer atentamente</h2>
        <h2 style="color: black;">¿Qué información recopilamos?</h2>
        <p>Información de contacto, como su nombre, dirección de correo electrónico.<br>
            Información demográfica, como ubicación y preferencias.<br>
            Información de pago, como detalles de tarjetas de crédito o débito.<br>
            Información de inicio de sesión, como nombres de usuario y contraseñas.<br>
            Información sobre sus interacciones con nuestro sitio web, <br>como historial de navegación, productos vistos y compras realizadas.<br>
            Cualquier otra información que decida compartir con nosotros voluntariamente.</p>
        <h2>¿Con qué fines utilizamos su información personal?</h2>
        <p>Procesar y completar sus pedidos y transacciones.<br>
            Brindarle asistencia al cliente y responder a sus consultas y solicitudes.<br>
            Personalizar su experiencia en nuestro sitio web y mostrarle contenido y ofertas relevantes.<br>
            Mejorar nuestros productos y servicios, así como el funcionamiento y la seguridad de nuestro sitio web.<br>
            Enviarle comunicaciones de marketing y promocionales, como boletines informativos y <br>ofertas especiales, si ha dado su consentimiento para recibirlas.<br>
            Cumplir con nuestras obligaciones legales y reglamentarias.</p>
        <h2>Seguridad de la información</h2>
        <p>Nos comprometemos a proteger la seguridad de su información personal y a tomar todas las medidas razonables para <br>garantizar su confidencialidad, integridad y disponibilidad. Utilizamos prácticas de seguridad de la información <br>líderes en la industria y tecnología de encriptación para proteger sus datos contra accesos no autorizados, uso indebido o divulgación. Sin embargo, es importante tener en cuenta que ninguna transmisión de datos por Internet o almacenamiento electrónico es completamente segura, y no podemos garantizar la seguridad absoluta de su información.</p>
    </div>

    <Footer/>
</template>

<style scoped>

    .container {
        background-color: #e8d9ca;
        color: black;
        text-align: center;
        padding: 20px;
        margin: 20px auto;
        border-radius: 8px;
    }


</style>