function cifrar(texto){
    // Objeto con claves y valores para las sustituciones
    const codificador = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};
    let texto_cifrado = "";
    // Iterar por cada letra del texto
    for(const letra of texto){
        // Obtener la sustitución para la letra actual (o la letra original si no hay sustitución)
        texto_cifrado += codificador[letra] || letra;
    }
    // Devolver el texto cifrado
    return texto_cifrado;
}
function decifrar(texto_cifrado){
    const descodificador = {"ai": "a","enter": "e","imes": "i","ober": "o","ufat": "u"};
    let texto_decifrado = "";
    let i = 0;
    let palabra_decifrada = ""; 
    while (i < (texto_cifrado.length)){
        if(texto_cifrado.substring(i,i+5) in descodificador){
            palabra_decifrada = descodificador[texto_cifrado.substring(i,i+5)];
            texto_decifrado += palabra_decifrada;
            i+=5;
        }else if(texto_cifrado.substring(i,i+4) in descodificador){
            palabra_decifrada = descodificador[texto_cifrado.substring(i,i+4)];
            texto_decifrado += palabra_decifrada;
            i+=4;
        }else if(texto_cifrado.substring(i,i+2) in descodificador){
            palabra_decifrada = descodificador[texto_cifrado.substring(i,i+2)];
            texto_decifrado += palabra_decifrada;
            i+=2;
        }else{
            if (i === texto_cifrado.length - 1) {
                // Si estamos en la última letra, simplemente la agregamos al texto decifrado
                palabra_decifrada = texto_cifrado[i];
                texto_decifrado += palabra_decifrada;
                i+=1;
            } else {
                palabra_decifrada = texto_cifrado[i];
                texto_decifrado += palabra_decifrada;
                i+=1;
            }
        }
    }
    return texto_decifrado;
}


function cifrar_texto(){
    let texto = document.getElementById("texto_entrada").value;
    let texto_resultado = cifrar(texto);
    document.getElementById("texto_resultado").innerHTML = texto_resultado; 
    document.getElementById("texto_entrada").value = "";
    document.getElementById("vacio").style.display = 'none';
    document.getElementById("contenido").style.display = 'block'
}
function descifrar_texto(){
    let texto = document.getElementById("texto_entrada").value;
    let texto_resultado = decifrar(texto);
    document.getElementById("texto_resultado").innerHTML = texto_resultado; 
    document.getElementById("texto_entrada").value = "";
    document.getElementById("vacio").style.display = 'none';
    document.getElementById("contenido").style.display = 'block'
}



function copiar() {
    // Obtener el texto resultado
    let texto_resultado = document.getElementById("texto_resultado").innerText;
    // Crear un elemento de tipo textarea para copiar el texto
    let textarea = document.createElement("textarea");
    textarea.value = texto_resultado;
    // Agregar el elemento al DOM y seleccionar el texto
    document.body.appendChild(textarea);
    textarea.select();
    // Copiar el texto seleccionado en el portapapeles
    document.execCommand("copy");
    // Remover el elemento del DOM
    document.body.removeChild(textarea);
} 
