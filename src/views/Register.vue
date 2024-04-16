<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default {
  components: {
    Header,
    Footer
  }
}
</script>

<template>
    <Header/>
    <div class="container">
        <form id="registro-form" class="box-visible">
            <img src="../img/amazona_logo.png" alt="user-img">
            <h1>Crear cuenta</h1>
            <label for="nombre">Tu nombre:</label>
            <input type="text" id="username" placeholder="Nombres y apellidos" required>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Ingrese informacion" required>
            <label for="password">Contraseña</label>
            <input type="password" id="password" placeholder="Minimo 6 caracteres" required>        <!-- Botón para enviar el formulario de registro -->
            <button type="submit" id="registro-submit">Registrarse</button>
        </form>
    </div>

    <Footer/>
</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    margin-top: 14px;
    margin-bottom: 14px;
}



body {
    background-color: #f0f0f0; /* Cambia el color de fondo del lienzo */
    margin: 0;             /* Asegura que no haya margen alrededor del lienzo */
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

form{
    width: 300px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 10px 4px 10px 10px #ccc;
    border-radius: 20px;
    background-color: #fcfafa;
  }

  h1 {
    font-size: 30px;
  }

  input {
    width: 80%;
}
  
  form img{
    width: 200px;
    height: 80px;
    padding: 10px;
  }
  
  form input[type="text"], input[type="password"]{
    outline: 0px;
    border: 1px solid #ccc;
    width: 80%;
    padding: 10px;
  }
  
  form label{
    font-weight: 500;
    padding: 10px;
  }


.crear-cuenta-btn {
    outline: 0;
    border: 0;
    color: #ffffff; /* Color del texto */
    background-color: #e2c419; /* Color de fondo */
    width: 248px;
    padding: 3px;
    transition: all .3s ease-in-out;
    border-radius: 20px; /* Borde redondeado */
    text-align: center;
    color: black;
    font-weight: 480;
    text-decoration: none; /* Sin subrayado */
    font-weight: 500;
  }
  
  .crear-cuenta-btn:hover {
    background-color: #d6ba18; /* Color de fondo al pasar el mouse */
  }
  
  #registro-form button{
    outline: 0;
    border: 0;
    background-color: #e2c419; /*#96b896*/
    border-radius: 20px;
    cursor: pointer;
    width: 250px;
    padding: 5px;
    transition: all .3s ease-in-out;
    text-align: center;
    color: black;
    font-weight: 480;
  }

</style>