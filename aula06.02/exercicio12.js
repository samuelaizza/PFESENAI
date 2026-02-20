const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');

let nomeLength = nome.length;

console.log('O nome tem ' + nomeLength + ' caracteres.');