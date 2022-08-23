session();
function addProducts() {
    session();
    const ProductName = $('#producto').val();
    const ProductDescription = $('#descripcion').val();
    const ProductURL = $('#url').val();
    const ProductIntereses = $('#busco').val();

    let ProductDb = JSON.parse(localStorage.getItem('productos'));
    let session_user = JSON.parse(localStorage.getItem('session-user'));
    if (!ProductDb) {
        ProductDb = [];
    }
    const product = {
        id: ProductDb.length + 1,
        id_per: localStorage.getItem('session-user'),
        name: ProductName,
        desc: ProductDescription,
        url: ProductURL,
        busco: ProductIntereses

    }
    ProductDb.push(product);
    localStorage.setItem('productos', JSON.stringify(ProductDb));

    console.log(JSON.parse(localStorage.getItem('productos')));
    window.location.href = 'dashboard.html';
}

$('#save').bind('click', function () {
    addProducts();
});

$('#cancel').bind('click', function () {
    window.location.href = 'dashboard.html';
});

$(window).on('load', function () {
    session();
    const products_container = document.getElementById('productscontainer');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));

    var divElement;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id_per == localStorage.getItem('session-user')) {
            divElement = document.createElement('div');
            divElement.id = i;
            divElement.classList.add('col-md-4')
            products_container.appendChild(divElement);
            var producto = '<div class="card mt-3 mb-3 col-12" style=" height: 90%";><div class="row g-0"><div class="col-md-6"><img src="' + products[i].url + '" class="img-fluid" alt="..."></div><div class="col-md-6"><div class="card-body"><p class="card-text"><h5 class="card-title">' + products[i].name + '</h3><p> <a href="editar.html" class="btn btn-primary"onClick="editproduct(' + products[i].id + ')">Editar</a></small></p><p class="card-text"><a href="#" class="btn btn-danger" onClick="deleteProduct(' + products[i].id + ')">Delete</a></p></div></div></div></div>';
            document.getElementById(divElement.id).innerHTML = producto;
        }
    }
});

function editproduct(a) {
    sessionStorage.setItem("producto-session",a) 
}

function session() {
    const datos = JSON.parse(localStorage.getItem('session-user'));
    if (datos==null) {
        window.location.href = 'index.html';
        
    }  
}


function deleteProduct(productId) {

    let products = JSON.parse(localStorage.getItem('productos'))

    const index = products.findIndex(product => product.id === productId);

    if (index > -1) {
        products.splice(index, 1);
    }
    localStorage.removeItem("productos");
    localStorage.setItem("productos", JSON.stringify(products));
    window.location.href = 'dashboard.html';
}




document.getElementById('nombre').innerHTML = '' + localStorage.getItem('session-user') + ''

