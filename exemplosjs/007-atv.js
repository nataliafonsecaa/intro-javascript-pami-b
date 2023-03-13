let entrada = require('prompt-sync')();


let valor;
valor = entrada('Insira o valor inicial: ');
let n1 = parseInt(valor);
valor = entrada('Insira o valor final: ');
let n2 = parseInt(valor); 

if (n1 > n2) {

    let cont = n1;


    do {
        console.log(cont);

     } while(cont >=n2);
}
