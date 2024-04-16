<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: 'Bienvenido'
    }
  }
};
</script>







<template>
  <Header/>
  <h1>Home</h1>

  <div>
    <h1> {{title}}</h1>
  </div>

  <input v-model="title" type="text"/>

  <Footer/>
</template>


<style scoped>
  h1 {
    color: wheat;
  }
</style>