let personainfo = [];

function añadirpersona(pernombre, perapellido, pernumero) {

    let personañ = {
        nombre : pernombre,
        apellido : perapellido,
        numero : pernumero
    };
    personainfo.push(personañ);
    localStoragepersonainfo(personainfo);
}

function obtenerpersona(){
    
    let personaalmacenada = localStorage.getItem('localpersonainfo');
    if(personaalmacenada == null){
        personainfo =[];
    }else {
        personainfo = JSON.parse(personaalmacenada);
    }
    return personainfo;
}

function localStoragepersonainfo(perlista){
    localStorage.setItem('localpersonainfo', JSON.stringify(perlista));

}