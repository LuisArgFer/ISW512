function mostardetalle() {
    let products = JSON.parse(localStorage.getItem('productos'))

    const idprod = sessionStorage.getItem('producto-session')

    products.forEach(producto => {
        if (producto.id=idprod) {
            document.getElementById("imagen").value = prod.name;
            document.getElementById("nombreDetalle").value = prod.desc;
            document.getElementById("descripcion").value = prod.url;
            document.getElementById("busco").value = prod.busco;
            document.getElementById("usuario").value = prod.id_per;
            
        }
        
    });
    
}