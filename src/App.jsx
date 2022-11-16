import { useState } from "react";
import "./App.css";
import Attribute from "./components/Attribute/Attribute";
import Combat from "./components/Combat/Combat";
import Image from "./components/Image/Image";
import Info from "./components/Info/Info";
import NpcContext from "./contexts/npcContext";

function App() {
  const [nd, setNd] = useState(0);

  return (
    <div className="App">
      <NpcContext.Provider value={{ nd, setNd }}>
        <div className="Npc-Creator">
          <Info />
          <Image />
          <Attribute nd={nd} setNd={setNd} />
          <Combat />
        </div>
      </NpcContext.Provider>
    </div>
  );
}

export default App;
