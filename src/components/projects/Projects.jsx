import Cards from "./Cards/Cards";
import style from "./project.module.css";
import todolist from "../../../public/imgProjects/todolist.png";

const Projects = () => {
  return (
    <div className={style.containerProjects}>
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
          title="ToDo List"
          images={todolist}
          site="https://mern-frontend-ivory.vercel.app/"
          code="https://github.com/williandeitosi/mern-frontend"
          description="desenvolvimento de uma Lista de Tarefas utilizando a Stack MERN!"
        />
        <Cards
          title="ToDo List"
          images={todolist}
          site="https://mern-frontend-ivory.vercel.app/"
          code="https://github.com/williandeitosi/mern-frontend"
          description="desenvolvimento de uma Lista de Tarefas utilizando a Stack MERN!"
        />
      </div>
    </div>
  );
};

export default Projects;
