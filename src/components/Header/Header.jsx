import React, { useState, useEffect } from 'react';
import pc from "../../../public/pc.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";
import cv from "../../../public/cv/willianFullStack.pdf"
import style from "./header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const scrollToAbout = () => {
      const aboutSection = document.getElementById("aboutMe");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth"});
      }
    };
    const scrollToTech = () => {
      const aboutSection = document.getElementById("tech");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth"});
      }
    };
    const scrollToProjects = () => {
      const aboutSection = document.getElementById("projects");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth"});
      }
    };


    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const renderMobileMenu = windowWidth < 660 ? (
      <nav className="navbar navbar-expand-lg">
        <div className="d-flex justify-content-center w-100"> {/* Centraliza o botão */}
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className={`nav-link ${style.links}`} href="#" onClick={scrollToAbout}>Sobre</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${style.links}`} href="#" onClick={scrollToTech}>Técnologias</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${style.links}`} href="#" onClick={scrollToProjects}>Projetos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${style.links}`} href="#" download={cv}>CV</a>
            </li>
            <li className={`nav-item ${style.iconsMenu}`}>
              <a href="https://github.com/williandeitosi" target="_blank">
                <img className={`icons ${style.icons}`} src={github} alt="github" />
              </a>
            </li>
            <li className={`nav-item ${style.iconsMenu}`}>
              <a href="https://www.linkedin.com/in/williangiovaninideitosi/" target="_blank">
                <img className={`icons ${style.icons}`} src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </nav>) : (
    <div className={style.container}>
      <img className={style.img} src={pc} alt="" />
      <ul className={style.navBarMenu}>
        <li><a className={style.links} href="#" onClick={scrollToAbout}>Sobre</a></li>
        <li><a className={style.links} href="#" onClick={scrollToTech}>Técnologias</a></li>
        <li><a className={style.links} href="#" onClick={scrollToProjects}>Projetos</a></li>
        <li><a className={style.links} href="" download={cv}>CV</a></li>
        <li><a href="https://github.com/williandeitosi" target="_blank"><img className={style.icons} src={github} alt="github"   /></a></li>
        <li><a href="https://www.linkedin.com/in/williangiovaninideitosi/" target="_blank"><img className={style.icons} src={linkedin} alt="linkedin" /></a></li>
      </ul>
      
    </div>
  )

  return (
    <header>
      {renderMobileMenu}
    </header>
  )
}


export default Header