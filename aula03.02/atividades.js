let prompt = require('prompt-sync')();

//Exercicio 01
let nome = prompt('Qual é o seu nome? ');

console.log('Olá, ' + nome + '!');

//Exercicio 02
let numero1 = prompt('Digite o primeiro número: ');
let numero2 = prompt('Digite o segundo número: ');

let soma = parseInt(numero1) + parseInt(numero2);

console.log('A soma de ' + numero1 + ' e ' + numero2 + ' é: ' + soma);

//Exercicio 03
let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));
console.log('As notas são: ' + nota1 + ', ' + nota2 + ', ' + nota3);

let media = (nota1 + nota2 + nota3) / 3;
console.log('A média das notas é: ' + media);

//Exercicio 04
let dado = Number(prompt('Digite um número para ver se é par ou ímpar: '));
if (dado % 2 === 0) {
  console.log(dado + ' é par.');
} else {
  console.log(dado + ' é ímpar.');
}

//Exercicio 05
let numero3 = Number(prompt('Digite o primeiro número: '));
let numero4 = Number(prompt('Digite o segundo número: '));

if (numero3 === numero4) {
  console.log('Os números são iguais.');
} else if (numero3 > numero4) {
  console.log('O maior número é: ' + numero3);
} else {
  console.log('O maior número é: ' + numero4);
}

if (numero3 === 0 && numero4 === 0) {
  console.log('Os dois números são zero.');
}

//exercício 06
function verificaIdade(idade) {
    if (idade <12) {
        console.log("Você é uma criança.");
    } else if (idade >= 12 && idade < 18) {
        console.log("Você é um adolescente.");
    } else if (idade >= 18) {
        console.log("Você é um adulto.");
    } else if (idade >= 60) {
        console.log("Você é um idoso.");
    }
}

let idade = Number(prompt("Digite sua idade: "));
verificaIdade(idade);

//exercício 07
function calcularOperacoes(numero1, numero2, operacao) {
    if (operacao === '+') {
        return numero1 + numero2;
    } else if (operacao === '-') {
        return numero1 - numero2;
    } else if (operacao === '*') {
        return numero1 * numero2;
    } else if (operacao === '/') {
        return numero1 / numero2;
    }
}

let numero5 = Number(prompt("Digite um número para realizar uma operação: "));
let numero6 = Number(prompt("Digite outro número para realizar a operação: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");
console.log("O resultado da operação é: " + calcularOperacoes(numero5, numero6, operacao));

//exercício 08
function calculaNota (nota) {
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80) {
        return 'B';
    } else if (nota >= 70) {
        return 'C';
    } else if (nota >= 60) {
        return 'D';
    } else if (nota < 60) {
        return 'F';
    }
}

let nota = Number(prompt("Digite a nota do aluno (0-100): "));
console.log("A nota do aluno é: " + calculaNota(nota));

//Exercicio 09
let valor = parseFloat(prompt('Digite o valor da compra: '));
let valorCompra = valor;
let desconto = prompt('Qual seu desconto?');

if (desconto === 'BRONZE') {
  valor *= 0.05;
} else if (desconto === 'PRATA') {
  valor *= 0.10;
} else if (desconto === 'OURO') {
  valor *= 0.15;
} else {
  console.log('Desconto inválido.');
}

console.log("O valor final da compra é: " + (valorCompra - valor));

//Exercicio 10
let peso = parseFloat(prompt('Digite seu peso (kg): '));
let altura = parseFloat(prompt('Digite sua altura (m): '));

let imc = peso / (altura ** 2);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Sobrepeso');
} else {
  console.log('Obesidade');
}