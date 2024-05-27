<script>
    export default {
        name: 'Header'
    }

</script>

<template>
    <header>
        <div class="f_line">
            
            <div class="logo">
                <router-link :to=" {name: 'home' } "><img src='../img/AMAZONA_LOGO.svg' alt="Amazona Logo"></router-link>
            </div>

            <div class="nav-location">
                <router-link :to="{ name: 'address' }">
                <div class="location-content">
                    <img src="../img/assets/location_icon.png" height="30" alt="">
                    <div class="location-text">
                        <p>Enviar a</p>
                        <h1>Colombia</h1>
                    </div>
                </div>         
                </router-link>
            </div>

            <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Buscar Amazona" aria-label="Busca Amazona" aria-describedby="search-addon" />
                <button type="button" class="btn btn-success" data-mdb-ripple-init>
                    <i class='bx bx-search' id="search-image"></i>
                </button>
            </div>

            <div class="language-side">
                <router-link :to=" {name: 'home'} ">
                    <div class="language-content">
                        <span class="fi fi-co fi"></span>
                        <h1>CO
                            <img src="../img/assets/dropdown_icon.png" width="8px" alt="">
                        </h1>
                    </div>
                </router-link>
            </div>

            <div class="nav-text">
                <router-link :to=" {name: 'login' } ">
                    <p>Hola, Identificate</p>
                    <h1>Cuenta y Listas<img src="../img/assets/dropdown_icon.png" width="8px" alt=""></h1>
                </router-link>
            </div>

            <div class="nav-text1">
                <p>Devoluciones</p>
                <h1>Y Pedidos</h1>
            </div>

            <div class="cart">
                <router-link :to=" {name: 'carrito' } ">
                    <div class="cart-content">
                        <i class='bx bx-cart-add' id="cart-icon" data-quantity="0"></i>
                        <h1>Carrito</h1>
                    </div>
                </router-link>
            </div>  
        </div>


        <div class="s_line">

                <!-- NAV BUTTON  -->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"data-bs-target="#menuLateral">
                    <i class='bx bx-menu'></i>
                    <p>Todo</p>
                </button>
                <!-- OFFCANVAS MAIN CONTAINER START -->
                <section class="offcanvas offcanvas-start" id="menuLateral" tabindex="-1">
                    <router-link :to=" {name: 'login' } ">
                    <div class="offcanvas-header" data-bs-theme="dark">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z"/></svg>
                        <h5>Hola, Identifícate</h5>
                        <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas">
                        </button>
                    </div>
                    </router-link>
                <!-- OFF CANVAS MENU LINKS  START-->
                <div
                    class="offcanvas-body d-flex flex-column justify-content-between px-0"
                >
                    <ul class="navbar-nav fs-5 justify-content-evenly">
                    <li class="nav-item p-3 py-md-1">
                        <a href="" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="" class="nav-link">Categorias</a>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="" class="nav-link">Sobre nosotros</a>
                    </li>
                    <li class="nav-item p-3 py-md-1">
                        <a href="" class="nav-link">Contacto</a>
                    </li>
                    </ul>
                    <!-- enlaces redes sociales -->

                    <div class="d-lg-none align-self-center py-3">
                    <a href=""><i class="bi bi-twitter px-2 text-info fs-2"></i></a>
                    <a href=""><i class="bi bi-facebook px-2 text-info fs-2"></i></a>
                    <a href=""><i class="bi bi-github px-2 text-info fs-2"></i></a>
                    <a href=""><i class="bi bi-whatsapp px-2 text-info fs-2"></i></a>
                    </div>
                </div>
                </section>
                <!-- OFFCANVAS MAIN CONTAINER END  -->
          
            <router-link :to=" {name: 'customerService' } "> Servicio al cliente</router-link>

            <router-link :to=" {name: 'lists' } "> Listas</router-link>

            <router-link :to=" {name: 'pedidos' } "> Pedidos</router-link>

            <router-link :to=" {name: 'sell' } "> Vender</router-link>

            <router-link :to=" {name: 'categories' } "> Ver Categorias</router-link>

            <router-link :to="{ name: 'blog' }"> Blog</router-link>

            <router-link :to=" {name: 'products' } "> Ver Productos </router-link>
    </div> 

    </header>



