const prompt = require('prompt-sync')();

let anonascimento = prompt('Digite seu ano de nascimento: ');
const anoAtual = new Date().getFullYear();
let idade = anoAtual - anonascimento;

console.log('Sua idade é: ' + idade);