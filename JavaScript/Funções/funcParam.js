clientes = ['Marciel', 'Ana Cláudia', 'Leticia', 'João']

function banco(cliente){
    for (let index = 0; index < cliente.length; index += 1)
       console.log(`Olá, ${cliente[index]}. Essa é a sua conta do Banco Trybe`);
    
}

banco(clientes);
