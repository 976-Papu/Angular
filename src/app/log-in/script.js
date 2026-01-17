document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtenemos los elementos del DOM
    const modal = document.getElementById('loginModal');
    const modalTriggers = document.querySelectorAll('.modal-trigger'); // Las 3 tarjetas
    const closeBtn = document.querySelector('.close-btn');

    // 2. Función para abrir el modal
    const openModal = (e) => {
        e.preventDefault(); // Evita que el enlace salte hacia arriba
        modal.classList.add('active'); // Agrega la clase CSS que lo hace visible
    };

    // 3. Función para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('active'); // Quita la clase CSS
    };

    // 4. Asignamos los eventos

    // A cada tarjeta le agregamos el evento click para abrir
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    // Al botón de cerrar (X) le agregamos el evento click para cerrar
    closeBtn.addEventListener('click', closeModal);

    // Opcional: Cerrar si se hace clic fuera de la caja del formulario (en el fondo oscuro)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});