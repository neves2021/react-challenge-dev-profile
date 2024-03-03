import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./aleixo.jpg" />;
}

function Intro() {
  return (
    <div>
      <h1>Bruno Aleixo</h1>
      <p>
        Bruninho Constantino Ribeiro Aleixo é um indivíduo com parecença a uma
        mistura ambígua entre um urso de peluche e um cão, sendo de facto, um
        Ewok, apesar de ter sugerido tratar-se de “um Yorkshire terrier com
        sotaque de aldeias serranas do distrito de Coimbra”.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Busto" emoji="🥱" color="red" />
      <Skill name="Homem do Bussaco" emoji="😤" color="blue" />
      <Skill name="Renato Alexandre" emoji="😑" color="orange" />
      <Skill name="Dr. Ribeiro" emoji="😴" color="green" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
