const prompt = require('prompt-sync')();

function calcularOperacoes(num1, num2, operacao) {
    if (operacao === '+') {
        return num1 + num2;
    } else if (operacao === '-') {
        return num1 - num2;
    } else if (operacao === '*') {
        return num1 * num2;
    } else if (operacao === '/') {
        return num1 / num2;
    }
}

let numero = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado = calcularOperacoes(numero, numero2, operacao);
console.log("O resultado é: " + resultado);