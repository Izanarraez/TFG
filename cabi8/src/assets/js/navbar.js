const icono = document.getElementById('icono');
const registro = document.getElementById('registro');
const acceso = document.getElementById('acceso');

icono.addEventListener('click', () => {
    registro.style.display = 'block';
    acceso.style.display = 'block';
});

icono.addEventListener('down', () => {
    registro.style.display = 'none';
    acceso.style.display = 'none';
});