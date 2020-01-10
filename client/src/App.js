import React from "react";
import Restaurant from "./components/restaurants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Projet Resto - React - Miage MBDS </p>
        <Restaurant></Restaurant>
      </header>
    </div>
  );
}

export default App;
