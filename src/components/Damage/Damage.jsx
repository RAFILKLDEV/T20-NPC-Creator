import React, { useEffect, useState } from "react";
import { tabela } from "../../constants";

const Damage = (props) => {
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
        <span className="ComboLabel-Label">Dano M. &nbsp;</span>
        <span>{tabela[valor][3]}</span>
        <button onClick={incrementar}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Damage;
