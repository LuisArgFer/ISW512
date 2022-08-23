mostardetalle();
function mostardetalle() {
    let products = JSON.parse(localStorage.getItem('productos'))

    const idprod = sessionStorage.getItem('producto-session')
    
    products.forEach(producto => {
        if (producto.id==idprod) {
            document.getElementById("nombreDetalle").innerHTML = producto.name;
            document.getElementById("descripcion").textContent = producto.desc;
            document.getElementById("imagen").src = producto.url;
            document.getElementById("busco").textContent = producto.busco;
            document.getElementById("usuario").textContent = producto.id_per;
            
        }
        
    });
    
}