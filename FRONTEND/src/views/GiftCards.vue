<template>
  <div>
    <Header/>
    <h1>Gift Cards</h1>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../img/assets/box2-1.jpg" class="d-block w-100 carousel-image" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../img/assets/box2-2.jpg" class="d-block w-100 carousel-image" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../img/assets/box2-3.jpg" class="d-block w-100 carousel-image" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" @click="previousSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import $ from 'jquery'; 

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    previousSlide() {
      const carousel = document.querySelector('.carousel');
      $(carousel).carousel('prev'); // Navega a la diapositiva anterior
    },
    nextSlide() {
      const carousel = document.querySelector('.carousel');
      $(carousel).carousel('next'); // Navega a la siguiente diapositiva
    }
  },
  mounted() {
    // Intervalo de tiempo para pasar automáticamente a la siguiente imagen cada 2 segundos
    setInterval(this.nextSlide, 2000);
  }
}
</script>

<style scoped>
.carousel-image {
  height: 690px; /* Altura deseada para las imágenes del carrusel */
  object-fit: cover; /* Ajusta la imagen para cubrir completamente el contenedor */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  /* Estilos para los íconos de control del carrusel */
  background-color: rgba(0, 0, 0, 0.5); /* Color de fondo del icono */
  border-radius: 80%; /* Hace que el icono tenga forma de círculo */
}

.carousel-control-prev,
.carousel-control-next {
  /* Estilos para los botones de control del carrusel */
  width: 5%; /* Anchura del botón */
}

.carousel-control-prev {
  left: 0; /* a la izquierda */
}

.carousel-control-next {
  right: 0; /*  a la derecha */
}
</style>
