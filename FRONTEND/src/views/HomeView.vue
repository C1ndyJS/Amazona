<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CategoryRow from '../components/CategoryRow.vue'
import BackHome from '../components/BackHome.vue'
import NewsletterFooter from '../components/NewsletterFooter.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Footer,
    BackHome,
    CategoryRow,
    NewsletterFooter,
  },
  data() {
    return {
      categorias: [],
      productos: [],
    }
  },

  created() {
       
    // Realizar la solicitud para obtener categorías
    axios.get('http://localhost:3003/api/categorias')
      .then(response => {
        this.categorias = response.data;
      })
      .catch(error => {
        console.error('Error al obtener las categorias:', error);
      });

    // Realizar la solicitud para obtener productos
    axios.get('http://localhost:3003/api/productos')
      .then(response => {
        this.productos = response.data;
        /*console.log('Productos cargados:', this.productos); // Debugging*/
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }
}
</script>

<template>
  <Header />

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/slider_img/slider2.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../img/slider_img/slider1.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../img/slider_img/slider3.svg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="titulo-marquee">
  <h5>
    Marcas Aliadas
  </h5>
</div>

<div class="wrapper">
    <div class="item item1">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>
    <div class="item item2">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>
    <div class="item item3">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">  
    </div>
    <div class="item item4">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>
    <div class="item item5">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>  
    <div class="item item6">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>
    <div class="item item7">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>
    <div class="item item8">
      <img src="../img/Marquee1.svg" alt="" style="width: 172px;">
    </div>
  </div>

  <CategoryRow :categorias="categorias" />

  <div class="titulo-productos">
  <h2>
    Productos populares en esta temporada
  </h2>
</div>

  <div class="products-slider">
    <div class="products">
      <div v-for="producto in productos" :key="producto.id_producto" class="card" style="width:22rem;">
        <router-link v-if="producto.id_producto" :to="{ name: 'detallesproducto', params: { id: producto.id_producto } }" class="producto-link">
        <img :src="producto.url_imagen" class="card-img-top" :alt="producto.nombre" style="padding-top:30px; width:400px;"/>
        <div class="card-body">
          <h5 class="card-title">{{ producto.nombre }}</h5>
          <p class="card-text">{{ producto.descripcion }}</p>
        </div>
      </router-link>
      </div>
    </div>
  </div>

   
  <div class="box-row">
    <div class="box-col">
      <h3>Papeleria</h3>
      <img src="../img/assets/box3-1.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
    <div class="box-col">
      <h3>Laptops para estudio</h3>
      <img src="../img/assets/box3-2.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
    <div class="box-col">
      <h3>Sillas de oficina</h3>
      <img src="../img/assets/box3-3.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
    <div class="box-col">
      <h3>Monitores gaming</h3>
      <img src="../img/assets/box3-4.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
  </div>

  <div class="products-slider-with-price">
    <h2>Ofertas y precios bajos</h2>
    <div class="products">
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-1.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>50% descuento</p>
          <span>Mitad de precio</span>
        </div>
        <p class="product-price">$ <span>19.99</span> Lista de precios: $29.50</p>
        <h4>Ideal para ti</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-2.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>10% descuento</p>
          <span>Ropa de playa</span>
        </div>
        <p class="product-price">$ <span>60.99</span> Lista de precios: $70.00</p>
        <h4>Versatil y liviano</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-3.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>25% descuento</p>
          <span>Pijamas</span>
        </div>
        <p class="product-price">$ <span>50.00</span> Lista de precios: $50.99</p>
        <h4>Articulos para niños</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-4.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>6% descuento</p>
          <span>Tematica dinosaurio</span>
        </div>
        <p class="product-price">$ <span>19.99</span> Lista de precios: $20.50</p>
        <h4>Ropa infantil</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-5.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>15% descuento</p>
          <span>Sueters</span>
        </div>
        <p class="product-price">$ <span>80.99</span> Lista de precios: $100.0</p>
        <h4>Ropa de invierno</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-6.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>Funko</p>
          <span>Juego de mesa para 2-4 jugadores</span>
        </div>
        <p class="product-price">$ <span>30.94</span> Lista de precios: $30.99</p>
        <h4>Edades: 10 años y más</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-7.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>30% descuento</p>
          <span>Ropa de cama</span>
        </div>
        <p class="product-price">$ <span>50.99</span> Lista de precios: $70.50</p>
        <h4>Ideal para tu hijo</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-8.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>10% descuento</p>
          <span>Libreta</span>
        </div>
        <p class="product-price">$ <span>8.99</span> Lista de precios: $19.50</p>
        <h4>Fantasia animada</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-11.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>8% descuento</p>
          <span>Kit didactico</span>
        </div>
        <p class="product-price">$ <span>25.99</span> Lista de precios: $29.50</p>
        <h4>Para aprender</h4>
      </div>
      <div class="product-card">
        <div class="product-img-container">
          <img src="../img/assets/product2-12.jpg" alt="" />
        </div>
        <div class="product-offer">
          <p>5% descuento</p>
          <span>Disfraces</span>
        </div>
        <p class="product-price">$ <span>19.99</span> Lista de precios: $29.50</p>
        <h4>Ropa infantil</h4>
      </div>
     </div>
    </div>
    
    <NewsletterFooter />
   <BackHome />
 <Footer />
</template>

<style>

.producto-link {
    text-decoration: none; /* Elimina el subrayado de los hipervínculos */
  }

  .titulo-productos{
    padding: 10px;
    text-align: center;
  }


.titulo-marquee {
  padding-top: 20px;
  text-align: center;
}

.titulo-marquee h5{
  font-size: 24px;
}

.wrapper {
  width: 95%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0,0,0,0),
    rgba(0,0,0,1) 20%,
    rgba(0,0,0,1) 80%,
    rgba(0,0,0,0)
    );
}

