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


    <div id="sell_header">
      <div class="middle_title">Vender con Amazona</div>
      <p>Empieza hoy mismo para obtener un 5 % de devolución de hasta $1 000 000 en ventas de marca. Más información sobre cómo hacerlo</p>
      <router-link :to="{ name: 'register' }"><button class="register_button">Registrate</button></router-link>

  </div>



  <div class="band_ref">
      <div class="block_position">
          <h1>Comienza a  vender <br/> con Amazona</h1>
          <p>El canal de adquisición preferido y de mayor crecimiento para más de la mitad de nuestros vendedores multicanal.</p>
          <router-link :to="{ name: 'register' }"><button class="register_button">Registrate</button></router-link>

      </div>
      <img src="../img/f_img_vender.png" alt="productos">

  </div>

  <div class="band_ref">
      <img src="../img/second_sell_img.png" alt="persona_feliz">

      <div class="block_position">
          <h2>Inicia con pequeños incentivos</h2>
          <p>¿Listo para vender con Amazona? Como nuevo vendedor, podrás aprovechar una serie de incentivos.</p>
      </div>



  </div>

  <Footer/>

</template>

<style>



#sell_header {
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex; 
    align-items: center;
    width: 100%; /* Ancho completo */
    border-bottom: 1px solid #ddd; /* Línea debajo del encabezado */
    background-color: rgb(208, 208, 208);
 }

 #sell_header p{
  margin: auto;
 }

.middle_title {
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-style: normal;   font-size: 32px;
   padding-right: 1px;
}


.band_ref {
  
   display: flex;
   align-items: center;

}


.band_ref h2{

  font-weight: 400;
  font-style: normal;

}


.block_position h1{
  font-size: 80px;
}

.block_position p{
   margin-top: 10px;
   font-size: 25px;
}

.band_ref img{
  
    padding-top: 30px; 
    margin-left: 20px; /* Espacio a la izquierda de la imagen */
    max-width: 500px; /* Ancho máximo de la imagen */
    
}

.block_position {
   padding-left: 30px;
}


.register_button {
   background-color: #4CAF50; /* Color de fondo del botón */
   border: none; /* Sin borde */
   color: white; /* Color del texto */
   padding: 15px 32px; /* Relleno interior del botón */
   text-align: center; /* Alineación del texto */
   text-decoration: none; /* Sin subrayado */
   display: inline-block; /* Mostrar como bloque */
   font-size: 16px; /* Tamaño de la fuente */
   margin: 4px 2px; /* Márgenes */
   cursor: pointer; /* Cursor al pasar sobre el botón */
   border-radius: 8px; /* Radio de borde para hacer el botón redondeado */
   transition: box-shadow 0.3s; /* Transición suave para la sombra */
 }
 
 /* Estilo de sombra al pasar el mouse */
 .register_button:hover {
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); /* Agregar sombra al pasar el mouse */
 }
</style>