import React from "react";
import "./styles.css";
import Header from "./components/Header";
import SelectionMenu from "./components/SelectionMenu";
import ChatContainer from "./components/ChatContainer";
export default function App() {
  return (
    <div className="App">
      <Header>
        <SelectionMenu />
        <ChatContainer />
      </Header>
    </div>
  );
}
