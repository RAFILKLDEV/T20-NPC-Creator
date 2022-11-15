import React from "react";

const Image = (props) => {
  return props.src ? (
    <div className="Npc-Img">
      <img src="" alt="" />
    </div>
  ) : null;
};

export default Image;
