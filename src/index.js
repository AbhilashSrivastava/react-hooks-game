import React from "react";
import ReactDOM from "react-dom";
import { ShowComponent } from "./show";

import "./styles.css";
import { MainContainer } from "./main-container";

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
