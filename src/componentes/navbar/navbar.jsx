import React, { useState } from "react";  // useState: Es como una libreta donde puedes guardar y cambiar información en tu componente.
//importamos el usestate porque vamos a definir si la hamburguesa esta abierta o cerrada (para hacerlo mas responsivo)
import { getImageUrl } from "../../utils";
import Styles from "./Navbar.module.css";




export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={Styles.navbar}>
            <a className={Styles.titulo} href="/">
                Portafolio
            </a>
            <div className={Styles.menu}>
                <img
                    className={Styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href='#acerca'>Acerca de</a>
                    </li>
                    <li>
                        <a href='#experiencia'>Experiencia</a>
                    </li>
                    <li>
                        <a href='#proyectos'>Proyectos</a>
                    </li>
                    <li>
                        <a href='#contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};