const form = document.querySelector('.form_de_registro');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const contraseña = document.querySelector('#contraseña');
const registrarme = document.querySelector('#registrarme');
const barsMenu = document.querySelector(".nav_ul");
const menuIcono = document.querySelector('#iconoDelMenu');
const overlay = document.querySelector(".overlay");

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
const PHONE_REGEX = /^[0-9]{10}$/;



const inputVacio = value => value === '';
const emailValido = (email) => EMAIL_REGEX.test(email);
const contraseñaValida = (contraseña) => PASSWORD_REGEX.test(contraseña);
const telefonoValido = (telefono) => PHONE_REGEX.test(telefono);
const longitud = (length, min, max) => length > min && length < max;
const esUnNumero = value => value < '9' && value > '0';


const formError = (input, mensaje) => {
    const elementroPadre = input.parentElement;
    input.classList.remove('valido');
    input.classList.add('invalido');
    const errorSmall = elementroPadre.querySelector('small');
    errorSmall.textContent = mensaje;
    errorSmall.classList.add('error_text');

}

const formValido = (input) => {
    const elementroPadre = input.parentElement;
    input.classList.remove('invalido');
    input.classList.add('valido');
    const errorSmall = elementroPadre.querySelector('small');
    errorSmall.textContent = '';

}

const checkeoDeNombre = () => {
    let validez = false;
    const min = 3;
    const max = 23;

    const nombreId = nombre.value.trim();

    if (esUnNumero(nombreId)) {
        formError(nombre, 'Ingrese nombre sólo con letras')
    } else if (inputVacio(nombreId)) {
        formError(nombre, 'Ingrese su nombre')
    } else if (!longitud(nombreId.length, min, max)) {
        formError(nombre, `El nombre debe contener de ${min} a ${max} caracteres `)
    } else {
        formValido(nombre);
        validez = true;
    }
    return validez;
}

const checkeoDeApellido = () => {
    let validez = false;
    const min = 3;
    const max = 23;

    const apellidoId = apellido.value.trim();

    if (esUnNumero(apellidoId)) {
        formError(apellido, 'Ingrese su apellido sólo con letras')
    } else if (inputVacio(apellidoId)) {
        formError(apellido, 'Ingrese su spellido')
    } else if (!longitud(apellidoId.length, min, max)) {
        formError(apellido, `El apellido debe contener de ${min} a ${max} caracteres `)
    } else {
        formValido(apellido);
        validez = true;
    }
    return validez;
}

const checkeoDeTelefono = () => {
    let validez = false;
    const min = 6;
    const max = 12;

    const telefonoId = telefono.value.trim();
    if (inputVacio(telefonoId)) {
        formError(telefono, 'Debe ingresar su telefono')
    } else if (!esUnNumero(telefonoId)) {
        formError(telefono, 'Debe ingresar sólo números')
    } else if (!longitud(telefonoId.length, min, max)) {
        formError(telefono, `La cantidad de caractéres deben ser entre 7 y 11`)
    } else {
        formValido(telefono)
        validez = true;
    }
    return validez;

}

const checkeoDeEmail = () => {
    let validez = false;
    const min = 12;
    const max = 31;

    const emailId = email.value.trim();

    if (inputVacio(emailId)) {
        formError(email, 'Debe ingresar su email')
    } else if (!emailValido(emailId)) {
        formError(email, 'Debe ingresar un email valido')
    } else if (!longitud(emailId.length, min, max)) {
        formError(email, `La cantidad de caractéres deben ser entre 13 y 30`)
    } else {
        formValido(email)
        validez = true;
    }
    return validez;

}

const checkeoDeContraseña = () => {
    let validez = false;
    const contraseñaId = contraseña.value.trim();

    if (inputVacio(contraseñaId)) {
        formError(contraseña, 'Debe ingresar su contraseña')
    } else if (!contraseñaValida(contraseñaId)) {
        formError(contraseña, 'La contraseña debe teenr al menos 8 caracteres, una mayuscula, una minuscula y un simbolo.')
    } else {
        formValido(contraseña)
        validez = true;
    }
    return validez;

}


const toggleMenu = () => {
    barsMenu.classList.toggle('nav_ul_show');
    overlay.classList.toggle('show-overlay')
    console.log('tocando el boton de menu')
}


const ocultarAlClickear = () => {
    barsMenu.classList.remove("nav_ul_show");
    overlay.classList.remove('show-overlay');
}

const ocultarOverlay = () => {
    if (
        !barsMenu.classList.contains('nav_ul_show') // si no se muestra el menu

    ) return;                                          //no hagas nada
    barsMenu.classList.remove("nav_ul_show");
    overlay.classList.remove("show-overlay");

}




const registroExitoso = () => {
    
    registrarme.addEventListener('click', (e) => {
        e.preventDefault();

        if (checkeoDeNombre() && checkeoDeApellido() && checkeoDeTelefono() &&
            checkeoDeEmail() && checkeoDeContraseña()) {
            form.reset();
        }

    })
    menuIcono.addEventListener('click', toggleMenu)
    overlay.addEventListener('click', ocultarAlClickear);
    window.addEventListener('scroll', ocultarOverlay);

}
registroExitoso();