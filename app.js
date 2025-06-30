const {Produto} = require("./Produto");   
const prompt = require("prompt-sync")(); 
async function testarInsercao() {
    let nome = prompt("Digite o nome do produto: ");
    let preço = prompt("Digite o preço do produto: ");
    let codigo = prompt("Digite o codigo do produto: ");
    let tipo = prompt("Digite o tipo do produto: ");
    const user = new Produto(nome,
preço, codigo,tipo);
 
 await user.inserir();
} 
async function testarBusca() {
    const user = new Produto("Chave",
15.73, 3476,"Ferramenta");
 
 await user.buscar();
} 
async function testarDelete() {
    const user = new Produto("Chave",
15.73, 3476,"Ferramenta");
 
 await user.deletar();
}
console.log("Digite 1 para inserir um produto:");
console.log("Digite 2 para buscar um produto:");
console.log("Digite 3 para deletar um produto:");
  let person = prompt(" ");

    switch(person){
        case "1":
            testarInsercao();
            break;
        case "2":
            testarBusca();
            break;
        case "3":
            testarDelete();
            break;
    }

/*
 const user = new Produto("Maça",
5.25, 4432,"Fruta");
 
}
*/


