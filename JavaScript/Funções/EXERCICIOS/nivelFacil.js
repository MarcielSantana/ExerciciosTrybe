// Função que soma dois números
// Crie uma função somar(a, b) que retorne a soma de dois números.

function soma(a, b){
    return a + b
}

console.log(soma(2, 6));


// Função que verifica se um número é par
// Crie uma função ehPar(n) que retorne true se o número for par, e false caso contrário.

function ehPar(numero){
    if (numero % 2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
}

console.log(ehPar(3));


// Função que retorna o dobro de um número
// Crie uma função dobro(x) que receba um número e retorne o dobro dele.

function dobro(numero){
    return numero * 2
}

console.log(dobro(12));


// Função que retorna uma saudação personalizada
// Crie uma função saudacao(nome) que receba um nome como parâmetro e retorne: "Olá, [nome]!"

function saudacao(nome){
    return `Olá, ${nome}!`
}
console.log(saudacao('Marciel'));

// Função que calcula a média de 3 números
// Crie uma função media(a, b, c) que retorne a média entre três números.

function media(a, b, c){
    notaMedia = (a + b + c) / 3
    return notaMedia 
}

console.log(media(5, 8, 7.5));

