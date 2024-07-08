
/*
const copiarTexto = async (text) => {
    console.log('Texto recibido para copiar: ', text); // Debug: muestra el texto recibido
    try {
        navigator.clipboard.writeText(text);
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");
    let botonCopiar = document.getElementById("copiar");
    

    let textoCifrado = texto
                        .replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = textoCifrado;
        logo.src = "./assent/encriptado.png"; 
        botonCopiar.className = "copiar";
        copiarTexto(textoCifrado)
    } else {
        logo.src = "./assent/imagen.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}


function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");
    


    let textoCifrado = texto
                        .replace(/enter/g, 'e')
                        .replace(/imes/g, 'i')
                        .replace(/ai/g, 'a')
                        .replace(/ober/g, 'o')
                        .replace(/ufat/g, 'u');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        logo.src = "./assent/desencriptado.png"; // Asegúrate de que la ruta a la imagen es correcta
    } else {
        logo.src = "./assent/imagen.png"; // Asegúrate de que la ruta a la imagen es correcta
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

*/


const copiarTexto = async () => {
    let texto = document.getElementById("parrafo").textContent;
    console.log('Texto recibido para copiar: ', texto); // Debug: muestra el texto recibido
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");
    let botonCopiar = document.getElementById("copiar");

    let textoCifrado = texto
                        .replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = textoCifrado;
        logo.src = "./assent/encriptado.png"; 
        botonCopiar.className = "copiar";
    } else {
        logo.src = "./assent/imagen.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");

    let textoCifrado = texto
                        .replace(/enter/g, 'e')
                        .replace(/imes/g, 'i')
                        .replace(/ai/g, 'a')
                        .replace(/ober/g, 'o')
                        .replace(/ufat/g, 'u');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        logo.src = "./assent/desencriptado.png"; // Asegúrate de que la ruta a la imagen es correcta
    } else {
        logo.src = "./assent/imagen.png"; // Asegúrate de que la ruta a la imagen es correcta
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}
