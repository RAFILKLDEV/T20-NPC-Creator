import React from "react";
import { tabela } from "../../constants";
import ComboLabel from "../ComboLabel/ComboLabel";
import Mana from "../Mana/Mana";
import Speed from "../Speed/Speed";

const Attribute = (props) => {
  const isTrue = (array) => {
    let result = false;
    for (let index = 0; index < array.length; index++) {
      if (array[index].trained === true) {
        result = true;
        break;
      }
    }
    return result;
  };
  return (
    <div className="Npc-Attributes">
      {/* 0 ND 1 ATK 2 NATK 3 DMG 4 DEF 5 HP 6 PERT 7 PER 8 CD */}
      <div className="Npc-Attributes-Resistencias">
        <div
          style={{
            display: "flex",
          }}
        >
          <ComboLabel name="Hp" nd={props.nd} n={5} />
          &nbsp;
          <Mana name="Mana" nd={props.nd} n={5} extras={props.extras} />
          &nbsp;
          <ComboLabel name="CD" nd={props.nd} n={8} />
        </div>
        <ComboLabel name="Defesa" nd={props.nd} n={4} />
        <div>
          {/*Resistencias */}
          {props.pericias.map((e) => {
            if (
              e.name === "Fortitude" ||
              e.name === "Reflexos" ||
              e.name === "Vontade"
            ) {
              if (e.trained) {
                return (
                  <span key={e.name} style={{}}>
                    <span className="ComboLabel-Label"> {e.name} :&nbsp;</span>
                    <span>{tabela[props?.nd][6]}</span>
                  </span>
                );
              }
            }
            return null;
          })}
        </div>
        <Speed nd={props.nd} />
      </div>
      <div className="ComboLabel-Label">
        Pericias +{tabela[props.nd][6]}/+{tabela[props.nd][7]}
      </div>
      {isTrue(props.pericias) ? (
        <div className="Npc-Attributes-Resistencias">
          {/*Pericias */}
          {props.pericias.map((e) => {
            if (e.trained) {
              if (
                e.name === "Fortitude" ||
                e.name === "Reflexos" ||
                e.name === "Vontade"
              ) {
                return "";
              }
              return (
                <div key={e.name}>
                  <span className="ComboLabel-Label">{e.name} :&nbsp;</span>
                  <span>{tabela[props?.nd][6]}</span>
                </div>
              );
            }
            return "";
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Attribute;
