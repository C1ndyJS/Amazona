
<template>
    <div>
      <Header />
        <h1>Carrito</h1>
  
        <div class="container-icon">
          <div class="container-cart-icon" @click="toggleCart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
            </svg>
            <div class="count-products">
              <span id="contador-productos">{{ totalProducts }}</span>
            </div>
          </div>
  
          <div class="container-cart-products" :class="{ 'hidden-cart': isCartHidden }">
            <div class="row-product" v-if="cart.length > 0">
              <div class="cart-product" v-for="(product, index) in cart" :key="index">
                <div class="info-cart-product">
                  <span class="cantidad-producto-carrito">{{ product.quantity }}</span>
                  <p class="titulo-producto-carrito">{{ product.title }}</p>
                  <span class="precio-producto-carrito">$ {{ (product.price * product.quantity).toFixed(2) }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close" @click="removeFromCart(index)">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
              </div>
            </div>
  
            <div class="cart-total" v-show="cart.length > 0">
              <span class="subtotal-pagar">Subtotal: <span id="cantidad-productos-subtotal">{{ totalProducts }} producto{{ totalProducts !== 1 ? 's' : '' }}</span></span>
              <span class="total-pagar">$ {{ total }}</span>
              <button class="proceder-pago">Proceder al pago</button>
            </div>
            <p class="cart-empty" v-show="cart.length === 0">El carrito está vacío</p>
          </div>
        </div>
  
      <div class="container-items">
        <ul class="product-list">
          <li class="item" v-for="(product, index) in products" :key="index">
            <figure>
              <img :src="product.image" :alt="product.title" />
            </figure>
            <div class="info-product">
              <h2>{{ product.title }}</h2>
              <p>{{ product.description }}</p>
              <p class="price">$ {{ product.price }}</p>
              <p>Color: {{ product.color }}</p>
              <p>Talla: {{ product.size }}</p>
              <button class="btn-add-cart" @click="addToCart(product)">Cantidad</button>
              <button class="btn-remove">Eliminar</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />

  </template>
  
  <script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


  export default {
    components: {
    Header,
    Footer
    },
    data() {
      return {
        isCartHidden: true,
        products: [
          {
            title: 'Calentadores de manos',
            description: 'Naturales, activados con el aire, larga duración',
            price: 80000,
            color: 'Negro',
            size: 40,
            image: 'src/img/assets/product1-1.jpg'
          },
          {
            title: 'Mancuernas de Entrenamiento',
            description: 'Juego de dos mancuernas, 10 libras cada una',
            price: 20000,
            color: 'Azul',
            size: '10 lb',
            image: 'src/img/assets/product1-2.jpg'
          },
          {
            title: 'Gafas de Esqui',
            description: 'Proteccion UV, lente doble capa',
            price: 100000,
            color: 'Negro',
            size: 30,
            image: 'src/img/assets/product1-3.jpg'
          }
        ],
        cart: []
      };
    },
    computed: {
      total() {
        return this.cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
      },
      totalProducts() {
        return this.cart.reduce((acc, product) => acc + product.quantity, 0);
      }
    },
    methods: {
      toggleCart() {
        this.isCartHidden = !this.isCartHidden;
      },
      addToCart(product) {
        const existingProduct = this.cart.find(prod => prod.title === product.title);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          this.cart.push({
            ...product,
            quantity: 1
          });
        }
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Globales */
  *::after,
*::before,
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    margin: 0 auto;
    max-width: 1200px;
    font-family: 'Lato';
    color: #333;
}

.icon-cart{
    width: 40px;
    height: 40px;
    stroke: #000;
}

.container-icon {
    position: relative;
}

.container-cart-icon {
    position: absolute;
    top: 0;
    right: 0; /* Ajusta la posición del icono de carrito hacia la derecha */
}

.count-products {
    position: absolute;
    top: 50%;
    right: -10px; /* Ajusta la posición del contador de productos hacia la derecha */
    transform: translateY(-50%);
    background-color: #000;
    color: #fff;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 12px;
}


.icon-cart:hover{
    cursor: pointer;
}

img{
    max-width: 100%;
}

.container-icon{
    position: relative;
}

.count-products{
    position: absolute;
    top: 55%;
    right: 0;

    background-color: #000;
    color: #fff;
    width: 25px;
    height: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

#contador-productos{
    font-size: 12px;
}

.container-cart-products{
    position: absolute;
    top: 50px;
    right: 0;

    background-color: #fff;
    width: 400px;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    
}

.cart-product{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.20);

}

.info-cart-product{
    display: flex;
    justify-content: space-between;
    flex: 0.8;
}

.titulo-producto-carrito{
    font-size: 20px;
}

.precio-producto-carrito{
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
}

.cantidad-producto-carrito{
    font-weight: 400;
    font-size: 20px;
}

.icon-close{
    width: 25px;
    height: 25px;
}

.icon-close:hover{
    stroke: red;
    cursor: pointer;
}

.cart-total{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
}

.cart-total h3{
    font-size: 20px;
    font-weight: 700;
}

.total-pagar{
    font-size: 20px;
    font-weight: 900;
}

.hidden-cart{
    display: none;
}

/* Main */
.container-items{
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    gap: 20px;
}

.item{
    border-radius: 10px;
    display: flex; 
}

.item img {
    width: 200px; /* Cambiado el ancho de la imagen */
    height: auto; /* Agregado */
    border-radius: 10px 0 0 10px; 
}

.item .info-product {
    padding: 15px; /* Agregado */
}

.item .info-product button {
    margin-top: 10px; /* Agregado */
}

.item:hover{
    box-shadow: 0 10px 20px rgba(105, 55, 55, 0.2);
}

.proceder-pago {
    background-color: orange;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.proceder-pago:hover {
    background-color: darkorange; /* Cambiar el color al pasar el mouse */
}

/*Eliminar */
.btn-remove {
    color: rgb(0, 28, 139);
    text-decoration: underline;
    cursor: pointer; 
  }
  
  /* Eliminar el resaltado del enlace al hacer clic */
  .btn-remove:focus {
    outline: none;
  }

  .subtotal-pagar {
    font-size: 17px; 
}
/*Div carrito*/
.container-cart-products {
    width: 450px; 
}
  </style>
  