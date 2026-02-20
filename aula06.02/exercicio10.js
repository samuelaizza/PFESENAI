const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome completo: ');
let nomeMaiusculo = nome.toUpperCase();
let nomeMinusculo = nome.toLowerCase();

console.log('Maiúsculo: ' + nomeMaiusculo);
console.log('Minúsculo: ' + nomeMinusculo);
