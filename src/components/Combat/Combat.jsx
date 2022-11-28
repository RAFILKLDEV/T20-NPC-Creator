import React, { useRef, useState } from "react";
import Attack from "../Attack/Attack.jsx";
import ComoboCheck from "../ComboCheck.jsx/ComboCheck.jsx";
import Damage from "../Damage/Damage.jsx";

const Combat = (props) => {
  const InputBox = (props) => {
    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const textBox = useRef();

    return (
      <span>
        <div className="ComboLabel-Label">{props.name}</div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome..."
        />
        <textarea
          className="TextBox"
          onChange={() => {
            textBox.current.style.height = "22px";
            textBox.current.style.height = `${
              textBox.current.scrollHeight - 13
            }px`;
          }}
          ref={textBox}
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
          placeholder={props.placeholder}
        ></textarea>
      </span>
    );
  };

  return (
    <div className="Npc-Combat">
      {/* 0 ND 1 ATK 2 NATK 3 DMG 4 DEF 5 HP 6 PERT 7 PER 8 CD */}
      <div
        style={{
          display: "inline-flex",
        }}
      >
        <Attack nd={props.nd} />
        <Damage nd={props.nd} />
      </div>
      {props.extras.map((e) => {
        if (e.marked) {
          if (e.name === "Mana") {
            return null;
          } else if (e.name === "Corpo-a-Corpo" || e.name === "A Distancia") {
            return <InputBox key={e.name} name={e.name} placeholder="..." />;
          } else
            return (
              <InputBox
                key={e.name}
                name={e.name}
                nd={props.nd}
                placeholder="..."
              />
            );
        }
        return null;
      })}
    </div>
  );
};

export default Combat;
