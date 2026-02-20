const prompt = require('prompt-sync')();

const pontos = Number(prompt('Digite a quantidade de pontos que você marcou: '));
let divpontos = pontos / 2;
console.log("Pontos após divisão: " + divpontos);

divpontos = divpontos ** 2;
console.log("Pontos após exponenciação: " + divpontos);