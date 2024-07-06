function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");

    let textoCifrado = texto
                        .replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        logo.src = "assets/encriptado.jpg"; // Asegúrate de que la ruta a la imagen es correcta
    } else {
        logo.src = "assets/imagen.png"; // Asegúrate de que la ruta a la imagen es correcta
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
        logo.src = "assets/desencriptado.jpg"; // Asegúrate de que la ruta a la imagen es correcta
    } else {
        logo.src = "assets/imagen.png"; // Asegúrate de que la ruta a la imagen es correcta
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}
