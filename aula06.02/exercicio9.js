const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número: '));

let raizquadrada = Math.sqrt(numero);

console.log("A raiz quadrada de " + numero + " é: " + raizquadrada);