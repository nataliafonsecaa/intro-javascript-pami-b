let alunos = [
    {
        nome:'Keli Pereira',
        dt_nasc: '20/03/1996',
        sexo: 'F'
    },

    {
        nome: 'Sarah Peixoto',
        dt_nasc: '29/01/2004',
        sexo:'F'
    },
    
    {
        nome: 'Catarina Santos',
        dt_nasc: '15/06/2013',
        sexo:'F'
    },
    
    {
        nome: 'Pedro Pascal',
        dt_nasc: '19/09/1987',
        sexo: 'M'
    }
    
];
let tamanhoArray = alunos.length;
for (let cont= 0; cont < tamanhoArray; cont++) {

console.log((cont + 1 ) +'º aluno(a): ');
console.log('Nome: ' + alunos[cont].nome);
console.log('Data de Nascimento: ' + alunos [cont].dt_nasc);
console.log('Sexo: ' + alunos[cont].sexo);
console.log('- - - - - - - - - - - - - - - - - - - - - - - -');
}

// ou fazer como abaixo

for(let cont in alunos){
console.log((parseInt(cont) + 1 ) +'º aluno(a): ');
console.log('Nome: ' + alunos[cont].nome);
console.log('Data de Nascimento: ' + alunos [cont].dt_nasc);
console.log('Sexo: ' + alunos[cont].sexo);                
console.log('- - - - - - - - - - - - - - - - - - - - - - - -');
}