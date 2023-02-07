const products = document.querySelector('.nuestros_productos-div');
const productsCart = document.querySelector('.carrito-contenedor');
const carritoPrecioTotal = document.querySelector('.carrito-total');
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
const agregarProducto = document.querySelector('.icono_añadir');
const productosCard = document.querySelector('.productos');
const comprar = document.querySelector('.comprar');
const borrarTodo = document.querySelector('.borrar_todo-btn');
const agregarBtn = document.querySelector('.items_btn-suma');
const quitarBtn = document.querySelector('.items_btn-resta');


let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = cartList => localStorage.setItem('cart', JSON.stringify(cartList));

const renderProduct = ({ id, nombre, precio, categoria, imagen, cantidad }) => {
    return `
    <div class="productos">
    <div class="card_title">${nombre}</div>
    <div class="card_"><img src="${imagen}" alt="" id="img_card_"></div>
    <div class="descripcion_item">
        <p class="nombre_item">${categoria}</p> <span class="precio_item">${precio}</span>
        
        <button class="icono_añadir" 
        data-id='${id}' 
            data-nombre='${nombre}' 
            data-precio='${precio}' 
            data-categoria='${categoria}' 
            data-imagen='${imagen}' 
            data-cantidad='${cantidad}'>Agregar</button>
        
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

function iniciarChatear() {
    var productswsp = ['zapato', 'mesa', 'silla']
    window.location.href = 'https://wa.me/+54221533900930/?text=Hola.Quiero hacer un pedido...' + '' + productswsp[0]
}

const renderizarProductosDelCarrito = ({ id, nombre, precio, categoria, imagen, cantidad }) => {
    return `
    <div class="carrito-contenedor">
    <div class="carrito-item">
        <div class="item_img-nombre">
            <img src="${imagen}" class="img-carrito" alt="ImagenDelProducto" srcset="">
            <p>${nombre}</p>
        </div>

        <div class="carrito-total">
            <p>Precio:</p>
            <span class="total">$${precio}</span>
        </div>
        <div class="agregar_quitar" >
        <button class="items_btn-suma" id="items_btn" data-id=${id} >+</button>
        <span>${cantidad}</span>
        <button class="items_btn-resta" id="items_btn" data-id=${id}>-</button>
        </div>
    </div>
  
</div>
    `
}

const renderizarCarrito = () => {
    if (!cart.length) {
        productsCart.innerHTML = `<span>No seleccionaste ningún producto </span>`;
        /*comprar.classList.remove('comprar')
        comprar.classList.add('desabilitado')
        borrarTodo.classList.remove('borrar_todo-btn')
        borrarTodo.classList.add('desabilitado')*/

        //console.log('no hay nada en el carrito')
        return;
    }
    productsCart.innerHTML = cart.map(renderizarProductosDelCarrito).join('');
    /*comprar.classList.remove('desabilitado')
    comprar.classList.add('comprar')
    borrarTodo.classList.remove('desabilitado')
    borrarTodo.classList.add('borrar_todo-btn')*/
}

const obtenerElPrecioTotal = () => {
    return cart.reduce(
        (accum, currentValue) =>
            accum + Number(currentValue.precio) * currentValue.cantidad,
        0
    );
}

const mostrarElTotal = () => {
    carritoPrecioTotal.innerHTML = `$${obtenerElPrecioTotal().toFixed(2)} ARS`;

}

const ExisteElProducto = ({ id }) => cart.some(item => item.id === id);

const productoDelCarrito = (product) => {
    cart = [...cart, { ...product, cantidad: 1 }];
};

const añadirUnidadAlProducto = (product) => {
    cart = cart.map((cartItem) => cartItem.id === product.id ?
        { ...cartItem, cantidad: cartItem.cantidad + 1 }
        : cartItem
    );
};

const quitarUnidadAlProducto = (product) => {
    cart = cart.map((cartItem) => cartItem.id === product.id ?
        { ...cartItem, cantidad: cartItem.cantidad - 1 }
        : cartItem
    );
};

const mostrarMensajeDeCompra = (msg) => {
    successModal.classList.add("active-modal");
    successModal.textContent = msg;
    setTimeout(() => {
        successModal.classList.remove("acive-modal")
    }, 1500);
}

const añadirAlCarrito = (e) => {
    if (!e.target.classList.contains('icono_añadir')) return;
    console.log('estas añadiendo este producto')

    const { id, nombre, precio, imagen, cantidad } = e.target.dataset;

    const productoParaElCarrito = { id, nombre, precio, imagen, cantidad };

    if (ExisteElProducto(productoParaElCarrito)) {
        //añadimos otra unidad del producto seleccionado
        añadirUnidadAlProducto(productoParaElCarrito)
        //mostramos el mensaje de que fue añadido
        mostrarMensajeDeCompra('Añadiste una unidad más al carrito')
    } else {
        //agregamos el producto al carrito
        productoDelCarrito(productoParaElCarrito)
        //mostramos el msj de que el producto fue agregado
        mostrarMensajeDeCompra('El producto se ha agregado con éxito')
    }


    checkProd()


}


const desabilitarBtn = (button) => {
    if (!cart.length) {
        button.classList.remove('comprar')
        button.classList.remove('borrar_todo-btn')
        button.classList.add('desabilitado')
        console.log('btn desabilitado')
    } else {
        button.classList.remove('desabilitado');
        button.classList.add('comprar')
        button.classList.add('borrar_todo-btn')
    }
}
const renderBurbujaDelCarro = () => {
    cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.cantidad, 0);
};

const reestablecerElCarrito = () => {
    cart = [];
    checkProd();
}
const mensajeDelCarrito = (confirmMsg, succesMsg) => {
    if (!cart.length) return;
    if (window.confirm(confirmMsg)) {
        console.log('me aceptaron')
        reestablecerElCarrito()
        alert(succesMsg)
    }
}

const comprarProducto = () => {
    mensajeDelCarrito(
        "¿Desea realizar la compra?",
        "Gracias por su compra"
    )

}

const vaciarCarrito = () => {
    mensajeDelCarrito(
        "¿Desea vaciar el carrito?",
        "El carrito está vacío"
    )



    /* saveLocalStorage(cart)
     console.log('quitando elementos del carrito')
     productsCart.innerHTML = `<span>No seleccionaste ningún producto </span>`;
     carritoPrecioTotal.textContent = '0.00ARS'
     cartBubble.textContent = '0';
     renderizarCarrito();
     alert('Vaciaste el carrito de compra')
      if(!cart.length){
          alert('El carrito está vacío')
     }
     */

}

const quitarProductoDelCarro =({id})=>{
    cart = cart.filter(product => product.id !== id)

}


const sumarCantidadBtn = id =>{
    const productoExistente = cart.find(product => product.id === id )
    añadirUnidadAlProducto(productoExistente);
}
const restarCantidad =(id)=>{
    const productoExistente = cart.find(product => product.id === id )
    if(productoExistente.cantidad === 1 ){
        if(window.confirm('¿Desea eliminar el producto del carrito?')){
            quitarProductoDelCarro(productoExistente);
        }
        return;
        }
        quitarUnidadAlProducto(productoExistente);
        
    
}

const cambiarCantidad = (e)=>{

    if(e.target.classList.contains('items_btn-suma')){
        //console.log('botn de suma')
        sumarCantidadBtn(e.target.dataset.id)
        // console.log(e.target.dataset.id)
    }else if(e.target.classList.contains('items_btn-resta')){
        restarCantidad(e.target.dataset.id)
        //console.log('botn de resta')
        
    }
    checkProd();
    
}

const checkProd = () => {
    saveLocalStorage(cart)
    renderizarCarrito();
    mostrarElTotal();
    desabilitarBtn(comprar);
    desabilitarBtn(borrarTodo);
    renderBurbujaDelCarro();



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

    document.addEventListener('DOMContentLoaded', renderizarCarrito);
    document.addEventListener('DOMContentLoaded', mostrarElTotal);

    products.addEventListener('click', añadirAlCarrito);
    productsCart.addEventListener('click', cambiarCantidad)
    comprar.addEventListener('click', comprarProducto)
    borrarTodo.addEventListener('click', vaciarCarrito)

    desabilitarBtn(comprar);
    desabilitarBtn(borrarTodo);
    renderBurbujaDelCarro();


}

init();