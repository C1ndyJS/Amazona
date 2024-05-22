<script>
export default {
  name: 'LittleHeader'
}
</script>

<template>
  <header class="header">
    <router-link :to="{ name: 'home' }"
      ><img src="../img/amazona_logo.png" alt="Logo de Amazona" class="logo"
    /></router-link>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
}

.logo {
  margin: 30px 10px 1cap 30px;
  width: 230px; /* ajusta el 
    tamaño del logo según sea necesario */
}
</style>
