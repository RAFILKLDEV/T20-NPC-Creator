import React, { useRef, useState } from "react";
import { tabela } from "../../constants";

const Combat = (props) => {
  const InputBox = (props) => {
    const [input, setInput] = useState("");
    const textBox = useRef();

    return (
      <span>
        <div className="ComboLabel-Label">{props.name}</div>
        <textarea
          className="TextBox"
          onChange={() => {
            textBox.current.style.height = "22px";
            textBox.current.style.height = `${
              textBox.current.scrollHeight - 5
            }px`;
          }}
          style={{
            fontSize: 20,
          }}
          ref={textBox}
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
          placeholder={props.placeholder}
        ></textarea>
      </span>
    );
  };

  const InputAtk = (props) => {
    const [input, setInput] = useState("");
    return (
      <div>
        <div className="ComboLabel-Label">{props.name}</div>
        <input
          placeholder={props.placeholder}
          className="TextBox"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    );
  };

  return (
    <div className="Npc-Combat">
      {/* 0 ND 1 ATK 2 NATK 3 DMG 4 DEF 5 HP 6 PERT 7 PER 8 CD */}
      <div>
        {tabela[props.nd][2]}{" "}
        <span className="ComboLabel-Label">
          Ataque{tabela[props.nd][2] > 1 && "s"}{" "}
        </span>
        +{tabela[props.nd][1]} <span className="ComboLabel-Label">dano</span>{" "}
        {tabela[props.nd][3]}
      </div>
      {props.extras.map((e) => {
        if (e.marked) {
          if (e.name === "Mana") {
            return "";
          } else if (e.name === "Corpo-a-Corpo" || e.name === "A Distancia") {
            return <InputAtk key={e.name} name={e.name} placeholder="..."/>;
          }
          return <InputBox key={e.name} name={e.name} placeholder="..." />;
        }
        return "";
      })}
    </div>
  );
};

export default Combat;
