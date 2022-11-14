import React, { useContext, useRef } from "react";
import { tabela } from "../../constants";
import NpcContext from "../../contexts/npcContext";

const ComboLabel = (props) => {
  const { nd } = useContext(NpcContext);
  const valor = useRef(nd);

  const incrementar = () => {
    valor.current++;
  };
  const decrementar = () => {
    valor.current--;
  };

  return (
    <div className="ComboLabel">
      <span>{props.name}: </span>
      <div className="ComboLabel-Combo">
        <button onClick={decrementar}>&lt;</button>
        <span>{tabela[nd][valor.current]}</span>
        <button onClick={incrementar}>&gt;</button>
      </div>
    </div>
  );
};

export default ComboLabel;
