let entrada = require('prompt-sync')();

let media;
let n1= entrada('Digite o 1º nota: ');
let n2= entrada('Digite o 2º nota: ');
media = ((parseFloat (n1)+ parseFloat (n2))/ 2);

if (media < 5) {
    console.log('Sua nota é I');
}

if (media > 5 && media < 6.5) {
    console.log('Sua nota é R');
}
if (media> 6.5 && media<8.5){
    console.log('Sua nota é B');
}

if (media>8.5){
    console.log('Sua nota é MB');
}