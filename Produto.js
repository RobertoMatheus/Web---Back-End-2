const { connect } = require("./db");
const Logger = require("./logger");
class Produto {
 constructor(nome_produto, preço,id_produto,categoria) {
 this.nome_produto = nome_produto;
 this.preço = preço;
 this.id_produto = id_produto;
 this.categoria = categoria;
 }
 async inserir() {
 try {
 const { db, client } = await connect();
 const result = await db.collection("Produto").insertOne({
 nome_produto: this.nome_produto,
 preço: this.preço,
id_produto:  this.id_produto,
categoria: this.categoria
 });
 console.log(" Produto inserido:", result.insertedId);
 client.close();
 } catch (error) {
 console.log("Erro ao inserir produto:", error);
 }
 }

 async buscar(filtro = {}) {
 try {
 const { db, client } = await connect();
 const Produto = await
db.collection("Produto").find(filtro).toArray();
 console.log("Produtos encontrados:", Produto);
 client.close();
 } catch (error) {
 Logger.log("Erro ao buscar Produtos: " + error);
 }
 }

   async deletar(filtro) {
 try {
 const { db, client } = await connect();
 const Produto = await
db.collection("Produto").deleteMany(filtro);
 console.log("Produtos deletados:", Produto.deletedCount);
 client.close();
 } catch (error) {
 Logger.log("Erro ao deletar Produtos: " + error);
 }
 }

 static async atualizar(filtro, novosDados) {
 try {
 const { db, client } = await connect();
 const result = await
db.collection("Produto").updateMany(filtro, {
 $set: novosDados,
 });
 console.log("Produtos atualizados:", result.modifiedCount);
 client.close();
 } catch (error) {
 Logger.log("Erro ao atualizar Produtos: " + error);
 }
 }
}


module.exports = { Produto };