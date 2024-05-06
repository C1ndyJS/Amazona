<template>
  <header>
    <div class="f_line">
      <div class="logo">
        <router-link :to="{ name: 'home' } "><img src="../img/amazona_logo.png" alt="Amazon Logo"></router-link>
      </div>

      <div class="nav-country">
        <router-link :to="{ name: 'address' }"><img src="../img/assets/location_icon.png" height="20" alt=""></router-link>
      </div>

      <div class="envio">
        <i class="fa-solid fa-location-dot"></i>
        <router-link :to="{ name: 'address' }">Enviar</router-link>
      </div>

      <div class="search-bar">
        <input type="text" placeholder="Buscar en Amazon">
        <button>Buscar</button>
      </div>

      <div class="nav-text">
        <router-link v-if="username === 'identificate'" :to="{ name: 'login' }">
          <p>Hola, {{username}}</p>
          <h1>Cuenta<img src="../img/assets/dropdown_icon.png" width="8px" alt=""></h1>
        </router-link>
        <router-link v-else :to="{ name: 'profile' }">
          <p>Hola, {{username}}</p>
          <h1>Cuenta<img src="../img/assets/dropdown_icon.png" width="8px" alt=""></h1>
        </router-link>
      </div>

      <div class="cart">
        <router-link :to="{ name: 'carrito' }">
        <button>Carrito</button>
        </router-link>
        <div class="cart-items">
          <!-- Aquí se mostrarían los elementos del carrito -->
        </div>
      </div>
    </div>

    <div class="s_line">
      <div class="toggle-btn">
        <span>&#9776;</span>
        <a @click="toggleSidebar">Todo</a>
      </div> 

      <router-link :to="{name: 'deals' }">Ofertas del día</router-link>
      <router-link :to="{name: 'customerService' }">Servicio al cliente</router-link>
      <router-link :to="{name: 'lists' }">Listas</router-link>
      <router-link :to="{name: 'giftCards' }">Tarjetas de regalo</router-link>
      <router-link :to="{name: 'sell' }">Vender</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      username: 'identificate', // Inicialmente vacío
      sidebarVisible: false,
      menuItems: [
        { icon: true, text: 'Hola identifícate', link: null },
        { text: 'Inicio', link: '#' },
        { text: 'Contenidos', link: '#' },
        { text: 'Contacto', link: '#' }
      ]
    };
  },
  created() {
    // Verificar si hay un token de sesión almacenado
    const token = localStorage.getItem('token')
    if (token) {
      // Imprimir el token en la consola
      console.log('Token:', token)

      // Decodificar y mostrar el contenido del token
      const payloadBase64 = token.split('.')[1]
      const decodedPayload = atob(payloadBase64)
      const payloadObj = JSON.parse(decodedPayload)
      console.log('Contenido del payload:', payloadObj)
      this.username = payloadObj.nombre;
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    toggleCart() {
      // Implementa la lógica para mostrar u ocultar el carrito
    },
    activateItem(index) {
      // Eliminar la clase 'active' de todos los elementos de la lista
      this.menuItems.forEach(item => item.active = false);

      // Agregar la clase 'active' solo al elemento que se ha hecho clic
      this.menuItems[index].active = true;
    }
  }
};
</script>

<style scoped>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header {
        display: inline;
    }

    header .f_line {
        background-color: #7fa07f;
        color: #ffffff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .s_line {
        background-color: #83918d;
        color: #ffffff;
        padding: 20px;
        display: flex;
        justify-content:left;
        align-items: center;
        gap: 20px;
    }

    .s_line > a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    .logo img {
        height: 40px;
    }

    .search-bar input {
        padding: 8px;
        border: none;
        border-radius: 4px;
        width: 300px;
        margin-right: 10px;
    }

    .search-bar button {
        padding: 8px 16px;
        background-color: #ff9900;
        border: none;
        border-radius: 4px;
        color: #ffffff;
        cursor: pointer;
    }

    .cart {
        position: relative;
    }

    .cart-items {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px;
    }

    .cart-items.show {
        display: block;
    }


    .nav-text{
        Cursor : pointer;
        margin-left: 15px;
        margin-bottom: 0px;
    }
    .nav-text a p{
        font-size: 12px;
    }
    .nav-text a h1{
        font-size: 14px;
    }

    a {
        color: white;
        text-decoration: none;
    }


    

    #sidebar {
  position: fixed;
  left: -250px;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: #f4f4f4;
  color: #333;
  transition: left 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #333;
}

#sidebar.active {
  left: 0;
}

#sidebar button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

#sidebar ul {
  list-style-type: none;
  padding: 0;
}

#sidebar ul li {
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

#sidebar ul li:last-child {
  border-bottom: none;
  /* Eliminar borde inferior del último elemento */
}

#sidebar ul li a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

#sidebar ul li a:hover,
#sidebar ul li:hover {
  color: #007bff;
  /* color al pasar el mouse */
  cursor: pointer;
}

#close-sidebar {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #363232;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

#close-sidebar:hover {
  color: #ff2a00;
  /* Cambiar color al pasar el mouse */
}

</style>