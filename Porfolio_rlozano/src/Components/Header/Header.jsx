import './Header.scss';
import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.png"
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const navLinks = document.querySelectorAll("nav ul li")
        const indicator = document.querySelector("nav .indicator")

        function update(){
            let width = navLinks[0].offsetWidth,
                left = navLinks[0].offsetLeft

            indicator.style.width = `${width + 28}px`
            indicator.style.left = `${left}px`
        }

        update();

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.forEach(link => {
                    link.classList.remove("active")
                });

                let width = link.offsetWidth,
                    left = link.offsetLeft

                indicator.style.left = left + "px"
                indicator.style.width = `${width + 28}px`

                link.classList.add("active")
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
                <div className="indicator"></div>
                <li className='active'>
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

        <div className="profile">
            <img src={perfil} alt="" />
        </div>
    </header>
  )
}

export default Header