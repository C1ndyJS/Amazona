<script>
export default {
  name: 'LittleFooter'
}
</script>


<template>
    <footer>
        <div class="footer-divider"></div> <!-- Línea sombreada -->
        <div class="footer-links">
          <a href="condiciones-uso.html">Condiciones de uso</a>
          <a href="aviso-privacidad.html">Aviso de privacidad</a>
          <a href="#">Ayuda</a>
        </div>
        <p class="footer-version">© 2024-Proyecto Amazona</p>
      </footer>
  </template>
  
  
  <style scoped>

.footer-divider {
  border-top: 2px solid #ddd; /* Define el estilo de la línea */
  margin-top: 20px; /* Espaciado superior para separar del contenido anterior */
  padding-top: 20px; /* Espaciado interno para separar del contenido del pie de página */
}

footer {
  width: 100%; /* Asegura que el footer tenga el ancho completo */
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
  bottom: 0; /* Alinea el footer al fondo de la página */
}

.footer-links a {
  margin: 0 10px;
  color: #333;
  text-decoration: none;
}

.footer-version {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
  </style>
  