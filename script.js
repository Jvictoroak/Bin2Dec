
function converter() {
    event.preventDefault()

    binario = document.getElementById("binario").value
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
    while (binario.length < 8) {
        binario = '0' + binario
        console.log(binario)
    }
}