import React from "react";

const Info = (props) => {
  const incrementar = () => {
    if (props.nd === 20) {
      props.setNd(props.nd + 1);
    }
  };

  const decrementar = () => {
    if (props.nd === 0) {
      props.setNd(props.nd - 1);
    }
  };

  return (
    <div className="Npc-Info">
      <div className="Npc-Name">Auhert</div>
      <div className="Npc-Nd">{props.nd}</div>
    </div>
  );
};

export default Info;
