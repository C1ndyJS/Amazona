<template>
  <Header />
  <BackHome2 />
  <section id="prodetails" class="section-p1">
    <div class="single-pro-image">
      <img :src="producto.url_imagen" :alt="producto.nombre" width="100%" id="MainImage"/>

      <div class="small-img-group">
        <div class="small-img-col">
          <img :src="producto.url_imagen" :alt="producto.nombre" width="100%" class="small-img"/>
        </div>
        <div class="small-img-col">
          <img :src="producto.url_imagen" :alt="producto.nombre" width="100%" class="small-img"/>
        </div>
        <div class="small-img-col">
          <img :src="producto.url_imagen" :alt="producto.nombre" width="100%" class="small-img"/>
        </div>
        <div class="small-img-col">
          <img :src="producto.url_imagen" :alt="producto.nombre" width="100%" class="small-img"/>
        </div>
      </div>
    </div>

    <div class="single-pro-details">
      <h6>Inicio / {{producto.id_producto}}</h6>
      <h4>{{producto.nombre}}</h4>
      <h2>Precio - ${{ producto.precio }}</h2>
      <select>
        <option>Escoger Tamaño</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>XL</option>
      </select>
      <input v-model.number="cantidad" type="number" min="1" placeholder="">
      <div class="g-recaptcha" 
         data-sitekey="6LdjBvEpAAAAAIMpc_F3LmHu4Vhr20jJERSVoXvz" 
         data-callback="onRecaptchaSuccess" 
         data-expired-callback="onRecaptchaExpired">
    </div> 
    <button class="normal" :disabled="!isCaptchaVerified" @click="agregarProductoAlCarrito">Agregar al carrito</button>
      <h4>Detalles del Producto</h4>
      <span>{{ producto.descripcion }}</span>
    </div>
  </section>

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

  <BackHome/>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import BackHome from '../components/BackHome.vue'
import BackHome2 from '../components/BackHome2.vue'
import axios from 'axios'
import { mapActions } from 'vuex'

export default {

  components: {
    Header,
    Footer,
    BackHome,
    BackHome2,
  },
  props: ['id'],
  data() {
    return {
      productos: [],
      producto: {},
      cantidad: 1,
      isCaptchaVerified: true,
      recaptchaToken: '',
    }
  },
  created() {

    window.onRecaptchaSuccess = this.onRecaptchaSuccess;
    window.onRecaptchaExpired = this.onRecaptchaExpired;

    axios.get(`http://localhost:3003/api/productos/${this.id}`)
      .then(response => {
        this.producto = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los detalles del producto:', error);
      });

      axios.get('http://localhost:3003/api/productos')
      .then(response => {
        this.productos = response.data;
        /*console.log('Productos cargados:', this.productos); // Debugging*/
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  },
  methods: {
    ...mapActions(['agregarAlCarrito']),
    agregarProductoAlCarrito() { 
      this.agregarAlCarrito({ producto: this.producto, cantidad: this.cantidad });
    },
    onRecaptchaSuccess(token) {
      this.isCaptchaVerified = true;
      this.recaptchaToken = token;
    },
    onRecaptchaExpired() {
      this.isCaptchaVerified = false;
      this.recaptchaToken = '';
    }
  }
}
</script>

<style>

#prodetails{
  display: flex;
  margin-top: 20px;
  margin-bottom: 90px;
}

#prodetails .single-pro-image {
  margin-top: 50px;
  margin-left: 300px;
  width: 40%;
  margin-right: 50px;
}

.small-img-group {
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
}

.small-img-col {
  flex-basis: 24%;
  cursor: pointer;
}

.g-recaptcha{
  padding: 5px;
}

#prodetails .single-pro-details {
  width: 50%;
  padding-top: 30px;

}

#prodetails .single-pro-details h4 {
  padding: 40px 0 20px 0;
}

#prodetails .single-pro-details h2 {
  font-size: 26px;
}

#prodetails .single-pro-details select {
  display: block;
  padding: 5px 10px;
  margin-bottom: 10px;
}

#prodetails .single-pro-details input {
  width: 50px;
  height: 47px;
  padding-left: 10px;
  font-size: 16px;
  margin-right: 10px;
}

#prodetails .single-pro-details input:focus {
  outline: none;
}

#prodetails .single-pro-details button {
  background: #088178;
  color: white;
}

#prodetails .single-pro-details span{
  line-height: 25px;

}

</style>
