import React from "react";
import ComboLabel from "../ComboLabel/ComboLabel";
import Mana from "../Mana/Mana";
import SavingThrows from "../SavingThrows/SavingThrows";
import Skill from "../Skill/Skill";
import SkillTrained from "../SkillTrained/SkillTrained";
import Speed from "../Speed/Speed";
import Stats from "../Stats/Stats";

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
          {props.extras[2].marked && (
            <Mana name="Mana" nd={props.nd} n={5} extras={props.extras} />
          )}
          &nbsp;
          {props.extras[1].marked && (
            <ComboLabel name="CD" nd={props.nd} n={8} />
          )}
        </div>
        <ComboLabel name="Defesa" nd={props.nd} n={4} />
        <SavingThrows pericias={props.pericias} nd={props.nd} />
        <Speed nd={props.nd} />
      </div>
      {props.extras[0].marked && (
        <div className="Npc-Attributes-Stats">
          <Stats />
        </div>
      )}
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
              return null;
            }
            return (
              <div key={e.name}>
                <SkillTrained
                  name={e.name}
                  key={e.name}
                  pericias={props.pericias}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Attribute;
