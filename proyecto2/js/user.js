function addUser() {
    const UserName = $('#nombre').val();
    const UserLastName = $('#apellido').val();
    const UserAddress = $('#address').val();
    const UserAddress2 = $('#address2').val();
    const UserCountry = $('#country option:selected').text();
    const UserCity = $('#city').val();
    const UserCorreo = $('#correo').val();
    const UserContra = $('#contraseña').val();

    let UserDb = JSON.parse(localStorage.getItem('users'));
    if (!UserDb) {
        UserDb = [];
    }
    const user = {
        id: UserDb.length + 1,
        name: UserName,
        lastName: UserLastName,
        address: UserAddress,
        address2: UserAddress2,
        country: UserCountry,
        city: UserCity,
        correo: UserCorreo,
        contra: UserContra
    }
    UserDb.push(user);
    localStorage.setItem('users', JSON.stringify(UserDb));
    window.location.href = 'login.html';
}

function login() {
    const correo = $('#correo').val();
    const contra = $('#contra').val();

    let usersdb = JSON.parse(localStorage.getItem('users'));

    let logeado = 0;

    for (let i = 0; i < usersdb.length; i++) {
        if (correo == usersdb[i].correo && contra == usersdb[i].contra) {
            localStorage.setItem('session-user', JSON.stringify(usersdb[i].name));
            window.location.href = 'index.html';
            logeado = 1;
        }
    }
    if (logeado == 0) {
        alert("Los datos no son correctos");

    }
}

$('#login').bind('click', function () {
    login();
});

$('#register').bind('click', function () {
    addUser();
});

function logout(){
    localStorage.setItem('session-user', null);
    window.location.href = 'login.html';
}
