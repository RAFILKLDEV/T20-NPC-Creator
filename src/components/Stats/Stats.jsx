import React from "react";
import AttributeStat from "../AttributeStat/AttributeStat";

const Stats = () => {
  const att = ["FOR", "DES", "CON", "INT", "SAB", "CAR"];

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        width: "100%"
      }}
    >
      {att.map((e) => (
        <AttributeStat name={e} />
      ))}
    </div>
  );
};

export default Stats;
