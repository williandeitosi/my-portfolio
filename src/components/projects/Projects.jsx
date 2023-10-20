import Cards from "./Cards/Cards";
import style from "./project.module.css";

const Projects = () => {
  return (
    <div className={style.containerProjects}>
      <h1>Projetos</h1>
      <div className={style.projects}>
        <Cards />
      </div>
    </div>
  );
};

export default Projects;
