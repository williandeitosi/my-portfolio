import style from "./tech.module.css";
import images from "./importimgs";

const Tech = () => {
  return (
    <div id="tech" className={style.containerTech} >
      <h2 className={style.techs}>Tecnologias</h2>
      <div className={style.gridContainerIcons}>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.html} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.css} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.js} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.ts} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.nodejs} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.git} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.vscode} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.bootstrap} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.react} alt="" />
        </div>
        <div className={style.gridIcons}>
          <img className={style.icon} src={images.github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
