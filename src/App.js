import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Feed } from "./pages/feed/Feed";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Feed></Feed>
      <Footer></Footer>
    </div>
  );
}

export default App;
