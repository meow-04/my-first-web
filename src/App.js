import React from "react";
import "./App.css";
import Navbars from "./Common/Navbars";
import Content from "./Common/Content";
import Footer from "./Common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Navbars />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
