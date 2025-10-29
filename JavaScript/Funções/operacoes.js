const balance = 100;

function sumBalance(value) {
   sum = Number(balance + value)
   return sum
}
console.log(sumBalance(3));


function subBalance(value) {
    subtracao = Number(balance - value)
    return subtracao
}
console.log(subBalance(20));


function multBalance(value) {
    multiplicacao = Number(balance * value)
    return multiplicacao
}
console.log(multBalance(4));


function divBalance(value) {
    if (value === 0){
        console.log('Não é possível dividir algo por ZERO');
    } else{
        divisao = Number(balance / value)
        return divisao
    }
}
console.log(divBalance(0));

