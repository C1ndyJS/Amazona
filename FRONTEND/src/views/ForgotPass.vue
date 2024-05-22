<script>
import LittleHeader from '../components/LittleHeader.vue'
import LittleFooter from '../components/LittleFooter.vue'


export default {
  components: {
    LittleHeader,
    LittleFooter
  }
}
</script>

<template>
  <LittleHeader/>
  
    <div class="container">
      <div class="form">
        <h1>Ayuda con la contraseña</h1>
        <p>Escribe la dirección de correo electrónico asociado a tu cuenta de Amazona.</p>
        <label for="email">Dirección de correo electrónico</label>
        <input type="text" id="email" placeholder="Ingresa tu correo electrónico">
        <button @click="redirectToTokenPage" id="continue-btn">Continuar</button>
      </div>
      <p class="additional-info">¿Cambiaste tu dirección de correo electrónico?<br>
        Si ya no usas la dirección de correo electrónico asociada a tu cuenta de Amazona, 
        <br>puedes comunicarte con el Servicio al cliente, y obtener ayuda para restaurar el acceso a tu cuenta.
      </p>
    </div>

    <LittleFooter/>
  </template>
  

  
  <style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  

  .logo {
    width: 200px;
    margin-bottom: 20px;
  }
  
  .form {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
  }
  
  label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #ffd700;
    color: #000;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .additional-info {
    text-align: justify;
    margin-top: 20px;
    width: 300px;
  }

  
  </style>
  