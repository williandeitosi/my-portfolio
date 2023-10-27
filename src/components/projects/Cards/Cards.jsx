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
          <a className={style.siteBtn} href={site} target="_blank">Ir ao site</a>
          <a className={style.siteBtn} href={code} target="_blank">Repositório</a>
        </div>
      </div>
    </div>
  );
};


export default Cards