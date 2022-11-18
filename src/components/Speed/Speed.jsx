import React, { useState } from "react";
import { deslocamento } from "../../constants";

const Speed = (props) => {
  const [speed, setSpeed] = useState(2);

  const incrementar = () => {
    if (speed === 7) {
      return;
    }
    setSpeed(speed + 1);
  };
  const decrementar = () => {
    if (speed === 0) {
      return;
    }
    setSpeed(speed - 1);
  };

  return (
    <div>
      <div className="ComboLabel">
        <span className="ComboLabel-Label">Deslocamento :&nbsp;</span>
        <div className="ComboLabel-Combo">
          <button onClick={decrementar}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <span>{deslocamento[speed]}m</span>
          <button onClick={incrementar}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
          <span>({Math.floor(deslocamento[speed] / 1.5)}q)</span>
        </div>
      </div>
    </div>
  );
};

export default Speed;
