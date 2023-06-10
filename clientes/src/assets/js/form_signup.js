const names = document.getElementById('nombre_registro');
const email = document.getElementById('correo_registro');
const password = document.getElementById('contrasena_registro');

const error_name = document.getElementById('error_nombre_registro');
const error_email = document.getElementById('error_correo_registro');
const error_password = document.getElementById('error_contraseña_registro');

const boton = document.getElementById('enviar_registro');

const regex = {
    nombre : /^[A-Za-z]{3,20}$/,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
}

const validar = function(e){

    if(!validarName()){
        names.focus();
        e.preventDefault();
        return false;
    }

    if(!validarEmail()){
        email.focus();
        e.preventDefault();
        return false;
    }

    if(!validarPasswod()){
        password.focus();
        e.preventDefault();
        return false;
    }

    alert('Se a completado el envio');
}

const comprobarName = (valor)=>{
    return regex.name.test(valor);
}
const comprobarEmail = (valor)=>{
    return regex.email.test(valor);
}
const comprobarPassword = (valor)=>{
    return regex.password.test(valor);
}

const validarName = ()=>{

    error_name.innerHTML = "";

    if(!comprobarName((names.value))){
        let mensaje = "El nombre no puede estar vacio, llevar numeros o caracteres especiales";
        error_name.innerHTML = mensaje;
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

const validarPasswod = ()=>{

    error_password.innerHTML = "";

    if(!comprobarPassword(password.value)){
        let mensaje = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
        error_password.innerHTML = mensaje;
        return false;
    }
    else{
        return true;
    }
}

boton.addEventListener('click', e => validar(e));

names.addEventListener('blur',validarName);
email.addEventListener('blur',validarEmail);
password.addEventListener('blur',validarPasswod);