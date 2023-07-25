import './Header.scss';
import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.png"
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const navLinks = document.querySelectorAll("nav ul li")
        const indicador = document.querySelector("nav .indicador")

        function update(){
            let width = navLinks[0].offsetWidth,
                left = navLinks[0].offsetLeft

            indicador.style.width = `${width + 28}px`
            indicador.style.left = `${left}px`
        }

        update();

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.forEach(link => {
                    link.classList.remove("activo")
                });
                
                let width = link.offsetWidth,
                    left = link.offsetLeft

                indicador.style.left = left + "px"
                indicador.style.width = `${width + 28}px`

                link.classList.add("activo")
            })
        })
    }, [])
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" />
            <h1>
                RICHARD <i>LOZANO</i>
            </h1>
        </div>

        <nav>
            <ul>
                <div className="indicador"></div>
                <li className='activo'>
                    <a href="#inicio">INICIO</a>
                </li>
                <li>
                    <a href="#sobre">SOBRE MI</a>
                </li>
                <li>
                    <a href="#proyectos">PROYECTOS</a>
                </li>
                <li>
                    <a href="#contacto">CONTACTO</a>
                </li>
            </ul>
        </nav>

        <div className="perfil">
            <img src={perfil} alt="" />
        </div>
    </header>
  )
}

export default Header