import React, { useRef, useState } from "react";
import Attack from "../Attack/Attack.jsx";
import Damage from "../Damage/Damage.jsx";

const Combat = (props) => {
  const InputBox = (props) => {
    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const textBox = useRef();

    return (
      <div>
        <input
          style={{
            border: "none",
            backgroundColor: "inherit",
            fontWeight: 600,
            fontSize: 18,
            width: "100%",
          }}
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
      </div>
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
      {props.extras.map((e, i) => {
        if (e.marked) {
          if (e.name === "Mana") {
            return null;
          } else if (
            e.name === "Corpo-a-Corpo" ||
            e.name === "A Distancia" ||
            e.name === "Habilidades"
          ) {
            return (
              <div key={e.name}>
                <div className="ComboLabel-Label">{e.name}</div>
                {Array(props.extras[i].number)
                  .fill()
                  .map((_, index) => (
                    <InputBox
                      key={e.name + index}
                      name={e.name}
                      placeholder="..."
                    />
                  ))}
              </div>
            );
          } else
            return (
              <div>
                <div className="ComboLabel-Label">{e.name}</div>
                <InputBox
                  key={e.name}
                  name={e.name}
                  nd={props.nd}
                  placeholder="..."
                />
              </div>
            );
        }
        return null;
      })}
    </div>
  );
};

export default Combat;
