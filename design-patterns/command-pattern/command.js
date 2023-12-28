class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

export function PlaceOrderCommand(order, id) {
  // Reciever implementation to perform specific operation
  const execute = (orders) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  };

  return new Command(execute);
}

export function CancelOrderCommand(id) {
  // Reciever implementation to perform specific operation
  const execute = (orders) => {
    orders = orders.filter(order => order.id !== id);
    console.log(`You have canceled your order ${id}`);
  };

  return new Command(execute);
}

export function TrackOrderCommand(id) {
  // Reciever implementation to perform specific operation
  const execute = () => console.log(`Your order ${id} will arrive in 20 minutes.`);
  
  return new Command(execute);
}