import { OrderManager } from "./order-manager.js";
import { 
  PlaceOrderCommand,
  TrackOrderCommand,
  CancelOrderCommand
} from "./command.js";

// Invoker
const manager = new OrderManager();

// Request sent to the invoker with the encapsulated command object
manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
