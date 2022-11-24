/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { tabela } from "../../constants";

const ComboLabel = (props) => {
  const [valor, setValor] = useState(0);
  const [input, setInput] = useState(0);
  const [result, setResult] = useState("kek");
  const inputRef = useRef();

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
    setResult(input);
  }, [input]);

  useEffect(() => {
    inputRef.current.style.width = "20px";
    inputRef.current.style.width = `1.${inputRef.current.value.length + 5}em`;
    setResult(tabela[valor][props.n]);
  }, [valor]);

  useEffect(() => {
    setValor(props.nd);
    setResult(tabela[valor][props.n]);
  }, [props.nd]);

  return (
    <div className="ComboLabel">
      <span className="ComboLabel-Label">{props.name} :&nbsp;</span>
      <div className="ComboLabel-Combo">
        <button onClick={decrementar}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <input
          ref={inputRef}
          type="number"
          onChange={(e) => {
            inputRef.current.style.width = "22px";
            inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
            setInput(e.target.value);
          }}
          value={result}
        ></input>
        <button onClick={incrementar}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default ComboLabel;
