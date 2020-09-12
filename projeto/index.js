console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const read = require('readline-sync')

const produtos = db.produtos;
produtos.sort((a, b) => a.preco-b.preco);
console.table(produtos)

const idProdutos = parseInt(read.question("Qual o Id do seu produto?"))
const qtdProdutos = parseInt(read.question("Quantidade de Produtos desejados?"))

const valorDoDesconto = parseInt(read.question("Qual o seu desconto?"))
const array = new Array ()
function procurar(produto){ 
    return produto.id === idProdutos

}
const produtoEncontrado = produtos.find(procurar)
//console.log(produtoEncontrado)


const ValidandoId = () =>{
    if(produtoEncontrado){
        return  produtoEncontrado
    }else{
        return `Produto não encontrado, por favor tente novavamente`

    }

}

  
const validandoQtd =()=>{
    if(qtdProdutos >= 1){
        return qtdProdutos * produtoEncontrado.preco
    }else{
        return ' Digite uma quantidade de produtos validas'

    }
}

const comprando = {...produtoEncontrado, quantidade : validandoQtd}
array.push(comprando)

const continuarComprando =()=>{
    let  continuarCompra = parseInt(read.question("Deseja comprar mais produtos? S ou N"))
    continuarCompr = continuarComprando.toLowerCase()
    if(continuarComprando === 'n'){
        return 
    }
       

}

console.log(ValidandoId())
console.log(validandoQtd());


    
    





const subTotal = produtoEncontrado.preco * qtdProdutos
console.log(subTotal)

subTotal()
//const AdicionandoProdutos()*/