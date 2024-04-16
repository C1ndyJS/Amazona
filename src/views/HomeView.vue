<script>
  export default {
    data(){
      return {
        title: 'Bienvenido'
      }

    }
  }
</script>

<template>
  <div>
    <h1> {{title}}</h1>
  </div>

  <input v-model="title" type="text"/>
</template>


<style scoped>
  h1 {
    color: wheat;
  }
</style>