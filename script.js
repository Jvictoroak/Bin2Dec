function converter() {
    event.preventDefault()

    let binario = document.getElementById("binario").value
    let resultado = document.getElementById("resultado")
    console.log(binario)

    for (i = 0; i < binario.length; i++) {
        if (binario[i] != 0 && binario[i] != 1) {
            resultado.innerHTML = "coloque uma entrada válida"
            return
        }
    }
    let invertedBinario = binario.split('').reverse()
    let decimal = 0;
    for (i = 0; i < invertedBinario.length; i++) {
        decimal = decimal + parseInt(invertedBinario[i]) * (2 ** i)
    }
    resultado.innerHTML = decimal
}