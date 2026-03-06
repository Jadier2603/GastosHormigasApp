function login() {

    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    let encontrado = usuarios.find(u => u.usuario === usuario && u.password === password)

    if (encontrado) {

        alert("Bienvenido")

        window.location = "index.html"

    } else {

        alert("Usuario o contraseña incorrectos")

    }

}