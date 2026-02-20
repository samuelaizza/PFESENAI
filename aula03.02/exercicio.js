const prompt = require('prompt-sync')();

function calcularOperacoes(num1, num2) {
    console.log("A soma dos números é: " + (num1 + num2));
    console.log("A subtração dos números é: " + (num1 - num2));
    console.log("A multiplicação dos números é: " + (num1 * num2));
    console.log("A divisão dos números é: " + (num1 / num2));
}

let numero = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));

calcularOperacoes(numero, numero2);