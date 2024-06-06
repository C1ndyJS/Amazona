<!-- views/Ordenes.vue -->

<template>
    <Header />
    <section id="ordenes" class="section-p2">
      <h2>Órdenes</h2>
      <ul>
        <li v-for="orden in ordenes" :key="orden.id" class="orden-item">
          <h3>Orden ID: {{ orden.id }}</h3>
          <ul>
            <li v-for="item in orden.items" :key="item.producto.id_producto" class="producto-item">
              <p>Producto: {{ item.producto.nombre }}</p>
              <p>Cantidad: {{ item.cantidad }}</p>
              <p>Precio: ${{ item.producto.precio }}</p>
              <p>Total: ${{ (item.cantidad * item.producto.precio).toFixed(2) }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <BackHome2 />
    <Footer />
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import BackHome2 from '../components/BackHome2.vue'
  import { mapState } from 'vuex';
  
  export default {
    components: {
      Header,
      Footer,
      BackHome2,
    },
    computed: {
      ...mapState({
        ordenes: state => state.ordenes,
      }),
    }
  };
  </script>
  
  <style>
  /* Add styles for the orders view */
  #ordenes {
    margin: 20px;
  }
  .orden-item {
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
  }
  .producto-item {
    border-top: 1px solid #000;
    padding-top: 10px;
  }
  </style>
  