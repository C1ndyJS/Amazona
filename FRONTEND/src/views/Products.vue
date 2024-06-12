<template>
    <Header />
    <BackHome2 />
  
    <div>
      <h1>Productos</h1>
      <button @click="showAddProduct = true">Añadir Producto</button>
      <div v-if="showAddProduct">
        <h2>Añadir Producto</h2>
        <form @submit.prevent="addProduct">
          <input v-model="newProduct.nombre" placeholder="Name" required />
          <textarea v-model="newProduct.descripcion" placeholder="Description"></textarea>
          <input v-model="newProduct.precio" type="number" step="0.01" placeholder="Price" required />
          <input v-model="newProduct.marca" placeholder="Brand" />
          <input v-model="newProduct.stock" type="number" placeholder="Stock" required />
          <input v-model="newProduct.url_imagen" placeholder="Image URL" />
          <input v-model="newProduct.id_categoria" type="number" placeholder="Category ID" required />
          <div class="g-recaptcha" data-sitekey="6LdjBvEpAAAAAIMpc_F3LmHu4Vhr20jJERSVoXvz"></div>
          <button type="submit">Añadir</button>
          <button @click="showAddProduct = false">Cancelar</button>
        </form>
      </div>
  
      <div v-if="error" class="error-message">
        <p>{{ error }}</p>
      </div>
      
      <div v-for="product in products" :key="product.id_producto" class="product-card">
        <h2>{{ product.nombre }}</h2>
        <p>{{ product.descripcion }}</p>
        <p>Price: {{ product.precio }}</p>
        <p>Brand: {{ product.marca }}</p>
        <p>Stock: {{ product.stock }}</p>
        <img :src="product.url_imagen" alt="Product Image" />
        <p>Category ID: {{ product.id_categoria }}</p>
        <button @click="deleteProduct(product.id_producto)">Eliminar</button>
        <button @click="editProduct(product)">Editar</button>
      </div>
  
      <div v-if="showEditProduct">
        <h2>Editar producto</h2>
        <form @submit.prevent="updateProduct">
          <input v-model="currentProduct.nombre" placeholder="Name" required />
          <textarea v-model="currentProduct.descripcion" placeholder="Description"></textarea>
          <input v-model="currentProduct.precio" type="number" step="0.01" placeholder="Price" required />
          <input v-model="currentProduct.marca" placeholder="Brand" />
          <input v-model="currentProduct.stock" type="number" placeholder="Stock" required />
          <input v-model="currentProduct.url_imagen" placeholder="Image URL" />
          <input v-model="currentProduct.id_categoria" type="number" placeholder="Category ID" required />
          <button type="submit">Actualizar</button>
          <button @click="showEditProduct = false">Cancelar</button>
        </form>
      </div>
    </div>
  
    <Footer />
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import BackHome2 from '../components/BackHome2.vue';
  import axios from 'axios';
  import BackHome from '@/components/BackHome.vue';
  
  export default {
    components: {
      Header,
      Footer,
      BackHome2,
    },
    data() {
      return {
        products: [],
        newProduct: { nombre: '', descripcion: '', precio: '', marca: '', stock: '', url_imagen: '', id_categoria: '' },
        currentProduct: {},
        showAddProduct: false,
        showEditProduct: false,
        error: null,
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        axios.get('http://localhost:3003/api/productos')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            this.error = 'Error fetching products: ' + error.message;
          });
      },
      addProduct() {
        axios.post('http://localhost:3003/api/producto', this.newProduct)
          .then(response => {
            this.products.push(response.data); // Agrega el nuevo producto a la lista local
            this.newProduct = { nombre: '', descripcion: '', precio: '', marca: '', stock: '', url_imagen: '', id_categoria: '' };
            this.showAddProduct = false;
          })
          .catch(error => {
            this.error = 'Error adding product: ' + error.message;
          });
      },
      deleteProduct(id) {
        axios.delete(`http://localhost:3003/api/productos/${id}`)
          .then(() => {
            this.products = this.products.filter(product => product.id_producto !== id); // Elimina el producto de la lista local
          })
          .catch(error => {
            this.error = 'Error deleting product: ' + error.message;
          });
      },
      editProduct(product) {
        this.currentProduct = { ...product };
        this.showEditProduct = true;
      },
      updateProduct() {
        axios.put(`http://localhost:3003/api/productos/${this.currentProduct.id_producto}`, this.currentProduct)
          .then(response => {
            const index = this.products.findIndex(product => product.id_producto === this.currentProduct.id_producto);
            if (index !== -1) {
              this.products.splice(index, 1, response.data); // Actualiza el producto en la lista local
            }
            this.showEditProduct = false;
          })
          .catch(error => {
            this.error = 'Error updating product: ' + error.message;
          });
      }
    }
  };
  </script>
  
  <style>
  .product-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
  .error-message {
    color: red;
    margin: 10px 0;
  }
  
  .g-recaptcha {
    padding: 5px;
  }
  </style>
  