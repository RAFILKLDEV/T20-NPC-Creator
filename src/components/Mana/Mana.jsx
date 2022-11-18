import React, { useEffect, useState } from "react";

const Mana = (props) => {
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

  return props.extras[0].marked ? (
    <div className="ComboLabel">
      <span className="ComboLabel-Label">{props.name} :&nbsp;</span>
      <div className="ComboLabel-Combo">
        <button onClick={decrementar}>&lt;</button>
        <span>{valor * 3}</span>
        <button onClick={incrementar}>&gt;</button>
      </div>
    </div>
  ) : null;
};

export default Mana;
