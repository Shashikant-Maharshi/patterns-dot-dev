export class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    // encapsulated Command object passes the request to the appropriate method
    // of Receiver to perform the specific action
    return command.execute(this.orders, ...args);
  }
}
