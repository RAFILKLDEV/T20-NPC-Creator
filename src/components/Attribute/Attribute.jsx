import React from "react";
import { tabela } from "../../constants";
import ComboLabel from "../ComboLabel/ComboLabel";
import Mana from "../Mana/Mana";
import SavingThrows from "../SavingThrows/SavingThrows";
import Skill from "../Skill/Skill";
import SkillTrained from "../SkillTrained/SkillTrained";
import Speed from "../Speed/Speed";

const Attribute = (props) => {
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
        <SavingThrows pericias={props.pericias} nd={props.nd} />
        <Speed nd={props.nd} />
      </div>
      <div className="Npc-Attributes-Resistencias">
        <div className="ComboLabel-Label">
          <Skill
            nd={props.nd}
            name="Pericias"
            pericias={props.pericias}
            setPericias={props.setPericias}
          />
        </div>
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
                <span>{tabela[props.pericias[0].total][6]}</span>
                <SkillTrained name={e.name} key={e.name} pericias={props.pericias} />
              </div>
            );
          }
          return "";
        })}
      </div>
    </div>
  );
};

export default Attribute;
