<template>
    <Header />
    <BackHome2 />
  
    <div>
      <h1>Categorías</h1>
      <button @click="showAddCategory = true">Añadir categoria</button>
      <div v-if="showAddCategory">
        <h2>Añadir categoria</h2>
        <form @submit.prevent="addCategory">
          <input v-model="newCategory.nombre" placeholder="Name" required />
          <textarea v-model="newCategory.descripcion" placeholder="Description"></textarea>
          <input v-model="newCategory.url_imagen" placeholder="Image URL" />
          <button type="submit">Añadir</button>
          <button @click="showAddCategory = false">Cancelar</button>
        </form>
      </div>
  
      <div v-if="error" class="error-message">
        <p>{{ error }}</p>
      </div>
      
      <div v-for="category in categories" :key="category.id_categoria" class="category-card">
        <h2>{{ category.nombre }}</h2>
        <p>{{ category.descripcion }}</p>
        <img :src="category.url_imagen" alt="Category Image" />
        <button @click="deleteCategory(category.id_categoria)">Eliminar</button>
        <button @click="editCategory(category)">Editar</button>
      </div>
  
      <div v-if="showEditCategory">
        <h2>Editar categoria</h2>
        <form @submit.prevent="updateCategory">
          <input v-model="currentCategory.nombre" placeholder="Name" required />
          <textarea v-model="currentCategory.descripcion" placeholder="Description"></textarea>
          <input v-model="currentCategory.url_imagen" placeholder="Image URL" />
          <button type="submit">Actualizar</button>
          <button @click="showEditCategory = false">Cancelar</button>
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
  
  export default {
    components: {
      Header,
      Footer,
      BackHome2,
    },
    data() {
      return {
        categories: [],
        newCategory: { nombre: '', descripcion: '', url_imagen: '' },
        currentCategory: {},
        showAddCategory: false,
        showEditCategory: false,
        error: null,
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      fetchCategories() {
        axios.get('http://localhost:3003/api/categorias')
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            this.error = 'Error fetching categories: ' + error.message;
          });
      },
      addCategory() {
        axios.post('http://localhost:3003/api/categoria', this.newCategory)
          .then(response => {
            this.categories.push(response.data); // Agrega la nueva categoría a la lista local
            this.newCategory = { nombre: '', descripcion: '', url_imagen: '' };
            this.showAddCategory = false;
          })
          .catch(error => {
            this.error = 'Error adding category: ' + error.message;
          });
      },
      deleteCategory(id) {
        axios.delete(`http://localhost:3003/api/categoria/${id}`)
          .then(() => {
            this.categories = this.categories.filter(category => category.id_categoria !== id); // Elimina la categoría de la lista local
          })
          .catch(error => {
            this.error = 'Error deleting category: ' + error.message;
          });
      },
      editCategory(category) {
        this.currentCategory = { ...category };
        this.showEditCategory = true;
      },
      updateCategory() {
        axios.put(`http://localhost:3003/api/categoria/${this.currentCategory.id_categoria}`, this.currentCategory)
          .then(response => {
            const index = this.categories.findIndex(category => category.id_categoria === this.currentCategory.id_categoria);
            if (index !== -1) {
              this.categories.splice(index, 1, response.data); // Actualiza la categoría en la lista local
            }
            this.showEditCategory = false;
          })
          .catch(error => {
            this.error = 'Error updating category: ' + error.message;
          });
      }
    }
  };
  </script>
  
  <style>
  .category-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
  .error-message {
    color: red;
    margin: 10px 0;
  }
  </style>
  