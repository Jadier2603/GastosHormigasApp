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

function registrar() {

    let usuario = document.getElementById("nuevoUsuario").value
    let password = document.getElementById("nuevoPassword").value

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    let existe = usuarios.find(u => u.usuario === usuario)

    if (existe) {

        alert("El usuario ya existe")
        return

    }

    usuarios.push({
        usuario: usuario,
        password: password
    })

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Usuario registrado")

    window.location = "login.html"

}