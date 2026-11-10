function convertirTemperatura() {
    // 1. Obtener los valores del HTML
    const inputTemp = document.getElementById("temperatura").value;
    const tipo = document.getElementById("tipoConversion").value;
    const divResultado = document.getElementById("resultado");

    // 2. Validación de campo vacío (con alert)
    if (inputTemp.trim() === "") {
        alert("Por favor, ingresa un valor numérico en la temperatura.");
        divResultado.textContent = "";
        return;
    }

    // 3. Convertir el valor ingresado a número
    const temp = parseFloat(inputTemp);
    let resultado = 0;
    let mensaje = "";

    // 4. Operaciones matemáticas
    if (tipo === "cToF") {
        resultado = (temp * 9 / 5) + 32;
        mensaje = `${temp} °C equivalen a ${resultado.toFixed(2)} °F`;
    } else if (tipo === "fToC") {
        resultado = (temp - 32) * 5 / 9;
        mensaje = `${temp} °F equivalen a ${resultado.toFixed(2)} °C`;
    }

    // 5. Presentación del resultado en la página web
    divResultado.textContent = mensaje;
}