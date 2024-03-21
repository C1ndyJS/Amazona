const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible"),
    $registrar = document.getElementById("registrar"), // Agregado
    $registroForm = document.getElementById("registro-form"); // Agregado
    

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location.href = "home.html"
        }
    }
    // Agregar funcionalidad para mostrar el formulario de registro
    if (e.target === $registrar) {
        $registroForm.style.display = 'flex';
        document.getElementById('login-form').style.display = 'none'; // Ocultar formulario de inicio de sesión
    }
});




