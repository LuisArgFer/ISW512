document.querySelector('#boton').addEventListener('click', guarpersona);
insertarpersonatabla();

function guarpersona() {
    var sNombre = document.querySelector('#Nombre').value,
        sApellido = document.querySelector('#Apellido').value,
        sNumero = document.querySelector('#Numero').value;

    añadirpersona(sNombre, sApellido, sNumero)
    insertarpersonatabla();
}

function insertarpersonatabla() {
    var list = obtenerpersona(),
        tbody = document.querySelector('#Table tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            nameCell = row.insertCell(0),
            lastnameCell = row.insertCell(1),
            numberCell = row.insertCell(2);


        nameCell.innerHTML = list[i].nombre;
        lastnameCell.innerHTML = list[i].apellido;
        numberCell.innerHTML = list[i].numero;

        tbody.appendChild(row);

    }
}