let encripta = document.getElementById('encripta')
let descripta = document.getElementById('descripta')
let copy = document.getElementById('copiar')
let nEncontrado = document.getElementById('nEncontrado')

function criptografar() {

    let texto = document.getElementById('input-text').value

    let novoTexto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    resultado1.innerHTML =  novoTexto

    // desabilitando a imagem do detetive após a criptografia ser realizada
    nEncontrado.classList.add("hide");

    // botão copiar aparece após a criptografia ser realizada
    let copy = document.getElementById('copiar').style.display = "initial"

}


function descriptografar() {

    let texto = document.getElementById('input-text').value
    let voltaTexto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    resultado1.innerHTML =  voltaTexto

}

function copiar() {

    let copiar = document.getElementById("resultado1")
    let copiado = copiar.value
    navigator.clipboard.writeText(copiado)

    
  }

  
// Adicionando o evento de click nos botões. 
encripta.addEventListener("click", criptografar)
descripta.addEventListener("click", descriptografar)
copy.addEventListener("click", copiar)
