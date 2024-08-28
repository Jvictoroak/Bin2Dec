
function converter() {
    event.preventDefault()

    let binario = document.getElementById("binario").value
    console.log(binario)

    for (i = 0; i < binario.length; i++) {
        if (binario[i] != 0 && binario[i] != 1) {
            console.log(binario[i])
            console.log("coloque uma entrada válida")
            return
        }
    }

    if (binario.length > 8) {
        console.log("o valor não deve ultrapassar 8 dígitos")
        return
    }
    
    let invertedBinario = binario.split('').reverse()
    console.log(invertedBinario);

    let decimal = 0;
        
    for (i=0; i<invertedBinario.length; i++){
        console.log(invertedBinario[i])
        decimal = decimal + parseInt(invertedBinario[i])*(2**i)
        console.log(decimal)
    }
}