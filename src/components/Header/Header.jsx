import pc from "../../../public/pc.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";
import style from "./header.module.css"


const Header = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={pc} alt="" />
      <ul className={style.navBarMenu}>
        <li><a className={style.links} href="">Sobre</a></li>
        <li><a className={style.links} href="">Técnologias</a></li>
        <li><a className={style.links} href="">Projetos</a></li>
        <li><a className={style.links} href="">CV</a></li>
        <li><a href="https://github.com/williandeitosi" target="_blank"><img className={style.icons} src={github} alt="github"   /></a></li>
        <li><a href="https://www.linkedin.com/in/williangiovaninideitosi/" target="_blank"><img className={style.icons} src={linkedin} alt="linkedin" /></a></li>
      </ul>
      
    </div>
  )
}


export default Header