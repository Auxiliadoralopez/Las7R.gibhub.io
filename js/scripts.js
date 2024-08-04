document.addEventListener('DOMContentLoaded', function() {
    // Cambiar el fondo de la página al hacer clic en el botón
    const changeBackgroundButton = document.getElementById('changeBackground');
    changeBackgroundButton.addEventListener('click', function() {
        const body = document.body;
        body.style.backgroundColor = getRandomColor();
    });

    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});