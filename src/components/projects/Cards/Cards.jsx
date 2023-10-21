import style from "./card.module.css"
import github from "../../../../public/github.png";


const Cards = ({images, title, description, site, code}) => {
  return (
    <div className={style.card}>
      <img className={style.photo} src={images} alt={title} />
      <div className={style.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={style.buttons} >
          <a href={site} target="_blank"><img className={style.icon} src={github} alt="" />ir ao site</a>
          <a href={code} target="_blank">ver o código</a>
        </div>
      </div>
    </div>
  );
};


export default Cards