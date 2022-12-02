import React, { useEffect, useRef, useState } from "react";

const Mana = (props) => {
  const [valor, setValor] = useState(0);
  const [input, setInput] = useState(0);
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
    setInput(valor * 3);
  }, [valor]);

  useEffect(() => {
    setValor(props.nd);
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
          value={input}
        ></input>
        <button onClick={incrementar}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Mana;
