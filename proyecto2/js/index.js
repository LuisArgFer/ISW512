cargalosultimositems();
function cargalosultimositems() {
    let products = JSON.parse(localStorage.getItem('productos'));
    const slider = document.getElementById('productscontainerindex');

    if (!products) {


    } else {
        var id2 = products[products.length - 1].id;
        var url2 = products[products.length - 1].url;

        slider.innerHTML += `
        <div class="carousel-item active">
            <a onclick="detalleproducto(${id2})"><img src=${url2} class="d-block w-25 m-auto" alt="..."></a>
        </div>`;


        var id1 = products[products.length - 2].id;
        var url1 = products[products.length - 2].url;

        slider.innerHTML += `
            <div class="carousel-item">
                <a onclick="detalleproducto(${id1})"><img src=${url1} class="d-block w-25 m-auto" alt="..."></a>
            </div>`;
    }

}

function detalleproducto(a) {
    window.location.href="detalleproducto.html"
    sessionStorage.setItem("producto-session",a)
    
}
