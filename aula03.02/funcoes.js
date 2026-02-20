//primeiro tipo - função padrão
function saudacao(nome,sobrenome){
   console.log('Olá, seja bem-vindo ' + nome + ' ' + sobrenome);
}

saudacao('Alonsso','Alencar'); //chamada da funcao

//segundo tipo - funcao anonima
const somar = function(num1, num2){
    console.log('A soma dos numeros é = ' + (num1+num2));
}
somar(25,35);

//terceiro tipo - arrow function
const subtrair = (num1,num2) => {
    console.log('A subtração dos numeros é = ' + (num1-num2));
}
subtrair(50,30);

//terceiro tipo - arrow function
const SubtrairComRetorno = (num1,num2) => {
    console.log('A subtração dos numeros é = ' + (num1-num2));
    return num1 - num2
}
console.log('A subtração com retorno dos numeros é = ' + 
SubtrairComRetorno(50,30));