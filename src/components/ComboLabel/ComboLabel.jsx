import React, { useEffect, useState } from "react";
import { tabela } from "../../constants";

const ComboLabel = (props) => {
  const [valor, setValor] = useState(0);

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

  useEffect(() => {
    setValor(props.nd);
  }, [props.nd]);

  return (
    <div className="ComboLabel">
      <span className="ComboLabel-Label">{props.name} :&nbsp;</span>
      <div className="ComboLabel-Combo">
        <button onClick={decrementar}>&lt;</button>
        <span>{tabela[valor][props?.n]}</span>
        <button onClick={incrementar}>&gt;</button>
      </div>
    </div>
  );
};

export default ComboLabel;
