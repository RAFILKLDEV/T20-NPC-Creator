import React from "react";
import { tabela } from "../../constants";

const Attribute = (props) => {
  return (
    <div className="Npc-Attributes">
      {/* 0 ND 1 ATK 2 NATK 3 DMG 4 DEF 5 PV 6 PERT 7 PER 8 CD */}
      <div>
        Pericias +{tabela[props.nd][6]}/+{tabela[props.nd][7]}
      </div>
      <div>HP, Mana</div>
      <div>Defesa, Fort, Ref, Von</div>
      <div>Deslocamento, Tipo de Deslocamento</div>
    </div>
  );
};

export default Attribute;
