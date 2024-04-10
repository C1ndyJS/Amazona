function toggleCart() {
    var cartItems = document.querySelector('.cart-items');
    cartItems.classList.toggle('show');
}


function clicka() {
    alert("Hola");
}


const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});