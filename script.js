// Seleccionamos el botón y el body
const toggleBtn = document.getElementById('toggleModo')
const body = document.body
const icono = toggleBtn.querySelector('i')

// Al hacer click...
toggleBtn.addEventListener('click', () => {

    // Agrega o quita la clase "modo-oscuro" del body
    body.classList.toggle('modo-oscuro')

    // Cambia el ícono según el modo activo
    if (body.classList.contains('modo-oscuro')) {
        icono.classList.replace('bi-moon-fill', 'bi-sun-fill')
    } else {
        icono.classList.replace('bi-sun-fill', 'bi-moon-fill')
    }

})