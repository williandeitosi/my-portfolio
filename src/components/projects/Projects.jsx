import Cards from "./Cards/Cards";
import style from "./project.module.css";
import todolist from "../../../public/imgProjects/todolist.png";
import memoria from "../../../public/imgProjects/memoria.png";
import cronometro from "../../../public/imgProjects/cronometro.png";
import player from "../../../public/imgProjects/player.png"

const Projects = () => {
  return (
    <div id="projects" className={style.containerProjects}>
      <h2>Projetos</h2>
      <div className={style.projects}>
        <Cards
          title="ToDo List"
          images={todolist}
          site="https://mern-frontend-ivory.vercel.app/"
          code="https://github.com/williandeitosi/mern-frontend"
          description="desenvolvimento de uma Lista de Tarefas utilizando a Stack MERN!"
        />
        <Cards
          title="Jogo da memória"
          images={memoria}
          site="https://williandeitosi.github.io/jogo-da-memoria-reactjs/"
          code="https://github.com/williandeitosi/jogo-da-memoria-reactjs"
          description="jogo da memoria desenvolvido com React utilizando a componentização dos cards"
        />
        <Cards
          title="Cronometro"
          images={cronometro}
          site="https://williandeitosi.github.io/Cronometro/"
          code="https://github.com/williandeitosi/Cronometro"
          description="desenvolvimento de uma Lista de Tarefas utilizando a Stack MERN!"
        />
        <Cards
          title="Player Music"
          images={player}
          site="https://williandeitosi.github.io/musicPlayer/"
          code="https://github.com/williandeitosi/musicPlayer"
          description="desenvolvimento de uma Lista de Tarefas utilizando a Stack MERN!"
        />
      </div>
    </div>
  );
};

export default Projects;
