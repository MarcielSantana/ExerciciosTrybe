const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

function adicionaPropriedade(objeto, chave, valor){
    if (typeof objeto[chave] === 'undefined'){
        objeto[chave] = valor
    }
}

customer.firstName = 'Marciel'
customer.job = 'Desenvolvedor Web'
customer.age = 31

adicionaPropriedade(customer, 'lastName', 'Santana')

console.log(customer);
