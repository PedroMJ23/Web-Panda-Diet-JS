const registrarme = document.querySelector('#registrarme');



const cargarIndex = ()=>{
    registrarme.appendChild = `id="#index.html"`;
    console.log('yendo a index')
}

const registroExitoso = ()=>{
    registrarme.addEventListener('click', cargarIndex)


    // window.addEventListener('DOMContentLoaded', mensajeDeRegistro);


}
registroExitoso();