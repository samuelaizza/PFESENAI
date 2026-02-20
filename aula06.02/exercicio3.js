const prompt = require('prompt-sync')();

let cracha = prompt('Tem crachá?: ');
let uniforme = prompt('Está usando uniforme?: ');
let cadastroprevio = prompt('Fez cadastro prévio?: ');
let monitor = prompt('É monitor?: ');

if (cracha === 'sim' && uniforme === 'sim' && cadastroprevio === 'sim') {
    console.log('Pode entrar na empresa.');
} else if (monitor === 'sim' && cadastroprevio === 'sim') {
    console.log('Pode entrar na empresa.');
} else if (cracha === 'nao' && monitor === 'nao' && uniforme === 'nao' && cadastroprevio === 'nao') {
    console.log('Ta de sacanagem ne? Vai embora!');
} else {
    console.log('Não pode entrar na empresa.');
}