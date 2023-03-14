console.log ('Exemplos Array');
let notas =[9, 8.5, 7];
console.log(notas);
console.log('1ª nota: ' +  notas [0]);
console.log('2ª nota: ' +  notas [1]);
console.log('3ª nota: ' +  notas [2]);

//editar posiçoes do Array

notas [0] = 'MB';
notas [1] = 'MB';
notas [2] = 'B';
console.log('Notas convertidas: ');
console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);

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

//console.log('Nome do Aulo(a): ');
//console.log(alunos[3]);

console.log('Nome do 3º aluno(a): ');
console.log('Nome: ' + alunos[2].nome);
console.log('Data de Nascimento: ' + alunos [2].dt_nasc);
console.log('Sexo: ' + alunos[2].sexo);
