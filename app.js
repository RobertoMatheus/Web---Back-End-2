const {Produto} = require("./Produto");
async function testarInsercao() {
    const user = new Produto("Martelo",
15.73, 3476,"Ferramenta");
 
 await user.inserir();
 //Substituir console.log por logger, registrar no arquivo de texto
}

/*
 const user = new Produto("Maça",
5.25, 4432,"Fruta");
 
}
*/


testarInsercao();
