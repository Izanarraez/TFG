const icono = document.getElementById('icono');
const registro = document.getElementById('registro');
const acceso = document.getElementById('acceso');

icono.addEventListener('click', () => {

    if(registro.style.display == 'none' && acceso.style.display == 'none'){
        registro.style.display = 'block';
        acceso.style.display = 'block';
    }
    else{
        registro.style.display = 'none'
        acceso.style.display = 'none';
    }
    
});

/*icono.addEventListener('mousedown', () => {
    registro.style.display = 'none';
    acceso.style.display = 'none';
});*/