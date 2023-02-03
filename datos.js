// class Productos {
//     //static contadorProductos = 0;

//     constructor(nombre, precio, categoria, imagen) {
//         //this.idProductos = ++Productos.contadorProductos;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.categoria = categoria;
//         this.imagen = imagen;
//     }
//     /*get idProductos(){
//         return this.idProductos;
//     }
//     set idProductos(idProductos){
//         return this.idProductos;
//     }*/


// }

// const prod1 = new Productos('Nueces', 500, 'Frutos Secos', './assets/imagenes/nueces.jpg');
// const prod2 = new Productos('Avellanas', 700, 'Frutos Secos', './assets/imagenes/avellanas.jpg');
// const prod3 = new Productos('Mix Frutos Secos', 800, 'Frutos Secos', '/assets/imagenes/frutos-secos.jpg');
// const prod4 = new Productos('Mix Tropical', 1000, 'Frutos Secos', './assets/imagenes/mix-tropical.jpg');
// const prod5 = new Productos('Mix Sin Pasas', 1100, 'Frutos Secos', './assets/imagenes/mix-sin-pasas.jpg');

// const frutosSecos = [prod1, prod2, prod3, prod4, prod5];

// //console.log('Array de frutos secos',(frutosSecos))

// const prod6 = new Productos('Chocolate', 550, 'Dulces', './assets/imagenes/chocolate-natural.jpg');
// const prod7 = new Productos('Azucar Mascabada', 400, 'Dulces', './assets/imagenes/azucar-mascabada.jpg');
// const prod8 = new Productos('Mani con chocolate', 400, 'Dulces', './assets/imagenes/mani-con-chocolate.webp');
// const prod9 = new Productos('Avellanas con chocolate', 600, 'Dulces', './assets/imagenes/avellanachoconegro0673.jpg');
// const prod10 = new Productos('Semillas de Chia', 350, 'Semillas', '/assets/imagenes/semillas-de-chia.jpg');
// const prod11 = new Productos('Mix Semillas', 750, 'Semillas', '/assets/imagenes/mix-de-semillas.jpg');
// const prod12 = new Productos('Semillas de girasol', 400, 'Semillas', './assets/imagenes/semillass-de-girasol.jpg');
// const prod13 = new Productos('Harina Integral', 1000, 'Harinas', './assets/imagenes/harina-integral.jpg');
// const prod14 = new Productos('Zucaritas', 1400, 'Harinas',);
// const prod15 = new Productos('Pan Integral con semillas', 700, 'Harinas', './assets/imagenes/pan-integral-con-semillas.jpg');
// const prod16 = new Productos('Harina de algarroba', 500, 'Harinas', './assets/imagenes/harina-de-algarroba.jpg');
// const prod17 = new Productos('Pan de salvado', 500, 'Harinas',);
// const prod18 = new Productos('Harina de trigo', 200, 'Harinas', './assets/imagenes/harina-de-trigo.jpg')


// const dulces = [prod6, prod7, prod8, prod9];
// const harinas = [prod13, prod14, prod15, prod16, prod17, prod18];
// const semillas = [prod10, prod11, prod12];

// //console.log('Todos los productos', frutosSecos,dulces);

// const todosLosProductos = [...frutosSecos, ...dulces, ...harinas, ...semillas];

