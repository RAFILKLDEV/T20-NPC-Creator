import React from "react";
import Attack from "../Attack/Attack.jsx";
import Damage from "../Damage/Damage.jsx";
import InputBox from "../InputBox/InputBox.jsx";

const Combat = (props) => {
  const renderInputBox = (n) => {
    return (
      <div>
        <div className="ComboLabel-Label">{props.extras[n].name}</div>
        {Array(props.extras[n].number)
          .fill()
          .map((_, index) => (
            <InputBox
              key={props.extras[n].name + index}
              name={props.extras[n].name}
              placeholder="..."
            />
          ))}
      </div>
    );
  };
  return (
    <div className="Npc-Combat">
      {/* 0 ND 1 ATK 2 NATK 3 DMG 4 DEF 5 HP 6 PERT 7 PER 8 CD */}
      <div
        style={{
          display: "inline-flex",
          borderBottom: "var(--red) solid 2px;",
        }}
      >
        <Attack nd={props.nd} />
        <Damage nd={props.nd} />
      </div>
      <div>
        {props.extras[3].marked && renderInputBox(3)}
        {props.extras[4].marked && renderInputBox(4)}
        {props.extras[5].marked && renderInputBox(5)}
        {props.extras[6].marked && renderInputBox(6)}
      </div>
      {}
    </div>
  );
};

export default Combat;
