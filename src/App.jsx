import { useRef, useState } from "react";
import "./App.css";
import Attribute from "./components/Attribute/Attribute";
import Combat from "./components/Combat/Combat";
import Extras from "./components/Extras/Extras";
import Image from "./components/Image/Image";
import Info from "./components/Info/Info";
import Pericias from "./components/Pericias/Pericias";
import NpcContext from "./contexts/npcContext";

function App() {
  const [nd, setNd] = useState(0);
  const [image, setImage] = useState("");
  const [pericias, setPericias] = useState([
    { name: "Acrobacia", trained: false },
    { name: "Adestramento", trained: false },
    { name: "Atuação", trained: false },
    { name: "Cavalgar", trained: false },
    { name: "Conhecimento", trained: false },
    { name: "Cura", trained: false },
    { name: "Enganação", trained: false },
    { name: "Fortitude", trained: false },
    { name: "Furtividade", trained: false },
    { name: "Guerra", trained: false },
    { name: "Iniciativa", trained: false },
    { name: "Intimidação", trained: false },
    { name: "Intuição", trained: false },
    { name: "Investigação", trained: false },
    { name: "Jogatina", trained: false },
    { name: "Ladinagem", trained: false },
    { name: "Luta", trained: false },
    { name: "Misticismo", trained: false },
    { name: "Nobreza", trained: false },
    { name: "Oficio", trained: false },
    { name: "Percepção", trained: false },
    { name: "Pilotagem", trained: false },
    { name: "Pontaria", trained: false },
    { name: "Reflexos", trained: false },
    { name: "Religião", trained: false },
    { name: "Sobrevivência", trained: false },
    { name: "Vontade", trained: false },
  ]);
  const [extras, setExtras] = useState([
    { name: "Mana", marked: false },
    { name: "Corpo-a-Corpo", marked: true },
    { name: "A Distancia", marked: false },
    { name: "Habilidades", marked: false },
    { name: "Equipamentos", marked: false },
  ]);

  const tabPericias = useRef();
  const tabImageBox = useRef();
  const tabImage = useRef();

  return (
    <div className="App">
      <NpcContext.Provider value={{ nd, setNd }}>
        <div className="Npc-Helper">
          <div>
            <div className="Npc-Helper-Title">Imagem</div>
            <button
              onClick={() => {
                tabImageBox.current.style.display = "block";
                tabImage.current.value = "";
              }}
            >
              Adicionar Foto
            </button>
            <button
              onClick={() => {
                setImage("");
              }}
            >
              Remover Foto
            </button>
            <div ref={tabImageBox} className="Npc-Helper-Image">
              <button
                onClick={() => (tabImageBox.current.style.display = "none")}
              >
                Fechar
              </button>
              <div className="Npc-Helper-ImageBox">
                <input
                  ref={tabImage}
                  type="text"
                  placeholder="https://imagem.png"
                />
                <button
                  onClick={() => {
                    setImage(tabImage.current.value);
                    tabImageBox.current.style.display = "none";
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="Npc-Helper-Title">Pericias</div>
            <button
              onClick={() => (tabPericias.current.style.display = "block")}
            >
              Pericias
            </button>
            <div ref={tabPericias} className="Npc-Helper-Pericias">
              <button
                onClick={() => (tabPericias.current.style.display = "none")}
              >
                Fechar
              </button>
              <div className="Npc-Helper-List">
                {pericias.map((e) => (
                  <Pericias
                    name={e.name}
                    pericias={pericias}
                    key={e.name}
                    setPericias={setPericias}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="Npc-Helper-Title">Extras</div>
          </div>
          {extras.map((e) => (
            <Extras
              name={e.name}
              key={e.name}
              extras={extras}
              setExtras={setExtras}
            />
          ))}
        </div>

        <div className="Npc-Creator">
          <Info nd={nd} setNd={setNd} />
          <Image image={image} />
          <Attribute pericias={pericias} setPericias={setPericias} nd={nd} />
          <Combat extras={extras} />
        </div>
      </NpcContext.Provider>
    </div>
  );
}

export default App;
