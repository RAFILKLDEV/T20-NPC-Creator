import React from "react";

const Image = (props) => {
  return props.image ? (
    <div className="Npc-Img">
      <img
        src={props.image}
        alt=""
        width="100%"
        height={300}
        style={{
          maxWidth: "330px",
        }}
      />
    </div>
  ) : null;
};

export default Image;
