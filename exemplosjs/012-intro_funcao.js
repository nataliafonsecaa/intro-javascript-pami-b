let entrada = require ('prompt-sync')();

//função sem parâmetro e sem retorno 
function data (){
    const timeElapsed = Date.now();
    const hoje = new Date(timeElapsed);
    console.log('Hoje é: ' + hoje.toUTCString());
}
//função sem parâmetro e com retorno
function caracterAleatorio (){
    const characters ='ABCD';
    const nAleatorio = Math.floor(Math.random() * (4-0)+0);
    const caracter = characters.charAt(nAleatorio);
    return caracter;
}

// função com parâmetro sem retorno
function olanome (nome){
    console.log('Olá ' + nome);

}
// função com parâmetro com retorno
function soma (n1,n2){
    return n1 + n2;

}

// Chamada de função sem parâmetro e sem retorno
data();

//chamada de função sem parâmetro e com retorno
console.log(caracterAleatorio());

//chamada de função com parâmetro sem retorno
olanome('Natalia');

//chamada de função com parâmetro e com retorno
const resultado = soma(1, 2);
console.log(resultado);