import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Npc-Creator">
        <div className="Npc-Info">
          <div className="Npc-Name">Auhert</div>
          <div className="Npc-Nd">3</div>
        </div>
        <div className="Npc-Img">
          <img src="" alt="" />
        </div>
        <div className="Npc-Attributes">
          <div>Iniciativa, Percepção, Tipo de visão</div>
          <div>Defesa, Fort, Ref, Von</div>
          <div>HP, Mana</div>
          <div>Deslocamento, Tipo de Deslocamento</div>
        </div>
        <div className="Npc-Combat">
          <div>Corpo-a-Corpo</div>
          <div>Disntacia</div>
          <div>Magias</div>
          <div>Habilidades</div>
        </div>
      </div>
    </div>
  );
}

export default App;
