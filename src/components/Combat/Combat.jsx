import React, { useState } from "react";

const Combat = (props) => {
  const InputBox = (props) => {
    const [input, setInput] = useState("");

    return (
      <div>
        <div>{props.name}</div>
        <textarea
          style={{
            height: "auto",
            minHeight: "10px",
            width: "100%",
            fontSize: "1.2rem",
          }}
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
          placeholder={props.placeholder}
        ></textarea>
      </div>
    );
  };

  return (
    <div className="Npc-Combat">
      {props.extras.map((e) => {
        if (e.marked) {
          return <InputBox key={e.name} name={e.name} />;
        }
        return "";
      })}
    </div>
  );
};

export default Combat;
