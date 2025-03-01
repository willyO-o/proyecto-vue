


const recortarTexto = (texto, logitud = 100) => {

    if (!texto) return '';

    return texto.substring(0, logitud) + '...';

}

const primeraImagen = (imgTexto) => {

    let arrayImg = JSON.parse(imgTexto);

    return  arrayImg[0] || '' ;

}

const convertirImagenes = (imgTexto) => {

    if(imgTexto === '') return [];

    return JSON.parse(imgTexto) || [];
}


export {
    recortarTexto,
    primeraImagen,
    convertirImagenes
}