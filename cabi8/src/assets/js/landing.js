const nombre = document.getElementById('nombre_landing');
const apellidos = document.getElementById('apellidos_landing');
const email = document.getElementById('email_landing');
const provincias = document.getElementById('apellidos_landing');
const cp = document.getElementById('CodPost_landing');
const telefono = document.getElementById('telefono_landing');

const error_nombre = document.getElementById('error_nombre');
const error_apellidos = document.getElementById('error_apellidos');
const error_email = document.getElementById('error_email');
const error_provincia = document.getElementById('error_provincia');
const error_CodPost = document.getElementById('error_CodPost');
const error_telefono = document.getElementById('error_telefono');

const regex = {
    nombre : /^[\p{L}\d_-]{3,20}$/,
    apellidos : /^[A-Za-z]$/,
    email: /^[0-9A-Za-z.!#$%&’*+/=?^_`{|}~-]+[A-Za-z]+@[]$/,
    cp: /^[\d]$/,
    telefono: /^[\d]$/
}