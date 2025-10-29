let numeros = [5, 6, 9, 8, 4, 69]

// catalogando os números e sua posição
numeros.forEach((numero, index) => 
    console.log(`Na posição ${index} está o número ${numero}`)
)

// verificando quais números são pares
function verificaPar(num){
    if (num % 2 == 0){
        console.log(num);
    }
}
numeros.forEach(verificaPar)

let arrayNumeros = [2, 8, 4, 3, 1, 6, 5, 10, -1, 0]

arrayNumeros.forEach((number) => {
    if (number % 2 == 0){
        console.log(`${number} é PAR`);
    }
    if (number > 0){
        console.log(`${number} é POSITIVO`);
    }
    if (number < 0){
        console.log(`${number} é NEGATIVO`);
    }
})