import { ChatRoom } from "./chat-room.js";
import { User } from "./user.js";

// Acts as a Mediator / Middleware
const chatroom = new ChatRoom();
// All users are connected to the same chat room
const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
