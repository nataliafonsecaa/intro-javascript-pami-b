// chamando a biblioteca que será utilizada
let entrada = require('prompt-sync')();

let nome = entrada ('Digite o seu nome: ');
console.log('Nome Digitado:' + nome);

//Toda entrada é String
num = entrada ('Digite um número: ');
let n1 = parseInt(num); 
num = entrada ('Digite outro número: ');
let n2 = parseInt(num);

let soma = n1 + n2;

console.log(' A soma do número  ' + n1 + ' com o número ' +  n2  + ' é: '+ soma);

entrada();
console.log('Fim do Programa');