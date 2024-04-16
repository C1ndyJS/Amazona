<script>
    export default {
        name: 'Header'
    }

    
</script>

<template>
    <header>
        <div class="f_line">
            
            <div class="logo">
                <img src='../img/amazona_logo.png' alt="Amazon Logo">
            </div>

            <div class="nav-country">
                <img src="../img/assets/location_icon.png" height="20" alt="">
            </div>

            <div class="envio">
                <i class="fa-solid fa-location-dot"></i>
                <a>Enviar</a>
            </div>

            <div class="search-bar">
                <input type="text" placeholder="Buscar en Amazon">
                <button>Buscar</button>
            </div>

            <div class="nav-text" onclick="clicka()">
                <p>Hola, Identificate</p>
                <h1>Cuenta y Listas <img src="./img/assets/dropdown_icon.png" width="8px" alt=""></h1>
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
            <a>Hola identificate</a>
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
    .nav-text p{
        font-size: 12px;
    }
    .nav-text h1{
        font-size: 14px;
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