import React, { useRef } from "react";

const Extras = (props) => {
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
        <span>{props.name}</span>
        <input onChange={marked} ref={inputCheckBox} checked={checked()} type="checkbox" />
      </div>
    </div>
  );
};

export default Extras;
