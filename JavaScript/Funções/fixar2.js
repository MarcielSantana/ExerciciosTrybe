const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customer) {
    if (typeof customer != 'string'){
        console.log('O parâmetro passado deve ser do tipo string');
    } else {
        trybeBankCustomers.push(customer)
        console.log(`Cliente "${customer}" adicionado com sucesso!`);
        
    }
}


addCustomers(true);

console.log(trybeBankCustomers);

