// Definimos las llaves de encriptación
const llavesEncriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}
inputText.focus();

function encriptar() {
    let inputText = document.getElementById("input-text").value.toLowerCase();
    let outputText = encriptarTexto(inputText);
    document.getElementById("output-text").value = outputText;
    document.getElementById("history").value += outputText + "\n";
}


function desencriptar() {
    let inputText = document.getElementById("input-text").value;
    let outputText = desencriptarTexto(inputText);
    document.getElementById("output-text").value = outputText;
    document.getElementById("history").value += outputText + "\n";
}


function encriptarTexto(cadena) {
    for (const [key, value] of Object.entries(llavesEncriptacion)) {
        cadena = cadena.replace(new RegExp(key, "g"), value);
    }
    document.getElementById("input-text").value = "";
    return cadena;
}


function desencriptarTexto(cadena) {
    for (const [key, value] of Object.entries(llavesEncriptacion)) {
        cadena = cadena.replace(new RegExp(value, "g"), key);
    }
    document.getElementById("input-text").value = "";
    return cadena;
}
