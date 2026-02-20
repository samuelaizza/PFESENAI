const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número com casas decimais: '));
let arredondado = Math.round(numero);

console.log("O número arredondado é: " + arredondado);
