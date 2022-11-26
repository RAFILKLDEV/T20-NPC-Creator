/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { tabela } from "../../constants";

const SkillTrained = (props) => {
  const [valor, setValor] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    setValor(tabela[props.pericias[0].total][6]);
  }, [props.pericias[0].total]);

  return (
    <div
      className="ComboLabel"
      style={{
        alignItems: "baseline",
      }}
    >
      <span className="ComboLabel-Label">{props.name} :</span>
      <input
        ref={inputRef}
        type="number"
        onChange={(e) => {
          inputRef.current.style.width = "22px";
          inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
          setValor(e.target.value);
        }}
        value={valor}
      ></input>
    </div>
  );
};

export default SkillTrained;
