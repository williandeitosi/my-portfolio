import pc from "../../../public/pc.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";
import style from "./header.module.css"


const Header = () => {

    const scrollToAbout = () => {
      const aboutSection = document.getElementById("aboutMe");
      if (aboutSection) {
        const yOffset = -100; // Ajuste esse valor para definir o quanto acima da seção "Sobre" você deseja rolar
        aboutSection.scrollIntoView({ behavior: "smooth"});
        // window.scrollBy(0, yOffset);
      }
    };

  return (
    <div className={style.container}>
      <img className={style.img} src={pc} alt="" />
      <ul className={style.navBarMenu}>
        <li><a className={style.links} href="#" onClick={scrollToAbout}>Sobre</a></li>
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