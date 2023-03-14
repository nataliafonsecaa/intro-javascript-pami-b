let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
];

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Editar tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');


if (opcao == 1) {
        console.log('Listando tarefas não realizadas');
        for(let cont in tarefas) {
            if (tarefas[cont].realizada == false){
            
            console.log('Id: ' + tarefas[cont].id);
            console.log('Tarefa: ' + tarefas[cont].tarefa);
            console.log('Realizada: ' + tarefas[cont].realizada);
            console.log('---------------------------------------');
        }
    }

    }
    

    if (opcao == 2) {
        console.log('Listando tarefas realizadas');
        for(let cont in tarefas){
            if (tarefas[cont].realizada == true){
           
            console.log('Id: ' + tarefas[cont].id);
            console.log('Tarefa: ' + tarefas[cont].tarefa);
            console.log('Realizada: ' + tarefas[cont].realizada);
            console.log('---------------------------------------');
        }
    }
    
    }

    if (opcao == 3) {
        console.log('Adicionar Tarefa');
        let tarefa = entrada()
        const id= tarefas.length + 1;
        tarefas.push({
            id: id,
            tarefa: tarefa,
            realizada: false
        });
        
    }

    if (opcao == 4) {
        console.log('Concluir Tarefa');
        for (let cont in tarefas) {
            if (tarefas[cont].realizada == false){
                console.log(tarefas[cont].id +'-' + tarefas[cont].tarefa);
            }
            const concluida = entrada ('Insira o ID da tarefa a ser concluída');
            const editar = concluida - 1;
            const txttarefaedit = tarefas[editar].tarefa;
            tarefas[editar] ={
                id: editar,
                tarefa: txttarefaedit,
                realizada: true
            }
    

}
    }
        

    if (opcao == 5) {
        console.log('Excluir Tarefa');
        for(let cont tarefas) {
            if (tarefas[cont].realizada == true){
                console.log(tarefas[cont].id + '-' + tarefas[cont].tarefa);
            }
        }
         const excluir = entrada ('Insira o ID da  tarefa a ser excluída:');
         const t_excluir = excluir -1;
         let tempArray = tarefas;
         tarefas = tempArray.
    }
} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();