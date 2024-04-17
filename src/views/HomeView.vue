<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import BoxRow from '../components/BoxRow.vue';

export default {
  components: {
    Header,
    Footer,
    BoxRow
  },
  data() {
    return {
      title: 'Bienvenido',
      newItems: [
      {
        title: 'Box 2-1',
        image: '../img/assets/box2-1.jpg'
      },
      {
        title: 'Box 2-2',
        image: '../assets/box2-2.jpg'
      },
      {
        title: 'Box 2-3',
        image: '../assets/box2-3.jpg'
      },
      {
        title: 'Box 2-4',
        image: '../assets/box2-3.jpg'
      },
      {
        title: 'Box 2-3',
        image: '../assets/box2-3.jpg'
      },
      // Agrega más objetos según sea necesario
    ]

    };
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



  <BoxRow :items="newItems"/>


  <Footer/>
</template>


