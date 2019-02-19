import React, { Component } from "react";
import "./App.css";
import Product from "./Products";

const App = () => {
  return (
    <div className="App">
      <h1 className="App-header">Counter App </h1> <Product name={"Hat"} />
      <Product name={"Shoes"} />
      <Product name={"Skirt"} />
    </div>
  );
};

export default App;
