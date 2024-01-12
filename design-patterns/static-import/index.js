/**
 * Disclaimer:
 * This is just a representation example so don't consider it as functional
 * since imported modules doesn't exists
 */
import React from "react";
import "./styles.css";

// Statically import Chatlist, ChatInput and UserInfo
import UserInfo from "./components/UserInfo";
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";

const App = () => {
  return (
    <div className="App">
      <UserInfo />
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default App;
