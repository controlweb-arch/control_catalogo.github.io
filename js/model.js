   // Variable global para almacenar el link de Mercado Pago temporalmente
let mpLinkTemporal = '';

/**
 * Muestra el modal de advertencia y guarda el link de pago.
 * @param {string} mpLink - El URL de pago de Mercado Pago.
 */
function mostrarAdvertencia(mpLink) {
    mpLinkTemporal = mpLink; // Guarda el link
    const modal = document.getElementById('compraModal');
    modal.style.display = 'flex'; // Muestra el modal
}

/**
 * Oculta el modal y borra el link temporal.
 */
function ocultarAdvertencia() {
    mpLinkTemporal = '';
    const modal = document.getElementById('compraModal');
    modal.style.display = 'none'; // Oculta el modal
}

/**
 * Agrega el Listener al botón de Confirmar una vez que la página cargue
 */
window.onload = function() {
    const confirmarBtn = document.getElementById('confirmarBtn');

    confirmarBtn.addEventListener('click', function() {
        if (mpLinkTemporal) {
            // Redirige usando el link guardado
            window.location.href = mpLinkTemporal;
            // Oculta el modal inmediatamente
            ocultarAdvertencia(); 
        }
    });
    
    // Escuchar clics en el overlay para cerrar el modal
    document.getElementById('compraModal').addEventListener('click', function(event) {
        // Si el clic fue directamente en el fondo (overlay), oculta el modal
        if (event.target === this) {
            ocultarAdvertencia();
        }
    });
};