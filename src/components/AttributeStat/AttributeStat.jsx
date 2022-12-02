import React, { useRef, useState } from "react";

const AttributeStat = (props) => {
  const [valor, setValor] = useState(0);
  const inputRef = useRef();
  return (
    <div
      className="ComboLabel"
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <div className="ComboLabel-Label">{props.name} : </div>
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

export default AttributeStat;
