import React from "react";
import { tabela } from "../../constants";

const Info = (props) => {
  const incrementar = () => {
    if (props.nd === 20) {
      return;
    }
    props.setNd(props.nd + 1);
  };

  const decrementar = () => {
    if (props.nd === 0) {
      return;
    }
    props.setNd(props.nd - 1);
  };

  return (
    <div className="Npc-Info">
      <input className="Npc-Name" placeholder="Nome do NPC"></input>
      <div className="Npc-Nd">
        <button onClick={decrementar}>&lt;</button>
        <span>{tabela[props.nd][0]}</span>
        <button onClick={incrementar}>&gt;</button>
      </div>
    </div>
  );
};

export default Info;
