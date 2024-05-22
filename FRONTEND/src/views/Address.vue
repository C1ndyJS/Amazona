<script>
import LittleHeader from '../components/LittleHeader.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    LittleHeader,
    Footer,
    
  }
}
</script>

<template>
    
    <LittleHeader/>
    <div class="form">
      <header>
        <h1>Agregar una Nueva Dirección</h1>
        <p>Completa la siguiente información para agregar una nueva dirección.</p>
      </header>
      <form>
        <div class="input-group">
          <label for="full-name">Nombre completo (nombre y apellido):</label>
          <input type="text" id="full-name" placeholder="Ingrese su nombre completo">
        </div>
        <div class="input-group">
          <label for="address">Dirección:</label>
          <input type="text" id="address" placeholder="Ingrese su dirección">
        </div>
        <div class="input-group">
          <label for="city">Ciudad:</label>
          <input type="text" id="city" placeholder="Ingrese su ciudad">
        </div>
        <div class="input-group">
          <label for="phone">Número de teléfono:</label>
          <input type="text" id="phone" placeholder="Ingrese su número de teléfono">
        </div>
        <button id="add-btn">Agregar Nueva Dirección</button>
      </form>
      <p class="additional-info">Al agregar una nueva dirección, podrás seleccionarla al realizar tu próximo pedido.</p>
    </div>       
    
    <Footer/>
  </template>
  
  <style scoped>

    img {
        width: 500px;
    }

    .form header {
        text-align: center;
        margin-bottom: 20px;
      }

    .form {
      width: 800px;
      margin: 30px auto;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .input-group {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .input-group label {
      margin-right: 10px;
      width: 200px; /* Ancho fijo para las etiquetas */
    }
  
    .input-group input[type="text"] {
      width: 70%; /* Los campos de entrada ocupan todo el espacio restante */
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    #add-btn {
      width: 100%;
      padding: 12px;
      background-color: #ffd700;
      color: #000;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .additional-info {
      text-align: justify;
    }
  </style>
  