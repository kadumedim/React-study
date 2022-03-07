import ReactDOM from "react-dom";
import "./index.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

ReactDOM.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Situação do Aluno"
      aluno="carlos"
      nota="9.3" />
      <Fragmento/>
  </div>,
  document.getElementById("root")
);
