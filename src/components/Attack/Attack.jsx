import React, { useEffect, useState } from "react";
import { tabela } from "../../constants";

const Attack = (props) => {
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
      <div
        className="ComboLabel-Combo"
        style={{
          display: "inline-flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <button onClick={decrementar}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <span> {tabela[valor][2]}</span>&nbsp;
        <span className="ComboLabel-Label">
          Ataque{tabela[valor][2] > 1 && "s"}&nbsp;
        </span>
        <span>
          <div>+{tabela[valor][1]} &nbsp;</div>
        </span>
        <button onClick={incrementar}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Attack;
