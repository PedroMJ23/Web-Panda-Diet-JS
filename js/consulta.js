const formDeContacto = document.querySelector('.info-de-contacto');
const inputNombre = document.querySelector('#input_nombre')
const inputTelefono = document.querySelector('#input_telefono');
const inputEmail = document.querySelector('#input_email');
const inputTexto = document.querySelector('#input_consulta');
const enviarConsulta = document.querySelector('#enviar_consulta')

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PHONE_REGEX = /^[0-9]{10}$/;

const inputVacio = value => value === '';
const emailValido = (email) => EMAIL_REGEX.test(email);
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
    const min = 2;
    const max = 14;

    const nombreId = inputNombre.value.trim();

    if (esUnNumero(nombreId)) {
        formError(inputNombre, 'Ingrese nombre sólo con letras.')
    } else if (inputVacio(nombreId)) {
        formError(inputNombre, 'Ingrese su nombre.')
    } else if (!longitud(nombreId.length, min, max)) {
        formError(inputNombre, `El nombre debe contener de 3 a 13 caracteres.`)
    } else {
        formValido(inputNombre);
        validez = true;
    }
    return validez;
}

const checkeoDeTelefono = () => {
    let validez = false;
    const min = 9;
    const max = 13;

    const telefonoId = inputTelefono.value.trim();

    if (inputVacio(telefonoId)) {
        formError(inputTelefono, 'Debe ingresar su telefono.')
    } else if (!esUnNumero(telefonoId)) {
        formError(inputTelefono, 'Debe ingresar sólo números.')
    } else if (!longitud(telefonoId.length, min, max)) {
        formError(inputTelefono, `La cantidad de caractéres deben ser entre 10 y 14 contando el código de área.`)
    } else {
        formValido(inputTelefono)
        validez = true;
    }
    return validez;

}

const checkeoDeEmail = () => {
    let validez = false;
    const min = 12;
    const max = 31;

    const emailId = inputEmail.value.trim();

    if (inputVacio(emailId)) {
        formError(inputEmail, 'Debe ingresar su email.')
    } else if (!emailValido(emailId)) {
        formError(inputEmail, 'Debe ingresar un email valido.')
    } else if (!longitud(emailId.length, min, max)) {
        formError(inputEmail, `La cantidad de caractéres deben ser entre 13 y 30.`)
    } else {
        formValido(inputEmail)
        validez = true;
    }
    return validez;

}

const checkeoDeTexto = () => {
    let validez = false;
    const min = 29;
    const max = 301;

    const textoId = inputTexto.value.trim();

    if (inputVacio(textoId)) {
        formError(inputTexto, 'No está enviando ningún mensaje.')
    } else if (!longitud(textoId.length, min, max)) {
        formError(inputTexto, `El mensaje debe contar con al menos 30 caracteres y no debe superar los 300 caracteres.`)

    } else {
        validez = true;
        formValido(inputTexto);
    }
    return validez;

}

const consulta = () => {
    enviarConsulta.addEventListener('click', e => {
        e.preventDefault();
        if (checkeoDeNombre() && checkeoDeTelefono() &&
            checkeoDeEmail() && checkeoDeTexto()) {
            formDeContacto.reset();
        }


    })


};

consulta();

















