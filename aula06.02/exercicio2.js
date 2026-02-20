const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite sua idade: '));

if (idade >= 16) {
    console.log('Você pode pegar livros emprestados.');
    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }
} else {
    console.log('Você não pode pegar livros.');
    console.log('Você é menor de idade.');
}