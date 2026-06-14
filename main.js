// main.js
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.remove('activa');
    });

    // Mostrar la sección seleccionada
    const seccionMostrar = document.getElementById('pagina-' + seccionId);
    if (seccionMostrar) {
        seccionMostrar.classList.add('activa');
    }

    // Hacer scroll al inicio de la página
    window.scrollTo(0, 0);
}

// Al cargar la página, asegurar que la sección de inicio esté visible
document.addEventListener('DOMContentLoaded', function() {
    mostrarSeccion('inicio');
});
