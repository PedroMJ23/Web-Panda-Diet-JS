const form = document.querySelector('.form_de_registro');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const contraseña = document.querySelector('#contraseña');
const acceder = document.querySelector('#acceder');
const barsMenu = document.querySelector(".nav_ul");
const menuIcono = document.querySelector('#iconoDelMenu');
const overlay = document.querySelector(".overlay");

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

const inputVacio = value => value === '';
const emailValido = (email) => EMAIL_REGEX.test(email);
const contraseñaValida = (contraseña) => PASSWORD_REGEX.test(contraseña);
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
        formError(contraseña, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un símbolo.')
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
        !barsMenu.classList.contains('nav_ul_show') 

    ) return;                                         
    barsMenu.classList.remove("nav_ul_show");
    overlay.classList.remove("show-overlay");

}

const accesoExitoso = () => {
   
    acceder.addEventListener('click', (e) => {
        e.preventDefault();

        if ( checkeoDeEmail() && checkeoDeContraseña()) {
            form.reset();
        }

    })
    menuIcono.addEventListener('click', toggleMenu)
    overlay.addEventListener('click', ocultarAlClickear);
    window.addEventListener('scroll', ocultarOverlay);


}
accesoExitoso();

















