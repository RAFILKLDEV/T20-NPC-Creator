/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { tabela } from "../../constants";

const Skill = (props) => {
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

  useEffect(() => {
    const values = [...props.pericias];
    values[0].total = valor;
    props.setPericias(values);
  }, [valor]);

  return (
    <div className="ComboLabel">
      <div className="ComboLabel-Combo">
        <span className="ComboLabel-Label">{props.name} &nbsp;</span>
        <button onClick={decrementar}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <span>
          +{tabela[valor][6]}/+{tabela[valor][7]}
        </span>
        <button onClick={incrementar}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Skill;
