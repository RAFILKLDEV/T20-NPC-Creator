import React, { useRef, useState } from "react";

const Extras = (props) => {
  const [input, setInput] = useState(1);
  const inputCheckBox = useRef();

  const marked = () => {
    const values = [...props.extras];

    values[values.findIndex((e) => e.name === props.name)].marked =
      !values[values.findIndex((e) => e.name === props.name)].marked;

    return props.setExtras(values);
  };

  const checked = () => {
    return props.extras[props.extras.findIndex((e) => e.name === props.name)]
      .marked;
  };

  return (
    <div className="Npc-Helper-Extras">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span className="ComboLabel-Label">{props.name}</span>
        {props.number && <input value={input} />}
        <input
          onChange={marked}
          ref={inputCheckBox}
          checked={checked()}
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default Extras;