.item {
  width: 170px;
  height: 100px;
  background-color: red;
  border-radius: 6px;
  position: absolute;
  left: max(calc(170px * 8), 100%);
  animation-name: scrollleft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1) ;
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1) ;
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1) ;
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1) ;
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1) ;
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1) ;
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1) ;
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1) ;
}

@keyframes scrollleft {
  to {
    left: -200px;
  }
}

.box-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  background: #fff;
  max-width: 24%;
  min-height: 200px;
  border-radius: 2%;
}

.box-col a {
  font-size: 13px;
  color: #009999;
  font-weight: 500;
}

.products-slider {
  background: #ffff;
  margin: 0 20px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 1%;
}
.products-slider .products {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  margin-top: 5px;
}
.products-slider .products img {
  max-width: 200px;
  max-height: 200px;
}
.products-slider .products::-webkit-scrollbar {
  display: none;
}

.producto-link {
    text-align: center;
}


.products-slider-with-price {
  overflow-x: auto;
  white-space: nowrap;
  background: #fff;
  margin: 0 30px;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 1%;
}
.products-slider-with-price .products {
  display: inline-block;
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-top: 10px;
}
.products-slider-with-price .products::-webkit-scrollbar {
  display: none;
}
.products-card {
  display: inline-block;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-width: 210px;
  background: #fbfbfb;
}
.product-card img {
  width: 110px;
  margin: 0 50px;
}
.product-offer p {
  background: #d23737;
  color: #fff;
  display: inline-block;
  padding: 2px 5px;
  border-radius: 2px;
  margin: 8px 0;
  font-size: 13px;
}
.product-offer span {
  color: #be0b3b;
  font-weight: 500;
  font-size: 12px;
}
.product-price {
  color: gray;
  font-size: 13px;
}
.product-card h4 {
  color: #525252;
  font-size: 15px;
  font-weight: 400;
}

  #carouselExampleCaptions .carousel-inner img {
    object-fit: cover; /* Escala las imágenes para que llenen el contenedor */
    max-width: 100%; /* Ajusta el ancho máximo de la imagen */
    max-height: 300px; /* Ajusta la altura máxima de la imagen */
    align-items: center;
  } 

</style>
