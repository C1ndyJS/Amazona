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
    
    <div class="s_c_text">
        <h1>Te damos la bienvenida al servicio de cliente de Amazona</h1>
        <p>¿Con qué te gustaría recibir ayuda hoy? Puedes encargarte rápidamente de la mayoría de las cosas aquí, o conectarte con nosotros cuando sea necesario.</p>
    </div>
    
    <div class="container_s_c">
        <div class="button-container_s_c">
            <button class="btn_s_c"><img src="../img/entrega.png" alt="entrega" class="btn_s_c_icon">Entrega, pedido o devolución</button>
            <button class="btn_s_c"><img src="../img/prime.png" alt="prime" class="btn_s_c_icon"> Prime</button>
            <button class="btn_s_c"><img src="../img/assets/pagos.png" alt="pagos" class="btn_s_c_icon">Pagos, cargos o tarjetas de regalo</button>
            <button class="btn_s_c"><img src="../img/dir_s_c.png" alt="dir_sec" class="btn_s_c_icon">Dirección, seguridad y privacidad</button>
            <button class="btn_s_c"><img src="../img/mem_s_c.png" alt="membresias" class="btn_s_c_icon">Membresías, suscripciones o comunicaciones</button>
            <button class="btn_s_c"><img src="../img/kindle_s_c.png" alt="kindle" class="btn_s_c_icon">Kindle, Fire, Alexa u otros dispositivos de Amazon</button>
            <button class="btn_s_c"><img src="../img/ebook_s_c.png" alt="envio_entrega" class="btn_s_c_icon">eBooks, Prime Video, Música, Games</button>
            <button class="btn_s_c"><img src="../img/otros_s_c.png" alt="Estado del pedido" class="btn_s_c_icon">Otros</button>
            <router-link :to="{ name: 'login'}"><button class="btn_s_c"><img src="../img/login_s_c.png" alt="inicio" class="btn_s_c_icon"> Inicio de sesión y contraseña</button></router-link>
        </div>
    </div>

    <Footer/>
</template>

<style>

.container_s_c {
  max-width: 1000px;
  margin: 50px auto;
  text-align: center;
}

.button-container_s_c {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 15px;
}

button {
  border: 0.5px solid black;
  padding: 25px 30px 25px;
  font-size: 18px;

  border-radius: 8px;
  background-color: #ffffff; /* Cambiado a blanco */
  color: #000000; /* Cambiado a negro */
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.btn_s_c:hover {
  background-color:#f2f2f2; /* Cambiado a blanco */
}


.s_c_text {
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;
}


.btn_s_c_icon {
      width: 40px;
      height: 40px;
      margin-right: 15px;

}

</style>