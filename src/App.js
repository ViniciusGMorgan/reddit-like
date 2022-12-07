import React from "react";
import { Header } from "./components/header/Header";
import "./App.css";
import { Feed } from "./pages/feed/Feed";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Feed></Feed>
    </div>
  );
}

export default App;
