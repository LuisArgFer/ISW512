document.querySelector('#boton').addEventListener('click', guarpersona);
insertarpersonatabla();

function guarpersona() {
    let perNombre = document.querySelector('#Nombre').value,
        perApellido = document.querySelector('#Apellido').value,
        perNumero = document.querySelector('#Numero').value;

    añadirpersona(perNombre, perApellido, perNumero)
    insertarpersonatabla();
}

function insertarpersonatabla() {
    let list = obtenerpersona(),
        tbody = document.querySelector('#Table tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i),
            nombre = row.insertCell(0),
            apellido = row.insertCell(1),
            numero = row.insertCell(2);


        nombre.innerHTML = list[i].nombre;
        apellido.innerHTML = list[i].apellido;
        numero.innerHTML = list[i].numero;

        tbody.appendChild(row);

    }
}