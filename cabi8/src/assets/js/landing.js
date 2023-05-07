const nombre = document.getElementById('nombre_landing');
const apellidos = document.getElementById('apellidos_landing');
const email = document.getElementById('email_landing');
const pais = document.getElementById('pais_landing');
const cp = document.getElementById('CodPost_landing');
const telefono = document.getElementById('telefono_landing');
const boton = document.getElementById('boton_landing');

const error_nombre = document.getElementById('error_nombre');
const error_apellidos = document.getElementById('error_apellidos');
const error_email = document.getElementById('error_email');
const error_pais = document.getElementById('error_pais');
const error_CodPost = document.getElementById('error_CodPost');
const error_telefono = document.getElementById('error_telefono');

const regex = {
    nombre : /^[A-Za-z]{3,20}$/,
    apellidos : /^[A-Za-z]{3,40}$/,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    cp: /^[0-9]{5}$/,
    telefono: /[0-9]/
}

const paises = [
    { "name": "Aland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Andorra", "code": "AD" },
    { "name": "Austria", "code": "AT" },
    { "name": "Belarus", "code": "BY" },
    { "name": "Belgium", "code": "BE" },
    { "name": "Bosnia and Herzegovina", "code": "BA" },
    { "name": "Bulgaria", "code": "BG" },
    { "name": "Croatia", "code": "HR" },
    { "name": "Czech Republic", "code": "CZ" },
    { "name": "Denmark", "code": "DK" },
    { "name": "Estonia", "code": "EE" },
    { "name": "Faroe Islands", "code": "FO" },
    { "name": "Finland", "code": "FI" },
    { "name": "France", "code": "FR" },
    { "name": "Germany", "code": "DE" },
    { "name": "Gibraltar", "code": "GI" },
    { "name": "Greece", "code": "GR" },
    { "name": "Guernsey", "code": "GG" },
    { "name": "Holy See (Vatican City State)", "code": "VA" },
    { "name": "Hungary", "code": "HU" },
    { "name": "Iceland", "code": "IS" },
    { "name": "Ireland", "code": "IE" },
    { "name": "Isle of Man", "code": "IM" },
    { "name": "Italy", "code": "IT" },
    { "name": "Jersey", "code": "JE" },
    { "name": "Kosovo", "code": "XK" },
    { "name": "Latvia", "code": "LV" },
    { "name": "Liechtenstein", "code": "LI" },
    { "name": "Lithuania", "code": "LT" },
    { "name": "Luxembourg", "code": "LU" },
    { "name": "Macedonia, the Former Yugoslav Republic of", "code": "MK" },
    { "name": "Malta", "code": "MT" },
    { "name": "Moldova, Republic of", "code": "MD" },
    { "name": "Monaco", "code": "MC" },
    { "name": "Montenegro", "code": "ME" },
    { "name": "Netherlands", "code": "NL" },
    { "name": "Norway", "code": "NO" },
    { "name": "Poland", "code": "PL" },
    { "name": "Portugal", "code": "PT" },
    { "name": "Romania", "code": "RO" },
    { "name": "San Marino", "code": "SM" },
    { "name": "Serbia", "code": "RS" },
    { "name": "Serbia and Montenegro", "code": "CS" },
    { "name": "Slovakia", "code": "SK" },
    { "name": "Slovenia", "code": "SI" },
    { "name": "Spain", "code": "ES" },
    { "name": "Svalbard and Jan Mayen", "code": "SJ" },
    { "name": "Sweden", "code": "SE" },
    { "name": "Switzerland", "code": "CH" },
    { "name": "Ukraine", "code": "UA" },
    { "name": "United Kingdom", "code": "GB" }
  ];

  function generarPaises() {
    let content = ` <option disabled selected > País </option > `;
    for (id in paises) {
      content += ` <option value=${paises[id].code}>${paises[id].name}</option> `;
    }
    pais.innerHTML = content;
  }

const validar = function(e){

    if(!validarNombre()){
        nombre.focus();
        e.preventDefault();
        return false;
    }

    if(!validarApellidos()){
        apellidos.focus();
        e.preventDefault();
        return false;
    }

    if(!validarEmail()){
        email.focus();
        e.preventDefault();
        return false;
    }

    if(!validarCP()){
        cp.focus();
        e.preventDefault();
        return false;
    }

    if(!validarTelefono()){
        telefono.focus();
        e.preventDefault();
        return false;
    }

    
}

const comprobarNombre = (valor)=>{
    return regex.nombre.test(valor);
}
const comprobarApellidos = (valor)=>{
    return regex.apellidos.test(valor);
}
const comprobarEmail = (valor)=>{
    return regex.email.test(valor);
}
const comprobarCP = (valor)=>{
    return regex.cp.test(valor);
}
const comprobarTelefono = (valor)=>{
    return regex.telefono.test(valor);
}

const validarNombre = ()=>{

    error_nombre.innerHTML = "";

    if(!comprobarNombre((nombre.value))){
        let mensaje = "El nombre no puede estar vacio, llevar numeros o caracteres especiales";
        error_nombre.innerHTML = mensaje;
        return false;
    }
    else{
        return true;
    }
}

const validarApellidos = ()=>{

    error_apellidos.innerHTML = "";

    if(!comprobarApellidos(apellidos.value)){
        let mensaje = "Los apellidos no pude estar vacio, llevar numeros o caracteres especiales";
        error_apellidos.innerHTML = mensaje;
        return false;
    }
    else{
        return true;
    }
}

const validarEmail = ()=>{

    error_email.innerHTML = "";

    if(!comprobarEmail(email.value)){
        let mensaje = "El email esta mal formado o esta vacio";
        error_email.innerHTML = mensaje;
        return false;
    }
    else{
        return true;
    }
}

const validarCP = ()=>{

    error_CodPost.innerHTML = "";

    if(!comprobarCP(cp.value)){
        let mensaje = "El codigo postal no puede llevar caracteres especiales ni lestras";
        error_CodPost.innerHTML = mensaje;
        return false;
    }
    else{
        return true;
    }
}

const validarTelefono = ()=>{

    error_telefono.innerHTML = "";

    if(!comprobarTelefono(telefono.value)){
        let mensaje = "El codigo postal no puede llevar caracteres especiales ni lestras";
        error_telefono.innerHTML = mensaje;
        return false;
    }
    else{
        return true;
    }
}

window.addEventListener('load',generarPaises);

boton.addEventListener('click', e => validar(e));

nombre.addEventListener('blur',validarNombre);
apellidos.addEventListener('blur',validarApellidos);
email.addEventListener('blur',validarEmail);
cp.addEventListener('blur',validarCP);
telefono.addEventListener('blur',validarTelefono);