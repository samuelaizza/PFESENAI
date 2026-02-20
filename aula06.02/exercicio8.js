const prompt = require('prompt-sync')();

function compararNumeros() {
    const numeroUsuario = parseInt(prompt("Digite um número:"));
    const numeroAleatorio = Math.floor(Math.random() * 10); 

    console.log("Número do usuário: " + numeroUsuario);
    console.log("Número aleatório: " + numeroAleatorio);

    if (numeroUsuario === numeroAleatorio) {
        console.log("Os números são iguais!");
    } else {
        console.log("Os números são diferentes.");
    }
}

compararNumeros();