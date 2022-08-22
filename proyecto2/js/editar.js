
$(window).on('load', function () {
    var a = sessionStorage.getItem('producto-session')
    let products = JSON.parse(localStorage.getItem('productos'))

    products.forEach(prod => {
        if (prod.id == a) {
            document.getElementById("producto1").value = prod.name;
            document.getElementById("descripcion1").value = prod.desc;
            document.getElementById("url1").value = prod.url;
            document.getElementById("busco1").value = prod.busco;

        }
    });
   
});

function editProduct() {
    const name1 = document.getElementById("producto1").value;
    const desc1 = document.getElementById("descripcion1").value;
    const url1 = document.getElementById("url1").value;
    const busco1 = document.getElementById("busco1").value;

    if (!name1 || !desc1 || !url1 || !busco1) {
        alert("Algunos campos estan vacios")
    } else {
        var idproducto = sessionStorage.getItem('producto-session')
        let products = JSON.parse(localStorage.getItem('productos'))

        if (!products) {
            products=[];
            
        }
        products.forEach(prod =>{
            if (idproducto==prod.id) {
                prod.name = name1
                prod.desc = desc1
                prod.url = url1
                prod.busco = busco1
                
            }

        });
        localStorage.setItem('productos', JSON.stringify(products));
        alert("se ha modificado el producto");
        sessionStorage.removeItem('producto-session');
        window.location.href='dashboard.html';

    }




}
