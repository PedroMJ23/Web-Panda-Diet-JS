const products = document.querySelector('.nuestros_productos-div');
const productsCart = document.querySelector('.carrito-contenedor');
const carritoPrecioTotal = document.querySelector('.carrito-total');
const categorias = document.querySelector('.categorias');
const listaDeCategorias = document.querySelectorAll('.categorias_filtro');

const verMas = document.querySelector(".ver_mas");
const buyBtn = document.querySelector(".btn-buy");
const burbujaDelCarro = document.querySelector(".burbuja");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const barsBtn = document.querySelector(".icono_menu");
const barsMenu = document.querySelector(".nav_ul");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

const iconoPandaNav = document.querySelector('.img_navbar')
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

    <div class="card_"><img src="${imagen}" alt="" id="img_card_"></div>
    <div class="descripcion_item">
    <div class="item_nombre-precio">
    <p class="nombre_item">${nombre}</p> 
    <span class="precio_item">$${precio}</span>
    </div>
      
        
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
    } else {
        renderFilterProducts(category);
    }

}

const isLastIndex = () => productsController.nextProductsIndex === productsController.productsLimit;


const showMoreProducts = () => {
    renderDividedProducts(productsController.nextProductsIndex);
    productsController.nextProductsIndex++;
    if (isLastIndex()) {
        verMas.classList.add('hidden')
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
        verMas.classList.remove('hidden');
        return;
    }
    verMas.classList.add('hidden');
}

const changeFilterState = (selectedCategory) => {
    changeActiveState(selectedCategory);
    changeShowMoreBtnState(selectedCategory);
}

const aplicarFiltro = (e) => {
    if (e.target.classList.contains('categorias')) return;
    const clickedCategory = e.target.dataset.categoria;
    changeFilterState(clickedCategory)
    if (!clickedCategory) {
        products.innerHTML = '';
        renderProducts();

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
        !barsMenu.classList.contains('nav_ul_show') &&
        !cartMenu.classList.contains('cart_show')
    ) return;
    barsMenu.classList.remove("nav_ul_show");
    cartMenu.classList.remove("cart_show");
    overlay.classList.remove("show-overlay");

}

const renderizarProductosDelCarrito = ({ id, nombre, precio, categoria, imagen, cantidad }) => {
    return `
    <div class="carrito-contenedor">
    <div class="carrito-item">
        <div class="item_img-nombre">
            <img src="${imagen}" class="img-carrito" alt="ImagenDelProducto" srcset="">
            
        </div>
        <div class="nombreItem"><p>${nombre}</p></div>

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
        return;
    }
    productsCart.innerHTML = cart.map(renderizarProductosDelCarrito).join('');
}

const obtenerElPrecioTotal = () => {
    return cart.reduce(
        (accum, currentValue) =>
            accum + Number(currentValue.precio) * currentValue.cantidad,
        0);
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
        successModal.classList.remove("active-modal");
    }, 1800);

};

const añadirAlCarrito = (e) => {
    if (!e.target.classList.contains('icono_añadir')) return;
   
    const { id, nombre, precio, imagen, cantidad } = e.target.dataset;

    const productoParaElCarrito = { id, nombre, precio, imagen, cantidad };

    if (ExisteElProducto(productoParaElCarrito)) {
        añadirUnidadAlProducto(productoParaElCarrito)
        mostrarMensajeDeCompra('Añadiste una unidad más al carrito')
    } else {
        productoDelCarrito(productoParaElCarrito)
        mostrarMensajeDeCompra('El producto se ha agregado con éxito')
    }


    checkProd()


}


const desabilitarBtn = (button) => {
    if (!cart.length) {
        button.classList.remove('comprar')
        button.classList.remove('borrar_todo-btn')
        button.classList.add('desabilitado')
    } else {
        button.classList.remove('desabilitado');
        button.classList.add('comprar')
        button.classList.add('borrar_todo-btn')
    }
}
const renderBurbujaDelCarro = () => {
    burbujaDelCarro.textContent = cart.reduce((acc, cur) => acc + cur.cantidad, 0);
};

const reestablecerElCarrito = () => {
    cart = [];
    checkProd();
}
const mensajeDelCarrito = (confirmMsg, succesMsg) => {
    if (!cart.length) return;
    if (window.confirm(confirmMsg)) {
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

}

const quitarProductoDelCarro = ({ id }) => {
    cart = cart.filter(product => product.id !== id)

}


const sumarCantidadBtn = id => {
    const productoExistente = cart.find(product => product.id === id)
    añadirUnidadAlProducto(productoExistente);
}
const restarCantidad = (id) => {
    const productoExistente = cart.find(product => product.id === id)
    if (productoExistente.cantidad === 1) {
        if (window.confirm('¿Desea eliminar el producto del carrito?')) {
            quitarProductoDelCarro(productoExistente);
        }
        return;
    }
    quitarUnidadAlProducto(productoExistente);


}

const cambiarCantidad = (e) => {

    if (e.target.classList.contains('items_btn-suma')) {
        sumarCantidadBtn(e.target.dataset.id)
    } else if (e.target.classList.contains('items_btn-resta')) {
        restarCantidad(e.target.dataset.id)
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
    verMas.addEventListener('click', showMoreProducts);
    categorias.addEventListener('click', aplicarFiltro);
    barsBtn.addEventListener('click', toggleMenu);
    cartBtn.addEventListener('click', toggleCart);

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