import React, { useContext, useRef, useState } from "react";
import { tabela } from "../../constants";
import NpcContext from "../../contexts/npcContext";

const ComboLabel = (props) => {
  const { nd } = useContext(NpcContext);
  const [valor, setValor] = useState(nd);

  const incrementar = () => {
    if (valor === 20) {
      return;
    }
    setValor(valor + 1);
  };
  const decrementar = () => {
    if (valor === 0) {
      return;
    }
    setValor(valor - 1);
  };

  return (
    <div className="ComboLabel">
      <span>{props.name}: </span>
      <div className="ComboLabel-Combo">
        <button onClick={decrementar}>&lt;</button>
        <span>{tabela[valor][props.n]}</span>
        <button onClick={incrementar}>&gt;</button>
      </div>
    </div>
  );
};

export default ComboLabel;
