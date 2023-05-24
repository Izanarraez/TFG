class Productos{
    constructor(codigo,nombre,precio,stock,descripcion,caracteristicas,foto){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.descripcion = descripcion;
        this.caracteristicas = caracteristicas;
        this.foto = foto;
    }
}

const productos = document.getElementById('productos');
const ordenarPor = document.getElementById('ordenarPor');

const numero_unidades = document.getElementById('d-numero');


/*const row = document.createElement('div');*/

window.addEventListener('load',inicio);

/*document.addEventListener('click', nUnidades);*/

function inicio(){
    cargarProductos();
}

function cargarProductos(){

    let i = 0;
    while(i <= 7){
    fetch(`http://localhost:3000/${tipProd(i++)}`)
    .then(respuesta => respuesta.json())
    .then(datos => {
        array = Object.values(datos);
        array.forEach(element => {
            const prod = new Productos(element.codigo,element.nombre,element.precio,element.stock,element.descripcion,element.caracteristicas,element.foto);
            mostrar(prod);
        });
    }) 
    }
}

function tipProd(id){
    let resultado ="";
    switch (id) {
        case 0: 
        resultado = "motores";
            break;
        case 1: 
        resultado = "frenado";
            break;
        case 2:
        resultado = "embrague";
            break;
        case 3:
        resultado = "escape";
            break;
        case 4:
        resultado = "ruedas"; 
            break;
        case 5:
        resultado = "carroceria"; 
            break;
        case 6:
        resultado = "accesorios"; 
            break;
        case 7:
        resultado = "climatizacion";
            break;
    }
    return resultado;
}

function mostrar(elemento){
    const col_total = document.createElement('div');
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const col3 = document.createElement('div');
    const col4 = document.createElement('div');
    const col5 = document.createElement('div');
    const col6 = document.createElement('div');

    const img = document.createElement('img');

    const t1 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    const boton = document.createElement('button');
    const mas = document.createElement('button');
    const menos = document.createElement('button');
    
    col_total.className = `col-12 my-3`;
    row1.className = `row w-100`;
    row2.className = `row w-100`;
    col1.className = `col-4`;
    col2.className = `col-4`;
    col3.className = `col-4 d-flex justify-content-center flex-wrap`;
    col4.className = `col-4 d-flex justify-content-center`;
    col5.className = `col-4 d-flex justify-content-center`;
    col6.className = `col-4 d-flex justify-content-center`;

    p2.className = `w-100 text-center`;

    p3.innerHTML = `0`;
    p3.id = 'd-numero';

    boton.innerHTML = `Añadir`;
    boton.className = `btn btn-warning w-100`;
    mas.innerHTML = `+`;
    mas.id = `d-mas`

    menos.innerHTML = `-`;
    menos.id = `d-menos`;

    t1.innerHTML = elemento.nombre;
    p1.innerHTML = elemento.codigo;
    p2.innerHTML = elemento.precio;
    img.src = elemento.foto;

    col4.appendChild(menos);
    col5.appendChild(p3);
    col6.appendChild(mas);

    row2.appendChild(col4);
    row2.appendChild(col5);
    row2.appendChild(col6);

    col1.appendChild(img);
    col2.appendChild(t1);
    col2.appendChild(p1);
    col3.appendChild(p2);
    col3.appendChild(row2);
    col3.appendChild(boton);

    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);

    col_total.appendChild(row1);
    productos.appendChild(col_total);

    return productos;
}

/*function aumentar(){
    let numero = numero_unidades.value;
    alert(numero);
    numero_unidades = ++numero;
}

function disminuir(){
    let numero = numero_unidades.value;
    numero_unidades = --numero;
}*/


document.getElementById('d-mas').addEventListener('click',aumentar);
document.getElementById('d-menos').addEventListener('click',disminuir);