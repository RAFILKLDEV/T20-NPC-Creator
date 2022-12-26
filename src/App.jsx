import { useRef, useState } from "react";
import Attribute from "./components/Attribute/Attribute";
import Combat from "./components/Combat/Combat";
import Extras from "./components/Extras/Extras";
import Image from "./components/Image/Image";
import Info from "./components/Info/Info";
import Pericias from "./components/Pericias/Pericias";
import NpcContext from "./contexts/npcContext";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [nd, setNd] = useState(0);
  const [image, setImage] = useState("");
  const [pericias, setPericias] = useState([
    { name: null, total: 4, total2: 0 },
    { name: "Acrobacia", trained: false },
    { name: "Adestramento", trained: false },
    { name: "Atuação", trained: false },
    { name: "Cavalgar", trained: false },
    { name: "Conhecimento", trained: false },
    { name: "Cura", trained: false },
    { name: "Diplomacia", trained: false },
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
    { name: "Misticismo", trained: false },
    { name: "Nobreza", trained: false },
    { name: "Oficio", trained: false },
    { name: "Percepção", trained: false },
    { name: "Pilotagem", trained: false },
    { name: "Reflexos", trained: false },
    { name: "Religião", trained: false },
    { name: "Sobrevivência", trained: false },
    { name: "Vontade", trained: false },
  ]);
  const [extras, setExtras] = useState([
    { name: "Atributos", marked: false, number: null },
    { name: "CD", marked: false, number: null },
    { name: "Mana", marked: false, number: null },
    { name: "Corpo-a-Corpo", marked: true, number: null },
    { name: "A Distancia", marked: false, number: null },
    { name: "Habilidades", marked: false, number: null },
    { name: "Equipamentos", marked: false, number: null },
  ]);

  const tabPericias = useRef();
  const tabImageBox = useRef();
  const tabImage = useRef();
  const tabTutorial = useRef();
  const tabAbout = useRef();

  return (
    <div className="App">
      <NpcContext.Provider value={{ nd, setNd }}>
        <div className="About" ref={tabAbout}>
          <h1>Seja bem vindo ao Criador de NPC T20</h1>
          <div>
            Essa ferramenta foi desenvolvida para Solucionar problemas de
            Mestres em controlar NPCS com Estatisticas e também para aqueles que
            amam ter seus NPCS Organizados.
          </div>
          <h3>
            Esse é mais um dos meus projetos na minha jornada como Desenvolvedor
            Front-End.
          </h3>
          <div>
            Estou procurando por oportunidades para trabalhar na area, será que
            você poderia me ajudar ? {"=)"}
          </div>
          <div>
            Meu email de contato é{" "}
            <a href="mailto:rafilkldev@gmail.com">rafilkldev@gmail.com</a>
          </div>
          <button
            style={{ fontSize: 22 }}
            onClick={() => {
              tabAbout.current.style.display = "none";
              tabTutorial.current.style.display = "block";
            }}
          >
            Continuar
          </button>
        </div>
        <div className="Tutorial" ref={tabTutorial}>
          <div className="Guide">
            <h2>
              As regras de criação são baseadas na tabela do{" "}
              <b>Tormenta 20: Jogo do Ano!</b>
            </h2>
            <ul>
              <b>Ordem para criação do NPC:</b>
              <li>
                Comece escolhendo o <b>ND</b> do NPC.
              </li>
              <li>
                Escolha os <b>Extras</b> disponiveis no NPC.
              </li>
              <li>
                Preencha <b>Nome</b> e outros campos opcionais como{" "}
                <b>Imagem</b>, <b>Mana</b> etc.
              </li>
              <ul>
                Alterando Estatisticas:
                <ul>
                  <b>Passar o Mouse</b> dentro de um campo aparece formas de
                  altera-lo.
                  <li>
                    Você pode editar o valor com as setas usando as{" "}
                    <b>Estatisticas</b> do Tormenta 20.
                  </li>
                  <li>
                    Você pode alterar diretamente o valor, escrevendo o que
                    achar melhor.
                  </li>
                  <li>
                    Lembre-se é necessário um <b>Bom senso</b> na hora de criar
                    o NPC.
                  </li>
                </ul>
              </ul>
              <ul>
                {" "}
                Dicas:
                <ul>
                  <li>
                    Evite valores distantes do <b>ND</b> definido no NPC.
                  </li>
                  <li>
                    Este tipo de NPC pode ser um Aliado ou Inimigo que necessita
                    de <b>Estatisticas</b>.
                  </li>
                </ul>
                <ul>
                  Quando terminar clique em <b>Criar Png</b> isso gera uma
                  imagem em formato de ficha.
                </ul>
              </ul>
            </ul>
            <h5>
              Ao gerar a imagem em uma nova janela basta clicar com o botão
              direto e selecionar <b>Salvar Imagem como...</b>
            </h5>
            <button
              onClick={() => {
                tabTutorial.current.style.display = "none";
              }}
            >
              Criar meu NPC
            </button>
          </div>
        </div>
        <div className="Npc-Helper">
          <div>
            <button
              style={{
                fontSize: 22,
                marginBottom: 10,
                width: "100%",
              }}
              onClick={() => {
                tabTutorial.current.style.display = "block";
              }}
            >
              Tutorial
            </button>

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
                {pericias.map((e) => {
                  if (e.name === null) {
                    return null;
                  } else {
                    return (
                      <Pericias
                        name={e.name}
                        pericias={pericias}
                        key={e.name}
                        setPericias={setPericias}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div>
            <div className="Npc-Helper-Title">Extras</div>
          </div>
          {extras.map((e, i) => (
            <Extras
              name={e.name}
              key={e.name}
              extras={extras}
              setExtras={setExtras}
              number={e.number}
              checked={e.marked}
              index={i}
            />
          ))}

          <div>
            <div className="Npc-Helper-Title">Criar Ficha</div>
            <button
              onClick={() => {
                html2canvas(document.getElementById("NPC"), {
                  allowTaint: true,
                }).then(function (canvas) {
                  let html = window.open("", "Imagem de Ficha");
                  html.document.body.appendChild(canvas);
                });
              }}
            >
              Criar Png
            </button>
          </div>
        </div>
        <div className="Npc-Creator" id="NPC">
          <Info nd={nd} setNd={setNd} />
          <Image image={image} />
          <Attribute
            pericias={pericias}
            setPericias={setPericias}
            nd={nd}
            extras={extras}
          />
          <Combat nd={nd} extras={extras} />
        </div>
      </NpcContext.Provider>
    </div>
  );
}

export default App;
