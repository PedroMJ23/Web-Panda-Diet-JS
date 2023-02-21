
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
        id: 20,
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
        imagen: './assets/imagenes/chocolateConGranos.jpg',
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
    }, {
        id: 19,
        nombre: 'Matcha',
        precio: 1200,
        categoria: 'Oriental',
        imagen: './assets/imagenes/matcha.jpg',
        cantidad: 0,
    }, {
        id: 20,
        nombre: 'Misutgaru',
        precio: 1400,
        categoria: 'Oriental',
        imagen: './assets/imagenes/misutgaru.jpg',
        cantidad: 0,
    }, {
        id: 21,
        nombre: 'Enoki',
        precio: 800,
        categoria: 'Oriental',
        imagen: './assets/imagenes/enoki-mushroom.png',
        cantidad: 0,
    }, {
        id: 22,
        nombre: 'Raíz de Loto',
        precio: 700,
        categoria: 'Oriental',
        imagen: './assets/imagenes/raizloto.jpg',
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













