const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      type1: {
        sabor: 'Marguerita',
        amount: 1,
        price: 25,
      },
      type2: {
        sabor: 'Peperoni',
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  let message = `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment} ` 
  return message;
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
 let message = `Olá, ${order['name'] = 'Luiz Silva'}, o valor total de seu pedido de ${order.order.pizza.type1.sabor}, ${order.order.pizza.type2.sabor} e ${order.order.drinks.coke.type} é de R$ ${order.order.drinks.coke['price'] = '50,00'} `
 return message; 
}

console.log(orderModifier(order));