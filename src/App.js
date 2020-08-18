import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Chatbox from "./components/Chatbox";


function App() {
  return (
    <BrowserRouter>
      <div className="outer_wrapper">
        <Chatbox />
      </div>
    </BrowserRouter>
  );
}

export default App;
