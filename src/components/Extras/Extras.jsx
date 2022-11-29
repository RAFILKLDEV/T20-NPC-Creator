/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

const Extras = (props) => {
  const [valor, setValor] = useState(1);
  const inputCheckBox = useRef();

  const incrementar = () => {
    if (valor === 20) {
      return;
    }
    setValor(valor + 1);
  };
  const decrementar = () => {
    if (valor === 1) {
      return;
    }
    setValor(valor - 1);
  };

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

  useEffect(() => {
    const values = [...props.extras];
    if (
      props.name === "Corpo-a-Corpo" ||
      props.name === "A Distancia" ||
      props.name === "Habilidades"
    ) {
      values[props.index].number = valor;
      props.setExtras(values);
    }
  }, [valor]);

  return (
    <div className="Npc-Helper-Extras">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span className="ComboLabel-Label">{props.name}</span>
        {props.checked && props.number >= 1 && (
          <div className="ComboLabel">
            <div className="ComboLabel-Combo">
              <button onClick={decrementar}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              <span>
                {props.number && <input value={valor} onChange={setValor} />}
              </span>
              <button onClick={incrementar}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        )}
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
