// comentário de uma linha
console.log('Estou desenvolvendo em java-script');
 
/*
comentário de mais de 
uma linha
*/
let nome = "Natalia";
let idade = 28;
let trabalha = true;
let altura_pessoa = 1.68;
let cores_fav = ["preto" , "azul" , "roxo"]
let endereco = {
    logadouro: "Rua", 
    numlog: "Humaitá",
    num: "666", 
    bairro: "Vila Independencia"
};
let covid = null;
let dengue;

console.log(altura_pessoa);
console.log("Nome: " + nome);
console.log("A " + nome + " tem " +  idade  + " anos. ");
console.log('');;
console.log("------------------------------------");
console.log(typeof(cores_fav));
console.log(Array.isArray(cores_fav));
const ehArray = Array.isArray(cores_fav);
console.log(ehArray === true ? 'É um array' : 'Não é um array');
if (ehArray === true){
    console.log('É um array');
}
else {
    console.log('Não é um array');
}

// mostrar valor de objeto

console.log('objeto: ');
console.log(endereco);
console.log(endereco.bairro);
console.log(endereco.logadouro + ' ' + endereco.numlog + ' nº ' + endereco.num + ' - ' + endereco.bairro);
