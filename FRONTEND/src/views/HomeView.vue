<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CategoryRow from '../components/CategoryRow.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Footer,
    CategoryRow
  },
  data() {
    return {
      categorias: [],
    }
  },

  mounted() {
    axios.get('http://localhost:3003/api/categorias')
      .then(response => {
        this.categorias = response.data;
      })
      .catch(error => {
        console.error('Error al obtener las categorias:', error);
      });
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
    }
  }
}
</script>

<template>
  <Header />

  <div class="box-row header-box">
    <div class="box-col">
      <h3>Aseo personal</h3>
      <img src="../img/assets/box2-1.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
    <div class="box-col">
      <h3>últimos dispositivos</h3>
      <img src="../img/assets/box2-2.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
    <div class="box-col">
      <h3>Comida para mascotas</h3>
      <img src="../img/assets/box2-3.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
    <div class="box-col">
      <h3>Moda</h3>
      <img src="../img/assets/box2-4.jpg" alt="" />
      <a href="/">Comprar mas</a>
    </div>
  </div>

  <div class="products-slider">
    <h2>Productos populares en esta temporada</h2>

    <div class="products">
      <img src="../img/assets/product1-1.jpg" alt="" />
      <img src="../img/assets/product1-2.jpg" alt="" />
      <img src="../img/assets/product1-3.jpg" alt="" />
      <img src="../img/assets/product1-4.jpg" alt="" />
      <img src="../img/assets/product1-5.jpg" alt="" />
      <img src="../img/assets/product1-6.jpg" alt="" />
      <img src="../img/assets/product1-7.jpg" alt="" />
      <img src="../img/assets/product1-8.jpg" alt="" />
      <img src="../img/assets/product1-9.jpg" alt="" />
      <img src="../img/assets/product1-10.jpg" alt="" />
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

  <Footer />
</template>

<style>
.box-row {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
  margin: 20px 30px;
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
  margin: 0 30px;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 1%;
}
.products-slider .products {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  margin-top: 10px;
}
.products-slider .products img {
  max-width: 200px;
  max-height: 200;
}
.products-slider .products::-webkit-scrollbar {
  display: none;
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
</style>
