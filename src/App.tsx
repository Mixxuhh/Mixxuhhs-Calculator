import React from "react";
import { Calculator } from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mixxuhhs Calculator</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
