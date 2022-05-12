// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let calcularEl = document.querySelector("#calcular");
let m1 = document.querySelector("#massa1");
let m2 = document.querySelector("#massa2");
let d = document.querySelector("#distancia");
let resultado = document.querySelector("#resultado");

calcularEl.addEventListener("click", function () {
    const g = 6.67 / 10 ** 11;
    const f = (g * (m1.value * m2.value)) / (d.value * d.value);
    resultado.value = f;
});
