import React, { useRef, useState } from "react";

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

export default InputBox
