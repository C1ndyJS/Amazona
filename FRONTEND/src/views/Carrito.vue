<template>
  <Header />
  <section id="product-details" class="section-p2">
    <ul>
      <li v-for="item in carrito" :key="item.producto.id_producto" class="carrito-item">
        <img :src="item.producto.url_imagen" :alt="item.producto.nombre" class="producto-imagen" />
        <div class="producto-detalles">
          <h2>{{ item.producto.nombre }}</h2>
          <p>{{ item.producto.descripcion }}</p>
          <p>Precio: ${{ item.producto.precio }}</p>
          <p>Cantidad: 
            <input type="number" :value="item.cantidad" @change="actualizarCantidadProducto(item.producto.id_producto, $event.target.value)" />
          </p>
          <p>Total: ${{ (item.cantidad * item.producto.precio).toFixed(2) }}</p>
          <button @click="quitarProductoDelCarrito(item.producto.id_producto)">Eliminar</button>
        </div>
      </li>
    </ul>

    <div class="single-pro-details">
      <h3>Carrito de Compras</h3>
      <h4>Total de artículos: {{ totalItems }}</h4>
      <h2>Total a pagar: ${{ totalPrice.toFixed(2) }}</h2>
      <button @click="crearLaOrden">Crear Orden</button>
      <div class="g-recaptcha" data-sitekey="6LdjBvEpAAAAAIMpc_F3LmHu4Vhr20jJERSVoXvz"></div>
      <div id="paypal-button-container"></div>
    </div>
    
  </section>
  <BackHome />
  <Footer />
</template>



<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import BackHome from '../components/BackHome.vue'
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Header,
    Footer,
    BackHome,
  },
  computed: {
    ...mapState({
      carrito: state => state.carrito,
    }),
    totalItems() {
      return this.carrito.reduce((total, item) => total + item.cantidad, 0);
    },
    totalPrice() {
      const total = this.carrito.reduce((total, item) => total + item.cantidad * item.producto.precio, 0);
      return total || 0; // Asegurar que siempre devolvemos un número
    }
  },
  methods: {
    ...mapActions(['quitarDelCarrito', 'actualizarCantidad', 'crearOrden']),
    quitarProductoDelCarrito(id_producto) {
      this.quitarDelCarrito(id_producto);
    },
    actualizarCantidadProducto(id_producto, cantidad) {
      const cantidadInt = parseInt(cantidad, 10);
      if (!isNaN(cantidadInt) && cantidadInt >= 0) {
        this.actualizarCantidad({ id_producto, cantidad: cantidadInt });
      }
    },
    crearLaOrden() {
      this.crearOrden();
      alert('Orden creada exitosamente');
    },
    loadPayPalScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AcF5OHweSQAK88ezr4nwwpn5nFe9tbQnpT9fmRZ9GhwUuQkD2PRrL7M5HV7eD5oPGlMFA3-1QW0hV5Ck';
        script.onload = () => resolve(window.paypal);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    renderPayPalButton() {
      paypal.Buttons({
        createOrder: (data, actions) => {
          return fetch('/paypal/create-order', {
            method: 'post',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              items: this.carrito
            })
          })
          .then(response => response.json())
          .then(order => order.id);
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Vaciar el carrito o hacer otras acciones necesarias
          });
        }
      }).render('#paypal-button-container');
    },
    async createOrder() {
      const response = await fetch('/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: this.carrito.map(item => ({
            id: item.id_producto,
            name: item.nombre,
            quantity: item.cantidad,
            price: item.precio
          }))
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const order = await response.json();
      return order.id;
    },
    async onApprove(data, actions) {
      const response = await actions.order.capture();
      console.log('Payment successful!', response);
    }
  },
  async mounted() {
    try {
      const paypal = await this.loadPayPalScript();
      paypal.Buttons({
        createOrder: this.createOrder,
        onApprove: this.onApprove
      }).render('#paypal-button-container');
    } catch (error) {
      console.error('Failed to load PayPal script:', error);
    }
  },
  watch: {
    carrito: {
      handler(newCarrito) {
        console.log('Carrito actualizado:', newCarrito);
      },
      deep: true
    }
  }
};
</script>

<style>

#product-details{
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 90px;
  padding-right: 50px;
  padding-top: 20px;
  border: 1px solid #000;
  gap: 400px;
}

#product-details .single-pro-image {
  margin-top: 50px;
  margin-left: 300px;
  width: 40%;
  margin-right: 50px;
}

.carrito-item {
  border: 1px solid #000;
  box-shadow: 5px 5px;
  padding: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 50px;
}

.producto-imagen {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.single-pro-details button{
  padding: 5px;
}

.g-recaptcha {
  padding: 5px;
}

.producto-detalles {
  display: flex;
  flex-direction: column;
}

#product-details .single-pro-details {
  width: 50%;
  padding-top: 30px;
  border: 1px solid #000;
  box-shadow: 5px 5px;
  padding: 50px;
  

}

#product-details .single-pro-details h4 {
  padding: 40px 0 20px 0;
}

#product-details .single-pro-details h2 {
  font-size: 26px;
}

#product-details .single-pro-details select {
  display: block;
  padding: 5px 10px;
  margin-bottom: 10px;
}

#product-details .single-pro-details button {
  background: #088178;
  color: white;
}

</style>
