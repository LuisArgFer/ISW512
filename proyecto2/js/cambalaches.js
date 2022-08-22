$(window).on('load', function () {
    const products_container = document.getElementById('productscontainercambalaches');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));

    var divElement;
    for (var i = 0; i < products.length; i++) {
        divElement = document.createElement('div');
        divElement.id = i;
        divElement.classList.add('col-md-4')
        products_container.appendChild(divElement);
        var producto = '<div class="card mt-3 mb-3 col-12" style=" height: 90%";><div class="row g-0"><div class="col-md-6"><img src="' + products[i].url + '" class="img-fluid" alt="..."></div><div class="col-md-6"><div class="card-body"><a href="#"><h5 class="card-title">' + products[i].name + '</h5></a><p class="card-text"><h5 class="card-title">' + products[i].id_per + '</h3><p class="card-text"></div></div></div></div>';
        document.getElementById(divElement.id).innerHTML = producto;
    }
});