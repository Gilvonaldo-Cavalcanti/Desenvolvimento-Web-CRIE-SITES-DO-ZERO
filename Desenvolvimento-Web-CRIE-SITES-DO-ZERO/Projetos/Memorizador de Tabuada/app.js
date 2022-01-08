var valor = document.querySelector("div.container input")
var tabuada = document.querySelector("div.container div.tabuada")
var select = document.getElementById("operacao")
const calcular = document.querySelector("div.container button")

calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if (Number(valor.value) < 1 || Number(valor.value) > 12) {
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 12."
    } else {

        var divisor = valor.value

        for (i = 1; i <= 12; i++) {

            switch (select.value) {
                case "soma":
                    var calc = String(i) + " + " + valor.value + " = " + (Number(i) + Number(valor.value));
                    break;
                case "divisao":
                    var calc = divisor + " / " + i + " = " + (Number(divisor) / valor.value);
                    divisor = (Number(divisor) + Number(valor.value));
                    break;
                case "multiplicacao":
                    var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);
                    break;
                case "subtracao":
                    var calc = String(i) + " - " + valor.value + " = " + (Number(i) - Number(valor.value));
                    break;
            }

            var resultado = document.createElement("p")
            resultado.innerText = calc
            tabuada.appendChild(resultado)
        }
    }
})
