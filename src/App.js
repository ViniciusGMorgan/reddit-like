import React from "react";
import { Provider } from "react-redux";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Feed } from "./pages/feed/Feed";
import Store from "./store/Store";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <div className="container">
        <Header></Header>
        <Feed></Feed>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
