function addProducts(){
    const ProductName = $('#producto').val();
    const ProductDescription = $('#descripcion').val();
    const ProductURL = $('#url').val();
    const ProductIntereses = $('#busco').val();

    let ProductDb = JSON.parse(localStorage.getItem('productos'));
    let session_user= JSON.parse(localStorage.getItem('session-user')); 
    if(!ProductDb){
        ProductDb = [];
    }
    const product = {
        id: ProductDb.length + 1,
        id_per: session_user.name,
        name: ProductName,
        desc: ProductDescription,
        url: ProductURL,
        interes: ProductIntereses
       
    }
    ProductDb.push(product);
    localStorage.setItem('productos', JSON.stringify(ProductDb));

    console.log(JSON.parse(localStorage.getItem('productos')));
    window.location.href = 'login.html';
}

$('#save').bind('click', function(){
    addProducts();
});

$(window).on('load', function() {
    debugger;
    const products_container = document.getElementById('productscontainer');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));
    
    var divElement; 
    for(var i=0;i<products.length;i++)
    { 
        divElement= document.createElement('div');
        divElement.id = i;
        products_container.appendChild(divElement);
        var cardHtml = '<div class="col-4"><div style="width: 15rem;"><img class="card-img-top" src="'+products[i].url+'" alt="img"><div class="card-body"><h5 class="card-title">'+ products[i].name +'</h5><p class="card-text">'+ products[i].id_per +'</p><a href="#" class="btn btn-danger" onClick="deleteProduct('+ products[i].id +')">Delete</a><a href="#" class="btn btn-primary" onClick="deleteProduct('+ products[i].id +')">Editar</a></div></div></div>';
        document.getElementById(divElement.id).innerHTML=cardHtml;         
    }
});