</template>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    header {
        display: inline;
    }

    header .f_line {
        background-color: #131921;
        color: #f1f1f1;
        font-family: inherit;
        padding: 1px 8px 0 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: static;
        float: none;
        flex-shrink: 0;
        height: 60px;
    }

    header .s_line {
        font-family: inherit;
        line-height: 1em;
        background-color: #232f3e;
        max-height: 39px;
        padding-top: 0px;
        color: #ffffff;
        padding-left: 1px;
        display: flex;
        align-items: center;
        gap: 50px;
    }

    .s_line > a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    .logo {
        width: auto;
        padding: 4px 0 0 0;
        display: flex;
        position: relative;
        float: none;
        top: 0;
        right: 0;
        left: 0;
        bottom:0;
        line-height: 0;
        height: 100%;
    }

    .logo img {
        display: flex;
        position: static;
        float: none;
        flex-shrink: 0;
        text-decoration: none;
        padding: 1px 0px 8px 6px;
        margin: 1px;
        height: 50px;
        font-size: 36px;
    }

    .input-group {
        width: 600px;
    }
    .input-group input{
        padding: 8px;
        border: none;
        border-radius: 4px;
        margin-right: -20px;
    }

    .input-group button{
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        color: #ffffff;
        cursor: pointer;
    }

    #search-image{
        font-size: 16px;
    }

    .logo img {
        width: 113px;
        height: 58px;
    }

    .cart {
        display: flex;
        align-items: center;
    }
    .language-content {
        display: flex;
        padding-left: 5px;
        padding-top: 15px;
        align-items: center;
    }

    .cart a h1{
        font-size: 14px;
        width: auto;
        min-width: 0;
        margin-left: 2px;
        margin-top: 10px;
    }

    #cart-icon {
        cursor: pointer;
        position: relative;
    }

    #cart-icon[data-quantity]::after{
        contain: '';
        position: absolute;
    }

    #cart-icon[data-quantity]::after{
        content: '';
        position: absolute;
    }

    .nav-location{
        Cursor : pointer;
        margin-left: 15px;
        margin-bottom: 0px;
    }

    .location-content{
        display: flex;
        align-items: center;
    }

    .location-content img{
        padding-bottom: 5px;
    }

    .nav-location a p{
        font-size: 13px;
        position: relative;
        width: 100%;
        height: 14px;
        margin-top: 9px;
        margin-bottom: 5px; 
    }

    .nav-location a h1{
        font-size: 14px;
        width: auto;
        min-width: 0;
        font-weight: bold;
    }

    .nav-location img{
        margin-top: 9px;
        margin-right: 2px;
    }

    .cart-content {
        display: flex;
        align-items: center;
    }

    .language-side a h1{
        font-size: 14px;
        width: auto;
        min-width: 0;
        margin-top: 7px;
        margin-left: 5px;
        font-weight: bold;
    }
    
    .nav-text{
        Cursor : pointer;
        margin-bottom: 0px;
    }

    .nav-text a p{
        font-size: 13px;
        position: relative;
        width: 100%;
        height: 14px;
        margin-top: 9px;
        margin-bottom: 5px; 
    }

    .nav-text a h1{
        font-size: 14px;
        width: auto;
        min-width: 0;
        font-weight: bold;
    }

    .nav-text1{
        Cursor : pointer;
        margin-left: 5px;
        align-items: center;
        
    }

    .nav-text1 p{
        font-size: 13px;
        position: relative;
        width: 100%;
        height: 14px;
        margin-top: 9px;
        margin-bottom: 5px;
    }

    .nav-text1 h1{
        font-size: 14px;
        width: auto;
        min-width: 0;
        font-weight: bold;
    }

    a {
        color: rgb(255, 255, 255);
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
      

    .offcanvas-header{
        background-color: #232f3e;
        height: 50px;
        padding-left: 15px;
    }


    .offcanvas-header a svg{
        padding-left: 5px;
    }

    .offcanvas-header h5{
        color: #ffffff;
        padding-top: 5px;
        padding-left: 8px;
        font-weight: bold;
    }

    .offcanvas-body{
        background-color: #ffffff;
    }

    .nav-link {
        color: #131921;
    }

    .offcanvas-header a{
        display: flex;

    }


      
    .toggle-btn {
        cursor: pointer;
        align-items: center;
        width: auto;
        height: auto;
        border: none;
        text-decoration: none;
        padding: 8px 9px 8px 9px;
        margin: 0;
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

      nav,
    .offcanvas {
      background-color: #1e293b;
    }
    .navbar-toggler {
      display: flex;
      padding: 26px 11px 10px 15px;
      border: none;
    }

    .navbar-toggler P{
        font-size: 16px;

    }
    
    .navbar-toggler img{
        font-size: 24px;
    }

    .navbar-toggler:focus {
      outline: none;
      box-shadow: none;
    }

    @media (max-width: 768px) {
      .navbar-nav > li:hover {
        background-color: #ffffff;
      }
    }

</style>