import style from "./info.module.css";
import avatar from "../../../public/avatar.jpg";

const userInfo = () => {
  return (
    <div>
      <div className={style.info}>
        <h1>
          Olá, sou
          <br />{" "}
          <span className={style.userName}>Willian Giovanini Dei Tosi</span>
          <br />
          Desenvoldedor FullStack
        </h1>
        <div className={style.boxAvatar}>
          <img className={style.avatar} src={avatar} alt="" />
        </div>
      </div>
      <div className={style.aboutMe}>
        <h2>Sobre mim</h2>
        <div className={style.photoAbout}>
          <img className={style.myPhoto} src={avatar} alt="foto" />
          <div className={style.about} >
            <p>
              Minha trajetória é marcada por determinação e paixão. Durante
              quatro anos, dediquei-me incansavelmente aos estudos em preparação
              para um concurso público da PMSP (Polícia Militar do Estado de São
              Paulo). Essa jornada me ensinou a estudar de forma independente, a
              manter o foco e a ter disciplina.
            </p>
            <p>
              Foi nesse caminho que descobri minha verdadeira paixão: a
              programação. Decidi deixar para trás o concurso da PMSP e me
              dedicar integralmente a essa área. Desde então, tenho me empenhado
              constantemente em aprender e aprimorar minhas habilidades.
            </p>
            <p>
              Minha busca por excelência na programação me levou a criar
              projetos pessoais e a mergulhar em estudos contínuos. Estou pronto
              para contribuir com equipes de desenvolvimento, sou um entusiasta
              aprendiz, focado na resolução de desafios e determinado a alcançar
              resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userInfo;
