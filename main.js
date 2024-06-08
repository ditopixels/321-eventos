document.addEventListener('DOMContentLoaded', (event) => {
    // Fecha objetivo: 3 de agosto de 2024
    const targetDate = new Date('2024-06-13T00:00:00').getTime();

    // Actualiza el contador cada segundo
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        // Cálculos de días, horas, minutos y segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Mostrar los resultados
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Si el contador llega a cero, detén la cuenta atrás
        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
});

window.onload = function() {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const closeButton = document.querySelector(".close");
    const modalImage = document.querySelector(".modal-image");
    const backgroundVideo = document.getElementById("background-video");

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
        backgroundVideo.play();
        backgroundVideo.muted = false;
        backgroundVideo.volume = 0.4;
    }

    overlay.onclick = closeModal;
    closeButton.onclick = closeModal;
    modalImage.onclick = closeModal;
};