const todosLosDatos = [
    {
        id: 1,
        nombre: 'Nueces',
        precio: 500,
        categoria: 'Frutos Secos',
        imagen: './assets/imagenes/nueces.jpg',
        cantidad: 0,
    },
    {
        id: 2,
        nombre: 'Avellanas',
        precio: 700,
        categoria: 'Frutos Secos',
        imagen: './assets/imagenes/avellanas.jpg',
        cantidad: 0,
    }, {
        id: 3,
        nombre: 'Mix Frutos Secos',
        precio: 800,
        categoria: 'Frutos Secos',
        imagen: '/assets/imagenes/frutos-secos.jpg',
        cantidad: 0,
    }, {
        id: 4,
        nombre: 'Mix Tropical',
        precio: 1000,
        categoria: 'Frutos Secos',
        imagen: './assets/imagenes/mix-tropical.jpg',
        cantidad: 0,
    }, {
        nombre: 'Mix Sin Pasas',
        precio: 1100,
        categoria: 'Frutos Secos',
        imagen: './assets/imagenes/mix-sin-pasas.jpg',
        cantidad: 0,
    }, {
        id: 5,
        nombre: 'Chocolate',
        precio: 550,
        categoria: 'Dulces',
        imagen: './assets/imagenes/chocolate-natural.jpg',
        cantidad: 0,
    }, {
        id: 6,
        nombre: 'Azucar Mascabada',
        precio: 400,
        categoria: 'Dulces',
        imagen: './assets/imagenes/azucar-mascabada.jpg',
        cantidad: 0,
    }, {
        id: 7,
        nombre: 'Mani con chocolate',
        precio: 400,
        categoria: 'Dulces',
        imagen: './assets/imagenes/mani-con-chocolate.webp',
        cantidad: 0,
    }, {
        id: 8,
        nombre: 'Avellanas con chocolate',
        precio: 600,
        categoria: 'Dulces',
        imagen: './assets/imagenes/avellanachoconegro0673.jpg',
        cantidad: 0,
    }, {
        id: 9,
        nombre: 'Semillas de Chia',
        precio: 350,
        categoria: 'Semillas',
        imagen: '/assets/imagenes/semillas-de-chia.jpg',
        cantidad: 0,
    }, {
        id: 10,
        nombre: 'Mix Semillas',
        precio: 750,
        categoria: 'Semillas',
        imagen: '/assets/imagenes/mix-de-semillas.jpg',
        cantidad: 0,
    }, {
        id: 11,
        nombre: 'Semillas de girasol',
        precio: 400,
        categoria: 'Semillas',
        imagen: './assets/imagenes/semillass-de-girasol.jpg',
        cantidad: 0,
    }, {
        id: 13,
        nombre: 'Harina Integral',
        precio: 500,
        categoria: 'Harinas',
        imagen: './assets/imagenes/harina-integral.jpg',
        cantidad: 0,
    }, {
        id: 14,
        nombre: 'Zucaritas Diet',
        precio: 800,
        categoria: 'Harinas',
        imagen: './assets/imagenes/harina-integral.jpg',
        cantidad: 0,
    }, {
        id: 15,
        nombre: 'Pan Integral con Semillas',
        precio: 700,
        categoria: 'Harinas',
        imagen: './assets/imagenes/pan-integral-con-semillas.jpg',
        cantidad: 0,
    }, {
        id: 16,
        nombre: 'Harina de algarroba',
        precio: 600,
        categoria: 'Harinas',
        imagen: './assets/imagenes/harina-de-algarroba.jpg',
        cantidad: 0,
    }, {
        id: 17,
        nombre: 'Pan de salvado',
        precio: 500,
        categoria: 'Harinas',
        imagen: './assets/imagenes/harina-de-algarroba.jpg',
        cantidad: 0,
    }, {
        id: 18,
        nombre: 'Pan de salvado',
        precio: 500,
        categoria: 'Harinas',
        imagen: './assets/imagenes/harina-de-algarroba.jpg',
        cantidad: 0,
    }
]



const splitProducts = (size) => {
    let dividedProducts = [];
    for (i = 0; i < todosLosDatos.length; i += size) {
        dividedProducts.push(todosLosDatos.slice(i, i + size))
    }
        return dividedProducts;
}

//console.log(splitProducts(3));
//console.log ('array total:',todosLosDatos)

const productsController = {
    dividedProducts: splitProducts(3),
    nextProductsIndex: 1,
    productsLimit: splitProducts(3).length

}













