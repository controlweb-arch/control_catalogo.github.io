// Variable global para almacenar el link de Mercado Pago temporalmente
let mpLinkTemporal = '';

/**
 * Muestra el modal de advertencia y guarda el link de pago.
 * @param {string} mpLink - El URL de pago de Mercado Pago.
 */
function mostrarAdvertencia(mpLink) {
    mpLinkTemporal = mpLink; // Guarda el link
    const modal = document.getElementById('compraModal');
    // Usamos 'flex' para que los estilos CSS de centrado funcionen correctamente
    modal.style.display = 'flex'; 
}

/**
 * Oculta el modal y borra el link temporal.
 */
function ocultarAdvertencia() {
    mpLinkTemporal = '';
    const modal = document.getElementById('compraModal');
    modal.style.display = 'none'; // Oculta el modal
}

// Inicialización de la lógica del modal al cargar la ventana
window.onload = function() {
    const botonComprar = document.getElementById('botonComprar');
    const confirmarBtn = document.getElementById('confirmarBtn');
    const compraModal = document.getElementById('compraModal');
    
    // El URL de Mercado Pago se obtiene directamente del atributo 'data-mp-link' del botón
    const mpLink = botonComprar.getAttribute('data-mp-link');

    // 1. Manejar el clic en el botón principal para mostrar el modal
    botonComprar.addEventListener('click', function(event) {
        // Previene la acción predeterminada del enlace para mostrar el modal
        event.preventDefault(); 
        mostrarAdvertencia(mpLink);
    });

    // 2. Manejar el clic en el botón 'Confirmar' del modal
    confirmarBtn.addEventListener('click', function() {
        if (mpLinkTemporal) {
            // Redirige al link de Mercado Pago guardado
            window.location.href = mpLinkTemporal;
            ocultarAdvertencia(); 
        }
    });
    
    // 3. Manejar el clic fuera del modal (en el overlay) para cerrarlo
    compraModal.addEventListener('click', function(event) {
        // Comprueba si el clic ocurrió directamente sobre el overlay 
        if (event.target === this) {
            ocultarAdvertencia();
        }
    });

    console.log("Script para detalles de producto cargado.");
};
