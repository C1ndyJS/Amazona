<script>
export default {
  props: {
    productos: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="box-row">
    <div v-for="(productos, index) in productos" :key="index" class="box-col">
      <a href="'/FRONTEND/src/components/TestC.vue'" class="categoria-link">
        <h3>{{ producto.nombre }}</h3>
      <img :src="producto.url_imagen" class="productos"/>
    </a>
    </div>
  </div>
</template>

<style>
.box-row {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
}

.box-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  background: #fff;
  max-width: 24%;
  min-height: 200px;
  border-radius: 2%;
  transition: box-shadow 0.3s ease;
}

.categoria-link {
  text-decoration: none; /* Elimina el subrayado de los hipervínculos */
}

.categoria-link:hover .box-col {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Aplica sombra al pasar el mouse */
}
img.categorias {
  width: 100%;
  height: auto; /* Esto mantiene la proporción de aspecto */
  border-radius: 5px;
}

</style>

