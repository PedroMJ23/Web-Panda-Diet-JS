const products = document.querySelector('.nuestros_productos-div');
const productsCart = document.querySelector('.carrito-contenedor');
const cartTotal = document.querySelector('.cart_total');
const categorias = document.querySelector('.categorias');
const listaDeCategorias = document.querySelectorAll('.categorias_filtro');


const btnLoad = document.querySelector(".btn-load");
const buyBtn = document.querySelector(".btn-buy");
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".icono_carrito");
const cartMenu = document.querySelector(".cart");
const barsBtn = document.querySelector(".icono_menu"); /*.menu-label*/
const barsMenu = document.querySelector(".nav_ul");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

const iconoPandaNav = document.querySelector('.img_navbar')
const cambiarColorBody = document.querySelector('.body_container');




let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = cartList => localStorage.setItem('cart', JSON.stringify(cartList));

const renderProduct = ({ nombre, precio, categoria, imagen, cantidad }) => {
    return `
    <div class="productos">
    <div class="card_title">${nombre}</div>
    <div class="card_"><img src="${imagen}" alt="" id="img_card_"></div>
    <div class="descripcion_item">
        <p class="nombre_item">${categoria}</p> <span class="precio_item">${precio}</span>
        <img src="./assets/añadir_al_carrito.png" class="icono_añadir" alt="" srcset="">
    </div>

</div> 
    `
}

const renderDividedProducts = (index = 0) => {

    const productsToRender = productsController.dividedProducts[index];
    products.innerHTML += productsToRender.map(renderProduct).join('');

}

const renderFilterProducts = (category) => {
    const productsList = todosLosDatos.filter(product => product.categoria === category)
    products.innerHTML = productsList.map(renderProduct).join('');
}


const renderProducts = (index = 0, category = null) => {
    if (!category) {
        renderDividedProducts(index)
        console.log('renderizando todo')
    } else {
        //renderizar productos por categorias
        renderFilterProducts(category);
    }

}

const isLastIndex = () => productsController.nextProductsIndex === productsController.productsLimit;


const showMoreProducts = () => {
    renderDividedProducts(productsController.nextProductsIndex);
    productsController.nextProductsIndex++;
    if (isLastIndex()) {
        btnLoad.classList.add('hidden')
    }
}

changeActiveState = (selectedCategory) => {
    const categories = [...listaDeCategorias];
    categories.forEach(categoryBtn => {
        if (categoryBtn.dataset.categoria !== selectedCategory) {
            categoryBtn.classList.remove('active-btn');

        } else {
            categoryBtn.classList.add('active-btn');
        }
    })
}
const changeShowMoreBtnState = (selectedCategory) => {
    if (!selectedCategory) {
        btnLoad.classList.remove('hidden');
        return;
    }
    btnLoad.classList.add('hidden');
}

changeFilterState = (selectedCategory) => {
    changeActiveState(selectedCategory);
    changeShowMoreBtnState(selectedCategory);
}

const aplicarFiltro = (e) => {
    if (e.target.classList.contains('categorias')) return;
    const clickedCategory = e.target.dataset.categoria;
    changeFilterState(clickedCategory)
    // console.log('dataSet:', clickedCategory)
    if (!clickedCategory) {
        products.innerHTML = '';
        renderProducts();

        console.log('no hay categoria')
    } else {
        renderProducts(0, clickedCategory)

        productsController.nextProductsIndex = 1;
    }


}

const toggleMenu = () => {
    barsMenu.classList.toggle('nav_ul_show');
    if (cartMenu.classList.contains('cart_show')) {
        cartMenu.classList.remove('cart_show')
        cartMenu.classList.add('cart')
        return
    }
    overlay.classList.toggle('show-overlay')



    console.log('tocando el boton de menu')
}

const toggleCart = () => {
    cartMenu.classList.toggle('cart_show');
    if (barsMenu.classList.contains('nav_ul_show')) {
        barsMenu.classList.remove('nav_ul_show')
        barsMenu.classList.add('nav_ul')
        return
    }
    overlay.classList.toggle('show-overlay')

}

const toggleBody = () => {
    cambiarColorBody.classList.toggle('body_container');


}
const ocultarAlAClickear = (e) => {
    if (!e.target.classList.contains('nav_a')) return;
    barsMenu.classList.remove("nav_ul_show");
    overlay.classList.remove('show-overlay');

}
const ocultarAlClickear = () => {
    cartMenu.classList.remove('cart_show');
    barsMenu.classList.remove("nav_ul_show");
    overlay.classList.remove('show-overlay');

}
const ocultarOverlay = () => {
    if (
        !barsMenu.classList.contains('nav_ul_show') && // si no se muestra el menu
        !cartMenu.classList.contains('cart_show')      // si no se muestra el carro
    ) return;                                          //no hagas nada
    barsMenu.classList.remove("nav_ul_show");
    cartMenu.classList.remove("cart_show");
    overlay.classList.remove("show-overlay");

}

function iniciarChatear(){
    var productswsp= ['zapato', 'mesa', 'silla']
    window.location.href = 'https://wa.me/+54221533900930/?text=Hola.Quiero hacer un pedido...' +''+productswsp[0]
}

const renderizarProductosDelCarrito = ({nombre, precio})=>{
    return `
    <div class="carrito-contenedor">
                    <p>${nombre}</p>
                    <span>_______________</span>
                    <div class="carrito-total">
                        <p>Total:</p>
                        <span class="total">${precio}</span>
                    </div>
                </div>
    `
}

const renderizarCarrito = ()=>{
    if(!cart.length){
        productsCart.innerHTML = `<span>No seleccionaste ningún producto </span>`;
        //console.log('no hay nada en el carrito')
        return;
    }
    productsCart.innerHTML = cart.map(renderizarProductosDelCarrito).join('');
}

function init() {
    renderProducts()
    btnLoad.addEventListener('click', showMoreProducts);
    categorias.addEventListener('click', aplicarFiltro);
    barsBtn.addEventListener('click', toggleMenu);
    cartBtn.addEventListener('click', toggleCart);
    //iconoPandaNav.addEventListener('click', toggleBody);

    barsMenu.addEventListener('click', ocultarAlAClickear);
    overlay.addEventListener('click', ocultarAlClickear);
    window.addEventListener('scroll', ocultarOverlay);
    document.addEventListener('DOMContentLoaded', renderizarCarrito)


}

init();










