/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { tabela } from "../../constants";

const SavingThrows = (props) => {
  const SavingThrow = (props) => {
    const [result, setResult] = useState(2);
    const inputRef = useRef();

    useEffect(() => {
      props.pericias.map((e) => {
        if (e.name === props.name) {
          if (e.trained) {
            setResult(tabela[props.pericias[0].total][6]);
          } else {
            setResult(tabela[props.pericias[0].total][7]);
          }
        }
      });
    }, [props.pericias[0].total]);

    return (
      <div
        style={{
          display: "inline-flex",
        }}
      >
        <span className="ComboLabel">
          <span className="ComboLabel-Label"> {props.name} :&nbsp;</span>
          <input
            type="number"
            ref={inputRef}
            value={result}
            onChange={(e) => {
              inputRef.current.style.width = "22px";
              inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
              setResult(e.target.value);
            }}
          ></input>
        </span>
      </div>
    );
  };

  return (
    <div>
      <SavingThrow name="Fortitude" nd={props.nd} pericias={props.pericias} />
      &nbsp;
      <SavingThrow name="Reflexos" nd={props.nd} pericias={props.pericias} />
      &nbsp;
      <SavingThrow name="Vontade" nd={props.nd} pericias={props.pericias} />
      {/*Resistencias */}
    </div>
  );
};

export default SavingThrows;
