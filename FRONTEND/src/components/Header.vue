<script>
    export default {
        name: 'Header',
        data() {
            return {
            username: 'identificate' // Inicialmente vacío
            };
    },
        created() {
    // Verificar si hay un token de sesión almacenado
    const token = localStorage.getItem('token')
    if (!token) {
      // Si no hay token, redirigir al usuario a la página de inicio de sesión
      //this.$router.push('/login')
    } else {
      // Imprimir el token en la consola
      console.log('Token:', token)

      // Decodificar y mostrar el contenido del token
      const payloadBase64 = token.split('.')[1]
      const decodedPayload = atob(payloadBase64)
      const payloadObj = JSON.parse(decodedPayload)
      console.log('Contenido del payload:', payloadObj)
      this.username = payloadObj.nombre;
    }
  }
}

    
</script>

<template>
    <header>
        <div class="f_line">
            
            <div class="logo">
                <router-link :to=" {name: 'home' } "><img src='../img/amazona_logo.png' alt="Amazon Logo"></router-link>
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
                <button onclick="toggleCart()">Carrito</button>
                <div class="cart-items">
                    <!-- Aquí se mostrarían los elementos del carrito -->
                </div>
            </div>
        </div>

        <div class="s_line">

            <div class="toggle-btn">
                <div class="toggle-btn">
                    <span>&#9776</span>
                    <a>Todo</a>
                  </div>   
            </div>

                <router-link :to=" {name: 'deals' } ">  Ofertas del dia</router-link>
     
                <router-link :to=" {name: 'customerService' } "> Servicio al cliente</router-link>

                <router-link :to=" {name: 'lists' } "> Listas</router-link>

                <router-link :to=" {name: 'giftCards' } "> Tarjetas de regalo</router-link>

                <router-link :to=" {name: 'sell' } "> Vender </router-link>
        </div>
    </header>

    <div id="sidebar">
        <ul>
          <li>
            <i class="fa-solid fa-user"></i>   
            <a>Hola {{username}}</a>
          </li>
          <li>Inicio</li>
          <li>Contenidos</li>
          <li>Contacto</li>
        </ul>
    </div> 

</template>

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
        flex: 1;
        position: fixed;
        width: 200px;
        height: 100%;
        background: #c6bbbb;
        left: -200px;
        transition: all 50ms linear;
      }
      
    
    .toggle-btn {
        cursor: pointer;
    }
    
      #sidebar.active {
        left: 0px;
      }
      
      #sidebar ul li {
        cursor: pointer;
        color: rgba(6, 6, 6, 0.9);
        list-style: none;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        text-align: center;
      }
      
      .logo-no-user {
        border-radius: 50%;
        display: block;
        margin: 0 auto; 
      }
      
      #sidebar .toggle-btn {
        display: flex;
        position: relative;
        left: 220px;
        top: 20px;
        cursor: pointer;
        color:#ffffff;
      }
    
      #sidebar .toggle-btn a {
        margin-top: 5px;
        margin-left: 4px;
      }
      
      #sidebar .toggle-btn span {
        display: block;
        width: 25px;
        text-align: center;
        font-size: 20px;
        border: 1px solid rgb(255, 255, 255);
      }

</style>