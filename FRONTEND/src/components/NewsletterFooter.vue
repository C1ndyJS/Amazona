<template>
    <footer class="footer">
        <div>
            <h4>¿Deseas estar al tanto de nuestro ultimos productos?</H4>
            <h5>Suscribete a nuestro newsletter y mantente informado sobre lo ultimo de Amazona</h5>
        </div>
      <form @submit.prevent="subscribe">
        <input v-model="email" type="email" placeholder="Correo electronico..." required />
        <button type="submit">Suscribirse</button>
      </form>
    </footer>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: ''
      }
    },
    methods: {
      async subscribe() {
        try {
          const response = await axios.post('http://localhost:3003/api/subscribe', { email: this.email });
          if (response.status === 200) {
            alert('Subscription successful! Check your email.');
          } else {
            alert('Subscription failed. Please try again.');
          }
        } catch (error) {
          console.error('Error during subscription:', error);
          alert('Subscription failed. Please try again.');
        }
      }
    }
  }
  </script>
  
  <style>
  .footer {
    padding: 20px;
    background: #3d536d;
    color: #fff;
    text-align: center;
  }
  
  .footer form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer input {
    padding: 10px;
    margin-right: 10px;
  }
  
  .footer button {
    padding: 10px;
  }
  </style>
  