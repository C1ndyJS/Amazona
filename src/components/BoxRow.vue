<template>
  <div class="box-row">
    <div v-for="(item, index) in items" :key="index" class="box-col">
      <h3>{{ item.title }}</h3>
      <img :src="item.image" :alt="item.title">
      <a href="/">Comprar mas</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.box-row {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
  margin: 20px 30px;
}

.box-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  background: #fff;
  max-width: 24%;
  min-height: 200px;
}
</style>
