import React, { useRef } from "react";

const Pericias = (props) => {
  const input = useRef();

  const trained = () => {
    const values = [...props.pericias];

    values[values.findIndex((e) => e.name === props.name)].trained =
      !values[values.findIndex((e) => e.name === props.name)].trained;

    return props.setPericias(values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <span className="ComboLabel-Label">{props.name}</span>
      <input onChange={trained} ref={input} type="checkbox" />
    </div>
  );
};

export default Pericias;
