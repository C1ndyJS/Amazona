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
    <div class="devoluciones-container">
        <h1>Devoluciones y Pedidos</h1>
        <p>En Amazona, nos esforzamos por garantizar su satisfacción en cada compra. Si no está completamente satisfecho con su pedido, puede devolver los productos comprados dentro de los 30 días posteriores a la recepción para un reembolso completo o un cambio, siempre que se devuelvan en su estado original, sin usar y en su embalaje original. Todos los reembolsos se procesarán mediante el método de pago original, y se notificarán por correo electrónico una vez que se haya completado la transacción.<br><br>
        Para hacer un pedido, simplemente navegue por nuestro catálogo, seleccione los productos que desea comprar y siga las instrucciones para completar el proceso de pago. Una vez realizado el pedido, recibirá un correo electrónico de confirmación con los detalles de su compra y la información de seguimiento para que pueda rastrear la entrega de su paquete.<br><br>
        Entendemos que puede cambiar de opinión; por eso, facilitamos la cancelación de pedidos antes de que sean enviados. Si necesita cancelar un pedido después de haberlo realizado, contáctenos lo antes posible a través de nuestra página de servicio al cliente o por teléfono. Haremos todo lo posible para acomodar su solicitud y proporcionarle la mejor solución posible.<br><br>
        Nuestro equipo de atención al cliente está disponible para responder cualquier pregunta que pueda tener sobre nuestro proceso de pedido o nuestras políticas de devolución. No dude en ponerse en contacto con nosotros para obtener asistencia adicional.</p>
    </div>
    <Footer/>
</template>


<style>


.devoluciones-container {
    background-color: #e8d9ca;
    color: black;
    text-align: center;
    padding: 20px;
    margin: 20px auto;
    border-radius: 8px;
}

.devoluciones-container h1 {
    color: #333;
    margin-bottom: 15px;
}

.devoluciones-container p {
    text-align: center;
    padding: 0 15px;
}
</style>