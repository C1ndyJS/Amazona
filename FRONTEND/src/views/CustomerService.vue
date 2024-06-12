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
  <p>¿Con qué te gustaría recibir ayuda hoy? <br>Puedes encargarte rápidamente de la mayoría de las cosas aquí, o conectarte con nosotros cuando sea necesario.</p>
</div>

<div class="container_s_c">
  <div class="button-container_s_c">
      <button class="btn_s_c"><img src="../img/assets/pagos.png" alt="pagos" class="btn_s_c_icon">Pagos, cargos o tarjetas de regalo</button>
      <button class="btn_s_c"><img src="../img/assets/dir_s_c.png" alt="dir_sec" class="btn_s_c_icon">Seguridad y privacidad</button>
      <button class="btn_s_c"><img src="../img/assets/mem_s_c.png" alt="membresias" class="btn_s_c_icon">Membresías, suscripciones o comunicaciones</button>
      <button class="btn_s_c"><img src="../img/assets/ebook_s_c.png" alt="envio_entrega" class="btn_s_c_icon">eBooks, Música, Games</button>
      <button class="btn_s_c"><img src="../img/assets/otros_s_c.png" alt="Estado del pedido" class="btn_s_c_icon">Otros</button>
      <button class="btn_s_c"><img src="../img/assets/login_s_c.png" alt="inicio" class="btn_s_c_icon">Inicio de sesión y contraseña</button>
  </div>
</div>

    <Footer/>
</template>

<style>

.container_s_c {
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.button-container_s_c {
  width: calc(50% - 15px);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.btn_s_c {
  border: 0.5px solid black;
  padding: 25px 30px;
  font-size: 18px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.s_c_text {
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;
}

.btn_s_c_icon {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

</style>