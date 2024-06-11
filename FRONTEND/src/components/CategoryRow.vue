<script>
export default {
  props: {
    categorias: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="box-row">
    <div class="categories">
        <div v-for="categoria in categorias" :key="categoria.id_categoria" class="card" style="width: 18rem;">
          <router-link v-if="categoria.id_categoria" :to="{ name: 'home', params: { id: categoria.id_categoria } }" class="categoria-link">
          <img :src="categoria.url_imagen" class="card-img-top" :alt="categoria.nombre" />
            <div class="card-body">
              <h5 class="card-title">{{ categoria.nombre }}</h5>
              <p class="card-text">{{ categoria.descripcion }}</p>
            </div>
          </router-link>
        </div>

    </div>
  </div>
</template>

<style>
.box-row {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
  padding-bottom: 15px;
}

.card {
  box-shadow: 5px 5px;
}

.categories {
  padding-left: 20px;
  padding-top: 20px;
  gap: 40px;
  display: flex;
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
.card-body h5{
  color: black;
}

.card-body p {
  color: black;
}
.card-img-top {
  height: 180px;
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

