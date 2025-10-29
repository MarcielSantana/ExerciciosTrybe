function cacularDesconto(preco, desconto){
    let novoPreco = preco - (preco * (desconto / 100))
    return novoPreco
}


console.log(cacularDesconto(120, 30));


function calcularSoma(array){
    for (let numero of array){
        numero += numero
    }
    
}
let numeros = [5, 6, 9, 8, 4, 69]
console.log(calcularSoma(...numeros));
