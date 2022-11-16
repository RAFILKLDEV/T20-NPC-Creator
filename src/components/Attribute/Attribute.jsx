import React from "react";
import { tabela } from "../../constants";
import ComboLabel from "../ComboLabel/ComboLabel";

const Attribute = (props) => {
  return (
    <div className="Npc-Attributes">
      {/* 0 ND 1 ATK 2 NATK 3 DMG 4 DEF 5 HP 6 PERT 7 PER 8 CD */}
      <div className="ComboLabel-Label">
        Pericias +{tabela[props.nd][6]}/+{tabela[props.nd][7]}
      </div>
      <div className="Npc-Attributes-Stats">
        <ComboLabel name="Hp" nd={props.nd} n={5} />
        <ComboLabel name="Mana" nd={props.nd} n={5} />
        <ComboLabel name="CD" nd={props.nd} n={8} />
      </div>
      <ComboLabel name="Defesa" nd={props.nd} n={4} />
      {props.pericias.map((e) => {
        if (e.trained) {
          return (
            <div key={e.name}>
              <span className="ComboLabel-Label">{e.name} :&nbsp;</span>
              <span>{tabela[props?.nd][6]}</span>
            </div>
          );
        }
        return "";
      })}
      <div>Deslocamento, Tipo de Deslocamento</div>
    </div>
  );
};

export default Attribute;
