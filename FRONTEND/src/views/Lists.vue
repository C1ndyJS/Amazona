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
      <h1>¿Qué tipo de evento vas a celebrar?</h1>
      <br>
      <p>Tenemos estas recomendaciones para ti!</p>
      <div class="gift-type">
          <div class="gift-type-item">
              <img src="../img/assets/casar-list.png" alt="Boda">
              <p>Me voy a casar</p>
          </div>
          <div class="gift-type-item">
              <img src="../img/assets/bebe-list.png" alt="Bebé">
              <p>Voy a tener un bebé</p>
          </div>
          <div class="gift-type-item">
              <img src="../img/assets/cumpleanos-list.png" alt="Cumpleaños">
              <p>Celebra un cumpleaños</p>
          </div>
          <div class="gift-type-item">
              <img src="../img/assets/ocasion-list.png" alt="Ocasión">
              <p>Celebra cualquier ocasión</p>
          </div>
          <div class="gift-type-item">
              <img src="../img/assets/fiestas-list.png" alt="Fiestas">
              <p>Celebra las fiestas</p>
          </div>
      </div>
  </div>
    <Footer/>
</template>

<style scoped>

  .container {
    max-width: 800px;
    margin: 50px auto;
  }

  .gift-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gift-type-item {
    text-align: center;
    height: 200px;
    flex: 0 0 21%; 
    border: 1px solid #ccc; 
    padding: 20px; 
    box-sizing: border-box; 
    border-radius: 8px; 
    margin: 10px;
    cursor: pointer;
  }

  .gift-type-item img {
    width: 100px; /* Ancho de las imágenes */
    height: 100px; /* Altura de las imágenes */
    border-radius: 50%; /* Forma circular para las imágenes */
    margin-bottom: 10px; /* Espacio entre la imagen y el texto */
  }


</style>