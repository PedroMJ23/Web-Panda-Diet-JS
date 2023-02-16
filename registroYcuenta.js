const form = document.querySelector('.form_de_registro');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const contraseña = document.querySelector('#contraseña');
const registrarme = document.querySelector('#registrarme');

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
const PHONE_REGEX = /^[0-9]{10}$/;



const inputVacio = value => value === '';
const emailValido = EMAIL_REGEX.test(email);
const contraseñaValida = PASSWORD_REGEX.test(contraseña);
const telefonoValido = PHONE_REGEX.test(telefono);
const longitud = (length, min, max) => length > min && length < max;
const esUnNumero = value => value < '9' && value > '0';


const formError = (input, mensaje) => {
    const elementroPadre = input.parentElement;
    input.classList.remove('valido');
    input.classList.add('invalido');
    const errorSmall = elementroPadre.querySelector('small');
    errorSmall.textContent = mensaje;

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
    const max = 13;

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



const cargarIndex = () => {
    registrarme.appendChild = `id="#index.html"`;
    console.log('yendo a index')
    alert('Su registro ha sido exitoso!')
}

const registroExitoso = () => {
    //checkeoDeNombre();


    registrarme.addEventListener('click', (e) => {
        e.preventDefault();

        checkeoDeNombre();
        form.reset();

    })


    // window.addEventListener('DOMContentLoaded', mensajeDeRegistro);


}
registroExitoso();